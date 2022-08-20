interface Colour {
  background: string;
  'text-primary': string;
  'text-secondary': string;
  accent: string;
  'brand-logo': string;
  'brand-rules': string;
  'brand-shadow': string;
};

interface Font {
  'size-base': string;
  'family-serif': string,
  'family-sans-serif': string,
  'family-monospace': string,
  'family-hed': string;
  'family-subhed': string;
  'family-body': string;
  'family-note': string;
}

export interface Theme {
  colour: Colour,
  font: Font;
};

export interface CustomTheme {
  colour?: Partial<Colour>,
  font?: Partial<Font>
}
