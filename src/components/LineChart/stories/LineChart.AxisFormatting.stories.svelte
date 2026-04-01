<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { prettifyDate } from '../../../utils/index.js';

  // Component
  import LineChart from '../LineChart.svelte';

  // Data
  import stockDummyData from '../data/stocks.json';

  const { Story } = defineMeta({
    title: 'Components/Charts/LineChart/Axis Formatting',
    component: LineChart,
  });

  // Formatter helpers for axis-formatting stories
  const xFormatterTwoLine = (d: Date): string | string[] => {
    const month = d.toLocaleDateString('en-GB', { month: 'short' });
    const year = d.getFullYear().toString();
    return [prettifyDate(month), year];
  };

  const xFormatterShort = (d: Date, idx: number) => {
    // Get the abbreviated month name e.g. "Jan"
    const month = d.toLocaleDateString('en-US', { month: 'short' });

    // Get the full year e.g. 2024
    const fullYear = d.getFullYear();

    // Get the last 2 digits of the year e.g. "24"
    const shortYear = String(fullYear).slice(-2);

    // For the first tick show the full year e.g. "Jan 2024"
    // For all other ticks show the short year with apostrophe e.g. "Jan '24"
    const dateLabel =
      idx === 0 ? `${month} ${fullYear}` : `${month} '${shortYear}`;

    // Format the date in Reuters style
    return prettifyDate(dateLabel);
  };

  const yFormatterMultiLine = (v: number) => {
    const formatted = v / 10000;
    if (v === 20000) {
      return [`$${formatted} million`, 'per acre'];
    }
    return `$${formatted} mln`;
  };

  const endLabelFormatterUnits = (value: number) => `$${value}`;
</script>

<!-- X-axis formatting: D3 format string -->
<Story
  name="Axis formatting: x-axis D3 format string"
  exportName="XAxisD3Format"
  tags={['!autodocs', '!dev']}
  args={{
    data: stockDummyData.filter((d) => d.company === 'AAPL'),
    xKey: 'date',
    yKey: 'endDayVal',
    xAxisConfig: { xAxisDateFormat: "%b '%y" },
    yAxisConfig: { prefix: '$', mode: 'all-ticks' },
    margin: { left: 30, right: 60 },
    height: 250,
  }}
/>

<!-- X-axis formatting: Short date format e.g. "Jan 2024" vs "Jan '24" -->
<Story
  name="Formatter examples: x-axis short date format"
  exportName="XAxisShortFormat"
  tags={['!autodocs', '!dev']}
  parameters={{
    controls: { include: ['xAxisConfig'] },
  }}
  args={{
    data: stockDummyData.filter((d) => d.company === 'AAPL'),
    xKey: 'date',
    yKey: 'endDayVal',
    xAxisConfig: { xFormatter: xFormatterShort },
    yAxisConfig: { prefix: '$', mode: 'all-ticks' },
    height: 250,
    margin: { left: 50, bottom: 50, right: 30 },
  }}
/>

<!-- X-axis formatting: Multi-line labels -->
<Story
  name="Axis formatting: x-axis multi-line formatter"
  exportName="XAxisMultiLineFormatter"
  tags={['!autodocs', '!dev']}
  args={{
    data: stockDummyData.filter((d) => d.company === 'AAPL'),
    xKey: 'date',
    yKey: 'endDayVal',
    xAxisConfig: { xFormatter: xFormatterTwoLine },
    yAxisConfig: { prefix: '$', mode: 'all-ticks' },
    height: 250,
    margin: { left: 15, right: 60, bottom: 40 },
  }}
/>

<!-- Y-axis formatting: Units and display modes -->
<Story
  name="Axis formatting: y-axis units & modes"
  exportName="YAxisUnitsMode"
  tags={['!autodocs', '!dev']}
  args={{
    data: stockDummyData.filter((d) => d.company === 'AAPL'),
    xKey: 'date',
    yKey: 'endDayVal',
    xAxisConfig: { xAxisDateFormat: "%b '%y" },
    yAxisConfig: { prefix: '$', suffix: ' per barrel', mode: 'top-only' },
    endLabelFormatter: endLabelFormatterUnits,
    height: 250,
    margin: { left: 15, right: 60 },
  }}
/>

<!-- Y-axis formatting: Custom formatter -->
<Story
  name="Axis formatting: y-axis custom formatter"
  exportName="YAxisZeroBase"
  tags={['!autodocs', '!dev']}
  args={{
    data: stockDummyData
      .filter((d) => d.company === 'AAPL')
      .map((d) => ({ ...d, endDayVal: d.endDayVal })),
    xKey: 'date',
    yKey: 'endDayVal',
    xAxisConfig: { xAxisDateFormat: "%b '%y" },
    yAxisConfig: {
      prefix: '$',
      zeroBase: false,
    },
    height: 250,
    margin: { left: 15, right: 60 },
  }}
/>

<!-- Y-axis formatting: Multi-line abbreviation -->
<Story
  name="Formatter examples: y-axis multi-line abbreviation"
  exportName="YAxisMultiLineAbbrev"
  tags={['!autodocs', '!dev']}
  args={{
    data: stockDummyData
      .filter((d) => d.company === 'AAPL')
      .map((d) => ({ ...d, endDayVal: d.endDayVal * 100 })),
    xKey: 'date',
    yKey: 'endDayVal',
    xAxisConfig: { xAxisDateFormat: "%b '%y" },
    yAxisConfig: {
      yFormatter: yFormatterMultiLine,
      mode: 'all-ticks',
      zeroBase: false,
    },
    endLabelFormatter: (d) => `$${d / 10000} mln`,
    height: 250,
    margin: { left: 15, right: 60 },
  }}
/>
