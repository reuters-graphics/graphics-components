# LineChart Component Setup - Architecture Recommendations

## Current Reference Implementation Analysis

Your reference implementation has strong foundations:
- ✅ Single-chart multi-line support with series array
- ✅ Responsive configuration with breakpoint-based rules
- ✅ End labels and point visualization 
- ✅ Custom Y-value formatting via `yValueFormatter`
- ✅ D3 scale-based rendering

## Recommended Architecture

### 1. **Layout Mode Toggle (Small Multiples vs Single Chart)**

**Option A: Single Prop Approach (Recommended)**
```typescript
// Add to props
layout?: 'single' | 'multiples';
// When 'multiples', each series gets its own chart
// When 'single', all series on one chart
```

**Pros:**
- Clean API
- Single component handles both cases
- Easy to toggle via prop

**Implementation approach:**
- Create wrapper logic in main component
- Render SVG differently based on layout mode
- Share scale calculation utilities

---

### 2. **Y-Axis Labeling Strategy (Prefix/Suffix Unit Logic)**

**Recommended Approach: Context-Based Formatting**

```typescript
type YAxisLabelMode = 
  | 'top-only'        // Default: only top tick
  | 'all-ticks'       // Apply to all tick labels
  | 'custom';         // Use yValFormatter only

interface YAxisConfig {
  mode?: YAxisLabelMode;
  yValFormatter?: (value: number, context: YAxisLabelContext) => string;
}

interface YAxisLabelContext {
  value: number;
  isTopTick: boolean;
  isBottomTick: boolean;
  isEndValue: boolean;
  tickIndex: number;
}
```

**Implementation:**
```typescript
const formatYLabel = (value: number, tickIndex: number, isEnd: boolean) => {
  if (yAxisConfig.mode === 'custom' || yValFormatter) {
    return yValFormatter(value, { 
      value, 
      isTopTick: tickIndex === yTicks.length - 1,
      isBottomTick: tickIndex === 0,
      isEndValue: isEnd,
      tickIndex
    });
  }

  if (yAxisConfig.mode === 'top-only' && tickIndex !== yTicks.length - 1) {
    return yAxisFormat(value); // No prefix/suffix
  }

  return yAxisFormat(value); // Apply prefix/suffix
};
```

**Advantages:**
- Explicit control over formatting
- No ambiguity about defaults
- Easy to document

---

### 3. **Multi-line Series in Small Multiples**

**Suggested data structure:**

```typescript
interface ChartGrouping {
  groupId: string;
  title?: string;
  series: LineSeriesInput[];  // Can have 1+ series per group
}

// Props:
data?: Datum[];
series?: LineSeriesInput[];        // For single chart mode
chartGroups?: ChartGrouping[];     // For multiples mode
layout?: 'single' | 'multiples';
```

**Why this works:**
- Clear ownership of series to charts
- Optional title for each small multiple
- Flexible: can have 1-3 lines per chart
- Aligns with common data viz patterns

---

### 4. **Child Snippet for SVG Customization**

**Recommended placement options:**

```typescript
// Option 1: Single slot overlay (simplest)
interface Props {
  children?: Snippet;  // Renders after all SVG content, useful for annotations
}

// Option 2: Multiple targeted slots (most flexible)
interface Props {
  beforeSVG?: Snippet;      // Renders before SVG (for external legends, etc)
  svgOverlay?: Snippet;     // Renders inside SVG overlay layer
  afterChart?: Snippet;     // Renders after everything (captions, notes)
}

// Option 3: Scoped slot with chart context (most powerful)
interface Props {
  children?: Snippet<[{
    xScale: (val: Date) => number;
    yScale: (val: number) => number;
    viewBox: { width: number; height: number };
  }]>;
}
```

**Recommendation: Start with Option 1, support Option 3**
- Simpler initial API
- Advanced users can use d3 directly inside child
- Users have access to scale functions via props

---

## Proposed File Structure

```
LineChart/
├── LineChart.svelte              # Main component
├── LineChart.stories.svelte       # Stories (single, multiples, mixed)
├── LineChart.mdx                  # Docs with examples
├── components/
│   ├── ChartSVG.svelte           # SVG rendering logic
│   ├── ChartGrid.svelte          # Multi-chart grid wrapper
│   ├── YAxisLabels.svelte        # Reusable axis labels
│   └── Legend.svelte             # Legend component
├── types/
│   └── index.ts                  # TypeScript interfaces
├── utils/
│   ├── chart.ts                  # Scale, data building
│   ├── formatting.ts             # Y-axis formatting logic
│   ├── responsive.ts             # Breakpoint matching
│   └── legend.ts                 # Legend generation
└── @types/
    └── index.ts                  # Any additional type exports
```

---

## Step-by-Step Implementation Plan

### Phase 1: Foundation
1. Create basic directory structure
2. Set up types file with all interfaces
3. Build utility functions (formatting, scales, responsive)

### Phase 2: Single Chart
1. Implement `LineChart.svelte` with single chart mode
2. Port formatting logic from reference impl
3. Add child snippet support

### Phase 3: Multiples & Toggle
1. Add `layout` prop (defaults to 'single')
2. Create `ChartGrid.svelte` for layout
3. Refactor SVG rendering into `ChartSVG.svelte`

### Phase 4: Y-Axis Formatting
1. Implement `yAxisConfig` with mode selection
2. Create `formatYLabel` utility
3. Update tests and stories

### Phase 5: Polish & Docs
1. Add Storybook stories for all modes
2. Write comprehensive MDX docs
3. Add accessibility features

---

## Clean API Examples

### Single Chart (Default)
```svelte
<LineChart
  data={myData}
  series={[
    { id: 'sales', strokeColour: 'blue' },
    { id: 'revenue', strokeColour: 'green' }
  ]}
  yAxisConfig={{ mode: 'top-only' }}
>
  <div slot="afterChart">Optional caption</div>
</LineChart>
```

### Small Multiples
```svelte
<LineChart
  data={myData}
  layout="multiples"
  chartGroups={[
    { groupId: 'region-a', title: 'North America', series: [...] },
    { groupId: 'region-b', title: 'Europe', series: [...] }
  ]}
/>
```

### Mixed (Multi-line per group)
```svelte
<LineChart
  layout="multiples"
  chartGroups={[
    { 
      groupId: 'q1',
      title: 'Q1',
      series: [
        { id: 'actual', strokeColour: 'blue' },
        { id: 'forecast', strokeColour: 'gray', strokeDasharray: '5,5' }
      ]
    }
  ]}
  yAxisConfig={{
    mode: 'custom',
    yValFormatter: (val) => `$${val}M`
  }}
/>
```

---

## Key Decisions to Finalize

1. **Default layout**: Start with 'single', make multiples opt-in?
2. **Y-axis default**: 'top-only' for clean look, or 'all-ticks'?
3. **Child slot naming**: Use `children` or more specific names?
4. **Grid layout**: CSS grid auto-fit, or fixed column count?
5. **Shared scales**: Should multiples share Y-axis range, or independent?
