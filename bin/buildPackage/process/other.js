import { DIST, LIB } from './../locations.js';

import fs from 'fs-extra';
import path from 'path';

export default async (file) => {
  const filename = path.join(LIB, file);
  const writePath = path.join(DIST, file);
  fs.ensureDirSync(path.dirname(writePath));
  fs.copyFileSync(filename, writePath);
}
