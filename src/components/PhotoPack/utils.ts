import type { Image, Layout } from './PhotoPack.svelte';

export const groupRows = (images: Image[], layout?: Layout) => {
  // Default layout, one img per row
  if (!layout) return images.map((img) => [img]);
  // Otherwise, chunk into rows according to layout scheme
  let i = 0;
  const rows = [];
  for (const rowLength of layout.rows) {
    const row = [];
    for (const imgI of [...Array(rowLength).keys()]) {
      row.push(images[imgI + i]);
    }
    rows.push(row);
    i += rowLength;
  }
  return rows;
};
