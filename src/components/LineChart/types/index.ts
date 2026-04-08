import type { Snippet } from 'svelte';

/**
 * Base data point structure
 *
 * A flexible key-value pair object that can contain any combination of strings, numbers, and dates.
 *
 * @example
 * ```
 * { date: new Date('2024-01-01'), revenue: 1000, expenses: 600, region: 'US' }
 * ```
 */
export interface Datum {
    [key: string]: string | number | Date;
}

/**
 * Context provided to y-value formatter
 *
 * Helper information passed to the `yFormatter` function to assist in custom formatting.
 */
export interface YAxisLabelContext {
    /**
     * The numeric value being formatted.
     */
    value: number;
    /**
     * Whether this is the topmost y-axis tick.
     */
    isTopTick: boolean;
    /**
     * Whether this is the bottommost y-axis tick.
     */
    isBottomTick: boolean;
    /**
     * Whether this label is displayed at the end of a data line (not on the y-axis).
     */
    isEndValue: boolean;
    /**
     * Zero-based index of this tick from bottom to top.
     */
    tickIndex: number;
}

/**
 * Context provided to x-axis label formatter
 *
 * Helper information passed to the `xFormatter` function to assist in custom formatting.
 */
export interface XAxisLabelContext {
    /**
     * The date value being formatted.
     */
    value: Date;
    /**
     * Zero-based index of this tick from left to right.
     */
    tickIndex: number;
    /**
     * Total number of ticks on the x-axis.
     */
    totalTicks: number;
    /**
     * Whether this is the first (leftmost) tick.
     */
    isFirst: boolean;
    /**
     * Whether this is the last (rightmost) tick.
     */
    isLast: boolean;
}

/**
 * Y-axis labeling configuration
 *
    * Controls the appearance and behaviour of y-axis labels.
 */
export type YAxisLabelMode = 'top-only' | 'all-ticks';

/**
 * Y-axis configuration options
 */
export interface YAxisConfig {
    /**
     * Label display mode for the y-axis.
     *
     * - `'top-only'` _default_ Only format the topmost tick label. Other ticks display as plain numbers.
     * - `'all-ticks'` Format all tick labels using the same formatter.
     */
    mode?: YAxisLabelMode;
    /**
     * A prefix to add to all y-axis labels.
     *
     * @example
     * ```
     * prefix: '$'  // Results in: $100, $200, $300
     * ```
     */
    prefix?: string;
    /**
     * A suffix to add to all y-axis labels.
     *
     * @example
     * ```
     * suffix: 'M'  // Results in: 100M, 200M, 300M
     * ```
     */
    suffix?: string;
    /**
     * Whether the y-axis domain should start at zero.
     *
     * - `true` _default_ The y-axis will start at 0 if the data includes values both above and below
     * - `false` The y-axis domain is determined solely by the data range
     */
    zeroBase?: boolean;
    /**
     * Custom formatter function for y-axis tick labels.
     *
     * Receives the tick value and its zero-based index from bottom to top. Can return a string
     * for single-line labels or an array of strings for multi-line labels.
     *
     * @example
     * ```
     * yFormatter: (value) => `$${(value / 1000).toFixed(1)}K`
     * // Results in: $100K, $200K, $300K
     * ```
     *
     * @example Use index to add a unit only on the first (bottom) tick
     * ```
     * yFormatter: (value, index) => index === 0 ? `${value}%` : `${value}`
     * ```
     *
     * @example Multi-line labels (2 lines)
     * ```
     * yFormatter: (value) => {
     *   const formatted = value.toLocaleString();
     *   if (value > 10000) {
     *     const parts = formatted.split(',');
     *     return [parts[0] + ',', parts[1]];  // Split "15,000" into ["15,", "000"]
     *   }
     *   return formatted;
     * }
     * ```
     */
    yFormatter?: (value: number, index: number) => string | string[];
}

/**
 * X-axis configuration options
 */
