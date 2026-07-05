import { readFile } from 'node:fs/promises';
import { Project, SyntaxKind, type ObjectBindingPattern } from 'ts-morph';
import type { PropDef } from '../types.js';

const SCRIPT_BLOCK_RE =
  /<script(?!\s+module)(?![^>]*\bmodule\b)[^>]*>([\s\S]*?)<\/script>/;
const MODULE_SCRIPT_BLOCK_RE =
  /<script\s+(?:[^>]*\s)?module(?:\s[^>]*)?>([\s\S]*?)<\/script>/;

export interface PropsExtractResult {
  props: PropDef[];
  exportedTypes: string[];
  description?: string;
}

export async function extractProps(
  filePath: string
): Promise<PropsExtractResult> {
  const source = await readFile(filePath, 'utf-8');

  const description = extractComponentDescription(source);

  const project = new Project({
    useInMemoryFileSystem: true,
    skipAddingFilesFromTsConfig: true,
  });

  // Instance script: Props interface + $props() defaults
  const scriptContent = extractScriptContent(source);
  let props: PropDef[] = [];
  if (scriptContent) {
    const file = project.createSourceFile('component.ts', scriptContent);
    props = extractPropsFromInterface(file);
    applyDefaults(props, file);
  }

  // Module script: exported types and interfaces (may also hold Props in some components)
  const moduleContent = extractModuleScriptContent(source);
  let exportedTypes: string[] = [];
  if (moduleContent) {
    const moduleFile = project.createSourceFile('module.ts', moduleContent);
    exportedTypes = extractExportedTypes(moduleFile);
    // If Props wasn't found in the instance script, try the module script
    if (props.length === 0) {
      props = extractPropsFromInterface(moduleFile);
      applyDefaults(props, moduleFile);
    }
  }

  // Also check instance script for exported types if module had none
  if (exportedTypes.length === 0 && scriptContent) {
    const file = project.getSourceFile('component.ts');
    if (file) exportedTypes = extractExportedTypes(file);
  }

  return { props, exportedTypes, description };
}

function extractComponentDescription(source: string): string | undefined {
  const match = source.match(/<!--\s*@component\s*([\s\S]*?)-->/);
  if (!match) return undefined;

  const lines = match[1].split('\n');

  // The first line typically contains "`ComponentName` [link]" — skip it if it's just a name/link
  const firstLine = lines[0]?.trim() ?? '';
  const isJustNameOrLink = /^[`*]?\w[\w\s]*[`*]?\s*(?:\[.*?\]\(.*?\))?$/.test(
    firstLine
  );
  const contentLines = isJustNameOrLink ? lines.slice(1) : lines;

  return (
    contentLines
      .join('\n')
      .replace(/\[.*?\]\(.*?\)/g, '') // strip markdown links
      .replace(/`/g, '')
      .trim() || undefined
  );
}

function extractScriptContent(source: string): string | null {
  const match = source.match(SCRIPT_BLOCK_RE);
  return match ? match[1] : null;
}

function extractModuleScriptContent(source: string): string | null {
  const match = source.match(MODULE_SCRIPT_BLOCK_RE);
  return match ? match[1] : null;
}

function extractPropsFromInterface(
  file: ReturnType<Project['createSourceFile']>
): PropDef[] {
  const propsInterface = file.getInterface('Props');
  if (!propsInterface) return [];

  return propsInterface.getMembers().flatMap((member) => {
    if (member.getKind() !== SyntaxKind.PropertySignature) return [];

    const prop = member.asKindOrThrow(SyntaxKind.PropertySignature);
    const name = prop.getName();
    const required = !prop.hasQuestionToken();
    const typeNode = prop.getTypeNode();
    const type = typeNode ? typeNode.getText() : 'unknown';

    const jsDocs = prop.getJsDocs();
    const description =
      jsDocs.length > 0 ? jsDocs[0].getCommentText()?.trim() : undefined;

    return [{ name, type, required, description }];
  });
}

function applyDefaults(
  props: PropDef[],
  file: ReturnType<Project['createSourceFile']>
): void {
  // Find the $props() destructuring: let { ... }: Props = $props()
  const propsDecl = file.getVariableDeclarations().find((v) => {
    const init = v.getInitializer();
    if (!init) return false;
    if (init.getKind() !== SyntaxKind.CallExpression) return false;
    const callExpr = init.asKindOrThrow(SyntaxKind.CallExpression);
    const expr = callExpr.getExpression().getText();
    return expr === '$props';
  });

  if (!propsDecl) return;

  const nameNode = propsDecl.getNameNode();
  if (nameNode.getKind() !== SyntaxKind.ObjectBindingPattern) return;

  const pattern = nameNode as unknown as ObjectBindingPattern;
  for (const element of pattern.getElements()) {
    // The public prop name is the propertyName (if renaming) or the binding name
    const propName =
      element.getPropertyNameNode()?.getText() ??
      element.getNameNode().getText();
    const initializer = element.getInitializer();
    if (!initializer) continue;

    const prop = props.find((p) => p.name === propName);
    if (prop) {
      prop.default = initializer.getText();
    }
  }
}

function extractExportedTypes(
  file: ReturnType<Project['createSourceFile']>
): string[] {
  const types: string[] = [];

  for (const typeAlias of file.getTypeAliases()) {
    if (typeAlias.isExported()) {
      types.push(typeAlias.getText());
    }
  }

  for (const iface of file.getInterfaces()) {
    if (iface.isExported() && iface.getName() !== 'Props') {
      types.push(iface.getText());
    }
  }

  return types;
}
