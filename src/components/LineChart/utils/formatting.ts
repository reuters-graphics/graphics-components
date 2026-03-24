import { format as d3Format, timeFormat } from 'd3';
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

        // If mode is custom but no custom formatter, fall back to default
        if (config?.mode === 'custom') {
            return formatWithUnits(value, config.prefix, config.suffix);
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
 * Format a date for X-axis
 */
export function formatXAxisDate(date: Date, format: string = '%b %d'): string {
    try {
        return timeFormat(format)(date);
    } catch {
        return date.toLocaleDateString();
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