export interface XAxisConfig {
    /**
     * D3 time format string for x-axis date labels.
     *
     * Used only if `xFormatter` is not provided.
     *
     * _default_ `'%b %-d, %Y'` (e.g., "Jan 1, 2024")
     *
     * @example
     * ```
     * xAxisDateFormat: '%b %d'      // "Jan 01"
     * xAxisDateFormat: '%Y-%m-%d'   // "2024-01-01"
     * ```
     *
     * See [d3-time-format docs](https://github.com/d3/d3-time-format) for full format specifiers.
     */
    xAxisDateFormat?: string;
    /**
     * Custom formatter function for x-axis date labels.
     *
     * Receives the date value and its zero-based index from left to right. Can return a string
     * for single-line labels or an array of strings for multi-line labels.
     *
     * Takes precedence over `xAxisDateFormat`.
     *
     * @example
     * ```
     * xFormatter: (date) => {
     *   const month = date.toLocaleDateString('en-US', { month: 'short' });
     *   return `${month} ${date.getDate()}`;
     * }
     * ```
     *
     * @example Show full year only on the first tick
     * ```
     * xFormatter: (date, index) => {
     *   const month = date.toLocaleDateString('en-US', { month: 'short' });
     *   return index === 0 ? `${month} ${date.getFullYear()}` : month;
     * }
     * ```
     *
     * @example Multi-line labels
     * ```
     * xFormatter: (date) => [
     *   date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' }),
     *   date.getFullYear().toString()
     * ]
     * ```
     */
    xFormatter?: (value: Date, index: number) => string | string[];
}

/**
 * Vertical line annotation
 *
 * Renders a vertical line at a specific date, useful for highlighting significant events or time periods.
 * Style using the `lineClass` and `labelClass` props with SCSS.
 */
export interface VerticalLineAnnotation {
    /**
     * The date where the vertical line should be positioned.
     *
     * **REQUIRED**
     */
    date: Date;
    /**
     * Unique identifier for this annotation.
     */
    id?: string;
    /**
     * Optional text label for the annotation.
     */
    label?: string;
    /**
     * Optional y-axis data value used to position the vertical line label.
     *
     * When provided, the label y-position is computed using the chart y-scale.
     */
    labelYValue?: number;
    /**
     * CSS class added to the rendered line element.
     */
    lineClass?: string;
    /**
     * CSS class added to the rendered label text element.
     */
    labelClass?: string;
}

/**
 * Area highlight annotation
 *
 * Renders a semi-transparent rectangle over a specified x-axis range.
 * Style using the `areaClass` prop with SCSS.
 */
export interface AreaHighlightAnnotation {
    /**
     * Unique identifier for this highlight.
     */
    id?: string;
    /**
     * Start date of the highlighted area.
     *
     * **REQUIRED**
     */
    dateStart: Date;
    /**
     * End date of the highlighted area.
     *
     * **REQUIRED**
     */
    dateEnd: Date;
    /**
     * Optional text label for the highlight.
     */
    label?: string;
    /**
     * Optional y-axis data value used to position the highlight label.
     *
     * When provided, the label y-position is computed using the chart y-scale.
     */
    labelYValue?: number;
    /**
     * CSS class added to the rendered highlight rectangle.
     */
    areaClass?: string;
    /**
     * CSS class added to the rendered highlight label text element.
     */
    labelClass?: string;
}

/**
 * Text annotation
 *
 * Renders text at a specific point in the chart with flexible positioning.
 * Style using the `annotationClass` prop with SCSS.
 */
export interface TextAnnotation {
    /**
     * Unique identifier for this annotation.
     */
    id?: string;
    /**
     * CSS class added to the rendered text element.
     */
    annotationClass?: string;
    /**
     * The date (x-axis position) where the text should be placed.
     *
     * **REQUIRED**
     */
    date: Date;
    /**
     * The y-value (y-axis position) where the text should be placed.
     *
     * **REQUIRED**
     */
    value: number;
    /**
     * The text content to display.
     *
     * **REQUIRED**
     */
    text: string;
}

/**
 * Single line/series configuration
 *
    * Defines the appearance and behaviour of a single data line in the chart.
 */
