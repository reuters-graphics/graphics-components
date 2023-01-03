interface Scale {
  'size-base': number,
  'size-1': string,
  'size-2': string,
  'size-3': string,
  'size-4': string,
  'size-5': string,
  'size-6': string,
}

interface Fontface {
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

interface Font {
  'family-hed': string;
  'family-subhed': string;
  'family-body': string;
  'family-note': string;
  'size-hed': string;
  'size-subhed-1': string;
  'size-subhed-2': string;
  'size-subhed-3': string;
  'size-body': string;
  'size-note-1': string;
  'size-note-2': string;
  'size-note-3': string;
}

export interface Theme {
  scale: Scale,
  fontface: Fontface
  colour: Colour,
  font: Font;
};

export interface CustomTheme {
  scale?: Partial<Scale>,
  fontface?: Partial<Fontface>,
  colour?: Partial<Colour>,
  font?: Partial<Font>
}
