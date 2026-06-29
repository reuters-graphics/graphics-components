import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { Project, SyntaxKind } from 'ts-morph';
import type { StoryDef, ArgTypeDef } from '../types.js';

export interface StoriesExtractResult {
  title: string;
  stories: StoryDef[];
  argTypes: Record<string, ArgTypeDef>;
}

export async function extractStories(
  filePath: string
): Promise<StoriesExtractResult | null> {
  if (!existsSync(filePath)) return null;

  const source = await readFile(filePath, 'utf-8');

  const moduleContent = extractModuleScript(source);
  const { title, argTypes } = parseDefineMeta(moduleContent);

  const scriptContent = extractRegularScript(source);
  const varMap = buildVarMap(scriptContent);

  const template = extractTemplate(source);
  const stories = parseStoryElements(template, varMap);

  return { title, argTypes, stories };
}

// ── Script block extraction ────────────────────────────────────────────────

function extractModuleScript(source: string): string {
  const match = source.match(/<script\s+module[^>]*>([\s\S]*?)<\/script>/);
  return match ? match[1] : '';
}

function extractRegularScript(source: string): string {
  const match = source.match(
    /<script(?!\s+module)(?![^>]*\bmodule\b)[^>]*>([\s\S]*?)<\/script>/
  );
  return match ? match[1] : '';
}

function extractTemplate(source: string): string {
  let t = source.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
  t = t.replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');
  return t.trim();
}

// ── defineMeta parsing ────────────────────────────────────────────────────

interface DefineMetaResult {
  title: string;
  argTypes: Record<string, ArgTypeDef>;
}

function parseDefineMeta(moduleContent: string): DefineMetaResult {
  if (!moduleContent.trim()) return { title: '', argTypes: {} };

  const project = new Project({
    useInMemoryFileSystem: true,
    skipAddingFilesFromTsConfig: true,
  });
  const file = project.createSourceFile('module.ts', moduleContent);

  const callExpr = file
    .getDescendantsOfKind(SyntaxKind.CallExpression)
    .find((c) => c.getExpression().getText() === 'defineMeta');

  if (!callExpr) return { title: '', argTypes: {} };

  const arg = callExpr.getArguments()[0];
  if (!arg || arg.getKind() !== SyntaxKind.ObjectLiteralExpression) {
    return { title: '', argTypes: {} };
  }

  const obj = arg.asKindOrThrow(SyntaxKind.ObjectLiteralExpression);

  const titleProp = obj
    .getProperties()
    .find(
      (p) =>
        p.getKind() === SyntaxKind.PropertyAssignment &&
        p.asKindOrThrow(SyntaxKind.PropertyAssignment).getName() === 'title'
    );

  const title =
    titleProp?.getKind() === SyntaxKind.PropertyAssignment ?
      stripQuotes(
        titleProp
          .asKindOrThrow(SyntaxKind.PropertyAssignment)
          .getInitializer()
          ?.getText() ?? ''
      )
    : '';

  const argTypesProp = obj
    .getProperties()
    .find(
      (p) =>
        p.getKind() === SyntaxKind.PropertyAssignment &&
        p.asKindOrThrow(SyntaxKind.PropertyAssignment).getName() === 'argTypes'
    );

  const argTypes: Record<string, ArgTypeDef> = {};
  if (argTypesProp?.getKind() === SyntaxKind.PropertyAssignment) {
    const argTypesInit = argTypesProp
      .asKindOrThrow(SyntaxKind.PropertyAssignment)
      .getInitializer();
    if (argTypesInit?.getKind() === SyntaxKind.ObjectLiteralExpression) {
      const argTypesObj = argTypesInit.asKindOrThrow(
        SyntaxKind.ObjectLiteralExpression
      );
      for (const prop of argTypesObj.getProperties()) {
        if (prop.getKind() !== SyntaxKind.PropertyAssignment) continue;
        const pa = prop.asKindOrThrow(SyntaxKind.PropertyAssignment);
        const name = pa.getName();
        const val = pa.getInitializer();
        if (!val || val.getKind() !== SyntaxKind.ObjectLiteralExpression)
          continue;
        const valObj = val.asKindOrThrow(SyntaxKind.ObjectLiteralExpression);
        const def: ArgTypeDef = {};
        for (const vp of valObj.getProperties()) {
          if (vp.getKind() !== SyntaxKind.PropertyAssignment) continue;
          const vpa = vp.asKindOrThrow(SyntaxKind.PropertyAssignment);
          if (vpa.getName() === 'control') {
            def.control = stripQuotes(vpa.getInitializer()?.getText() ?? '');
          } else if (vpa.getName() === 'options') {
            const optsInit = vpa.getInitializer();
            if (optsInit?.getKind() === SyntaxKind.ArrayLiteralExpression) {
              def.options = optsInit
                .asKindOrThrow(SyntaxKind.ArrayLiteralExpression)
                .getElements()
                .map((e) => stripQuotes(e.getText()));
            }
          }
        }
        argTypes[name] = def;
      }
    }
  }

  return { title, argTypes };
}

