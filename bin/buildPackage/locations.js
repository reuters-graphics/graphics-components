import path from 'path';

const __dirname = new URL('.', import.meta.url).pathname;
export const ROOT = path.resolve(__dirname, '../../');
export const PACKAGE = path.join(ROOT, 'package.json');
export const LIB = path.join(ROOT, 'src');
export const DIST = path.join(ROOT, 'dist');
export const TYPES = path.join(DIST, '@types');