export interface LineSeriesInput {
    /**
     * The key in your data object that contains the y-values for this series.
     *
     * **REQUIRED**
     *
     * @example
     * ```
     * // Data: [{ date: Date, revenue: 100, expenses: 50 }, ...]
     * // Series: { key: 'revenue' }
     * ```
     */
    key: string;
    /**
     * Human-readable label for this series, shown in legends and tooltips.
     */
    label?: string;
    /**
     * Hex colour for the line and end point.
     *
     * @example
     * ```
        * lineColour: '#2ca02c'  // Green
     * ```
     */
    lineColour?: string;
    /**
     * Stroke width of the line in pixels.
     *
     * _default_ 2
     */
    strokeWidth?: number;
    /**
     * CSS class added to the main rendered line path.
     */
    lineClass?: string;
    /**
     * CSS class added to the rendered series group wrapper.
     *
     * Useful for targeting all series elements (line, end point, end label),
     * especially in small multiples.
     */
    seriesClass?: string;
    /**
     * Whether to display a label at the end of the line.
     *
     * _default_ true
     */
    showEndLabel?: boolean;
    /**
     * Whether to display a circle marker at the end of the line.
     *
     * _default_ true
     */
    showEndPoint?: boolean;
    /**
     * Radius of the end point circle in pixels.
     *
     * _default_ 4
     */
    endPointRadius?: number;
    /**
     * Fill colour for the end point circle.
     *
     * _default_ Uses the line colour
     */
    endPointFill?: string;
    /**
     * Stroke colour for the end point circle outline.
     *
     * _default_ white
     */
    endPointStroke?: string;
    /**
     * Stroke width of the end point circle outline in pixels.
     *
     * _default_ 2
     */
    endPointStrokeWidth?: number;
    /**
     * Controls what text appears in the end label.
     *
     * - `'label'` _default_ Shows the series label (from `label` prop)
     * - `'value'` Shows the numeric value at the end of the line
     * - `'both'` Shows label and value together
     */
    endLabelType?: 'label' | 'value' | 'both';
    /**
     * Custom position and styling for the end label.
     */
    endLabelPosition?: {
        /**
         * Horizontal offset from the end point in pixels.
         *
         * _default_ 5
         */
        xOffset?: number;
        /**
         * Vertical offset from the end point in pixels.
         *
         * _default_ 0
         */
        yOffset?: number;
        /**
         * SVG text-anchor property controlling horizontal alignment.
         *
         * - `'start'` _default_ Label starts at the end point
         * - `'middle'` Label is centred on the end point
         * - `'end'` Label ends at the end point
         */
        textAnchor?: 'start' | 'middle' | 'end';
    };
    /**
     * Custom formatter function for the end-value label (different from the series label).
     *
     * @example
     * ```
     * endLabelFormatter: (value) => `$${value.toLocaleString()}`
     * ```
     */
    endLabelFormatter?: (value: number, context: YAxisLabelContext) => string;
}

/**
 * Chart grouping for small multiples layout
 *
 * Groups multiple series together to create a small multiples visualisation where each group appears in its own panel.
 */
export interface ChartGrouping {
    /**
     * Unique identifier for this group.
     *
     * **REQUIRED**
     */
    groupId: string;
    /**
     * Title to display above the group's chart panel.
     */
    title?: string;
    /**
     * Array of series to display in this group's panel.
     *
     * **REQUIRED**
     */
    series: LineSeriesInput[];
}

/**
 * Responsive breakpoint rules
 *
 * Define how the chart should adapt at different screen widths.
 */
export interface ResponsiveRule {
    /**
     * Screen width in pixels at which this rule applies.
     *
     * **REQUIRED**
     *
     * @example
     * ```
     * breakpoint: 768  // Applies when screen width is 768px or smaller
     * ```
     */
    breakpoint: number;
    /**
     * The layout to use at this breakpoint.
     *
     * - `'single'` Display a single full-width chart
     * - `'multiples'` Display charts in a grid of small multiples
     */
    layout?: 'single' | 'multiples';
    /**
     * Number of chart columns to display when using `layout: 'multiples'`.
     *
     * @example
     * ```
     * columnsPerRow: 1  // Single column on mobile
     * ```
     */
    columnsPerRow?: number;
    /**
     * Font size in pixels for labels and text at this breakpoint.
     */
    fontSize?: number;
    /**
     * Bottom margin in pixels at this breakpoint.
     */
    marginBottom?: number;
}

