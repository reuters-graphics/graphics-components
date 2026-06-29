import type { ComponentDoc, PropDef, StoryDef, ExtractedDoc } from './types.js';
import type { ColoursData, TokensData } from './extractors/tokens.js';

export function generateComponentMarkdown(doc: ComponentDoc): string {
  const sections: string[] = [];

  // Header
  sections.push(`# ${doc.name}\n`);

  if (doc.description) {
    sections.push(`${doc.description}\n`);
  }

  // Storybook title (hierarchy)
  if (doc.title) {
    sections.push(`**Category:** ${doc.title}\n`);
  }

  sections.push(
    `**Import:** \`import { ${doc.name} } from '@reuters-graphics/graphics-components'\`\n`,
  );

  // Props table
  if (doc.props.length > 0) {
    sections.push(renderPropsTable(doc.props, doc.argTypes));
  }

  // Exported types
  if (doc.exportedTypes.length > 0) {
    sections.push(renderTypes(doc.exportedTypes));
  }

  // Examples from stories
  if (doc.stories.length > 0) {
    sections.push(renderExamples(doc.name, doc.stories));
  }

  // MDX prose documentation
  if (doc.prose) {
    sections.push(renderProse(doc.prose));
  }

  return sections.join('\n');
}

export function generateDocMarkdown(doc: ExtractedDoc): string {
  // The prose already contains the H1 title, so return it as-is.
  return doc.prose + '\n';
}

export function generateComponentsIndexMarkdown(
  entries: Array<{ name: string; title: string; description?: string }>,
): string {
  const lines: string[] = [
    '# Components\n',
    'Per-component reference with props tables, type definitions, and usage examples.\n',
    '| Component | Category | Description |',
    '|-----------|----------|-------------|',
  ];

  for (const entry of entries) {
    const desc = entry.description ? escapeCell(entry.description) : '—';
    lines.push(`| [${entry.name}](./${entry.name}.md) | ${escapeCell(entry.title)} | ${desc} |`);
  }

  return lines.join('\n') + '\n';
}

export interface GuideIndexEntry {
  heading: string;
  description: string;
  destFile: string;
}

export function generateGuidesIndexMarkdown(entries: GuideIndexEntry[]): string {
  const lines: string[] = [
    '# Guides\n',
    'Conceptual documentation, integration guides, and design system reference.\n',
    '| Guide | Description |',
    '|-------|-------------|',
  ];

  for (const e of entries) {
    const desc = e.description ? escapeCell(e.description) : '—';
    lines.push(`| [${e.heading}](./${e.destFile}) | ${desc} |`);
  }

  return lines.join('\n') + '\n';
}


// ── Section renderers ──────────────────────────────────────────────────────

function renderPropsTable(
  props: PropDef[],
  argTypes: Record<string, { control?: unknown; options?: string[] }>,
): string {
  const rows = props.map((p) => {
    const req = p.required && p.default === undefined ? '✓' : '';
    const def = p.default !== undefined ? `\`${p.default}\`` : '—';
    const desc = p.description ? escapeCell(p.description) : '—';

    // Append options hint from argTypes if available
    const at = argTypes[p.name];
    const hint = at?.options ? ` Options: \`${at.options.join('`, `')}\`` : '';

    return `| \`${p.name}\` | \`${escapeCell(p.type)}\` | ${def} | ${req} | ${desc}${hint} |`;
  });

  return [
    '## Props\n',
    '| Prop | Type | Default | Required | Description |',
    '|------|------|---------|:--------:|-------------|',
    ...rows,
  ].join('\n') + '\n';
}

function renderTypes(types: string[]): string {
  const formatted = types.join('\n\n');
  return `## Types\n\n\`\`\`typescript\n${formatted}\n\`\`\`\n`;
}

function renderExamples(componentName: string, stories: StoryDef[]): string {
  const sections: string[] = ['## Examples\n'];

  for (const story of stories) {
    if (story.hasTemplate) {
      if (!story.templateBody) continue;
      sections.push(`### ${story.name}\n`);
      sections.push(`\`\`\`svelte\n${story.templateBody}\n\`\`\`\n`);
      continue;
    }

    const usage = renderComponentUsage(componentName, story.args);
    sections.push(`### ${story.name}\n`);
    sections.push(`\`\`\`svelte\n${usage}\n\`\`\`\n`);
  }

  return sections.join('\n');
}

