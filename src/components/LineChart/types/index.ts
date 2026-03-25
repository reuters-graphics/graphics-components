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
export type YAxisLabelMode = 'top-only' | 'all-ticks';

export interface YAxisConfig {
    mode?: YAxisLabelMode;
    prefix?: string;
    suffix?: string;
    zeroBase?: boolean;
    yValueFormatter?: (value: number, context: YAxisLabelContext) => string;
    endValueDecimalPlaces?: number; // Decimal places for end value labels (default: 0 for whole numbers)
}

/**
 * Single line/series configuration
 */
export interface LineSeriesInput {
    key: string;
    label?: string;
    color?: string;
    strokeWidth?: number;
    showEndLabel?: boolean; // Default: true
    showEndPoint?: boolean; // Default: true
    endPointRadius?: number; // Radius of end point circle (default: 4)
    endPointFill?: string; // Fill color for end point (default: series color)
    endPointStroke?: string; // Stroke color for end point (default: white)
    endPointStrokeWidth?: number; // Stroke width for end point (default: 2)
    endLabelType?: 'label' | 'value'; // What to show in end label (default: 'label')
    endLabelPosition?: {
        xOffset?: number; // Horizontal offset from end point (default: 5)
        yOffset?: number; // Vertical offset from end point (default: 0)
        textAnchor?: 'start' | 'middle' | 'end'; // Default: 'start'
    };
    endLabelFormatter?: (value: number, context: YAxisLabelContext) => string; // Override formatting for this series' end label
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

export type SmallMultiplesDisplayMode = 'first' | 'all' | 'first-in-row';

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
    data: Datum[];
    series?: LineSeriesInput[];
    chartGroups?: ChartGrouping[];

    // Display
    layout?: 'single' | 'multiples';
    xKey: string;
    yKey?: string; // Single-line shorthand: uses yKey as series key if no series provided
    showEndPoint?: boolean; // Default end-point visibility for single-line mode
    endPointRadius?: number; // Default end-point radius for single-line mode (default: 4)

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
    xAxisDateFormat?: string;

    // Responsive
    responsive?: boolean;
    responsiveRules?: ResponsiveRule[];

    // Grid & Axes
    showGrid?: boolean; // Deprecated: use showGridX and showGridY instead
    showGridX?: boolean; // Show vertical grid lines (default: false)
    showGridY?: boolean; // Show horizontal grid lines (default: true)
    showYAxis?: boolean;
    showXAxis?: boolean;
    showLegend?: boolean;
    yTickCount?: number;
    xTickCount?: number;
    smallMultiplesEndLabelsMode?: SmallMultiplesDisplayMode; // Default: 'first'
    smallMultiplesXAxisMode?: SmallMultiplesDisplayMode; // Default: 'first'

    // Scales
    scaleConfig?: ScaleConfig;

    // Children & Snippets
    children?: Snippet;
    beforeSVG?: Snippet;
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
