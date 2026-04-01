<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import {
    pivotToWideData,
    prepareMultilineSmallMultiplesData,
  } from '../utils/index.js';
  import { slugify } from '../../../utils/index.js';

  // Component
  import LineChart from '../LineChart.svelte';

  // Data
  import stockDummyData from '../data/stocks.json';
  import countriesData from '../data/countries.json';

  const { Story } = defineMeta({
    title: 'Components/Charts/LineChart/Small Multiples',
    component: LineChart,
  });

  type CountryRow = {
    country: string;
    date: string;
    index: string;
    value: number;
  };

  // Transform tall stock data to wide format for multi-line rendering
  const stockWideData = pivotToWideData(
    stockDummyData,
    'date',
    'company',
    'endDayVal'
  );

  const countryRows = countriesData as CountryRow[];
  const countriesWithSeriesKey = countryRows.map((row) => ({
    ...row,
    seriesKey: `${row.country}__${row.index}`,
  }));

  const countriesWideData = pivotToWideData(
    countriesWithSeriesKey,
    'date',
    'seriesKey',
    'value'
  );

  const indexColorMap: Record<string, string> = {
    'GDP growth': '#1f77b4',
    'Birth rate': '#d62728',
  };

  const countryNames = Array.from(
    new Set(countryRows.map((row) => row.country))
  );
  const indexNames = Array.from(new Set(countryRows.map((row) => row.index)));

  const countriesChartGroups = countryNames.map((country) => ({
    groupId: slugify(country),
    title: country,
    series: indexNames.map((index) => ({
      key: `${country}__${index}`,
      label: index,
      colour: indexColorMap[index] || indexColorMap[index.trim()] || '#7f7f7f',
      endLabelType: 'label' as const,
      showEndLabel: true,
    })),
  }));
</script>

<!-- Small multiples grid -->
<Story
  name="Small multiples"
  tags={['!autodocs', '!dev']}
  args={{
    data: stockWideData,
    series: [
      {
        key: 'AAPL',
        label: 'Apple',
        colour: '#1f77b4',
        endLabelType: 'value' as const,
      },
      {
        key: 'GOOGL',
        label: 'Google',
        colour: '#2ca02c',
        endLabelType: 'value' as const,
      },
      {
        key: 'MSFT',
        label: 'Microsoft',
        colour: '#ff7f0e',
        endLabelType: 'value' as const,
      },
      {
        key: 'AMZN',
        label: 'Amazon',
        colour: '#d62728',
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
  tags={['!autodocs', '!dev']}
  exportName="SmallMultiplesMultiLineCharts"
  args={{
    data: countriesWideData,
    chartGroups: countriesChartGroups,
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
    xAxisConfig: { xAxisDateFormat: `%Y` },
    showGridY: true,
    showLegend: false,
    margin: { right: 80, bottom: 80 },
  }}
/>

<!-- Small multiples with helper function -->
<Story
  name="Small multiples with helper function"
  exportName="SmallMultiplesWithHelper"
  tags={['!autodocs', '!dev']}
  args={{
    ...(() => {
      const { data: wideData, chartGroups } =
        prepareMultilineSmallMultiplesData({
          data: countriesData,
          xKey: 'date',
          groupKey: 'country',
          seriesKey: 'index',
          valueKey: 'value',
          colours: {
            'GDP growth': '#1f77b4',
            'Birth rate': '#d62728',
          },
          formatGroupTitle: (country) => country,
        });
      return {
        data: wideData,
        chartGroups,
      };
    })(),
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
