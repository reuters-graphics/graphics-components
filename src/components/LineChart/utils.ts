import { prettifyDate } from '../../utils';
import type {
    AxisType,
    Datum,
    EndLabelStyles,
    HighlightArea,
    LinePoint,
    LineSeriesInput,
    NormalisedSeries,
    StrokeWidth,
    XValFormatter,
    XValParser,
    XValue,
    YLabelContext,
    YValFormatter,
} from './types';

const DEFAULT_SERIES_COLOURS = [
    '#455064',
    '#6c8db6',
    '#b6bdc4',
    '#1f4f9b',
    '#b5b39b',
    '#a5bed7',
    '#d36f66',
];

export const DEFAULT_MARGIN = {
    top: 8,
    right: 48,
    bottom: 40,
    left: 10,
};

const toFiniteNumber = (value: unknown): number | null => {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
};

const defaultTimeParser: XValParser = (value) => {
    if (value instanceof Date) {
        return Number.isNaN(value.getTime()) ? null : value;
    }

    if (typeof value === 'number') {
        return Number.isFinite(value) ? value : null;
    }

    const parsedDate = new Date(String(value));
    return Number.isNaN(parsedDate.getTime()) ? null : parsedDate;
};

export const parseXValue = (
    value: XValue,
    xType: AxisType,
    xParser?: XValParser
): number | null => {
    const parser = xParser ?? defaultTimeParser;

    if (xType === 'linear') {
        return toFiniteNumber(value);
    }

    const parsed = parser(value);

    if (parsed instanceof Date) {
        return Number.isNaN(parsed.getTime()) ? null : parsed.getTime();
    }

    return toFiniteNumber(parsed);
};

const resolvePoints = (
    rows: Datum[],
    resolveX: (datum: Datum) => XValue,
    resolveY: (datum: Datum) => unknown,
    xType: AxisType,
    xParser?: XValParser
): LinePoint[] => {
    return rows
        .map((datum) => {
            const x = parseXValue(resolveX(datum), xType, xParser);
            const y = toFiniteNumber(resolveY(datum));

            if (x === null || y === null) {
                return null;
            }

            return { datum, x, y };
        })
        .filter((point): point is LinePoint => point !== null)
        .sort((a, b) => a.x - b.x);
};

export const buildSeries = ({
    series,
    data,
    xValue,
    yValue,
    xType,
    xParser,
    strokeColour,
    strokeWidth,
    endLabelStyles,
    showEndPoint,
    showEndValue,
    showEndLabel,
}: {
    series: LineSeriesInput[];
    data: Datum[];
    xValue: (datum: Datum) => XValue;
    yValue: (datum: Datum) => unknown;
    xType: AxisType;
    xParser?: XValParser;
    strokeColour: string;
    strokeWidth: StrokeWidth;
    endLabelStyles?: EndLabelStyles;
    showEndPoint: boolean;
    showEndValue: boolean;
    showEndLabel: boolean;
}): NormalisedSeries[] => {
    const input = Array.isArray(series) ? series.filter((d) => !d.hidden) : [];

    if (input.length === 0) {
        return [
            {
                id: 'series-0',
                label: undefined,
                points: resolvePoints(data, xValue, yValue, xType, xParser),
                strokeColour,
                strokeWidth,
                endLabel: undefined,
                endLabelStyles,
                showEndPoint,
                showEndValue,
                showEndLabel,
            },
        ];
    }

    return input.map((seriesConfig, index) => {
        const resolvedColour =
            seriesConfig.strokeColour ??
            DEFAULT_SERIES_COLOURS[index % DEFAULT_SERIES_COLOURS.length] ??
            strokeColour;

        return {
            id: seriesConfig.id ?? `series-${index}`,
            label: seriesConfig.label ?? seriesConfig.endLabel,
            points: resolvePoints(
                seriesConfig.data ?? data,
                seriesConfig.xValue ?? xValue,
                seriesConfig.yValue ?? yValue,
                xType,
                xParser
            ),
            strokeColour: resolvedColour,
            strokeWidth: seriesConfig.strokeWidth ?? strokeWidth,
            endLabel: seriesConfig.endLabel,
            endLabelStyles: {
                ...endLabelStyles,
                ...seriesConfig.endLabelStyles,
                margin: {
                    ...(endLabelStyles?.margin || {}),
                    ...(seriesConfig.endLabelStyles?.margin || {}),
                },
                colour:
                    seriesConfig.endLabelStyles?.colour ??
                    endLabelStyles?.colour ??
                    resolvedColour,
            },
            showEndPoint: seriesConfig.showEndPoint ?? showEndPoint,
            showEndValue: seriesConfig.showEndValue ?? showEndValue,
            showEndLabel: seriesConfig.showEndLabel ?? showEndLabel,
        };
    });
};

export const extent = (values: number[]): [number, number] => {
    if (values.length === 0) {
        return [0, 0];
    }

    let min = values[0];
    let max = values[0];

    for (const value of values) {
        if (value < min) min = value;
        if (value > max) max = value;
    }

    return [min, max];
};

export const createScale = (
    domain: [number, number],
    range: [number, number]
) => {
    const [d0, d1] = domain;
    const [r0, r1] = range;
    const span = d1 - d0;

    if (span === 0) {
        const midpoint = (r0 + r1) / 2;
        return (_value: number) => midpoint;
    }

    return (value: number) => {
        return r0 + ((value - d0) / span) * (r1 - r0);
    };
};

