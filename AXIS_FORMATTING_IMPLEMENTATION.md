# X-Axis and Y-Axis Formatting Implementation Summary

## Overview
Added comprehensive programmatic customization for both x-axis and y-axis label formatting in the LineChart component, including multi-line label support via SVG `<tspan>` elements.

## Changes Made

### 1. Type Definitions (`src/components/LineChart/types/index.ts`)

#### New Type: `XAxisLabelContext`
```typescript
interface XAxisLabelContext {
  value: Date;          // The date value for this tick
  tickIndex: number;    // Index of this tick (0-based)
  totalTicks: number;   // Total number of ticks
  isFirst: boolean;     // True if this is the first tick
  isLast: boolean;      // True if this is the last tick
}
```

#### Updated Type: `LineChartProps`
Added new prop:
```typescript
xAxisFormatter?: (value: Date, context: XAxisLabelContext) => string | string[]
```

#### Updated Type: `YAxisConfig`
Updated the formatter to support multi-line labels:
```typescript
yValueFormatter?: (value: number, context: YAxisLabelContext) => string | string[]
```

### 2. LineChart Component (`src/components/LineChart/LineChart.svelte`)
- Added `xAxisFormatter` to component props destructuring
- Passed `xAxisFormatter` to `ChartSVG` component

### 3. ChartSVG Component (`src/components/LineChart/components/ChartSVG.svelte`)

#### Props Updated
- Added `xAxisFormatter?: (value: Date, context: XAxisLabelContext) => string | string[]`

#### Implementation
- Created `formatXLabel` derived function that:
  - Checks if custom `xAxisFormatter` is provided
  - Creates `XAxisLabelContext` with all contextual information
  - Falls back to `formatXAxisDate` if no custom formatter provided
  - Returns `string | string[]` for single or multi-line labels

- Created `xTickLabels` derived function that:
  - Maps over all x-ticks using the formatter
  - Normalizes results to array format `[string]` or `[string, string, ...]`
  - Passes normalized labels to XAxis component

- Updated XAxis component call to use `xLabels` instead of `formatTick` callback

### 4. XAxis Component (`src/components/ChartElements/XAxis.svelte`)

#### Props Updated
- Made `formatTick` optional
- Added `xLabels?: (string | string[])[]` prop for pre-formatted labels

#### Implementation
- Each label is converted to array if it's a string: `Array.isArray(label) ? label : [label]`
- Each string in the array is rendered either directly or as a `<tspan>` element with `dy="1.2em"` for vertical spacing
- Maintains backward compatibility with `formatTick` callback

### 5. YAxis Component (`src/components/ChartElements/YAxis.svelte`)

#### Props Updated
- Changed `yLabels: string[]` to `yLabels: (string | string[])[]` to support multi-line

#### Implementation
- Each label is converted to array if it's a string
- Each string in the array is rendered either directly or as a `<tspan>` element with `dy="1.2em"` for vertical spacing

### 6. Formatting Utils (`src/components/LineChart/utils/formatting.ts`)

#### Updated Function: `createYLabelFormatter`
- Return type changed to: `(value: number, context: YAxisLabelContext) => string | string[]`
- Handles the custom formatter return value which can now be multi-line

## Features

### X-Axis Customization
Users can now control x-axis formatting with the `xAxisFormatter` prop:

```typescript
const xAxisFormatter = (date: Date, context: XAxisLabelContext) => {
  if (context.isFirst) {
    return `${date.toLocaleDateString()} [Full]`;
  }
  return `${date.getMonth() + 1}/${date.getDate()}`;
};

<LineChart xAxisFormatter={xAxisFormatter} />
```

### Y-Axis Customization
Users can control y-axis formatting with `yAxisConfig.yValueFormatter`:

```typescript
const yAxisConfig = {
  yValueFormatter: (value, context) => {
    return `$${(value / 1000).toFixed(1)}K`;
  }
};

<LineChart yAxisConfig={yAxisConfig} />
```

### Multi-Line Label Support
Both axes support breaking labels across multiple lines by returning an array of strings:

```typescript
// X-axis multi-line
const xAxisFormatter = (date: Date, context: XAxisLabelContext) => {
  return [
    date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' }),
    date.getFullYear().toString()
  ];
};

// Y-axis multi-line
const yAxisConfig = {
  yValueFormatter: (value, context) => {
    const formatted = Math.round(value).toLocaleString();
    const parts = formatted.split(',');
    if (parts.length === 2) {
      return [`${parts[0]},`, parts[1]]; // Split "15,000" across 2 lines
    }
    return formatted;
  }
};
```

## Backward Compatibility

- ✅ Existing `xAxisDateFormat` prop still works when `xAxisFormatter` is not provided
- ✅ Existing `yValueFormatter` functions that return strings continue to work
- ✅ XAxis component's `formatTick` callback is optional and only used if `xLabels` is not provided

## Documentation & Examples

### Generated Files
1. **[X_AND_Y_AXIS_FORMATTING_GUIDE.md](X_AND_Y_AXIS_FORMATTING_GUIDE.md)** - Comprehensive usage guide with examples
2. **[src/components/LineChart/examples/AxisFormatting.stories.svelte](src/components/LineChart/examples/AxisFormatting.stories.svelte)** - Interactive example components

## Usage Examples

### Example 1: Full Year on First Date, Shortened Year for Rest
```typescript
const xAxisFormatter = (date: Date, context: XAxisLabelContext) => {
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  const day = date.getDate();
  
  if (context.isFirst) {
    return `${month} ${day}, ${date.getFullYear()}`;
  }
  return `${month} ${day} '${date.getFullYear().toString().slice(-2)}`;
};
```

### Example 2: Y-Axis Multi-Line Labels
```typescript
const yAxisConfig = {
  yValueFormatter: (value: number, context: YAxisLabelContext) => {
    if (value > 10000) {
      const formatted = value.toLocaleString();
      const parts = formatted.split(',');
      return [parts[0] + ',', parts.slice(1).join(',')];
    }
    return value.toString();
  }
};
```

### Example 3: Combined X and Y Formatting
```typescript
<LineChart
  data={chartData}
  series={chartSeries}
  xAxisFormatter={(date, context) => {
    if (context.isFirst) {
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
    return `${date.getMonth() + 1}/${date.getDate()}`;
  }}
  yAxisConfig={{
    yValueFormatter: (value) => `$${(value / 1000).toFixed(1)}K`
  }}
/>
```

## Testing

To test the new features:

1. View the example story: `src/components/LineChart/examples/AxisFormatting.stories.svelte`
2. Read the full guide: `X_AND_Y_AXIS_FORMATTING_GUIDE.md`
3. No compilation errors in any modified files

## Key Implementation Details

### SVG Multi-Line Support
Both XAxis and YAxis now render multi-line labels using SVG `<tspan>` elements:
```svg
<text x="100" y="200" class="tick-label">
  First Line
  <tspan x="100" dy="1.2em">Second Line</tspan>
  <tspan x="100" dy="1.2em">Third Line</tspan>
</text>
```

### Line Spacing
- Default `dy="1.2em"` creates consistent spacing between lines
- Can be adjusted via CSS variables if needed

### Text Anchoring
- X-axis: center-aligned (`text-anchor: middle`)
- Y-axis: start-aligned (`text-anchor: start`)
