import { min, max } from 'd3-array';
import { scaleLinear, scaleTime } from 'd3-scale';
import type {
    Datum,
    LineSeriesInput,
    ComputedScales,
    ScaleConfig,
    YAxisConfig,
} from '../types/index.js';

/**
 * Detect if a value is likely a date string or should be treated as a date
 */
function isLikelyDate(value: unknown): boolean {
    if (value instanceof Date) return true;
    if (typeof value === 'string') {
        // Try to parse as ISO date or common formats
        const date = new Date(value);
        if (!isNaN(date.getTime())) {
            // Additional check: string should contain typical date patterns
            return /\d{4}[-\/]\d{1,2}[-\/]\d{1,2}|^\d{1,2}[-\/]\d{1,2}[-\/]\d{4}|\d+\s(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i.test(value);
        }
    }
    return false;
}

/**
 * Auto-detect if x-axis values are dates and normalize data accordingly
 * Returns data with x values converted to Date objects if dates are detected
 */
export function normalizeXAxisData(data: Datum[], xKey: string): Datum[] {
    if (data.length === 0) return data;

    // Find first non-null x value to test
    const firstXValue = data.find((d) => d[xKey] != null)?.[xKey];
    if (firstXValue === undefined || firstXValue === null) return data;

    const isDateColumn = isLikelyDate(firstXValue);

    if (!isDateColumn) return data;

    // Convert all x values to Date objects
    return data.map((item) => ({
        ...item,
        [xKey]: (() => {
            const val = item[xKey];
            if (val instanceof Date) return val;
            if (typeof val === 'string' || typeof val === 'number') {
                const parsed = new Date(val);
                return isNaN(parsed.getTime()) ? val : parsed;
            }
            return val;
        })(),
    }));
}

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
    config?: ScaleConfig,
    yAxisConfig?: YAxisConfig
): {
    scale: (value: number) => number;
    domain: [number, number];
} {
    let yMin: number;
    let yMax: number;

    // Extract all values from all series
    const allValues: number[] = [];
    for (const key of seriesKeys) {
        allValues.push(...extractValues(data, key));
    }

    // Use config overrides or compute from data
    if (config?.yDomain) {
        [yMin, yMax] = config.yDomain;
    } else {
        const computedMin = min(allValues);
        const computedMax = max(allValues);

        if (computedMin === undefined || computedMax === undefined) {
            yMin = 0;
            yMax = 1;
        } else {
            yMin = computedMin;
            yMax = computedMax;
        }

        const zeroBase = yAxisConfig?.zeroBase ?? true;

        if (zeroBase) {
            if (yMin > 0) yMin = 0;
            if (yMax < 0) yMax = 0;
        }

        // Avoid a flat domain so scale/ticks remain meaningful.
        if (yMin === yMax) {
            const padding = yMin === 0 ? 1 : Math.abs(yMin) * 0.1;
            yMin -= padding;
            yMax += padding;
        }
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
    config?: ScaleConfig,
    yAxisConfig?: YAxisConfig
): ComputedScales {
    const seriesKeys = series.map((s) => s.key);

    const { scale: xScale, domain: xDomain } = buildXScale(data, xKey, dimensions.width, config);
    const { scale: yScale, domain: yDomain } = buildYScale(
        data,
        seriesKeys,
        dimensions.height,
        config,
        yAxisConfig
    );

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
    const safeCount = Math.max(2, count);
    const [minDomain, maxDomain] = domain;

    if (!Number.isFinite(minDomain) || !Number.isFinite(maxDomain)) {
        return [];
    }

    if (minDomain === maxDomain) {
        return [minDomain];
    }

    const ticks = scaleLinear().domain(domain).nice(safeCount).ticks(safeCount);
    return ticks.length > 0 ? ticks : [minDomain, maxDomain];
}

/**
 * Generate X-axis tick values
 */
export function generateXTicks(domain: [Date, Date], count: number = 5): Date[] {
    const safeCount = Math.max(2, count);
    const [minDomain, maxDomain] = domain;

    if (!(minDomain instanceof Date) || !(maxDomain instanceof Date)) {
        return [];
    }

    if (isNaN(minDomain.getTime()) || isNaN(maxDomain.getTime())) {
        return [];
    }

    if (minDomain.getTime() === maxDomain.getTime()) {
        return [minDomain];
    }

    const ticks = scaleTime().domain(domain).ticks(safeCount);
    return ticks.length > 0 ? ticks : [minDomain, maxDomain];
}
