import { readdir, mkdir, writeFile, rm, copyFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { extractProps } from './extractors/props.js';
import { extractStories } from './extractors/stories.js';
import { extractMdxProse } from './extractors/mdx.js';
import { extractDoc } from './extractors/docs.js';
import {
  generateComponentMarkdown,
  generateDocMarkdown,
  generateComponentsIndexMarkdown,
  generateGuidesIndexMarkdown,
  generateColoursMarkdown,
  generateTokensMarkdown,
  type GuideIndexEntry,
} from './generate.js';
import { extractColours, extractTokens } from './extractors/tokens.js';
import type { ComponentDoc, ComponentEntry, DocEntry } from './types.js';
import rawDocsMap from './docs-map.json' with { type: 'json' };

const ROOT = resolve(import.meta.dirname, '../..');
const SRC_COMPONENTS = join(ROOT, 'src/components');
const SRC_ACTIONS = join(ROOT, 'src/actions');
const SRC_DOCS = join(ROOT, 'src/docs');

const OUT_ROOT = join(ROOT, 'dist/llm-docs');
const OUT_COMPONENTS = join(OUT_ROOT, 'components');
const OUT_GUIDES = join(OUT_ROOT, 'guides');

// docs-map.json lists MDX files from src/docs/ to extract.
// colours.md is generated separately from SCSS source — see runTokens().
const DOCS_MAP: DocEntry[] = (rawDocsMap as DocEntry[]).map((e) => ({
  ...e,
  srcPath: join(SRC_DOCS, e.srcPath),
}));

const SRC_SCSS = join(ROOT, 'src/scss');

async function run() {
  await rm(OUT_ROOT, { recursive: true, force: true });
  await mkdir(OUT_COMPONENTS, { recursive: true });
  await mkdir(OUT_GUIDES, { recursive: true });

  const [componentDocs, guideEntries, tokenEntries] = await Promise.all([
    runComponents(),
    runGuides(),
    runTokens(),
  ]);

  const allGuideEntries = [...guideEntries, ...tokenEntries];

  await Promise.all([
    writeFile(
      join(OUT_GUIDES, 'index.md'),
      generateGuidesIndexMarkdown(allGuideEntries),
      'utf-8',
    ),
    copyFile(
      join(import.meta.dirname, 'master-index.md'),
      join(OUT_ROOT, 'index.md'),
    ),
  ]);

  console.log(`\nWrote to dist/llm-docs/`);
  console.log(`  components/ — ${componentDocs.length} files`);
  console.log(`  guides/     — ${allGuideEntries.length} files`);
}

// ── Components ─────────────────────────────────────────────────────────────

async function runComponents(): Promise<ComponentDoc[]> {
  const entries = await discoverComponents();
  const docs: ComponentDoc[] = [];

  for (const entry of entries) {
    try {
      const doc = await buildComponentDoc(entry);
      docs.push(doc);
      await writeFile(
        join(OUT_COMPONENTS, `${entry.name}.md`),
        generateComponentMarkdown(doc),
        'utf-8',
      );
      process.stdout.write(`  ✓ ${entry.name}\n`);
    } catch (err) {
      process.stderr.write(`  ✗ ${entry.name}: ${(err as Error).message}\n`);
    }
  }

  await writeFile(
    join(OUT_COMPONENTS, 'index.md'),
    generateComponentsIndexMarkdown(
      docs.map((d) => ({ name: d.name, title: d.title, description: d.description })),
    ),
    'utf-8',
  );

  return docs;
}

async function discoverComponents(): Promise<ComponentEntry[]> {
  const entries: ComponentEntry[] = [];

  if (existsSync(SRC_COMPONENTS)) {
    const dirs = await readdir(SRC_COMPONENTS, { withFileTypes: true });
    for (const dirent of dirs) {
      if (!dirent.isDirectory()) continue;
      const dir = join(SRC_COMPONENTS, dirent.name);
      const name = dirent.name;
      const sveltePath = join(dir, `${name}.svelte`);
      if (!existsSync(sveltePath)) continue;
      entries.push({
        name,
        dir,
        sveltePath,
        storiesPath: existsSync(join(dir, `${name}.stories.svelte`))
          ? join(dir, `${name}.stories.svelte`)
          : null,
        mdxPath: existsSync(join(dir, `${name}.mdx`)) ? join(dir, `${name}.mdx`) : null,
      });
    }
  }

  if (existsSync(SRC_ACTIONS)) {
    const dirs = await readdir(SRC_ACTIONS, { withFileTypes: true });
    for (const dirent of dirs) {
      if (!dirent.isDirectory()) continue;
      const dir = join(SRC_ACTIONS, dirent.name);
      const name = dirent.name;
      const sveltePath = join(dir, `${name}.svelte`);
      const mdxPath = join(dir, `${name}.mdx`);
      if (!existsSync(mdxPath) && !existsSync(sveltePath)) continue;
      entries.push({
        name,
        dir,
        sveltePath: existsSync(sveltePath) ? sveltePath : join(dir, 'index.ts'),
        storiesPath: existsSync(join(dir, `${name}.stories.svelte`))
          ? join(dir, `${name}.stories.svelte`)
          : null,
        mdxPath: existsSync(mdxPath) ? mdxPath : null,
      });
    }
  }

  return entries.sort((a, b) => a.name.localeCompare(b.name));
}

async function buildComponentDoc(entry: ComponentEntry): Promise<ComponentDoc> {
  const isSvelte = entry.sveltePath.endsWith('.svelte');

  const [propsResult, storiesResult, prose] = await Promise.all([
    isSvelte
      ? extractProps(entry.sveltePath)
      : Promise.resolve({ props: [], exportedTypes: [], description: undefined }),
    entry.storiesPath ? extractStories(entry.storiesPath) : Promise.resolve(null),
    entry.mdxPath ? extractMdxProse(entry.mdxPath) : Promise.resolve(''),
  ]);

  return {
    name: entry.name,
    title: storiesResult?.title ?? '',
    description: propsResult.description,
    props: propsResult.props,
    exportedTypes: propsResult.exportedTypes,
    stories: storiesResult?.stories ?? [],
    argTypes: storiesResult?.argTypes ?? {},
    prose,
  };
}

// ── Guides ─────────────────────────────────────────────────────────────────

async function runGuides(): Promise<GuideIndexEntry[]> {
  const entries: GuideIndexEntry[] = [];

  for (const entry of DOCS_MAP) {
    if (!existsSync(entry.srcPath)) {
      process.stderr.write(`  ⚠ guides: not found — ${entry.srcPath}\n`);
      continue;
    }
    try {
      const doc = await extractDoc(entry);
      if (!doc.prose.trim()) continue;
      await writeFile(join(OUT_GUIDES, entry.destFile), generateDocMarkdown(doc), 'utf-8');
      entries.push({ heading: doc.heading, description: doc.description, destFile: entry.destFile });
      process.stdout.write(`  ✓ guides/${entry.destFile}\n`);
    } catch (err) {
      process.stderr.write(`  ✗ guides/${entry.destFile}: ${(err as Error).message}\n`);
    }
  }

  return entries;
}

// ── Tokens (SCSS-derived) ──────────────────────────────────────────────────

async function runTokens(): Promise<GuideIndexEntry[]> {
  const entries: GuideIndexEntry[] = [];

  try {
    const coloursData = await extractColours(SRC_SCSS);
    const md = generateColoursMarkdown(coloursData);
    await writeFile(join(OUT_GUIDES, 'colours.md'), md, 'utf-8');
    const totalFamilies = coloursData.primary.length + coloursData.thematic.length;
    entries.push({
      heading: 'Colour Palettes',
      description: `CSS custom properties for ${totalFamilies} colour families (primary + thematic).`,
      destFile: 'colours.md',
    });
    process.stdout.write(`  ✓ guides/colours.md\n`);
  } catch (err) {
    process.stderr.write(`  ✗ guides/colours.md: ${(err as Error).message}\n`);
  }

  try {
    const tokensData = await extractTokens(SRC_SCSS);
    const md = generateTokensMarkdown(tokensData);
    await writeFile(join(OUT_GUIDES, 'tokens.md'), md, 'utf-8');
    entries.push({
      heading: 'Style Tokens',
      description: 'Spacing utilities (margin/padding), typography classes, and fluid spacers.',
      destFile: 'tokens.md',
    });
    process.stdout.write(`  ✓ guides/tokens.md\n`);
  } catch (err) {
    process.stderr.write(`  ✗ guides/tokens.md: ${(err as Error).message}\n`);
  }

  return entries;
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
