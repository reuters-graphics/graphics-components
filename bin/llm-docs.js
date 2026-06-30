#!/usr/bin/env node
import { cp, mkdir, readFile, appendFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname, resolve, relative } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(
  await readFile(join(__dirname, '../package.json'), 'utf-8')
);

const src = join(__dirname, '../dist/llm-docs');
const dest = resolve(process.argv[2] ?? './.claude/llms/graphics-components');
const destRelative = './' + relative(process.cwd(), dest);

if (!existsSync(src)) {
  console.error(
    'Error: dist/llm-docs not found in the installed package.\n' +
      'This may be an older version that predates the LLM docs feature.'
  );
  process.exit(1);
}

await mkdir(dest, { recursive: true });
await cp(src, dest, { recursive: true });
console.log(`Wrote LLM docs to ${destRelative}/`);

await updateAgentDocs(destRelative);

// ── CLAUDE.md / AGENTS.md update ──────────────────────────────────────────

async function updateAgentDocs(docsPath) {
  const claudeMd = resolve('CLAUDE.md');
  const agentsMd = resolve('AGENTS.md');

  const { name } = pkg;
  const description =
    pkg.llms?.description ?? `LLM reference docs for ${name}.`;

  const pointer = [
    `## ${name}`,
    '',
    description,
    '',
    `LLM reference docs: \`${docsPath}/index.md\``,
  ].join('\n');

  const targetFile =
    existsSync(agentsMd) && !existsSync(claudeMd) ? agentsMd : claudeMd;
  const fileName = targetFile === claudeMd ? 'CLAUDE.md' : 'AGENTS.md';

  if (existsSync(targetFile)) {
    const existing = await readFile(targetFile, 'utf-8');
    if (existing.includes(docsPath)) {
      console.log(
        `  ${fileName} already references ${docsPath} — no changes made`
      );
      return;
    }
    await appendFile(targetFile, '\n\n' + pointer + '\n');
    console.log(`  Updated ${fileName} with docs reference`);
  } else {
    await writeFile(targetFile, pointer + '\n');
    console.log(`  Created ${fileName} with docs reference`);
  }
}
