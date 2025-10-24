import type { Image, Layout } from './PhotoPack.svelte';

// Breakpoint constants for smart default layouts
export const DESKTOP_BREAKPOINT = 1024;
export const TABLET_BREAKPOINT = 768;

/**
 * Generates a smart layout for a given number of images with bottom-heavy distribution.
 * Avoids single-image rows by redistributing when necessary.
 *
 * @param imageCount - Total number of images
 * @param maxPerRow - Maximum images per row
 * @param breakpoint - Breakpoint threshold for this layout
 * @returns Layout object with rows array
 */
export const generateSmartLayout = (
  imageCount: number,
  maxPerRow: number,
  breakpoint: number
): Layout => {
  // Handle edge cases
  if (imageCount === 0) return { breakpoint, rows: [] };
  if (imageCount === 1) return { breakpoint, rows: [1] };

  const fullRows = Math.floor(imageCount / maxPerRow);
  const remainder = imageCount % maxPerRow;

  let rows: number[] = [];

  if (remainder === 0) {
    // Perfect division: all rows have maxPerRow
    rows = Array(fullRows).fill(maxPerRow);
  } else {
    // Bottom-heavy: smaller row at top, larger rows below
    // This makes early images larger (fewer per row = bigger display size)
    rows = [remainder, ...Array(fullRows).fill(maxPerRow)];
  }

  return {
    breakpoint,
    rows,
  };
};

type ContainerWidth = 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';

/**
 * Generates smart default layouts for desktop and tablet breakpoints.
 * Mobile (below TABLET_BREAKPOINT) automatically shows 1 image per row.
 *
 * Max images per row by container width:
 * - normal: 2
 * - wide/wider: 3
 * - widest/fluid: 4
 *
 * @param imageCount - Total number of images
 * @param width - Container width setting
 * @returns Array of 2 layouts [desktop, tablet]
 */
export const generateDefaultLayouts = (
  imageCount: number,
  width: ContainerWidth
): Layout[] => {
  // Map container width to max images per row for desktop
  const desktopMaxPerRow =
    width === 'normal' ? 2
    : width === 'widest' || width === 'fluid' ? 4
    : 3;

  // Tablet always uses max 2 per row
  const tabletMaxPerRow = 2;

  return [
    generateSmartLayout(imageCount, desktopMaxPerRow, DESKTOP_BREAKPOINT),
    generateSmartLayout(imageCount, tabletMaxPerRow, TABLET_BREAKPOINT),
  ];
};

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
