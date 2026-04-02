<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';

  // Component
  import LineChart from '../LineChart.svelte';

  // Data
  import stockDummyData from '../data/stocks.json';

  const { Story } = defineMeta({
    title: 'Components/Charts/LineChart/Reference',
    component: LineChart,
  });
</script>

<!-- All props reference -->
<Story
  name="All props reference (dummy)"
  exportName="AllPropsReference"
  tags={['!autodocs', '!dev']}
  args={{
    data: stockDummyData.filter((d) => d.company === 'AAPL'),
    layout: 'single',
    xKey: 'date',
    yKey: 'endDayVal',
    series: [
      {
        key: 'endDayVal',
        label: 'End day value',
        lineColour: '#1f77b4',
        strokeWidth: 2,
        lineClass: undefined,
        seriesClass: undefined,
        showEndLabel: true,
        showEndPoint: true,
        endPointRadius: 4,
        endPointFill: undefined,
        endPointStroke: undefined,
        endPointStrokeWidth: undefined,
        endLabelType: 'value' as const,
        endLabelPosition: {
          xOffset: undefined,
          yOffset: undefined,
          textAnchor: undefined,
        },
        endLabelFormatter: undefined,
      },
    ],
    chartGroups: undefined,
    yAxisConfig: {
      mode: 'top-only',
      prefix: '$',
      suffix: undefined,
      zeroBase: true,
      yFormatter: undefined,
    },
    xAxisConfig: {
      xAxisDateFormat: '%b %-d, %Y',
      xFormatter: undefined,
    },
    showXAxis: true,
    showYAxis: true,
    showGridX: false,
    showGridY: true,
    xTickCount: 5,
    yTickCount: 5,
    showLegend: false,
    smallMultiplesEndLabelsMode: 'first',
    smallMultiplesXAxisMode: 'first',
    showEndPoint: true,
    strokeWidth: undefined,
    lineClass: undefined,
    lineColour: undefined,
    endPointRadius: 4,
    endValueDecimalPlaces: undefined,
    width: 660,
    height: 250,
    margin: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 15,
    },
    scaleConfig: {
      xDomain: undefined,
      yDomain: undefined,
      padding: {
        top: undefined,
        right: undefined,
        bottom: undefined,
        left: undefined,
      },
    },
    responsive: false,
    responsiveRules: [
      {
        breakpoint: 768,
        layout: 'multiples',
        columnsPerRow: 2,
        fontSize: undefined,
        marginBottom: undefined,
      },
    ],
    beforeSVG: undefined,
    verticalLines: undefined,
    areaHighlights: undefined,
    annotations: undefined,
    children: undefined,
    afterChart: undefined,
  }}
/>
