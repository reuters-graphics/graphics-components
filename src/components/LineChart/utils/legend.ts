import type { LineSeriesInput } from '../types/index.js';

/**
 * Legend item with computed properties
 */
export interface LegendItem extends LineSeriesInput {
    color: string;
}

/**
 * Generate legend items from series
 */
export function generateLegendItems(series: LineSeriesInput[], defaultColors?: string[]): LegendItem[] {
    const defaultColorPalette = defaultColors || [
        '#1f77b4', // blue
        '#ff7f0e', // orange
        '#2ca02c', // green
        '#d62728', // red
        '#9467bd', // purple
        '#8c564b', // brown
        '#e377c2', // pink
        '#7f7f7f'  // gray
    ];

    return series.map((s, index) => ({
        ...s,
        color: s.color || defaultColorPalette[index % defaultColorPalette.length]
    }));
}

/**
 * Default color palette for charts
 */
export const DEFAULT_COLOR_PALETTE = [
    '#1f77b4', // blue
    '#ff7f0e', // orange
    '#2ca02c', // green
    '#d62728', // red
    '#9467bd', // purple
    '#8c564b', // brown
    '#e377c2', // pink
    '#7f7f7f'  // gray
];

/**
 * Get color for a series by index
 */
export function getSeriesColor(index: number, customColors?: string[]): string {
    const palette = customColors || DEFAULT_COLOR_PALETTE;
    return palette[index % palette.length];
}
