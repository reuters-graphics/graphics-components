import type { ResponsiveRule, ResponsiveState } from '../types/index.js';

/**
 * Default responsive breakpoints
 */
export const DEFAULT_BREAKPOINTS: ResponsiveRule[] = [
    {
        breakpoint: 0,
        layout: 'single',
        columnsPerRow: 1,
        fontSize: 12,
        marginBottom: 40
    },
    {
        breakpoint: 600,
        layout: 'multiples',
        columnsPerRow: 1,
        fontSize: 12,
        marginBottom: 40
    },
    {
        breakpoint: 900,
        layout: 'multiples',
        columnsPerRow: 2,
        fontSize: 13,
        marginBottom: 48
    },
    {
        breakpoint: 1200,
        layout: 'multiples',
        columnsPerRow: 3,
        fontSize: 14,
        marginBottom: 56
    }
];

/**
 * Find the active responsive rule for a given width
 */
export function getResponsiveRule(width: number, rules: ResponsiveRule[]): ResponsiveRule {
    // Sort by breakpoint descending, find first match
    const sorted = [...rules].sort((a, b) => b.breakpoint - a.breakpoint);

    for (const rule of sorted) {
        if (width >= rule.breakpoint) {
            return rule;
        }
    }

    return rules[0];
}

/**
 * Compute responsive state
 */
export function computeResponsiveState(
    width: number,
    responsive: boolean,
    rules?: ResponsiveRule[]
): ResponsiveState {
    if (!responsive) {
        return {
            width,
            layout: 'single'
        };
    }

    const activeRules = rules || DEFAULT_BREAKPOINTS;
    const rule = getResponsiveRule(width, activeRules);

    return {
        width,
        layout: rule.layout || 'single',
        columnsPerRow: rule.columnsPerRow
    };
}

/**
 * Get CSS grid template columns for multiples layout
 */
export function getGridColumns(columnsPerRow?: number): string {
    if (!columnsPerRow || columnsPerRow === 1) {
        return '1fr';
    }

    return Array(columnsPerRow).fill('1fr').join(' ');
}

/**
 * Debounced resize observer
 */
export function createResizeObserver(
    callback: (width: number) => void,
    debounceMs: number = 150
): ResizeObserver {
    let timeoutId: NodeJS.Timeout | null = null;

    return new ResizeObserver((entries) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            const entry = entries[0];
            if (entry) {
                const width = entry.contentRect.width;
                callback(width);
            }
        }, debounceMs);
    });
}
