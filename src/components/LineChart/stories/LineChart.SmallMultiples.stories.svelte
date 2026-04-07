<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import {
    pivotToWideData,
    prepareMultilineSmallMultiplesData,
  } from '../utils/index.js';

  // Component
  import LineChart from '../LineChart.svelte';

  // Data
  import stockDummyData from '../data/stocks.json';
  import countriesData from '../data/countries.json';

  const { Story } = defineMeta({
    title: 'Components/Charts/LineChart/Small Multiples',
    component: LineChart,
  });

  // Transform tall stock data to wide format for multi-line rendering
  const stockWideData = pivotToWideData(
    stockDummyData,
    'date',
    'company',
    'endDayVal'
  );

  const series = {
    data: countriesData,
    xKey: 'date',
    groupKey: 'country',
    seriesKey: 'index',
    valueKey: 'value',
    colours: {
      'GDP growth': '#1f77b4',
      'Birth rate': '#d62728',
    },
    formatGroupTitle: (country: string) => country, // Title for each small multiple panel
  };

  // Use `prepareMultilineSmallMultiplesData` to convert the data into the format needed for small multiples with multiple lines. This function will return the transformed data and the chartGroups configuration needed to assign series to panels.
  const { data: smallMultiplesData, chartGroups } =
    prepareMultilineSmallMultiplesData(series);
</script>

<!-- Small multiples grid -->
<Story
  name="Small multiples"
  args={{
    data: stockWideData,
    series: [
      {
        key: 'AAPL',
        label: 'Apple',
        lineColour: '#1f77b4',
        endLabelType: 'value' as const,
      },
      {
        key: 'GOOGL',
        label: 'Google',
        lineColour: '#2ca02c',
        endLabelType: 'value' as const,
      },
      {
        key: 'MSFT',
        label: 'Microsoft',
        lineColour: '#ff7f0e',
        endLabelType: 'value' as const,
      },
      {
        key: 'AMZN',
        label: 'Amazon',
        lineColour: '#d62728',
        endLabelType: 'value' as const,
      },
    ],
    layout: 'multiples',
    xKey: 'date',
    xAxisConfig: { xAxisDateFormat: `%b, '%y` },
    yAxisConfig: { prefix: '$' },
    showGridY: false,
    smallMultiplesXAxisMode: 'first-in-row',
    margin: { right: 60 },
  }}
/>

<!-- Small multiples with multi-line series -->
<Story
  name="Small multiples: multi-line charts"
  exportName="SmallMultiplesMultiLineCharts"
  tags={['!autodocs', '!dev']}
  args={{
    data: smallMultiplesData,
    chartGroups,
    layout: 'multiples',
    xKey: 'date',
    height: 400,
    yAxisConfig: {
      mode: 'all-ticks',
      suffix: '%',
    },
    yTickCount: 3,
    smallMultiplesEndLabelsMode: 'first',
    smallMultiplesXAxisMode: 'first-in-row',
    xAxisConfig: { xAxisDateFormat: '%Y' },
    showGridY: true,
    showLegend: false,
    margin: { right: 80, bottom: 80 },
  }}
/>

<style lang="scss">
  // :global(.chart-grid.line-chart) {
  //   @media (max-width: 1200px) {
  //     grid-template-columns: repeat(2, 1fr);
  //   }
  // }
</style>
