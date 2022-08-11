import { DIST, LIB, ROOT } from './../locations.js';

import fs from 'fs-extra';
import path from 'path';
import ts from 'typescript';

async function transpileTypeScript(filename, source) {
  const { compilerOptions } = fs.readJSONSync(path.join(ROOT, 'tsconfig.json'));
	return ts.transpileModule(source, {
		compilerOptions,
		fileName: filename
	}).outputText;
}

export default async (file) => {
  const filename = path.join(LIB, file);
  let source = fs.readFileSync(filename, 'utf8');
  source = await transpileTypeScript(filename, source);
  const writePath = path.join(DIST, file).replace(/\.ts$/, '.js');
  fs.ensureDirSync(path.dirname(writePath));
  fs.writeFileSync(writePath, source);
}
