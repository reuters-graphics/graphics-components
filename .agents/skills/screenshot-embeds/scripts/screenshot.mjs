#!/usr/bin/env node

/**
 * Screenshots every embed page and saves the images as share images.
 *
 * Usage:  node .agents/skills/screenshot-embeds/scripts/screenshot.mjs
 *
 * Options:
 *   --viewports '{"my-embed": {"width": 800, "height": 600}}'
 *       Override the default viewport size for specific embeds.
 *
 * Requirements:
 *   - A Chrome/Chromium binary (Puppeteer cache or system PATH)
 *   - puppeteer-core (installed to /tmp on demand if missing)
 */

import { execSync, spawn } from 'node:child_process';
import { readdirSync, statSync, existsSync } from 'node:fs';
import { resolve, basename } from 'node:path';
import { createRequire } from 'node:module';
import { parseArgs } from 'node:util';

const PROJECT_ROOT = resolve(import.meta.dirname, '..', '..', '..', '..');
const EMBEDS_DIR = resolve(PROJECT_ROOT, 'pages/embeds/en');
const IMAGES_DIR = resolve(PROJECT_ROOT, 'src/statics/images');
const PORT = 5199;
const BASE = `http://localhost:${PORT}`;

const DEFAULT_VIEWPORT = { width: 800, height: 600 };

// ---------------------------------------------------------------------------
// Parse CLI args
// ---------------------------------------------------------------------------

const { values: args } = parseArgs({
  options: {
    viewports: { type: 'string', default: '{}' },
  },
  strict: false,
});

let customViewports = {};
try {
  customViewports = JSON.parse(args.viewports);
} catch {
  console.error('Warning: could not parse --viewports JSON, using defaults.');
}

// ---------------------------------------------------------------------------
// Discover embeds
// ---------------------------------------------------------------------------

function discoverEmbeds() {
  if (!existsSync(EMBEDS_DIR)) {
    console.error(`Embeds directory not found: ${EMBEDS_DIR}`);
    process.exit(1);
  }
  return readdirSync(EMBEDS_DIR)
    .filter((name) => {
      const dir = resolve(EMBEDS_DIR, name);
      return (
        statSync(dir).isDirectory() && existsSync(resolve(dir, '+page.svelte'))
      );
    })
    .map((name) => ({
      name,
      path: `/embeds/en/${name}/`,
      ...(customViewports[name] || DEFAULT_VIEWPORT),
    }));
}

// ---------------------------------------------------------------------------
// Find a Chrome binary
// ---------------------------------------------------------------------------

function findChrome() {
  const home = process.env.HOME || process.env.USERPROFILE || '';
  const cacheDir = resolve(home, '.cache/puppeteer/chrome');
  if (existsSync(cacheDir)) {
    const versions = readdirSync(cacheDir).sort();
    for (const ver of versions.reverse()) {
      const bin = resolve(cacheDir, ver, 'chrome-linux64/chrome');
      if (existsSync(bin)) return bin;
    }
  }
  for (const name of ['google-chrome-stable', 'google-chrome', 'chromium']) {
    try {
      const p = execSync(`which ${name}`, { encoding: 'utf8' }).trim();
      if (p) return p;
    } catch {
      // not found
    }
  }
  throw new Error('No Chrome binary found. Install Chrome or Puppeteer.');
}

// ---------------------------------------------------------------------------
// Ensure puppeteer-core is available
// ---------------------------------------------------------------------------

async function loadPuppeteer() {
  const require = createRequire(import.meta.url);
  try {
    return require('puppeteer-core');
  } catch {
    // not in project deps — install to /tmp
  }
  const tmpPkg = '/tmp/node_modules/puppeteer-core';
  if (!existsSync(tmpPkg)) {
    console.log('Installing puppeteer-core to /tmp ...');
    execSync('npm install --prefix /tmp puppeteer-core', { stdio: 'inherit' });
  }
  return require('/tmp/node_modules/puppeteer-core');
}

// ---------------------------------------------------------------------------
// Dev server helpers
// ---------------------------------------------------------------------------

function startDevServer() {
  return new Promise((resolve, reject) => {
    const child = spawn('npx', ['vite', 'dev', '--port', String(PORT)], {
      cwd: PROJECT_ROOT,
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let started = false;
    const onData = (chunk) => {
      const text = chunk.toString();
      if (!started && text.includes('Local:')) {
        started = true;
        resolve(child);
      }
    };
    child.stdout.on('data', onData);
    child.stderr.on('data', onData);
    child.on('error', reject);
    setTimeout(() => {
      if (!started) reject(new Error('Dev server did not start within 30s'));
    }, 30000);
  });
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const embeds = discoverEmbeds();
if (embeds.length === 0) {
  console.log('No embed pages found.');
  process.exit(0);
}

console.log(
  `Found ${embeds.length} embed(s): ${embeds.map((e) => e.name).join(', ')}`
);

const chromePath = findChrome();
console.log(`Using Chrome: ${chromePath}`);

const puppeteer = await loadPuppeteer();

console.log('Starting dev server ...');
const server = await startDevServer();
console.log(`Dev server ready on port ${PORT}`);

const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

try {
  for (const embed of embeds) {
    console.log(
      `  Screenshotting ${embed.name} (${embed.width}x${embed.height}) ...`
    );
    const page = await browser.newPage();
    await page.setViewport({ width: embed.width, height: embed.height });
    await page.goto(`${BASE}${embed.path}`, {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });

    try {
      await page.waitForSelector('canvas.maplibregl-canvas, svg', {
        timeout: 20000,
      });
    } catch {
      // embed may not have a map or chart
    }
    await new Promise((r) => setTimeout(r, 6000));

    const outPath = resolve(IMAGES_DIR, `embed-${embed.name}.png`);
    await page.screenshot({ path: outPath });
    console.log(`    Saved ${basename(outPath)}`);
    await page.close();
  }
} finally {
  await browser.close();
  server.kill();
  console.log('Done.');
}
