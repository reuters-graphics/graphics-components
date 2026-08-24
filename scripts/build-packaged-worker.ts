import { readFile, writeFile, mkdtemp, readdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'vite';

/**
 * `src/components/TileMap/worker.ts` imports MapLibre's worker through Vite's
 * `?worker&url` recipe. That query syntax only means something to Vite's own
 * transform pipeline — it is not a real path. `svelte-package` copies the
 * source into `dist` unchanged, so every consumer's bundler ends up scanning
 * a specifier it can't resolve. Esbuild-based optimizers (Vite < 6) skip it
 * silently; Rolldown (Vite 8) throws (reuters-graphics/graphics-components#501).
 *
 * Fix: bundle the MapLibre worker into one self-contained file ourselves,
 * ship it as a real static asset, and point the packaged worker.js at it with
 * a plain `new URL(..., import.meta.url)` — the same mechanism Vite's own
 * `?worker&url` plugin generates under the hood, minus the query syntax that
 * only Vite understands.
 */
const WORKER_JS = './dist/components/TileMap/worker.js';
const ASSET_NAME = 'maplibre-gl-worker.js';
const ASSET_PATH = `./dist/components/TileMap/${ASSET_NAME}`;
const RAW_IMPORT =
  "import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';";

const tmpDir = await mkdtemp(join(tmpdir(), 'mlworker-'));
try {
  const entry = join(tmpDir, 'entry.mjs');
  // Absolute path, not the bare specifier: the entry lives in a temp dir with
  // no node_modules above it, so a bare specifier resolves against nothing.
  const workerFile = fileURLToPath(
    import.meta.resolve('maplibre-gl/dist/maplibre-gl-worker.mjs')
  );
  await writeFile(
    entry,
    `export { default } from ${JSON.stringify(`${workerFile}?worker&url`)};\n`
  );

  const outDir = join(tmpDir, 'dist');
  await build({
    root: tmpDir,
    logLevel: 'silent',
    configFile: false,
    build: { outDir, rollupOptions: { input: entry } },
  });

  const assets = await readdir(join(outDir, 'assets'));
  const workerAsset = assets.find((f) => f.startsWith('maplibre-gl-worker'));
  if (!workerAsset) {
    console.error('Expected a maplibre-gl-worker asset to be emitted.');
    process.exit(1);
  }

  const workerCode = await readFile(
    join(outDir, 'assets', workerAsset),
    'utf8'
  );
  // Same self-containment check as worker.build.test.ts: a worker that
  // statically imports anything is a split worker whose sibling chunk never
  // ships, so every map goes blank.
  if (/\bfrom\s*["']/.test(workerCode) || /\bimport\s*["']/.test(workerCode)) {
    console.error(
      'Bundled maplibre worker still imports a sibling — it is not self-contained.'
    );
    process.exit(1);
  }

  await writeFile(ASSET_PATH, workerCode);
} finally {
  await rm(tmpDir, { recursive: true, force: true });
}

const workerSource = await readFile(WORKER_JS, 'utf8').catch(() => {
  console.error(`Expected ${WORKER_JS} to exist after svelte-package.`);
  process.exit(1);
});

if (!workerSource.includes(RAW_IMPORT)) {
  console.error(
    `${WORKER_JS} no longer contains the expected maplibre worker import.\n\n` +
      'Update RAW_IMPORT in scripts/build-packaged-worker.ts to match the new source.'
  );
  process.exit(1);
}

const patched = workerSource.replace(
  RAW_IMPORT,
  `const workerUrl = new URL('./${ASSET_NAME}', import.meta.url).href;`
);
await writeFile(WORKER_JS, patched);

console.log(
  `✓ packaged worker points at a static, self-contained asset (${ASSET_NAME})`
);