/**
 * Current responsive state
 *
 * Internal state tracking the current breakpoint and layout configuration.
 */
export interface ResponsiveState {
    /**
     * Current viewport width in pixels.
     */
    width: number;
    /**
     * Current active layout ('single' or 'multiples').
     */
    layout: 'single' | 'multiples';
    /**
     * Current number of columns per row (when in 'multiples' layout).
     */
    columnsPerRow?: number;
}

export type SmallMultiplesDisplayMode = 'first' | 'all' | 'first-in-row';

/**
 * Scale configuration
 *
 * Controls the domain and padding of the x and y scales.
 */
export interface ScaleConfig {
    /**
     * Custom domain for the x-axis (date range).
     *
     * Overrides automatic domain calculation from data.
     *
     * @example
     * ```
     * xDomain: [new Date('2024-01-01'), new Date('2024-12-31')]
     * ```
     */
    xDomain?: [Date, Date];
    /**
     * Custom domain for the y-axis (value range).
     *
     * Overrides automatic domain calculation from data.
     *
     * @example
     * ```
     * yDomain: [0, 1000]  // Force y-axis to show 0-1000
     * ```
     */
    yDomain?: [number, number];
    /**
     * Padding around the data within the chart area in pixels.
     *
     * Controls the internal margins of the plotting area.
     */
    padding?: {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
}

/**
 * Main LineChart component props
 *
 * A flexible component for displaying time-series data with support for single or small multiples layouts.
 *
 * @example Basic usage with a single line
 * ```svelte
 * <LineChart
 *   data={[
 *     { date: new Date('2024-01-01'), value: 100 },
 *     { date: new Date('2024-01-02'), value: 150 },
 *   ]}
 *   xKey="date"
 *   yKey="value"
 *   width={800}
 *   height={400}
 * />
 * ```
 *
 * @example Multi-series with custom formatting
 * ```svelte
 * <LineChart
 *   data={chartData}
 *   series={[
 *     { key: 'revenue', label: 'Revenue', lineColour: '#2ca02c' },
 *     { key: 'expenses', label: 'Expenses', lineColour: '#d62728' },
 *   ]}
 *   xKey="date"
 *   yAxisConfig={{
 *     prefix: '$',
 *     yFormatter: (v) => `${(v / 1000).toFixed(0)}K`
 *   }}
 * />
 * ```
 *
 * @example Small multiples layout
 * ```svelte
 * <LineChart
 *   data={data}
 *   chartGroups={[
 *     { groupId: 'group1', title: 'Region A', series: [...] },
 *     { groupId: 'group2', title: 'Region B', series: [...] },
 *   ]}
 *   layout="multiples"
 * />
 * ```
 */
export interface LineChartProps {
    // ========== CORE DATA & SERIES ==========
    /**
     * Array of data objects to visualise.
     *
     * **REQUIRED**
     *
     * Each object should contain information (at the key specified by `xKey`) and numeric values (specified by series or `yKey`).
     *
     * @example
     * ```
     * data: [
     *   { date: '2024-01-01', revenue: 1000, expenses: 600 },
     *   { date: '2024-01-02', revenue: 1200, expenses: 650 },
     * ]
     * ```
     */
    data: Datum[];
    /** Class name for the chart container */
    class?: string;
    /**
   * Chart layout mode.
   *
   * - `'single'` _default_ Display a single chart
   * - `'multiples'` Display as small multiples (one chart per group or series)
   */
    layout?: 'single' | 'multiples';
    /**
     * The key in your data objects that contains the x-axis values (typically dates/times).
     *
     * **REQUIRED**
     *
     * @example
     * ```
     * xKey: "date"  // Data: [{ date: Date, ... }, ...]
     * ```
     */
    xKey: string;
    /**
     * For simple single-line charts, the key in your data objects containing the y-axis values.
     *
     * Shorthand alternative to defining a full `series` array. Mutually exclusive with `series` and `chartGroups`.
     *
     * @example
     * ```
     * yKey: "revenue"  // Simple one-line chart
     * ```
     */
    yKey?: string;
    /**
     * Array of series configurations for multi-line charts.
     *
     * Define each line's appearance and behaviour. Mutually exclusive with `yKey` and `chartGroups`.
     *
     * @example
     * ```
     * series: [
    *   { key: 'revenue', label: 'Revenue', lineColour: '#2ca02c' },
    *   { key: 'expenses', label: 'Expenses', lineColour: '#d62728' },
     * ]
     * ```
     */
    series?: LineSeriesInput[];
    /**
     * Array of chart groups for small multiples layout.
     *
     * Each group contains its own series and is displayed in a separate panel. Mutually exclusive with `series` and `yKey`.
     */
    chartGroups?: ChartGrouping[];


