<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import LineChart from './LineChart.svelte';
  import demoData from './data/demo-data.json';

  const { Story } = defineMeta({
    title: 'Components/Charts/LineChart',
    component: LineChart,
    // tags: ['!autodocs'],
  });

  // Convert demo data - use crude-natgas dataset
  const rawData = demoData['crude-natgas'];
  const chartData = rawData.map((item: any) => ({
    date: new Date(item.date),
    'Dutch Gas':
      item['Benchmark Dutch wholesale gas prices (euro/mega watt hour)'],
    'Asia LNG':
      item['Benchmark Asia LNG prices ($/million British thermal units)'],
    'Brent Crude': item['Brent crude (usd/barrel)'],
  }));
</script>

<Story
  name="Single Line"
  args={{
    data: chartData,
    series: [
      {
        key: 'Brent Crude',
        label: 'Brent crude (USD/barrel)',
        strokeWidth: 2,
        showPoints: true,
        showEndLabel: true,
      },
    ],
    layout: 'single',
    width: 800,
    height: 400,
    xKey: 'date',
    showGrid: true,
    showYAxis: true,
    showXAxis: true,
    showLegend: true,
  }}
/>

<Story
  name="Multiple Lines"
  args={{
    data: chartData,
    series: [
      {
        key: 'Dutch Gas',
        label: 'Dutch Gas Prices (EUR/MWh)',
        color: '#1f77b4',
        strokeWidth: 2,
        showPoints: true,
        showEndLabel: true,
      },
      {
        key: 'Asia LNG',
        label: 'Asia LNG Prices ($/MMBTU)',
        color: '#ff7f0e',
        strokeWidth: 2,
        showPoints: true,
        showEndLabel: true,
      },
      {
        key: 'Brent Crude',
        label: 'Brent Crude (USD/barrel)',
        color: '#2ca02c',
        strokeWidth: 2,
        showPoints: true,
        showEndLabel: true,
      },
    ],
    layout: 'single',
    width: 800,
    height: 400,
    xKey: 'date',
    yAxisConfig: {
      mode: 'top-only',
      suffix: '',
    },
    showGrid: true,
    showYAxis: true,
    showXAxis: true,
    showLegend: true,
  }}
/>

<Story
  name="With Legend"
  args={{
    data: chartData,
    series: [
      {
        key: 'Dutch Gas',
        label: 'Dutch Gas Prices',
        color: '#1f77b4',
        strokeWidth: 3,
        showPoints: false,
        showEndLabel: false,
      },
      {
        key: 'Asia LNG',
        label: 'Asia LNG Prices',
        color: '#ff7f0e',
        strokeWidth: 3,
        showPoints: false,
        showEndLabel: false,
      },
      {
        key: 'Brent Crude',
        label: 'Brent Crude Prices',
        color: '#2ca02c',
        strokeWidth: 3,
        showPoints: false,
        showEndLabel: false,
      },
    ],
    layout: 'single',
    width: 900,
    height: 500,
    xKey: 'date',
    showGrid: true,
    showYAxis: true,
    showXAxis: true,
    showLegend: true,
  }}
/>

<Story
  name="Small Multiples"
  args={{
    data: chartData,
    chartGroups: [
      {
        groupId: 'dutch-gas',
        title: 'Dutch Gas Prices (EUR/MWh)',
        series: [
          {
            key: 'Dutch Gas',
            label: 'Dutch Gas',
            color: '#1f77b4',
            strokeWidth: 2,
            showPoints: false,
            showEndLabel: true,
          },
        ],
      },
      {
        groupId: 'asia-lng',
        title: 'Asia LNG Prices ($/MMBTU)',
        series: [
          {
            key: 'Asia LNG',
            label: 'Asia LNG',
            color: '#ff7f0e',
            strokeWidth: 2,
            showPoints: false,
            showEndLabel: true,
          },
        ],
      },
      {
        groupId: 'brent-crude',
        title: 'Brent Crude (USD/barrel)',
        series: [
          {
            key: 'Brent Crude',
            label: 'Brent Crude',
            color: '#2ca02c',
            strokeWidth: 2,
            showPoints: false,
            showEndLabel: true,
          },
        ],
      },
    ],
    layout: 'multiples',
    width: 1000,
    height: 900,
    xKey: 'date',
    showGrid: true,
    showYAxis: true,
    showXAxis: true,
    showLegend: false,
  }}
/>

<Story
  name="Y-Axis Formatting"
  args={{
    data: chartData,
    series: [
      {
        key: 'Dutch Gas',
        label: 'Dutch Gas Prices',
        color: '#1f77b4',
        strokeWidth: 2,
        showPoints: true,
        showEndLabel: true,
      },
      {
        key: 'Asia LNG',
        label: 'Asia LNG Prices',
        color: '#ff7f0e',
        strokeWidth: 2,
        showPoints: true,
        showEndLabel: true,
      },
      {
        key: 'Brent Crude',
        label: 'Brent Crude Prices',
        color: '#2ca02c',
        strokeWidth: 2,
        showPoints: true,
        showEndLabel: true,
      },
    ],
    layout: 'single',
    width: 800,
    height: 400,
    xKey: 'date',
    yAxisConfig: {
      mode: 'all-ticks',
    },
    showGrid: true,
    showYAxis: true,
    showXAxis: true,
    showLegend: true,
  }}
/>