// ── Variable map from regular script ─────────────────────────────────────

function buildVarMap(scriptContent: string): Map<string, string> {
  const map = new Map<string, string>();
  if (!scriptContent.trim()) return map;

  const project = new Project({
    useInMemoryFileSystem: true,
    skipAddingFilesFromTsConfig: true,
  });
  const file = project.createSourceFile('script.ts', scriptContent);

  for (const varDecl of file.getVariableDeclarations()) {
    const init = varDecl.getInitializer();
    if (init) {
      map.set(varDecl.getName(), init.getText());
    }
  }

  return map;
}

// ── Template Story element parsing ────────────────────────────────────────

function parseStoryElements(
  template: string,
  varMap: Map<string, string>
): StoryDef[] {
  const stories: StoryDef[] = [];
  let i = 0;

  while (i < template.length) {
    const start = template.indexOf('<Story', i);
    if (start === -1) break;

    // Confirm word boundary: <Story must be followed by whitespace or >
    const charAfter = template[start + 6];
    if (charAfter !== undefined && !/[\s>]/.test(charAfter)) {
      i = start + 7;
      continue;
    }

    // Read attribute content, balancing braces
    let j = start + 6;
    let braceDepth = 0;
    let inStr: false | '"' | "'" = false;

    while (j < template.length) {
      const ch = template[j];

      if (inStr) {
        if (ch === inStr && template[j - 1] !== '\\') inStr = false;
      } else if (ch === '"' || ch === "'") {
        inStr = ch;
      } else if (ch === '{') {
        braceDepth++;
      } else if (ch === '}') {
        braceDepth--;
      } else if (ch === '>' && braceDepth === 0) {
        const selfClosing = template[j - 1] === '/';
        const attrEnd = selfClosing ? j - 1 : j;
        const attrString = template.slice(start + 6, attrEnd).trim();

        const story = parseStoryAttributes(attrString, varMap, !selfClosing);
        if (story) {
          if (!selfClosing) {
            const CLOSE = '</Story>';
            const closeIdx = template.indexOf(CLOSE, j + 1);
            if (closeIdx !== -1) {
              story.templateBody = dedentCode(template.slice(j + 1, closeIdx));
              i = closeIdx + CLOSE.length;
            } else {
              i = j + 1;
            }
          } else {
            i = j + 1;
          }
          stories.push(story);
        } else {
          i = j + 1;
        }
        break;
      }

      j++;
    }

    if (j >= template.length) break;
  }

  return stories;
}

function parseStoryAttributes(
  attrString: string,
  varMap: Map<string, string>,
  hasTemplate: boolean
): StoryDef | null {
  const name = extractStringAttr(attrString, 'name');
  if (!name) return null;

  const exportName = extractStringAttr(attrString, 'exportName') ?? undefined;
  const argsText = extractArgsObjectText(attrString);

  const args = argsText ? resolveArgsObject(argsText, varMap) : {};

  return { name, exportName, args, hasTemplate };
}