    // ========== FORMATTING ==========
    /**
     * Y-axis configuration including formatter, prefix/suffix, and labelling mode.
     *
     * @example
     * ```
     * yAxisConfig: {
     *   mode: 'top-only',
     *   prefix: '$',
     *   yFormatter: (v) => `${(v / 1000).toFixed(1)}K`
     * }
     * ```
     */
    yAxisConfig?: YAxisConfig;
    /**
     * X-axis configuration including date format and custom formatter.
     *
     * @example
     * ```
     * xAxisConfig: {
     *   xAxisDateFormat: "%b '%y",
     * }
     * ```
     */
    xAxisConfig?: XAxisConfig;

    // ========== AXES, GRID & LEGEND ==========
    /**
     * Show the x-axis line and tick labels.
     *
     * _default_ true
     */
    showXAxis?: boolean;
    /**
     * Show the y-axis line and tick labels.
     *
     * _default_ true
     */
    showYAxis?: boolean;
    /**
     * Show vertical grid lines (one per x-axis tick).
     *
     * _default_ false
     */
    showGridX?: boolean;
    /**
     * Show horizontal grid lines (one per y-axis tick).
     *
     * _default_ true
     */
    showGridY?: boolean;
    /**
     * Number of ticks (labelled dates) on the x-axis.
     *
     * _default_ 5 (if not specified)
     *
     * Valid range: 2-20
     *
     * @example
     * ```
     * xTickCount: 10  // Show up to 10 x-axis tick labels
     * ```
     */
    xTickCount?: number;
    /**
     * Number of ticks (labelled gridlines) on the y-axis.
     *
     * If not specified, automatically calculated based on chart height (typically 2-7 ticks).
     *
     * Valid range: 2-20
     *
     * @example
     * ```
     * yTickCount: 5  // Show exactly 5 y-axis ticks
     * ```
     */
    yTickCount?: number;
    /**
     * Show a legend displaying all series.
     *
     * _default_ false
     */
    showLegend?: boolean;

    // ========== SMALL MULTIPLES DISPLAY ==========
    /**
     * Which small multiples should display end labels (values at the end of each line).
     *
     * - `'first'` _default_ Only the first chart displays end labels
     * - `'all'` All charts display end labels
     * - `'first-in-row'` Only the first chart in each row displays end labels
     *
     * Available only when `layout: 'multiples'`.
     */
    smallMultiplesEndLabelsMode?: SmallMultiplesDisplayMode;
    /**
     * Which small multiples should display x-axis labels.
     *
     * - `'first'` _default_ Only the first chart displays x-axis labels
     * - `'all'` All charts display x-axis labels
     * - `'first-in-row'` Only the first chart in each row displays x-axis labels
     *
     * Available only when `layout: 'multiples'`.
     */
    smallMultiplesXAxisMode?: SmallMultiplesDisplayMode;

