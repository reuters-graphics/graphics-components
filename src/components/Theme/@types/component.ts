interface Colour {
  background: string;
  'text-primary': string;
  'text-secondary': string;
  accent: string;
  'brand-logo': string;
  'brand-rules': string;
  'brand-shadow': string;
};

interface FontFamily {
  'serif': string,
  'sans-serif': string,
  'monospace': string,
  hed: string,
  subhed: string,
  body: string,
  note: string,
}

interface FontSize {
  'xxs': string;
  'xs': string;
  'sm': string;
  'base': string;
  'lg': string;
  'xl': string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
}

interface Font {
  family: FontFamily;
  size: FontSize;
}

interface CustomFont {
  family?: Partial<FontFamily>;
  size?: Partial<FontSize>;
}

export interface Theme {
  colour: Colour;
  font: Font;
};

export interface CustomTheme {
  colour?: Partial<Colour>;
  font?: Partial<CustomFont>;
}