function renderProse(prose: string): string {
  return `## Documentation\n\n${prose}\n`;
}

// ── Component usage rendering ──────────────────────────────────────────────

function renderComponentUsage(componentName: string, args: Record<string, unknown>): string {
  const entries = Object.entries(args);
  if (entries.length === 0) return `<${componentName} />`;

  const props = entries
    .map(([name, value]) => renderProp(name, value))
    .filter(Boolean) as string[];

  if (props.length === 0) return `<${componentName} />`;

  // Single-line if it fits
  const singleLine = `<${componentName} ${props.map((p) => p.trim()).join(' ')} />`;
  if (singleLine.length <= 100 && !singleLine.includes('\n')) {
    return singleLine;
  }

  return `<${componentName}\n${props.join('\n')}\n/>`;
}

const MAX_VALUE_LENGTH = 220;

function renderProp(name: string, value: unknown): string | null {
  if (value === undefined || value === null) return null;

  const rendered = renderValue(value);
  if (rendered === null) return null;

  const { mode, text } = rendered;

  if (text.length > MAX_VALUE_LENGTH) {
    // Don't truncate mid-syntax — indicate the shape with a comment instead
    const shape = text.startsWith('[') ? 'array' : text.startsWith('{') ? 'object' : 'value';
    return `  ${name}={/* ${shape} — see Props/Types for full type */}`;
  }

  if (mode === 'string') return `  ${name}="${text}"`;
  return `  ${name}={${text}}`;
}

interface RenderedValue {
  mode: 'string' | 'expr';
  text: string;
}

function renderValue(value: unknown): RenderedValue | null {
  // Values from resolveArgsObject come wrapped as { __raw: string } or { __ref: string }
  if (value && typeof value === 'object') {
    if ('__raw' in value) {
      const raw = (value as { __raw: string }).__raw;
      // String literal → render as attribute value
      if (isStringLiteral(raw)) {
        return { mode: 'string', text: raw.slice(1, -1) };
      }
      return { mode: 'expr', text: raw };
    }
    if ('__ref' in value) {
      return { mode: 'expr', text: `/* ${(value as { __ref: string }).__ref} */` };
    }
  }

  if (typeof value === 'string') return { mode: 'string', text: value };
  if (typeof value === 'number' || typeof value === 'boolean') {
    return { mode: 'expr', text: String(value) };
  }
  if (value === null) return { mode: 'expr', text: 'null' };

  return { mode: 'expr', text: JSON.stringify(value) };
}

// ── Utilities ──────────────────────────────────────────────────────────────

function isStringLiteral(s: string): boolean {
  return (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'")) ||
    (s.startsWith('`') && s.endsWith('`'))
  );
}