export const buildPath = (
    points: LinePoint[],
    xToPercent: (value: number) => number,
    yToPercent: (value: number) => number
): string => {
    if (points.length === 0) {
        return '';
    }

    return points
        .map((point, index) => {
            const x = xToPercent(point.x);
            const y = yToPercent(point.y);
            return `${index === 0 ? 'M' : 'L'}${x},${y}`;
        })
        .join(' ');
};

export const generateLinearTicks = (
    domain: [number, number],
    count: number
): number[] => {
    const [min, max] = domain;

    if (count <= 1 || min === max) {
        return [min, max].filter((value, index, arr) => arr.indexOf(value) === index);
    }

    const step = (max - min) / (count - 1);
    const ticks = Array.from({ length: count }, (_unused, index) => min + index * step);

    return ticks;
};

export const resolveTicks = ({
    explicitValues,
    domain,
    count,
    xType,
    xParser,
}: {
    explicitValues?: XValue[];
    domain: [number, number];
    count: number;
    xType: AxisType;
    xParser?: XValParser;
}): number[] => {
    if (Array.isArray(explicitValues) && explicitValues.length > 0) {
        return explicitValues
            .map((value) => parseXValue(value, xType, xParser))
            .filter((value): value is number => value !== null)
            .sort((a, b) => a - b);
    }

    return generateLinearTicks(domain, count);
};

export const defaultXFormatter: XValFormatter = (value) => {
    if (value instanceof Date) {
        return prettifyDate(value.toISOString().slice(0, 10));
    }

    if (typeof value === 'number') {
        const asDate = new Date(value);

        if (!Number.isNaN(asDate.getTime()) && value > 10_000_000) {
            return prettifyDate(asDate.toISOString().slice(0, 10));
        }

        return `${value}`;
    }

    return prettifyDate(String(value));
};

export const formatXValue = (
    rawX: number,
    xType: AxisType,
    xFormatter?: XValFormatter
): string => {
    if (xFormatter) {
        const formatterValue: XValue = xType === 'time' ? new Date(rawX) : rawX;
        return xFormatter(formatterValue);
    }

    if (xType === 'time') {
        return prettifyDate(new Date(rawX).toISOString().slice(0, 10));
    }

    return `${rawX}`;
};

export const formatYValue = ({
    value,
    context,
    decimalPlaces,
    prefixUnit,
    suffixUnit,
    applyUnitsToAllYValues,
    dropPrefixUnitOnZero,
    yValFormatter,
}: {
    value: number;
    context: YLabelContext;
    decimalPlaces: number;
    prefixUnit: string;
    suffixUnit: string;
    applyUnitsToAllYValues: boolean;
    dropPrefixUnitOnZero: boolean;
    yValFormatter?: YValFormatter;
}): string => {
    if (yValFormatter) {
        return yValFormatter(value, context);
    }

    const valueText = value.toFixed(Math.max(0, decimalPlaces));
    const shouldApplyUnits =
        applyUnitsToAllYValues || context.isTopTick || context.isEndValue;

    if (!shouldApplyUnits) {
        return valueText;
    }

    const resolvedPrefix =
        dropPrefixUnitOnZero && value === 0 ? '' : prefixUnit;

    return `${resolvedPrefix}${valueText}${suffixUnit}`;
};

export const shouldShowLegend = (
    legend: boolean | { breakpoint: number; show: boolean },
    viewportWidth: number
): boolean => {
    if (typeof legend === 'boolean') {
        return legend;
    }

    if (!legend || typeof legend.breakpoint !== 'number') {
        return false;
    }

    return viewportWidth <= legend.breakpoint ? legend.show : !legend.show;
};

export const buildHighlightRects = ({
    highlightAreas,
    xToPercent,
    yToPercent,
    yDomain,
    xType,
    xParser,
}: {
    highlightAreas: HighlightArea[];
    xToPercent: (value: number) => number;
    yToPercent: (value: number) => number;
    yDomain: [number, number];
    xType: AxisType;
    xParser?: XValParser;
}) => {
    const [yMin, yMax] = yDomain;

    return highlightAreas
        .map((area, index) => {
            const xStart = parseXValue(area.xStart, xType, xParser);
            const xEnd = parseXValue(area.xEnd, xType, xParser);

            if (xStart === null || xEnd === null) {
                return null;
            }

            const left = Math.min(xToPercent(xStart), xToPercent(xEnd));
            const right = Math.max(xToPercent(xStart), xToPercent(xEnd));
            const areaYStart = area.yStart ?? yMin;
            const areaYEnd = area.yEnd ?? yMax;
            const top = Math.min(yToPercent(areaYStart), yToPercent(areaYEnd));
            const bottom = Math.max(yToPercent(areaYStart), yToPercent(areaYEnd));

            return {
                id: area.id ?? `highlight-${index}`,
                x: left,
                y: top,
                width: Math.max(0, right - left),
                height: Math.max(0, bottom - top),
                fill: area.fill ?? '#6c8db6',
                opacity: area.opacity ?? 0.15,
            };
        })
        .filter((area): area is {
            id: string;
            x: number;
            y: number;
            width: number;
            height: number;
            fill: string;
            opacity: number;
        } => area !== null);
};