    // ========== LINE END MARKERS ==========
    /**
     * Whether to show a circle marker at the end of each line.
     *
     * _default_ true
     *
     * Applies to all series unless overridden in individual series config.
     */
    showEndPoint?: boolean;
    /**
     * Whether to show an end label at the end of each line.
     *
     * _default_ true
     *
     * Applies to all series unless overridden in individual series config.
     */
    showEndLabel?: boolean;
    /**
     * Default stroke width for line paths in pixels.
     *
     * Applies to all series unless overridden in individual series config.
     */
    strokeWidth?: number;
    /**
     * Default CSS class for line paths.
     *
     * Applies to all series unless overridden in individual series config.
     */
    lineClass?: string;
    /**
     * Default line colour.
     *
     * Applies to all series unless overridden in individual series config.
     */
    lineColour?: string;
    /**
     * Radius of the end point circle marker in pixels.
     *
     * _default_ 4
     *
     * Applies to all series unless overridden in individual series config.
     */
    endPointRadius?: number;
    /**
     * Fill colour for the end point circle.
     *
     * _default_ Uses the line colour
     *
     * Applies to all series unless overridden in individual series config.
     */
    endPointFill?: string;
    /**
     * Stroke colour for the end point circle outline.
     *
     * _default_ white
     *
     * Applies to all series unless overridden in individual series config.
     */
    endPointStroke?: string;
    /**
     * Stroke width of the end point circle outline in pixels.
     *
     * _default_ 2
     *
     * Applies to all series unless overridden in individual series config.
     */
    endPointStrokeWidth?: number;
    /**
     * Controls what text appears in end labels.
     *
     * - `'label'` Shows the series label
     * - `'value'` _default_ Shows the numeric value at the end of the line
     * - `'both'` Shows label and value together
     *
     * Applies to all series unless overridden in individual series config.
     */
    endLabelType?: 'label' | 'value' | 'both';
    /**
     * Custom position settings for end labels.
     *
     * Applies to all series unless overridden in individual series config.
     */
    endLabelPosition?: {
        /**
         * Horizontal offset from the end point in pixels.
         */
        xOffset?: number;
        /**
         * Vertical offset from the end point in pixels.
         */
        yOffset?: number;
        /**
         * SVG text-anchor property controlling horizontal alignment.
         */
        textAnchor?: 'start' | 'middle' | 'end';
    };
    /**
     * Custom formatter function for end-value labels.
     *
     * Applies to all series unless overridden in individual series config.
     */
    endLabelFormatter?: (value: number, context: YAxisLabelContext) => string;
    /**
     * Number of decimal places to show in end-value labels.
     *
     * _default_ 0 (whole numbers only)
     *
     * Applies to all series.
     *
     * @example
     * ```
     * endValueDecimalPlaces: 2  // Shows 1234.56 instead of 1235
     * ```
     */
    endValueDecimalPlaces?: number;

    // ========== ANNOTATIONS & HIGHLIGHTS ==========
    /**
     * Array of vertical line annotations.
     *
     * Renders vertical lines at specified dates, useful for highlighting events or time markers.
     *
     * @example
     * ```
     * verticalLines: [
     *   { date: new Date('2024-01-15'), label: 'Launch', stroke: '#e74c3c' },
     *   { date: new Date('2024-02-01'), label: 'Update', strokeDasharray: '5,5' },
     * ]
     * ```
     */
    verticalLines?: VerticalLineAnnotation[];
    /**
     * Array of area highlight annotations.
     *
     * Renders semi-transparent rectangles over specified x-axis ranges, useful for highlighting time periods.
     *
     * @example
     * ```
     * areaHighlights: [
     *   { dateStart: new Date('2024-01-01'), dateEnd: new Date('2024-03-31'), label: 'Q1' },
     *   { dateStart: new Date('2024-04-01'), dateEnd: new Date('2024-06-30'), fill: '#f39c12', opacity: 0.2 },
     * ]
     * ```
     */
    areaHighlights?: AreaHighlightAnnotation[];
    /**
     * Array of text annotations.
     *
     * Renders text labels at specific points in the chart with flexible positioning.
     *
     * @example
     * ```
     * annotations: [
     *   { date: new Date('2024-01-15'), value: 500, text: 'Peak' },
     *   { date: new Date('2024-02-01'), value: 200, text: 'Dip' },
     * ]
     * ```
     */
    annotations?: TextAnnotation[];

