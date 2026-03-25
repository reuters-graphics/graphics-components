<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { pivotToWideData } from './utils/index.js';
  import { slugify } from '../../utils/index.js';

  // Component
  import LineChart from './LineChart.svelte';

  // Data
  import oilData from './data/oil.json';
  import stockDummyData from './data/stocks.json';
  import countriesData from './data/countries.json';

  const { Story } = defineMeta({
    title: 'Components/Charts/LineChart',
    component: LineChart,
  });

  // Convert demo data - use crude-natgas dataset
  type DemoRow = {
    date: string;
    'Benchmark Dutch wholesale gas prices (euro/mega watt hour)': number;
    yTickCount: 8;
    xTickCount: 6;
    'Brent crude (usd/barrel)': number;
  };

  type CountryRow = {
    country: string;
    date: string;
    index: string;
    value: number;
  };

  const rawData = oilData['crude-natgas'];
  const chartData = (rawData as DemoRow[]).map((item) => ({
    date: item.date,
    'Dutch Gas':
      item['Benchmark Dutch wholesale gas prices (euro/mega watt hour)'],
    'Asia LNG':
      item['Benchmark Asia LNG prices ($/million British thermal units)'],
    'Brent Crude': item['Brent crude (usd/barrel)'],
  }));

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
    'GDP Growth': '#1f77b4',
    'Birth Rate Growth': '#d62728',
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
      color: indexColorMap[index] || indexColorMap[index.trim()] || '#7f7f7f',
      //   strokeWidth: 2,
      endLabelType: 'label',
      showEndLabel: true,
    })),
  }));
</script>

<Story
  name="Single line"
  args={{
    data: stockDummyData.filter((d) => d.company === 'AAPL'),
    xKey: 'date',
    yKey: 'endDayVal',
    xAxisDateFormat: '%b %-d, %Y',
    yAxisConfig: { prefix: '$', zeroBase: true },
  }}
/>

<Story
  name="Multiple lines"
  args={{
    data: stockWideData,
    series: [
      {
        key: 'AAPL',
        label: 'Apple',
        color: '#1f77b4',
        endLabelType: 'label' as const,
      },
      {
        key: 'GOOGL',
        label: 'Google',
        color: '#2ca02c',
        endLabelType: 'label' as const,
      },
      {
        key: 'MSFT',
        label: 'Microsoft',
        color: '#ff7f0e',
        endLabelType: 'label' as const,
      },
      {
        key: 'AMZN',
        label: 'Amazon',
        color: '#d62728',
        endLabelType: 'label' as const,
      },
    ],
    layout: 'single',
    xKey: 'date',
    xAxisDateFormat: '%b %-d, %Y',
    yAxisConfig: { prefix: '$' },
    showGridY: false,
  }}
/>

<Story
  name="Small multiples"
  args={{
    data: stockWideData,
    series: [
      {
        key: 'AAPL',
        label: 'Apple',
        color: '#1f77b4',
        endLabelType: 'value' as const,
      },
      {
        key: 'GOOGL',
        label: 'Google',
        color: '#2ca02c',
        endLabelType: 'value' as const,
      },
      {
        key: 'MSFT',
        label: 'Microsoft',
        color: '#ff7f0e',
        endLabelType: 'value' as const,
      },
      {
        key: 'AMZN',
        label: 'Amazon',
        color: '#d62728',
        endLabelType: 'value' as const,
      },
    ],
    layout: 'multiples',
    xKey: 'date',
    yAxisConfig: { prefix: '$' },
    showGridY: false,
    smallMultiplesXAxisMode: 'first-in-row',
  }}
/>

<Story
  name="Small multiples: multi-line charts"
  exportName="SmallMultiplesMultiLineCharts"
  args={{
    data: countriesWideData,
    chartGroups: countriesChartGroups,
    layout: 'multiples',
    xKey: 'date',
    height: 400,
    margin: { top: 20, right: 70, bottom: 60, left: 30 },
    yAxisConfig: {
      mode: 'all-ticks',
      suffix: '%',
    },
    yTickCount: 3,
    smallMultiplesEndLabelsMode: 'first-in-row',
    smallMultiplesXAxisMode: 'first-in-row',
    xAxisDateFormat: `%b '%y`,
    showGridY: true,
    showLegend: false,
  }}
/>
