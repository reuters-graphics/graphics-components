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
    verticalLines: [
      {
        date: '2024-02-15',
        label: 'Product Launch',
        stroke: '#e74c3c',
        strokeWidth: 2,
      },
      {
        date: '2024-04-20',
        label: 'Earnings Report',
        stroke: '#3498db',
        strokeDasharray: '5,5',
      },
    ],
    height: 250,
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
        fill: '#e74c3c',
        fontSize: 13,
        fontWeight: 'bold',
        yOffset: -15,
      },
      {
        date: new Date('2024-03-01'),
        value: 175.2,
        text: 'Dip',
        fill: '#3498db',
        fontSize: 12,
        yOffset: 15,
      },
      {
        date: new Date('2024-05-15'),
        value: 195.0,
        text: 'Recovery',
        fill: '#2ecc71',
        fontSize: 12,
        background: {
          fill: '#ffffff',
          padding: 6,
          rx: 4,
        },
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
        fill: '#3498db',
        opacity: 0.1,
      },
      {
        dateStart: new Date('2024-03-01'),
        dateEnd: new Date('2024-04-30'),
        label: 'Q2',
        fill: '#e74c3c',
        opacity: 0.1,
      },
      {
        dateStart: new Date('2024-05-01'),
        dateEnd: new Date('2024-06-30'),
        label: 'Q3',
        fill: '#2ecc71',
        opacity: 0.1,
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
        fill: '#f39c12',
        opacity: 0.15,
      },
    ],
    verticalLines: [
      {
        date: new Date('2024-02-15'),
        label: 'Start',
        stroke: '#e74c3c',
        strokeWidth: 2,
      },
      {
        date: new Date('2024-03-15'),
        label: 'End',
        stroke: '#e74c3c',
        strokeWidth: 2,
      },
    ],
    textAnnotations: [
      {
        date: new Date('2024-02-26'),
        value: 182,
        text: 'Campaign Period',
        fill: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
        background: {
          fill: '#f39c12',
          padding: 8,
          rx: 4,
        },
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
        stroke: '#2980b9',
        strokeWidth: 2,
      },
      {
        date: new Date('2024-02-20'),
        label: 'Dashed',
        stroke: '#e67e22',
        strokeWidth: 2,
        strokeDasharray: '5,5',
      },
      {
        date: new Date('2024-03-20'),
        label: 'Dash-dot',
        stroke: '#c0392b',
        strokeWidth: 2,
        strokeDasharray: '10,3,3,3',
      },
      {
        date: new Date('2024-04-20'),
        label: 'Thin',
        stroke: '#27ae60',
        strokeWidth: 1,
        opacity: 0.8,
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
        label: 'Light Blue',
        fill: '#3498db',
        opacity: 0.1,
      },
      {
        dateStart: new Date('2024-02-05'),
        dateEnd: new Date('2024-02-25'),
        label: 'Light Red',
        fill: '#e74c3c',
        opacity: 0.1,
      },
      {
        dateStart: new Date('2024-03-05'),
        dateEnd: new Date('2024-03-25'),
        label: 'Light Green',
        fill: '#2ecc71',
        opacity: 0.1,
      },
      {
        dateStart: new Date('2024-04-05'),
        dateEnd: new Date('2024-04-25'),
        label: 'Strong Yellow',
        fill: '#f39c12',
        opacity: 0.25,
      },
      {
        dateStart: new Date('2024-05-05'),
        dateEnd: new Date('2024-05-25'),
        label: 'Strong Purple',
        fill: '#9b59b6',
        opacity: 0.25,
      },
    ],
    height: 250,
  }}
/>
