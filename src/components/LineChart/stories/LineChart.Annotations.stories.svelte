<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';

  // Component
  import LineChart from '../LineChart.svelte';

  // Data
  import stockDummyData from '../data/stocks.json';

  const { Story } = defineMeta({
    title: 'Components/Charts/LineChart/Annotations and Highlights',
    component: LineChart,
  });
</script>

<!-- Vertical line highlights -->
<Story
  name="Annotations: Vertical line highlight"
  exportName="VerticalLineHighlight"
  tags={['!autodocs', '!dev']}
  args={{
    data: stockDummyData.filter((d) => d.company === 'AAPL'),
    layout: 'single',
    xKey: 'date',
    yKey: 'endDayVal',
    yAxisConfig: {
      prefix: '$',
      mode: 'all-ticks',
    },
    verticalLines: [
      {
        date: new Date('2024-04-15'),
        label: 'Product launch',
        labelYValue: 5,
        lineClass: 'vline--product-launch',
        labelClass: 'vline-label--product-launch',
      },
    ],
    height: 250,
    margin: { top: 20, right: 30, bottom: 30, left: 40 },
  }}
/>

<!-- Text annotations -->
<Story
  name="Annotations: Text labels with positioning"
  exportName="TextAnnotations"
  tags={['!autodocs', '!dev']}
  args={{
    data: stockDummyData.filter((d) => d.company === 'AAPL'),
    layout: 'single',
    xKey: 'date',
    yKey: 'endDayVal',
    yAxisConfig: {
      prefix: '$',
      mode: 'all-ticks',
    },
    annotations: [
      {
        date: new Date('2024-02-25'),
        value: 167,
        text: 'Peak',
        annotationClass: 'annotation--peak',
      },
      {
        date: new Date('2024-03-25'),
        value: 130,
        text: 'Dip',
        annotationClass: 'annotation--dip',
      },
    ],
    height: 250,
    margin: { top: 20, right: 30, bottom: 30, left: 40 },
  }}
/>

<!-- Area highlights -->
<Story
  name="Annotations: Area highlights"
  exportName="AreaHighlights"
  tags={['!autodocs', '!dev']}
  args={{
    data: stockDummyData.filter((d) => d.company === 'AAPL'),
    layout: 'single',
    xKey: 'date',
    yKey: 'endDayVal',
    areaHighlights: [
      {
        dateStart: new Date('2024-01-01'),
        dateEnd: new Date('2024-02-29'),
        label: 'Q1',
        labelYValue: 170,
        areaClass: 'highlight--q1',
        labelClass: 'highlight-label--q1',
      },
      {
        dateStart: new Date('2024-03-01'),
        dateEnd: new Date('2024-04-30'),
        label: 'Q2',
        labelYValue: 170,
        areaClass: 'highlight--q2',
        labelClass: 'highlight-label--q2',
      },
    ],
    height: 250,
    margin: { top: 20, right: 30, bottom: 30, left: 40 },
  }}
/>

<style lang="scss">
  // Vertical line highlight story
  :global(line.vline--product-launch) {
    stroke: orangered;
    stroke-width: 2;
  }
  :global(text.vline-label--product-launch) {
    fill: orangered;
    font-weight: 500;
  }

  // Text annotation story
  :global(text.annotation--peak) {
    fill: #e74c3c;
    font-weight: bold;
  }
  :global(text.annotation--dip) {
    fill: #3498db;
    font-style: italic;
  }

  // Area highlights story
  :global(rect.highlight--q1) {
    fill: #3498db;
    opacity: 0.1;
  }
  :global(rect.highlight--q2) {
    fill: #e74c3c;
    opacity: 0.1;
  }

  :global(text.highlight-label--q1) {
    fill: #1f5f93;
    font-weight: 600;
  }
  :global(text.highlight-label--q2) {
    fill: #a93226;
    font-weight: 600;
  }
</style>
