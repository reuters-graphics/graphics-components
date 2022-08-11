import { DIST, LIB, PACKAGE, TYPES } from './locations.js';

import { createRequire } from 'module';
import { emitDts } from 'svelte2tsx';
import fs from 'fs-extra';
import glob from 'tiny-glob';
import path from 'path';
import picomatch from 'picomatch';
import processOther from './process/other.js';
import processSvelte from './process/svelte.js';
import processTypescript from './process/typescript.js';
import rimraf from 'rimraf';

const require = createRequire(import.meta.url);

const excludePatterns = [
  '**/stories/**/*',
  '**/docs/**/*',
  '**/statics/**/*',
  '**/*.exclude.*',
  '**/*.stories.svelte',
  '**/*.stories.svelte.d.ts',
];

const excludedTypeDefs = [
  '**/stories/**/*',
  '**/docs/**/*',
  '**/*.stories.svelte.d.ts',
];

/**
 * This is a basic port of sveltekit's own packaging method:
 * https://github.com/sveltejs/kit/tree/master/packages/kit/src/packaging
 */
const build = async () => {
  console.log('📦 Building your package');
  if (fs.existsSync(DIST)) rimraf.sync(DIST);

  // Extract types
  await emitDts({
		libRoot: LIB,
		svelteShimsPath: require.resolve('svelte2tsx/svelte-shims.d.ts'),
		declarationDir: TYPES,
	});

  // Cleanup unwanted types
  fs.rmSync(path.join(TYPES, 'docs'), { recursive: true, force: true });
  const types = await glob('**/*', { cwd: TYPES, filesOnly: true });
  for (const t of types) {
    if(picomatch.isMatch(t, excludedTypeDefs)) fs.unlinkSync(path.join(TYPES, t));
  }

  const pkgExports = {
    './package.json': './package.json'
  };

  const files = await glob('**/*.{js,json,ts,svelte,css,scss}', { cwd: LIB, filesOnly: true });
  for (const file of files) {
    if(picomatch.isMatch(file, excludePatterns)) continue;
    if (file.endsWith('.svelte')) {
      await processSvelte(file);
    } else if(file.endsWith('.ts') && !file.endsWith('.d.ts')) {
      await processTypescript(file);
    } else {
      await processOther(file);
    }
    if (file === 'index.js') continue; // Always add root index last to exports...
    pkgExports[`./${file.replace(/\/index\.js$|(\/[^/]+)\.js$/, '$1')}`] = `./dist/${file}`;
  }
  pkgExports['.'] = './dist/index.js';
  const pkg = fs.readJSONSync(PACKAGE);
  pkg.type = 'module';
  pkg.files = ['dist'];
  pkg.private = false;
  pkg.exports = pkgExports;
  fs.writeFileSync(PACKAGE, JSON.stringify(pkg, null, 2));
}

build();