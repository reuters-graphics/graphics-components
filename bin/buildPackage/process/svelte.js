import { DIST, LIB } from './../locations.js';

import fs from 'fs-extra';
import path from 'path';
import preprocess from '../../preprocess/index.cjs';
import { preprocess as svelte } from 'svelte/compiler';

const stripLangTags = (source) => 
  source
    .replace(/(<!--[^]*?-->)|(<script[^>]*?)\s(?:type|lang)=(["']).*?\3/g, '$1$2')
    .replace(/(<!--[^]*?-->)|(<style[^>]*?)\s(?:type|lang)=(["']).*?\3/g, '$1$2');

export default async (file) => {
  const filename = path.join(LIB, file);
  let source = fs.readFileSync(filename, 'utf8');
  source = (await svelte(source, preprocess.sveltePreprocess, { filename })).code
  const writePath = path.join(DIST, file);
  fs.ensureDirSync(path.dirname(writePath));
  fs.writeFileSync(writePath, stripLangTags(source));
}
