# X-Axis and Y-Axis Formatting Guide

This document explains how to customize x-axis and y-axis labels programmatically in the LineChart component.

## X-Axis Custom Formatting

### Using `xAxisFormatter` for Programmatic Control

The `xAxisFormatter` prop allows you to customize x-axis labels with full programmatic control. It receives a function with the following signature:

```typescript
xAxisFormatter?: (value: Date, context: XAxisLabelContext) => string | string[]
```

### `XAxisLabelContext`

The context object provides useful information about each tick:

```typescript
interface XAxisLabelContext {
  value: Date;          // The date value for this tick
  tickIndex: number;    // Index of this tick (0-based)
  totalTicks: number;   // Total number of ticks
  isFirst: boolean;     // True if this is the first tick
  isLast: boolean;      // True if this is the last tick
}
```

### Example: Full Year for First Date, Shortened Year for Rest

```svelte
<script lang="ts">
  import LineChart from './components/LineChart/LineChart.svelte';
  import type { XAxisLabelContext } from './components/LineChart/types/index.js';

  const xAxisFormatter = (date: Date, context: XAxisLabelContext) => {
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const day = date.getDate();
    
    if (context.isFirst) {
      // Full year for first date
      const year = date.getFullYear();
      return `${month} ${day}, ${year}`;
    } else {
      // Shortened year with apostrophe for the rest
      const shortYear = "'" + date.getFullYear().toString().slice(-2);
      return `${month} ${day} ${shortYear}`;
    }
  };
</script>

<LineChart
  data={chartData}
  series={chartSeries}
  xAxisFormatter={xAxisFormatter}
/>
```

### Example: Multi-Line X-Axis Labels

Return an array of strings to create multi-line labels:

```typescript
const xAxisFormatter = (date: Date, context: XAxisLabelContext) => {
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear();
  
  // Return array for multi-line rendering
  return [
    `${month} ${day}`,
    year.toString()
  ];
};
```

This will render the month and day on the first line, and the year on the second line.

---

## Y-Axis Custom Formatting

### Y-Axis Formatter with Context

The `yValueFormatter` function in `yAxisConfig` receives context about each tick:

```typescript
interface YAxisLabelContext {
  value: number;        // The numeric value for this tick
  isTopTick: boolean;   // True if this is the topmost tick
  isBottomTick: boolean;// True if this is the bottommost tick
  isEndValue: boolean;  // True if this is an end-value label
  tickIndex: number;    // Index of this tick (0-based)
}
```

### Example: Simple Y-Axis with Units

```typescript
const yAxisConfig = {
  yValueFormatter: (value, context) => {
    if (context.isTopTick) {
      // Only format the top tick
      return `$${(value / 1000).toFixed(1)}K`;
    }
    return value.toString();
  }
};
```

### Multi-Line Y-Axis Labels (Breaking into 2 Lines)

Return an array of strings to split a y-axis label across multiple lines:

```typescript
const yAxisConfig = {
  yValueFormatter: (value, context) => {
    const formatted = `${value.toLocaleString()}`;
    
    // Optionally: Split long labels across multiple lines
    if (formatted.length > 5) {
      return [
        formatted.slice(0, Math.ceil(formatted.length / 2)),
        formatted.slice(Math.ceil(formatted.length / 2))
      ];
    }
    
    return formatted;
  }
};
```

### Example: Different Formatting for Different Ticks

```typescript
const yAxisConfig = {
  prefix: '$',
  suffix: 'M',  // Will show as "$100M"
  yValueFormatter: (value, context) => {
    const displayValue = value / 1000000; // Convert to millions
    
    if (context.isTopTick) {
      // Top tick gets special formatting
      return `$${displayValue.toFixed(1)}M (max)`;
    }
    
    if (context.isBottomTick) {
      // Bottom tick gets special formatting
      return `$${displayValue.toFixed(0)}M (min)`;
    }
    
    // All other ticks
    return `$${displayValue.toFixed(1)}M`;
  }
};

<LineChart
  data={chartData}
  series={chartSeries}
  yAxisConfig={yAxisConfig}
/>
```

---

## Complete Example with Both Axes

```svelte
<script lang="ts">
  import LineChart from './components/LineChart/LineChart.svelte';
  import type { XAxisLabelContext } from './components/LineChart/types/index.js';

  const data = [
    { date: new Date('2024-01-01'), value: 100 },
    { date: new Date('2024-02-01'), value: 150 },
    { date: new Date('2024-03-01'), value: 120 },
    // ... more data
  ];

  const series = [
    { key: 'value', label: 'Revenue', color: '#1f77b4' }
  ];

  // X-axis formatter: Full year on first date, shortened year for rest
  const xAxisFormatter = (date: Date, context: XAxisLabelContext) => {
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const day = date.getDate();
    
    if (context.isFirst) {
      const year = date.getFullYear();
      return `${month} ${day}, ${year}`;
    } else {
      const shortYear = "'" + date.getFullYear().toString().slice(-2);
      return `${month} ${day} ${shortYear}`;
    }
  };

  // Y-axis formatter: Currency formatting
  const yAxisConfig = {
    yValueFormatter: (value, context) => {
      return `$${(value / 1000).toFixed(0)}K`;
    }
  };
</script>

<LineChart
  {data}
  {series}
  xKey="date"
  yKey="value"
  {xAxisFormatter}
  {yAxisConfig}
  width={800}
  height={500}
/>
```

---

## Notes on Multi-Line Support

- **X-Axis**: Return `string | string[]` from your formatter. Arrays are automatically rendered with `<tspan>` elements.
- **Y-Axis**: Same approach—return either a `string` or `string[]` for multi-line labels.
- **Spacing**: Multi-line labels use `1.2em` line spacing by default via SVG `<tspan dy>` attributes.
- **Alignment**: X-axis labels are center-aligned; Y-axis labels are start-aligned.

---

## Backward Compatibility

- The old `xAxisDateFormat` prop still works if `xAxisFormatter` is not provided.
- If both are provided, `xAxisFormatter` takes precedence.
- Existing yAxisConfig with `yValueFormatter` continues to work as before, but now supports array return values for multi-line labels.
