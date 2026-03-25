import { format as d3Format } from 'd3-format';
import { timeFormat } from 'd3-time-format';
import { prettifyDate } from '../../../utils/index';
import type { YAxisConfig, YAxisLabelContext } from '../types/index.js';

function formatCleanNumber(value: number): string {
    return new Intl.NumberFormat(undefined, {
        maximumFractionDigits: 2
    }).format(value);
}

/**
 * Format a number with prefix and suffix
 */
export function formatWithUnits(value: number, prefix?: string, suffix?: string): string {
    let formatted = formatCleanNumber(value);

    // No units for 0
    if (value === 0) {
        return '0'
    }

    if (prefix) {
        formatted = prefix + formatted;
    }

    if (suffix) {
        formatted = formatted + suffix;
    }

    return formatted;
}

/**
 * Create a y-axis label formatter function
 */
export function createYLabelFormatter(
    config?: YAxisConfig,
    yAxisFormat?: string
): (value: number, context: YAxisLabelContext) => string {
    return (value: number, context: YAxisLabelContext) => {
        // If custom formatter provided, use it
        if (config?.yValueFormatter) {
            return config.yValueFormatter(value, context);
        }

        // For 'top-only' mode, only apply formatting to top tick
        if (config?.mode === 'top-only' && !context.isTopTick) {
            return formatCleanNumber(value);
        }

        // For 'all-ticks' or default, apply formatting to all
        let formatted = formatCleanNumber(value);

        if (yAxisFormat) {
            try {
                formatted = d3Format(yAxisFormat)(value);
            } catch {
                // Fall back if format string is invalid
                formatted = formatCleanNumber(value);
            }
        }

        if (config?.prefix || config?.suffix) {
            formatted = formatWithUnits(value, config?.prefix, config?.suffix);
        }

        return formatted;
    };
}

/**
 * Format end value with rounding and units
 */
export function formatEndValue(
    value: number,
    decimalPlaces: number = 0,
    prefix?: string,
    suffix?: string
): string {
    const multiplier = Math.pow(10, decimalPlaces);
    const rounded = Math.round(value * multiplier) / multiplier;

    let formatted = new Intl.NumberFormat(undefined, {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
    }).format(rounded);

    if (prefix) {
        formatted = prefix + formatted;
    }

    if (suffix) {
        formatted = formatted + suffix;
    }

    return formatted;
}

/**
 * Format a date for X-axis
 */
export function formatXAxisDate(date: Date, format: string = '%b %d'): string {
    try {
        return prettifyDate(timeFormat(format)(date));
    } catch {
        return prettifyDate(date.toLocaleDateString());
    }
}

/**
 * Format numbers with locale-aware formatting
 */
export function formatNumber(
    value: number,
    options?: {
        prefix?: string;
        suffix?: string;
        decimals?: number;
        locale?: string;
    }
): string {
    let formatted: string;

    if (options?.decimals !== undefined) {
        formatted = value.toFixed(options.decimals);
    } else {
        formatted = value.toString();
    }

    if (options?.prefix) {
        formatted = options.prefix + formatted;
    }

    if (options?.suffix) {
        formatted = formatted + options.suffix;
    }

    return formatted;
}
