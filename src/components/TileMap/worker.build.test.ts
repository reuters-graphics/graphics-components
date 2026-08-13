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

    const code = await readFile(join(outDir, 'assets', workers[0]), 'utf8');
    expect(code).not.toMatch(/from\s*["'][^"']+["']/);
  }, 60000);
});
