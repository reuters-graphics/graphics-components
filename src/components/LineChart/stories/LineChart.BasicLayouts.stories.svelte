<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { pivotToWideData } from '../utils/index.js';

  // Component
  import LineChart from '../LineChart.svelte';

  // Data
  import stockDummyData from '../data/stocks.json';

  const { Story } = defineMeta({
    title: 'Components/Charts/LineChart/Layouts',
    component: LineChart,
  });

  // Transform tall stock data to wide format for multi-line rendering
  const stockWideData = pivotToWideData(
    stockDummyData,
    'date',
    'company',
    'endDayVal'
  );
</script>

<!-- Single line chart -->
<Story
  name="Single line"
  tags={['!autodocs', '!dev']}
  args={{
    data: stockDummyData.filter((d) => d.company === 'AAPL'),
    xKey: 'date',
    yKey: 'endDayVal',
    xAxisConfig: { xAxisDateFormat: '%b %-d, %Y' },
    yAxisConfig: { suffix: '', prefix: '$', zeroBase: true, mode: 'all-ticks' },
    height: 250,
    margin: { left: 15, right: 60 },
  }}
/>

<!-- Multiple lines chart -->
<Story
  name="Multiple lines"
  tags={['!autodocs', '!dev']}
  parameters={{
    controls: { include: ['layout'] },
  }}
  args={{
    data: stockWideData,
    series: [
      {
        key: 'AAPL',
        label: 'Apple',
        colour: '#1f77b4',
        endLabelType: 'label' as const,
      },
      {
        key: 'GOOGL',
        label: 'Google',
        colour: '#2ca02c',
        endLabelType: 'label' as const,
      },
      {
        key: 'MSFT',
        label: 'Microsoft',
        colour: '#ff7f0e',
        endLabelType: 'label' as const,
      },
      {
        key: 'AMZN',
        label: 'Amazon',
        colour: '#d62728',
        endLabelType: 'label' as const,
      },
    ],
    layout: 'single',
    xKey: 'date',
    xAxisConfig: { xAxisDateFormat: '%b %-d, %Y' },
    yAxisConfig: { prefix: '$', mode: 'all-ticks' },
    showGridY: false,
    height: 250,
    margin: { right: 80 },
  }}
/>
