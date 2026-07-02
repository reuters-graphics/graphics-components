import { extractMdxProse } from './mdx.js';
import type { DocEntry, ExtractedDoc } from '../types.js';

export async function extractDoc(entry: DocEntry): Promise<ExtractedDoc> {
  const prose = await extractMdxProse(entry.srcPath);

  // Pull the first H1 as the heading (overrides the entry.title fallback)
  const headingMatch = prose.match(/^#\s+(.+)$/m);
  const heading = headingMatch ? headingMatch[1].trim() : entry.title;

  // First non-empty paragraph after the H1 as a short description for the index
  const afterH1 = prose.replace(/^#\s+.+\n*/m, '').trim();
  const firstPara = afterH1.split(/\n{2,}/)[0] ?? '';
  const description = firstPara
    .replace(/\n/g, ' ')
    .replace(/[`*_[\]()]/g, '')
    .trim()
    .slice(0, 180);

  return { entry, heading, description, prose };
}
