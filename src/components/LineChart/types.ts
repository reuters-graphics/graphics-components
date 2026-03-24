import type { Snippet } from 'svelte';

export type Datum = Record<string, unknown>;

export type AxisType = 'time' | 'linear';

export type Margin = {
    top: number;
    right: number;
    bottom: number;
    left?: number;
};

export type StrokeWidth = string | number;

export type XValue = Date | string | number;

export type YLabelContext = {
    isTopTick: boolean;
    isEndValue: boolean;
    seriesId?: string;
};

export type YValFormatter = (value: number, context: YLabelContext) => string;

export type XValParser = (value: XValue) => Date | number | null;

export type XValFormatter = (value: XValue) => string;

export type EndLabelStyles = {
    margin?: {
        top?: number;
        bottom?: number;
    };
    colour?: string;
};

export type LinePoint = {
    datum: Datum;
    x: number;
    y: number;
};

export type LineSeriesInput = {
    id?: string;
    label?: string;
    data?: Datum[];
    xValue?: (datum: Datum) => XValue;
    yValue?: (datum: Datum) => unknown;
    strokeColour?: string;
    strokeWidth?: StrokeWidth;
    endLabel?: string;
    endLabelStyles?: EndLabelStyles;
    showEndPoint?: boolean;
    showEndValue?: boolean;
    showEndLabel?: boolean;
    hidden?: boolean;
};

export type NormalisedSeries = {
    id: string;
    label?: string;
    points: LinePoint[];
    strokeColour: string;
    strokeWidth: StrokeWidth;
    endLabel?: string;
    endLabelStyles?: EndLabelStyles;
    showEndPoint: boolean;
    showEndValue: boolean;
    showEndLabel: boolean;
};

export type Annotation = {
    id?: string;
    type?: 'vertical-line';
    x: XValue;
    text?: string;
    strokeColour?: string;
    strokeWidth?: string | number;
    dashed?: boolean;
    labelAnchor?: 'start' | 'center' | 'end';
    labelOffset?: {
        x?: number;
        y?: number;
    };
    labelWidth?: number;
};

export type HighlightArea = {
    id?: string;
    xStart: XValue;
    xEnd: XValue;
    yStart?: number;
    yEnd?: number;
    fill?: string;
    opacity?: number;
};

export type LegendConfig =
    | boolean
    | {
        breakpoint: number;
        show: boolean;
    };

export type OverlayContext = {
    xDomain: [number, number];
    yDomain: [number, number];
    xToPercent: (value: XValue) => number;
    yToPercent: (value: number) => number;
};

export interface LineChartProps {
    data?: Datum[];
    series?: LineSeriesInput[];
    xType?: AxisType;
    xValue?: (datum: Datum) => XValue;
    yValue?: (datum: Datum) => unknown;
    xParser?: XValParser;
    xFormatter?: XValFormatter;
    yValFormatter?: YValFormatter;
    prefixUnit?: string;
    suffixUnit?: string;
    applyUnitsToAllYValues?: boolean;
    dropPrefixUnitOnZero?: boolean;
    decimalPlaces?: number;
    zeroBased?: boolean;
    margin?: Margin;
    chartHeight?: number;
    plotHeight?: number;
    xTickCount?: number;
    xTickValues?: XValue[];
    yTickCount?: number;
    yTickValues?: number[];
    xDomain?: [XValue, XValue];
    yDomain?: [number, number];
    annotations?: Annotation[];
    highlightAreas?: HighlightArea[];
    legend?: LegendConfig;
    showEndPoint?: boolean;
    showEndValue?: boolean;
    showEndLabel?: boolean;
    strokeColour?: string;
    strokeWidth?: StrokeWidth;
    endLabelStyles?: EndLabelStyles;
    overlaySnippet?: Snippet<[OverlayContext]>;
    children?: Snippet;
}

export type LineChartPanel = {
    id?: string;
    title?: string;
    subtitle?: string;
} & Omit<LineChartProps, 'children'>;

export interface SmallMultiplesLineChartProps {
    panels: LineChartPanel[];
    columns?: number;
    gap?: string;
    chartProps?: Omit<LineChartProps, 'children' | 'overlaySnippet'>;
    class?: string;
    id?: string;
}