// Extract a quoted string attribute: name="value" or name='value'
function extractStringAttr(
  attrString: string,
  attrName: string
): string | null {
  const re = new RegExp(`${attrName}=["']([^"']*)["']`);
  const match = attrString.match(re);
  return match ? match[1] : null;
}

// Extract the inner JS object text from args={{ ... }}
// args={ outer } where outer is { inner }
// Returns the inner object string including braces e.g. "{ key: value }"
function extractArgsObjectText(attrString: string): string | null {
  const argsIdx = attrString.indexOf('args=');
  if (argsIdx === -1) return null;

  const outerStart = argsIdx + 5;
  if (attrString[outerStart] !== '{') return null;

  // Balance braces to find the end of the outer {} (Svelte binding)
  let depth = 0;
  let outerEnd = -1;
  for (let i = outerStart; i < attrString.length; i++) {
    if (attrString[i] === '{') depth++;
    else if (attrString[i] === '}') {
      depth--;
      if (depth === 0) {
        outerEnd = i;
        break;
      }
    }
  }

  if (outerEnd === -1) return null;

  // Strip the outer {} (Svelte binding) → leaves us with the JS object literal
  return attrString.slice(outerStart + 1, outerEnd).trim();
}

// Parse a JS object literal text and resolve variable references
function resolveArgsObject(
  objectText: string,
  varMap: Map<string, string>
): Record<string, unknown> {
  // Wrap in a const to make it parseable as a statement
  const src = `const __args = ${objectText.startsWith('{') ? objectText : '{' + objectText + '}'}`;
  const result: Record<string, unknown> = {};

  try {
    const project = new Project({
      useInMemoryFileSystem: true,
      skipAddingFilesFromTsConfig: true,
    });
    const file = project.createSourceFile('args.ts', src);

    const decl = file.getVariableDeclaration('__args');
    if (!decl) return result;

    const init = decl.getInitializer();
    if (!init || init.getKind() !== SyntaxKind.ObjectLiteralExpression)
      return result;

    const obj = init.asKindOrThrow(SyntaxKind.ObjectLiteralExpression);

    for (const prop of obj.getProperties()) {
      if (prop.getKind() === SyntaxKind.PropertyAssignment) {
        const pa = prop.asKindOrThrow(SyntaxKind.PropertyAssignment);
        const propName = pa.getName();
        const valNode = pa.getInitializer();
        if (!valNode) continue;

        if (valNode.getKind() === SyntaxKind.Identifier) {
          // Variable reference
          const varName = valNode.getText();
          result[propName] =
            varMap.has(varName) ?
              { __raw: varMap.get(varName)! }
            : { __ref: varName };
        } else {
          result[propName] = { __raw: valNode.getText() };
        }
      } else if (prop.getKind() === SyntaxKind.ShorthandPropertyAssignment) {
        const spa = prop.asKindOrThrow(SyntaxKind.ShorthandPropertyAssignment);
        const propName = spa.getName();
        result[propName] =
          varMap.has(propName) ?
            { __raw: varMap.get(propName)! }
          : { __ref: propName };
      }
    }
  } catch {
    // If parsing fails, return empty args rather than crashing
  }

  return result;
}

// ── Utilities ──────────────────────────────────────────────────────────────

function stripQuotes(s: string): string {
  return s.replace(/^["'`]|["'`]$/g, '');
}

function dedentCode(raw: string): string {
  const lines = raw.split('\n');

  while (lines.length > 0 && lines[0].trim() === '') lines.shift();
  while (lines.length > 0 && lines[lines.length - 1].trim() === '') lines.pop();

  if (lines.length === 0) return '';

  const minIndent = lines
    .filter((l) => l.trim().length > 0)
    .reduce(
      (min, l) => Math.min(min, l.match(/^(\s*)/)?.[1].length ?? 0),
      Infinity
    );

  const remove = isFinite(minIndent) ? minIndent : 0;
  return lines.map((l) => l.slice(remove)).join('\n');
}
