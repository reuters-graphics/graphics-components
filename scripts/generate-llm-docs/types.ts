export interface PropDef {
  name: string;
  type: string;
  required: boolean;
  default?: string;
  description?: string;
}

export interface ArgTypeDef {
  control?: string | { type: string };
  options?: string[];
}

export interface StoryDef {
  name: string;
  exportName?: string;
  args: Record<string, unknown>;
  argTypes?: Record<string, ArgTypeDef>;
  hasTemplate: boolean;
  templateBody?: string;
}

export interface ComponentDoc {
  name: string;
  title: string;
  description?: string;
  props: PropDef[];
  exportedTypes: string[];
  stories: StoryDef[];
  argTypes: Record<string, ArgTypeDef>;
  prose: string;
}

export interface ComponentEntry {
  name: string;
  dir: string;
  sveltePath: string;
  storiesPath: string | null;
  mdxPath: string | null;
}

export interface DocEntry {
  srcPath: string;
  destFile: string;
  title: string;
}

export interface ExtractedDoc {
  entry: DocEntry;
  heading: string;
  description: string;
  prose: string;
}
