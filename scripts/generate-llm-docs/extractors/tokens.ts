import { readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, basename } from 'node:path';
import { compile as sassCompile } from 'sass';

// ── Colours ───────────────────────────────────────────────────────────────

export interface ColourFamily {
  name: string;
  variables: Array<{ variable: string; value: string }>;
}

export interface ColoursData {
  primary: ColourFamily[];
  thematic: ColourFamily[];
}

export async function extractColours(scssRoot: string): Promise<ColoursData> {
  const [primary, thematic] = await Promise.all([
    readColourDir(join(scssRoot, 'colours/primary')),
    readColourDir(join(scssRoot, 'colours/thematic')),
  ]);
  return { primary, thematic };
}

async function readColourDir(dir: string): Promise<ColourFamily[]> {
  if (!existsSync(dir)) return [];
  const files = (await readdir(dir))
    .filter((f) => f.startsWith('_') && f.endsWith('.scss'))
    .sort();

  const families: ColourFamily[] = [];
  for (const file of files) {
    const source = await readFile(join(dir, file), 'utf-8');
    const variables = parseCssCustomProperties(source);
    if (variables.length === 0) continue;
    const name = basename(file, '.scss')
      .replace(/^_/, '')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
    families.push({ name, variables });
  }
  return families;
}

function parseCssCustomProperties(
  scss: string
): Array<{ variable: string; value: string }> {
  const re = /(--[\w-]+):\s*([^;]+);/g;
  return [...scss.matchAll(re)].map((m) => ({
    variable: m[1],
    value: m[2].trim(),
  }));
}

// ── Token tables ──────────────────────────────────────────────────────────

export interface SpacerLevel {
  level: string;
  value: string;
}

export interface TokenTable {
  title: string;
  rows: Array<[string, string]>;
}

export interface TokensData {
  marginScale: SpacerLevel[];
  paddingScale: SpacerLevel[];
  fluidMarginTable: TokenTable | null;
  fluidPaddingTable: TokenTable | null;
  typographyTables: TokenTable[];
}

export async function extractTokens(scssRoot: string): Promise<TokensData> {
  const spacersDir = join(scssRoot, 'tokens/spacers');
  const textDir = join(scssRoot, 'tokens/text');

  const [marginSrc, paddingSrc] = await Promise.all([
    readFileSafe(join(spacersDir, '_margin.scss')),
    readFileSafe(join(spacersDir, '_padding.scss')),
  ]);

  const [fluidMarginTable, fluidPaddingTable] = await Promise.all([
    compileTokenTable(
      join(spacersDir, '_fluid-margin.scss'),
      'Fluid margin',
      /^\.fm-\d/
    ),
    compileTokenTable(
      join(spacersDir, '_fluid-padding.scss'),
      'Fluid padding',
      /^\.fp-\d/
    ),
  ]);

  const typographyTables = (
    await Promise.all([
      compileTokenTable(
        join(textDir, '_font-size.scss'),
        'Font size',
        /^\.text-/
      ),
      compileTokenTable(
        join(textDir, '_font-weight.scss'),
        'Font weight',
        /^\.font-/
      ),
      compileTokenTable(
        join(textDir, '_line-height.scss'),
        'Line height',
        /^\.leading-/
      ),
    ])
  ).filter((t): t is TokenTable => t !== null);

  return {
    marginScale: parseScssMap(marginSrc),
    paddingScale: parseScssMap(paddingSrc),
    fluidMarginTable,
    fluidPaddingTable,
    typographyTables,
  };
}

// Parse the $margin-levels / $padding-levels SCSS map to extract the scale
function parseScssMap(src: string): SpacerLevel[] {
  const mapMatch = src.match(/\$[\w-]+:\s*\(([\s\S]*?)\);/);
  if (!mapMatch) return [];

  const re = /'([^']+)':\s*([^,\n]+)/g;
  return [...mapMatch[1].matchAll(re)].map((m) => ({
    level: m[1].replace(/\\\./g, '.'),
    value: m[2].trim(),
  }));
}

// Compile a SCSS file and extract classes matching a prefix filter
async function compileTokenTable(
  filePath: string,
  title: string,
  filter: RegExp
): Promise<TokenTable | null> {
  if (!existsSync(filePath)) return null;
  try {
    const result = sassCompile(filePath, {
      style: 'expanded',
      quietDeps: true,
    });
    const rows = parseCssClasses(result.css, filter);
    if (rows.length === 0) return null;
    return { title, rows };
  } catch {
    return null;
  }
}

// Parse expanded CSS into [className, properties] pairs
function parseCssClasses(
  css: string,
  filter?: RegExp
): Array<[string, string]> {
  // Match .selector { ... } blocks — handles comma-grouped selectors
  const blockRe = /([^{}]+)\{([^{}]+)\}/g;
  const rows: Array<[string, string]> = [];

  for (const match of css.matchAll(blockRe)) {
    // Take the first selector from comma-grouped selectors
    const selector = match[1].split(',')[0].trim();
    if (!selector.startsWith('.')) continue;

    const className = selector.replace(/\\/g, '');
    if (filter && !filter.test(className)) continue;
    if (className.includes('!')) continue; // skip !important variants

    const props = match[2]
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .join(' ');

    rows.push([className, props]);
  }

  return rows;
}

async function readFileSafe(path: string): Promise<string> {
  if (!existsSync(path)) return '';
  return readFile(path, 'utf-8');
}
