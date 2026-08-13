import { describe, it, expect } from 'vitest';
import { build } from 'vite';
import { mkdtemp, writeFile, readFile, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

describe('maplibre worker asset', () => {
  it('is emitted as one self-contained chunk', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'mlworker-'));
    const entry = join(dir, 'entry.ts');
    await writeFile(
      entry,
      `import { configureMaplibreWorker } from ${JSON.stringify(
        fileURLToPath(new URL('./worker.ts', import.meta.url))
      )};\nconfigureMaplibreWorker();\n`
    );

    const outDir = join(dir, 'dist');
    await build({
      root: dir,
      logLevel: 'silent',
      configFile: false,
      base: '/graphics-components/',
      build: { outDir, rollupOptions: { input: entry } },
    });

    const assets = await readdir(join(outDir, 'assets'));
    const workers = assets.filter((f) => f.startsWith('maplibre-gl-worker'));
    expect(workers).toHaveLength(1);

    // A worker that statically imports anything is a split worker: the browser
    // fetches a sibling nobody emitted, and every map goes blank. Both
    // spellings count — a bundler only has to reach for one of them.
    //
    // Dynamic `import()` is deliberately not checked: MapLibre uses it at
    // runtime to load protocol plugins, with a variable specifier no bundler
    // can resolve, so it can never be a missing sibling.
    const code = await readFile(join(outDir, 'assets', workers[0]), 'utf8');
    for (const [form, pattern] of Object.entries({
      'import … from "…"': /\bfrom\s*["']/,
      'import "…"': /\bimport\s*["']/,
    })) {
      expect(code, `worker should contain no ${form}`).not.toMatch(pattern);
    }
  }, 60000);
});