    // ========== DIMENSIONS & SCALE ==========
    /**
     * Width of the chart in pixels.
     *
     * By default, the chart fills the parent container width.
     */
    width?: number;
    /**
     * Height of the chart in pixels.
     *
     * _default_ 400
     */
    height?: number;
    /**
     * Number of columns to use for small multiples when `layout: 'multiples'`.
     *
     * _default_ 2
     */
    numColumns?: number;
    /**
     * Breakpoint in pixels below which the small-multiples grid stacks to one column.
     *
     * _default_ 768
     */
    breakpoint?: number;
    /**
     * Chart margins in pixels.
     *
     * _defaults_ `{ top: 20, right: 20, bottom: 20, left: 15 }`
     *
     * Controls spacing around the plotting area for axes and labels.
     */
    margin?: {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };

    /**
     * Custom scale configuration for x and y axes.
     *
     * Define custom domains and padding to override automatic calculations.
     *
     * @example
     * ```
     * scaleConfig: {
     *   yDomain: [0, 1000],
     *   padding: { top: 10, bottom: 10 }
     * }
     * ```
     */
    scaleConfig?: ScaleConfig;

    // ========== RESPONSIVENESS ==========
    /**
     * Enable responsive behaviour based on viewport width.
     *
     * - `true` Monitor viewport and apply responsive rules
     * - `false` _default_ Use fixed dimensions
     *
     * Requires `responsiveRules` to be defined.
     */
    responsive?: boolean;
    /**
     * Array of breakpoint rules for responsive behaviour.
     *
     * Rules are applied in order, with the first matching breakpoint taking effect.
     *
     * @example
     * ```
     * responsiveRules: [
     *   { breakpoint: 480, layout: 'multiples', columnsPerRow: 1 },
     *   { breakpoint: 768, layout: 'multiples', columnsPerRow: 2 },
     *   { breakpoint: 1024, layout: 'single' },
     * ]
     * ```
     */
    responsiveRules?: ResponsiveRule[];

    // ========== SNIPPETS & CHILDREN ==========
    /**
     * Snippet rendered before the chart SVG.
     *
     * Useful for titles, descriptions, or other content above the chart.
     */
    beforeSVG?: Snippet;
    /**
     * Snippet for overlay content rendered inside the chart SVG on top of the lines.
     *
     * Can be used to add custom annotations, tooltips, or interactive elements.
     *
     * @example
     * ```svelte
     * <LineChart ... >
     *   {@const { x, y } = overlayContext}
     *   <circle cx={x(new Date())} cy={y(500)} r={4} fill="red" />
     * </LineChart>
     * ```
     */
    children?: Snippet;
    /**
     * Snippet rendered after the chart.
     *
     * Useful for legends, captions, or notes below the chart.
     */
    afterChart?: Snippet;
}

/**
 * Computed scales from d3
 *
 * Internal scales used to map data values to pixel coordinates on the chart.
 */
export interface ComputedScales {
    /**
     * Function to convert a Date to an x-axis pixel coordinate.
     */
    xScale: (value: Date) => number;
    /**
     * Function to convert a numeric value to a y-axis pixel coordinate.
     */
    yScale: (value: number) => number;
    /**
     * The domain (date range) of the x-axis.
     */
    xDomain: [Date, Date];
    /**
     * The domain (value range) of the y-axis.
     */
    yDomain: [number, number];
}

/**
 * Chart context passed to children
 *
 * Contains scales and metadata for rendering overlay content within the chart.
 */
export interface ChartContext {
    /**
     * The computed scales for the chart.
     */
    scales: ComputedScales;
    /**
     * The SVG viewBox dimensions.
     */
    viewBox: {
        width: number;
        height: number;
        x: number;
        y: number;
    };
    /**
     * The active series being displayed.
     */
    series: LineSeriesInput[];
    /**
     * The chart data.
     */
    data: Datum[];
}
