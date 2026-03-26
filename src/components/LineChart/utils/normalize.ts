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
        colourMap?: Record<string, string>;
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

    const defaultColours = [
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
            colour:
                options?.colourMap?.[valueKey] || defaultColours[index % defaultColours.length],
            strokeWidth: options?.strokeWidth || 2,
        })),
    }));
}

/**
 * Prepare long-format data for small multiples layout with multiple lines per chart
 * 
 * This is a convenience function that transforms your raw data into everything needed
 * for rendering small multiples with multiple lines in each chart (e.g., showing 
 * GDP Growth and Birth Rate for each country in separate charts).
 * 
 * It handles:
 * - Creating composite keys to combine groups with series values
 * - Pivoting data to wide format
 * - Organizing chart groups and series definitions
 * 
 * Perfect for situations where you have:
 * - One group dimension (e.g., "country")
 * - Multiple measurement series (e.g., "GDP growth", "Birth rate")
 * - A date/time axis
 * 
 * @param data - Your data in long format (one row per group, series, date combination)
 * @param options - Configuration object
 * @param options.xKey - Column name containing date values (e.g., 'date'). Matches the `xKey` prop on `<LineChart>`
 * @param options.groupKey - Column name to group by (e.g., 'country'). Creates one chart per unique value
 * @param options.seriesKey - Column name that identifies which series each row belongs to (e.g., 'metric')
 * @param options.valueKey - Column name containing the numeric values to plot (e.g., 'value')
 * @param options.seriesValues - Optional array of series values to use (e.g., ['GDP', 'Population']). If not provided, extracted from data
 * @param options.colours - Optional mapping of series names to colours (e.g., { 'GDP': '#1f77b4' })
 * @param options.formatGroupTitle - Optional function to format group titles. By default uses the group name as-is
 * @returns Object with `data` (pivoted to wide format) and `chartGroups` (small multiples configuration)
 * 
 * @example
 * ```ts
 * const data = [
 *   { date: '2024-01-01', country: 'USA',    metric: 'GDP',       value: 1000 },
 *   { date: '2024-01-01', country: 'USA',    metric: 'Birth Rate', value: 12 },
 *   { date: '2024-01-01', country: 'Canada', metric: 'GDP',       value: 200 },
 *   { date: '2024-01-01', country: 'Canada', metric: 'Birth Rate', value: 11 },
 * ];
 *
 * const { data: wideData, chartGroups } = prepareMultilineSmallMultiplesData({
 *   data,
 *   xKey: 'date',
 *   groupKey: 'country',
 *   seriesKey: 'metric',
 *   valueKey: 'value',
 *   colours: {
 *     'GDP': '#1f77b4',
 *     'Birth Rate': '#d62728'
 *   },
 *   formatGroupTitle: (country) => country.toUpperCase()
 * });
 *
 * // Use in component:
 * <LineChart
 *   data={wideData}
 *   chartGroups={chartGroups}
 *   layout="multiples"
 *   xKey="date"
 * />
 * ```
 */
export function prepareMultilineSmallMultiplesData(options: {
    data: Datum[];
    xKey: string;
    groupKey: string;
    seriesKey: string;
    valueKey: string;
    seriesValues?: string[];
    colours?: Record<string, string>;
    formatGroupTitle?: (groupName: string) => string;
}): {
    data: Datum[];
    chartGroups: ChartGrouping[];
} {
    const {
        data,
        xKey,
        groupKey,
        seriesKey,
        valueKey,
        seriesValues,
        colours,
        formatGroupTitle,
    } = options;

    // Step 1: Extract unique groups and series values in order of appearance
    const groupsSet = new Set<string>();
    const seriesSet = new Set<string>();

    for (const row of data) {
        groupsSet.add(String(row[groupKey]));
        seriesSet.add(String(row[seriesKey]));
    }

    const groups = Array.from(groupsSet);
    const series = seriesValues || Array.from(seriesSet);

    // Step 2: Add composite keys (e.g., "USA__GDP", "USA__Birth Rate")
    const dataWithCompositeKeys = data.map((row) => ({
        ...row,
        _compositeKey: `${row[groupKey]}__${row[seriesKey]}`,
    })) as Datum[];

    // Step 3: Pivot data to wide format using composite keys
    const grouped = groupBy(dataWithCompositeKeys, (row) => String(row[xKey]));
    const wideData = Object.values(grouped).map((group) => {
        const result: Record<string, unknown> = { [xKey]: group[0][xKey] };

        for (const row of group) {
            const compositeKey = `${row[groupKey]}__${row[seriesKey]}`;
            result[compositeKey] = row[valueKey];
        }

        return result as Datum;
    });

    // Step 4: Create chart groups configuration
    const defaultColours = [
        '#1f77b4',
        '#ff7f0e',
        '#2ca02c',
        '#d62728',
        '#9467bd',
        '#8c564b',
        '#e377c2',
        '#7f7f7f',
    ];

    const chartGroups = groups.map((group) => ({
        groupId: String(group),
        title: formatGroupTitle ? formatGroupTitle(String(group)) : String(group),
        series: series.map((seriesName, index) => ({
            key: `${group}__${seriesName}`,
            label: String(seriesName),
            colour: colours?.[String(seriesName)] || defaultColours[index % defaultColours.length],
        })),
    }));

    return {
        data: wideData,
        chartGroups,
    };
}


