/** @type {Omit<import('../@types/component').Theme, "colour">} */
export default {
  scale: {
    'size-base': 1.375,
    'size-base-mobile': 1.125,
    'size-1': 'calc(var(--theme-scale-size-base) * 2.25rem)',
    'size-2': 'calc(var(--theme-scale-size-base) * 1.5rem)',
    'size-3': 'calc(var(--theme-scale-size-base) * 1rem)',
    'size-4': 'calc(var(--theme-scale-size-base) * 0.9rem)',
    'size-5': 'calc(var(--theme-scale-size-base) * 0.72rem)',
    'size-6': 'calc(var(--theme-scale-size-base) * 0.66rem)',
  },
  typeface: {
    display: 'Knowledge, sans-serif',
    serif: 'freight-book, serif',
    'sans-serif': 'Knowledge, sans-serif',
    monospace:
      'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  font: {
    family: {
      hed: 'var(--theme-typeface-display)',
      subhed: 'var(--theme-typeface-sans-serif)',
      body: 'var(--theme-typeface-serif)',
      note: 'var(--theme-typeface-sans-serif)',
    },
    size: {
      hed: 'var(--theme-scale-size-1)',
      'subhed-1': 'var(--theme-scale-size-2)',
      'subhed-2': 'var(--theme-scale-size-3)',
      'subhed-3': 'var(--theme-scale-size-6)',
      body: 'var(--theme-scale-size-3)',
      'note-1': 'var(--theme-scale-size-4)',
      'note-2': 'var(--theme-scale-size-5)',
      'note-3': 'var(--theme-scale-size-6)',
    },
  },
};
