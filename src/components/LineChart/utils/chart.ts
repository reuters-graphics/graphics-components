import { scaleLinear, scaleTime, min, max } from 'd3';
import type { Datum, LineSeriesInput, ComputedScales, ScaleConfig } from '../types/index.js';

/**
 * Extract numeric values from data for a specific key
 */
export function extractValues(data: Datum[], key: string): number[] {
    return data
        .map((d) => {
            const val = d[key];
            return typeof val === 'number' ? val : null;
        })
        .filter((v) => v !== null) as number[];
}

/**
 * Extract date values from data for a specific key
 */
export function extractDates(data: Datum[], key: string): Date[] {
    return data
        .map((d) => {
            const val = d[key];
            if (val instanceof Date) return val;
            if (typeof val === 'string' || typeof val === 'number') {
                const parsed = new Date(val);
                return isNaN(parsed.getTime()) ? null : parsed;
            }
            return null;
        })
        .filter((v) => v !== null) as Date[];
}

/**
 * Build y-axis scale
 */
export function buildYScale(
    data: Datum[],
    seriesKeys: string[],
    height: number,
    config?: ScaleConfig
): {
    scale: (value: number) => number;
    domain: [number, number];
} {
    let yMin: number | undefined;
    let yMax: number | undefined;

    // Extract all values from all series
    const allValues: number[] = [];
    for (const key of seriesKeys) {
        allValues.push(...extractValues(data, key));
    }

    // Use config overrides or compute from data
    if (config?.yDomain) {
        [yMin, yMax] = config.yDomain;
    } else {
        yMin = min(allValues) as number;
        yMax = max(allValues) as number;
    }

    const domain: [number, number] = [yMin, yMax];

    const scale = scaleLinear()
        .domain(domain)
        .nice(5)
        .range([height - (config?.padding?.bottom ?? 0), config?.padding?.top ?? 0]);

    const niceDomain = scale.domain() as [number, number];

    return { scale, domain: niceDomain };
}

/**
 * Build x-axis scale (time-based)
 */
export function buildXScale(
    data: Datum[],
    xKey: string,
    width: number,
    config?: ScaleConfig
): {
    scale: (value: Date) => number;
    domain: [Date, Date];
} {
    let xMin: Date | undefined;
    let xMax: Date | undefined;

    // Use config overrides or compute from data
    if (config?.xDomain) {
        [xMin, xMax] = config.xDomain;
    } else {
        const dates = extractDates(data, xKey);
        xMin = min(dates) as Date;
        xMax = max(dates) as Date;
    }

    const domain: [Date, Date] = [xMin, xMax];

    const scale = scaleTime()
        .domain(domain)
        .range([config?.padding?.left ?? 0, width - (config?.padding?.right ?? 0)]);

    return { scale, domain };
}

/**
 * Build both scales
 */
export function buildScales(
    data: Datum[],
    series: LineSeriesInput[],
    xKey: string = 'date',
    dimensions: { width: number; height: number },
    config?: ScaleConfig
): ComputedScales {
    const seriesKeys = series.map((s) => s.key);

    const { scale: xScale, domain: xDomain } = buildXScale(data, xKey, dimensions.width, config);
    const { scale: yScale, domain: yDomain } = buildYScale(data, seriesKeys, dimensions.height, config);

    return {
        xScale,
        yScale,
        xDomain,
        yDomain
    };
}

/**
 * Generate Y-axis tick values
 */
export function generateYTicks(domain: [number, number], count: number = 5): number[] {
    return scaleLinear().domain(domain).nice(count).ticks(count);
}

/**
 * Generate X-axis tick values
 */
export function generateXTicks(domain: [Date, Date], count: number = 5): Date[] {
    return scaleTime().domain(domain).nice(count).ticks(count);
}
