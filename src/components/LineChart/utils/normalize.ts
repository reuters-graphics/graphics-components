/**
 * Data normalization utilities for LineChart
 * 
 * LineChart expects data in WIDE FORMAT for multi-line charts:
 * - One row per x-axis value (date), with columns for each series
 * - Example: { date: '2024-01-01', AAPL: 150, MSFT: 380, GOOGL: 400 }
 * 
 * These utilities help transform raw data into the proper format
 * and generate series definitions from data structure.
 */

import { groupBy } from 'lodash-es';
import type { Datum, ChartGrouping } from '../types/index.js';

/**
 * Convert tall/long format data to wide format for multi-line rendering
 * 
 * Use this when you have one row per (date, category) and want to transform
 * it into one row per date with columns for each category.
 * 
 * @param data - Array of data objects in tall format
 * @param xKey - The key for x-axis values (typically 'date')
 * @param categoryKey - The key that identifies which column to create (e.g., 'company')
 * @param valueKey - The key for numeric values to put in those columns
 * @returns Pivoted data with one row per xKey value and columns per category
 * 
 * @example
 * ```ts
 * const tallData = [
 *   { date: '2024-01-01', company: 'AAPL', endDayVal: 150 },
 *   { date: '2024-01-01', company: 'MSFT', endDayVal: 380 },
 *   { date: '2024-02-01', company: 'AAPL', endDayVal: 158 },
 *   { date: '2024-02-01', company: 'MSFT', endDayVal: 390 },
 * ];
 * 
 * const wideData = pivotToWideData(tallData, 'date', 'company', 'endDayVal');
 * // Returns:
 * // [
 * //   { date: '2024-01-01', AAPL: 150, MSFT: 380 },
 * //   { date: '2024-02-01', AAPL: 158, MSFT: 390 }
 * // ]
 * ```
 */
export function pivotToWideData(
    data: Datum[],
    xKey: string,
    categoryKey: string,
    valueKey: string
): Datum[] {
    // Group by xKey value
    const grouped = groupBy(data, (row) => String(row[xKey]));

    // Transform each group into a single row with category columns
    return Object.values(grouped).map((group) => {
        const result: Record<string, unknown> = { [xKey]: group[0][xKey] };

        for (const row of group) {
            const category = String(row[categoryKey]);
            const value = row[valueKey];
            result[category] = value;
        }

        return result as Datum;
    });
}



/**
 * Transform long-format data for small multiples layout by creating chart groups
 * 
 * Use this when you have long-format data and want to render a separate chart
 * for each category (e.g., one chart per company).
 * 
 * @param data - Array of data objects in long format
 * @param xKey - The key for x-axis values (typically 'date')
 * @param categoryKey - The key that identifies groups (e.g., 'company')
 * @param valueKey - The key for numeric values
 * @param options - Optional styling, grouping, and layout options
 * @returns Array of ChartGrouping objects ready for small multiples layout
 * 
 * @example
 * ```ts
 * const data = [
 *   { date: '2024-01-01', company: 'AAPL', US: 150, EU: 140 },
 *   { date: '2024-01-01', company: 'MSFT', US: 380, EU: 370 },
 *   { date: '2024-02-01', company: 'AAPL', US: 158, EU: 145 },
 *   { date: '2024-02-01', company: 'MSFT', US: 390, EU: 380 },
 * ];
 * 
 * // Each category gets its own chart
 * const groups = groupForSmallMultiples(data, 'date', 'company', ['US', 'EU']);
 * // Returns:
 * // [
 * //   {
 * //     groupId: 'AAPL',
 * //     title: 'AAPL - US vs EU',
 * //     series: [
 * //       { key: 'US', label: 'US' },
 * //       { key: 'EU', label: 'EU' }
 * //     ]
 * //   },
 * //   {
 * //     groupId: 'MSFT',
 * //     title: 'MSFT - US vs EU',
 * //     series: [
 * //       { key: 'US', label: 'US' },
 * //       { key: 'EU', label: 'EU' }
 * //     ]
 * //   }
 * // ]
 * ```
 */
export function groupForSmallMultiples(
    data: Datum[],
    xKey: string,
    categoryKey: string,
    valueKeys: string[],
    options?: {
        colorMap?: Record<string, string>;
        strokeWidth?: number;
        titleFormat?: (category: string) => string;
    }
): ChartGrouping[] {
    const categories = new Set<string>();

    for (const row of data) {
        const category = row[categoryKey];
        if (category !== null && category !== undefined) {
            categories.add(String(category));
        }
    }

    const defaultColors = [
        '#1f77b4',
        '#ff7f0e',
        '#2ca02c',
        '#d62728',
        '#9467bd',
        '#8c564b',
        '#e377c2',
        '#7f7f7f',
    ];

    return Array.from(categories).map((category) => ({
        groupId: category,
        title: options?.titleFormat ? options.titleFormat(category) : category,
        series: valueKeys.map((valueKey, index) => ({
            key: valueKey,
            label: valueKey,
            color:
                options?.colorMap?.[valueKey] || defaultColors[index % defaultColors.length],
            strokeWidth: options?.strokeWidth || 2,
        })),
    }));
}


