/** @type {import('../@types/component').Theme} */
export default {
  scale: {
    'size-base': 1.375,
    'size-1': 'calc(var(--theme-scale-size-base) * 2.25rem)',
    'size-2': 'calc(var(--theme-scale-size-base) * 1.5rem)',
    'size-3': 'calc(var(--theme-scale-size-base) * 1rem)',
    'size-4': 'calc(var(--theme-scale-size-base) * 0.9rem)',
    'size-5': 'calc(var(--theme-scale-size-base) * 0.72rem)',
    'size-6': 'calc(var(--theme-scale-size-base) * 0.66rem)',
  },
  fontface: {
    display: 'Knowledge, sans-serif',
    serif: 'freight-book, serif',
    'sans-serif': 'Knowledge, sans-serif',
    monospace:
      'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  font: {
    'family-hed': 'var(--theme-fontface-display)',
    'family-subhed': 'var(--theme-fontface-sans-serif)',
    'family-body': 'var(--theme-fontface-serif)',
    'family-note': 'var(--theme-fontface-sans-serif)',
    'size-hed': 'var(--theme-scale-size-1)',
    'size-subhed-1': 'var(--theme-scale-size-2)',
    'size-subhed-2': 'var(--theme-scale-size-3)',
    'size-subhed-3': 'var(--theme-scale-size-6)',
    'size-body': 'var(--theme-scale-size-3)',
    'size-note-1': 'var(--theme-scale-size-4)',
    'size-note-2': 'var(--theme-scale-size-5)',
    'size-note-3': 'var(--theme-scale-size-6)',
  },
  colour: {
    background: '#2e3440',
    'text-primary': '#ffffff',
    'text-secondary': 'rgb(255 255 255 / 60%)',
    accent: ' #ef3c2a',
    'brand-logo': '#ffffff',
    'brand-rules': 'rgb(255 255 255 / 25%)',
    'brand-shadow': 'rgb(255 255 255 / 10%)',
  },
};
