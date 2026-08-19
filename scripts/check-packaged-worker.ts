import { readFile } from 'node:fs/promises';

/**
 * The published package, not `src`, is what consumers bundle. The worker import
 * below is what makes MapLibre's web worker reach their build at all, and it
 * looks odd enough to be mistaken for a typo — so check it survived packaging.
 *
 * Without it every TileMap renders blank, and nothing else in the build says so.
 */
const PACKAGED_WORKER = './dist/components/TileMap/worker.js';
const REQUIRED_IMPORT = 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';

const source = await readFile(PACKAGED_WORKER, 'utf8').catch(() => {
  console.error(`Expected ${PACKAGED_WORKER} to exist after svelte-package.`);
  process.exit(1);
});

if (!source.includes(REQUIRED_IMPORT)) {
  console.error(
    `${PACKAGED_WORKER} no longer imports "${REQUIRED_IMPORT}".\n\n` +
      `MapLibre 6 loads its worker as a separate file, and that query is what\n` +
      `makes a bundler emit it. Plain "?url" is not equivalent — it emits a\n` +
      `worker that still imports a sibling nobody emits, so every map goes blank.`
  );
  process.exit(1);
}

console.log(`✓ packaged worker import intact (${REQUIRED_IMPORT})`);
