interface Scale {
  'size-base': number,
  'size-base-mobile': number;
  'size-1': string,
  'size-2': string,
  'size-3': string,
  'size-4': string,
  'size-5': string,
  'size-6': string,
}

interface Typeface {
  'display': string,
  'serif': string,
  'sans-serif': string,
  'monospace': string,
}

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
  'hed': string;
  'subhed': string;
  'body': string;
  'note': string;
}

interface FontSize {
  'hed': string;
  'subhed-1': string;
  'subhed-2': string;
  'subhed-3': string;
  'body': string;
  'note-1': string;
  'note-2': string;
  'note-3': string;
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
  scale: Scale;
  typeface: Typeface;
  colour: Colour;
  font: Font;
};

export interface CustomTheme {
  scale?: Partial<Scale>;
  typeface?: Partial<Typeface>;
  colour?: Partial<Colour>;
  font?: Partial<CustomFont>;
}
