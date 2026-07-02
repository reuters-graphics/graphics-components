import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';
import remarkStringify from 'remark-stringify';
import { visit, SKIP } from 'unist-util-visit';
import type { Node, Parent } from 'unist';

const MDX_ELEMENT_TYPES = new Set([
  'mdxjsEsm',
  'mdxJsxFlowElement',
  'mdxJsxTextElement',
  'mdxFlowExpression',
  'mdxTextExpression',
]);

export async function extractMdxProse(filePath: string): Promise<string> {
  if (!existsSync(filePath)) return '';

  const source = await readFile(filePath, 'utf-8');

  const result = await unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(stripMdxNodes)
    .use(remarkStringify, {
      bullet: '-',
      emphasis: '_',
      fences: true,
    })
    .process(source);

  return String(result).trim();
}

function stripMdxNodes() {
  return (tree: Node) => {
    visit(
      tree,
      (node: Node, index: number | undefined, parent: Parent | undefined) => {
        if (MDX_ELEMENT_TYPES.has(node.type)) {
          if (parent && index !== undefined) {
            parent.children.splice(index, 1);
            return [SKIP, index];
          }
        }
      }
    );
  };
}