function escapeCell(s: string): string {
  return s.replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

// ── Colours ────────────────────────────────────────────────────────────────

export function generateColoursMarkdown(data: ColoursData): string {
  const lines: string[] = [
    '# Colour Palettes\n',
    'CSS custom properties set on `:root`. Import a palette to use its variables:\n',
    '```scss',
    "// Example: import the blue palette",
    "@use '@reuters-graphics/graphics-components/scss/colours/primary/blue';",
    '```\n',
    'Then reference variables with `var(--blue-500)` etc.\n',
  ];

  if (data.primary.length > 0) {
    lines.push('## Primary palettes\n');
    for (const family of data.primary) {
      lines.push(`### ${family.name}\n`);
      lines.push('| Variable | Value |');
      lines.push('|----------|-------|');
      for (const { variable, value } of family.variables) {
        lines.push(`| \`${variable}\` | \`${value}\` |`);
      }
      lines.push('');
    }
  }

  if (data.thematic.length > 0) {
    lines.push('## Thematic palettes\n');
    lines.push(
      'Import thematic palettes to access branded colour tokens used by the `Theme` component.\n',
    );
    for (const family of data.thematic) {
      lines.push(`### ${family.name}\n`);
      lines.push('| Variable | Value |');
      lines.push('|----------|-------|');
      for (const { variable, value } of family.variables) {
        lines.push(`| \`${variable}\` | \`${value}\` |`);
      }
      lines.push('');
    }
  }

  return lines.join('\n');
}

// ── Tokens ─────────────────────────────────────────────────────────────────

const MARGIN_PREFIXES = [
  ['`m-{n}`', 'margin (all sides)'],
  ['`mt-{n}`', 'margin-block-start (top)'],
  ['`mb-{n}`', 'margin-block-end (bottom)'],
  ['`ml-{n}`', 'margin-inline-start (left)'],
  ['`mr-{n}`', 'margin-inline-end (right)'],
  ['`mx-{n}`', 'margin-inline (left + right)'],
  ['`my-{n}`', 'margin-block (top + bottom)'],
];

const PADDING_PREFIXES = [
  ['`p-{n}`', 'padding (all sides)'],
  ['`pt-{n}`', 'padding-block-start (top)'],
  ['`pb-{n}`', 'padding-block-end (bottom)'],
  ['`pl-{n}`', 'padding-inline-start (left)'],
  ['`pr-{n}`', 'padding-inline-end (right)'],
  ['`px-{n}`', 'padding-inline (left + right)'],
  ['`py-{n}`', 'padding-block (top + bottom)'],
];

export function generateTokensMarkdown(data: TokensData): string {
  const lines: string[] = [
    '# Style Tokens\n',
    'Import the main SCSS to access all token classes:\n',
    '```scss',
    "@use '@reuters-graphics/graphics-components/scss/main';",
    '```\n',
  ];

  // ── Spacing ──────────────────────────────────────────────────────────────
  lines.push('## Spacing\n');
  lines.push(
    'Static spacing uses the Tailwind scale: 1 unit = 0.25rem. ' +
      'So `.m-4` = 1rem, `.m-8` = 2rem, `.my-6` = 1.5rem block margin.\n',
  );

  if (data.marginScale.length > 0) {
    lines.push('### Static margin\n');
    lines.push('| Prefix | Property |');
    lines.push('|--------|---------|');
    for (const [prefix, prop] of MARGIN_PREFIXES) lines.push(`| ${prefix} | ${prop} |`);
    lines.push('');
    lines.push('Available levels and their values:\n');
    lines.push('| Level | Value |');
    lines.push('|-------|-------|');
    for (const { level, value } of data.marginScale) {
      lines.push(`| \`${level}\` | \`${value}\` |`);
    }
    lines.push('');
  }

  if (data.paddingScale.length > 0) {
    lines.push('### Static padding\n');
    lines.push('Same scale as margin. Prefixes:\n');
    lines.push('| Prefix | Property |');
    lines.push('|--------|---------|');
    for (const [prefix, prop] of PADDING_PREFIXES) lines.push(`| ${prefix} | ${prop} |`);
    lines.push('');
  }

  if (data.fluidMarginTable) {
    lines.push('### Fluid margin\n');
    lines.push(
      'Fluid values scale with viewport width. ' +
        'Use SCSS `@extend` to apply: `@extend %fmy-4;`. ' +
        'Direct utility classes are also available for levels 0–9.\n',
    );
    lines.push('| Class | Properties |');
    lines.push('|-------|------------|');
    for (const [cls, props] of data.fluidMarginTable.rows) {
      lines.push(`| \`${cls}\` | \`${escapeCell(props)}\` |`);
    }
    lines.push('');
  }

  if (data.fluidPaddingTable) {
    lines.push('### Fluid padding\n');
    lines.push('Same scale as fluid margin. Prefix `fp` instead of `fm`.\n');
    lines.push('| Class | Properties |');
    lines.push('|-------|------------|');
    for (const [cls, props] of data.fluidPaddingTable.rows) {
      lines.push(`| \`${cls}\` | \`${escapeCell(props)}\` |`);
    }
    lines.push('');
  }

  // ── Typography ────────────────────────────────────────────────────────────
  if (data.typographyTables.length > 0) {
    lines.push('## Typography\n');
    for (const table of data.typographyTables) {
      lines.push(`### ${table.title}\n`);
      lines.push('| Class | Properties |');
      lines.push('|-------|------------|');
      for (const [cls, props] of table.rows) {
        lines.push(`| \`${cls}\` | \`${escapeCell(props)}\` |`);
      }
      lines.push('');
    }
  }

  return lines.join('\n');
}
