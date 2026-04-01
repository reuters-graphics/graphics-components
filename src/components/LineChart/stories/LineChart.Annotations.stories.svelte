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
  args={{
    data: stockDummyData.filter((d) => d.company === 'AAPL'),
    layout: 'single',
    xKey: 'date',
    yKey: 'endDayVal',
    textAnnotations: [
      {
        date: new Date('2024-01-10'),
        value: 185.5,
        text: 'Peak',
        yOffset: -15,
        className: 'annotation--peak',
      },
      {
        date: new Date('2024-03-01'),
        value: 175.2,
        text: 'Dip',
        yOffset: 15,
        className: 'annotation--dip',
      },
      {
        date: new Date('2024-05-15'),
        value: 195.0,
        text: 'Recovery',
        background: { padding: 6, rx: 4, className: 'annotation-bg--recovery' },
        className: 'annotation--recovery',
      },
    ],
    height: 250,
  }}
/>

<!-- Area highlights -->
<Story
  name="Annotations: Area highlights"
  exportName="AreaHighlights"
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
        className: 'highlight--q1',
      },
      {
        dateStart: new Date('2024-03-01'),
        dateEnd: new Date('2024-04-30'),
        label: 'Q2',
        className: 'highlight--q2',
      },
      {
        dateStart: new Date('2024-05-01'),
        dateEnd: new Date('2024-06-30'),
        label: 'Q3',
        className: 'highlight--q3',
      },
    ],
    height: 250,
  }}
/>

<!-- Combined annotations -->
<Story
  name="Annotations: Combined annotations"
  exportName="CombinedAnnotations"
  args={{
    data: stockDummyData.filter((d) => d.company === 'AAPL'),
    layout: 'single',
    xKey: 'date',
    yKey: 'endDayVal',
    areaHighlights: [
      {
        dateStart: new Date('2024-02-15'),
        dateEnd: new Date('2024-03-15'),
        className: 'campaign-area',
      },
    ],
    verticalLines: [
      {
        date: new Date('2024-02-15'),
        label: 'Start',
        lineClass: 'campaign-line',
      },
      {
        date: new Date('2024-03-15'),
        label: 'End',
        lineClass: 'campaign-line',
      },
    ],
    textAnnotations: [
      {
        date: new Date('2024-02-26'),
        value: 182,
        text: 'Campaign Period',
        background: { padding: 8, rx: 4, className: 'campaign-label-bg' },
        className: 'campaign-label',
      },
    ],
    height: 250,
  }}
/>

<!-- Line styling options -->
<Story
  name="Annotations: Line styling options"
  exportName="LineStyleOptions"
  args={{
    data: stockDummyData.filter((d) => d.company === 'AAPL'),
    layout: 'single',
    xKey: 'date',
    yKey: 'endDayVal',
    verticalLines: [
      {
        date: new Date('2024-01-20'),
        label: 'Solid',
        lineClass: 'vline--solid',
      },
      {
        date: new Date('2024-02-20'),
        label: 'Dashed',
        lineClass: 'vline--dashed',
      },
      {
        date: new Date('2024-03-20'),
        label: 'Dash-dot',
        lineClass: 'vline--dash-dot',
      },
      {
        date: new Date('2024-04-20'),
        label: 'Thin',
        lineClass: 'vline--thin',
      },
    ],
    height: 250,
  }}
/>

<!-- Highlight fill options -->
<Story
  name="Annotations: Highlight fill options"
  exportName="HighlightFillOptions"
  args={{
    data: stockDummyData.filter((d) => d.company === 'AAPL'),
    layout: 'single',
    xKey: 'date',
    yKey: 'endDayVal',
    areaHighlights: [
      {
        dateStart: new Date('2024-01-05'),
        dateEnd: new Date('2024-01-25'),
        label: 'Light blue',
        className: 'highlight--blue',
      },
      {
        dateStart: new Date('2024-02-05'),
        dateEnd: new Date('2024-02-25'),
        label: 'Light red',
        className: 'highlight--red',
      },
      {
        dateStart: new Date('2024-03-05'),
        dateEnd: new Date('2024-03-25'),
        label: 'Light green',
        className: 'highlight--green',
      },
      {
        dateStart: new Date('2024-04-05'),
        dateEnd: new Date('2024-04-25'),
        label: 'Strong yellow',
        className: 'highlight--yellow',
      },
      {
        dateStart: new Date('2024-05-05'),
        dateEnd: new Date('2024-05-25'),
        label: 'Strong purple',
        className: 'highlight--purple',
      },
    ],
    height: 250,
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
  :global(.annotation--peak) {
    fill: #e74c3c;
    font-size: 13px;
    font-weight: bold;
  }
  :global(.annotation--dip) {
    fill: #3498db;
    font-size: 12px;
  }
  :global(.annotation--recovery) {
    fill: #2ecc71;
    font-size: 12px;
  }
  :global(.annotation-bg--recovery) {
    fill: #ffffff;
  }

  // Area highlights story
  :global(.highlight--q1) {
    fill: #3498db;
    opacity: 0.1;
  }
  :global(.highlight--q2) {
    fill: #e74c3c;
    opacity: 0.1;
  }
  :global(.highlight--q3) {
    fill: #2ecc71;
    opacity: 0.1;
  }

  // Combined annotations story
  :global(.campaign-area) {
    fill: #f39c12;
    opacity: 0.15;
  }
  :global(.campaign-line) {
    stroke: #e74c3c;
    stroke-width: 2;
  }
  :global(.campaign-label) {
    fill: #fff;
    font-size: 13px;
    font-weight: bold;
  }
  :global(.campaign-label-bg) {
    fill: #f39c12;
  }

  // Line styling options story
  :global(.vline--solid) {
    stroke: #2980b9;
    stroke-width: 2;
  }
  :global(.vline--dashed) {
    stroke: #e67e22;
    stroke-width: 2;
    stroke-dasharray: 5 5;
  }
  :global(.vline--dash-dot) {
    stroke: #c0392b;
    stroke-width: 2;
    stroke-dasharray: 10 3 3 3;
  }
  :global(.vline--thin) {
    stroke: #27ae60;
    stroke-width: 1;
    opacity: 0.8;
  }

  // Highlight fill options story
  :global(.highlight--blue) {
    fill: #3498db;
    opacity: 0.1;
  }
  :global(.highlight--red) {
    fill: #e74c3c;
    opacity: 0.1;
  }
  :global(.highlight--green) {
    fill: #2ecc71;
    opacity: 0.1;
  }
  :global(.highlight--yellow) {
    fill: #f39c12;
    opacity: 0.25;
  }
  :global(.highlight--purple) {
    fill: #9b59b6;
    opacity: 0.25;
  }
</style>
