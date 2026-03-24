import type { Snippet } from 'svelte';

/**
 * Base data point structure
 */
export interface Datum {
    [key: string]: string | number | Date;
}

/**
 * Context provided to y-value formatter
 */
export interface YAxisLabelContext {
    value: number;
    isTopTick: boolean;
    isBottomTick: boolean;
    isEndValue: boolean;
    tickIndex: number;
}

/**
 * Y-axis labeling configuration
 */
export type YAxisLabelMode = 'top-only' | 'all-ticks' | 'custom';

export interface YAxisConfig {
    mode?: YAxisLabelMode;
    prefix?: string;
    suffix?: string;
    yValueFormatter?: (value: number, context: YAxisLabelContext) => string;
}

/**
 * Single line/series configuration
 */
export interface LineSeriesInput {
    key: string;
    label?: string;
    color?: string;
    strokeWidth?: number;
    showPoints?: boolean;
    showEndLabel?: boolean;
}

/**
 * Chart grouping for small multiples layout
 */
export interface ChartGrouping {
    groupId: string;
    title?: string;
    series: LineSeriesInput[];
}

/**
 * Responsive breakpoint rules
 */
export interface ResponsiveRule {
    breakpoint: number; // width in pixels
    layout?: 'single' | 'multiples';
    columnsPerRow?: number;
    fontSize?: number;
    marginBottom?: number;
}

/**
 * Current responsive state
 */
export interface ResponsiveState {
    width: number;
    layout: 'single' | 'multiples';
    columnsPerRow?: number;
}

/**
 * Scale configuration
 */
export interface ScaleConfig {
    xDomain?: [Date, Date];
    yDomain?: [number, number];
    padding?: {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
}

/**
 * Main LineChart component props
 */
export interface LineChartProps {
    // Data
    data?: Datum[];
    series?: LineSeriesInput[];
    chartGroups?: ChartGrouping[];

    // Display
    layout?: 'single' | 'multiples';
    xKey?: string;
    yKey?: string;

    // Dimensions
    width?: number;
    height?: number;
    margin?: {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };

    // Formatting & Styling
    yAxisConfig?: YAxisConfig;
    yValueFormatter?: (value: number, context: YAxisLabelContext) => string;
    yAxisFormat?: string; // For d3 number formatting

    // Responsive
    responsive?: boolean;
    responsiveRules?: ResponsiveRule[];

    // Grid & Axes
    showGrid?: boolean;
    showYAxis?: boolean;
    showXAxis?: boolean;
    showLegend?: boolean;

    // Scales
    scaleConfig?: ScaleConfig;

    // Children & Snippets
    children?: Snippet;
    beforeSVG?: Snippet;
    svgOverlay?: Snippet;
    afterChart?: Snippet;
}

/**
 * Computed scales from d3
 */
export interface ComputedScales {
    xScale: (value: Date) => number;
    yScale: (value: number) => number;
    xDomain: [Date, Date];
    yDomain: [number, number];
}

/**
 * Chart context passed to children
 */
export interface ChartContext {
    scales: ComputedScales;
    viewBox: {
        width: number;
        height: number;
        x: number;
        y: number;
    };
    series: LineSeriesInput[];
    data: Datum[];
}
