<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { pivotToWideData } from '../utils/index.js';

  // Component
  import LineChart from '../LineChart.svelte';
  import GraphicBlock from '../../GraphicBlock/GraphicBlock.svelte';

  // Data
  import stockDummyData from '../data/stocks.json';

  const { Story } = defineMeta({
    title: 'Components/Charts/LineChart/Using with ArchieML',
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
<Story name="ArchieML single line" exportName="ArchieMLSingleLine">
  <GraphicBlock
    width="wide"
    textWidth="wide"
    title="Apple stock price"
    class="apple-stock-block"
  >
    <LineChart
      data={stockDummyData.filter((d) => d.company === 'AAPL')}
      class="apple-stock-block"
      lineClass="apple-data-line"
      xKey="date"
      yKey="endDayVal"
      xAxisConfig={{ xAxisDateFormat: '%b %-d, %Y' }}
      yAxisConfig={{
        suffix: '',
        prefix: '$',
        zeroBase: true,
        mode: 'all-ticks',
      }}
      height={250}
      margin={{ left: 30, right: 60 }}
    />
  </GraphicBlock>
</Story>

<!-- Multiple lines chart -->
<Story name="ArchieML multiple lines">
  <GraphicBlock
    width="wider"
    textWidth="wider"
    title="Stock prices"
    class="stocks-block"
  >
    <LineChart
      data={stockWideData}
      series={[
        {
          key: 'AAPL',
          label: 'Apple',
          lineColour: '#1f77b4',
          endLabelType: 'label' as const,
        },
        {
          key: 'GOOGL',
          label: 'Google',
          lineColour: '#2ca02c',
          endLabelType: 'label' as const,
        },
        {
          key: 'MSFT',
          label: 'Microsoft',
          lineColour: '#ff7f0e',
          endLabelType: 'label' as const,
        },
        {
          key: 'AMZN',
          label: 'Amazon',
          lineColour: '#d62728',
          endLabelType: 'label' as const,
        },
      ]}
      layout="multiples"
      xKey="date"
      xAxisConfig={{ xAxisDateFormat: '%b %-d, %Y' }}
      yAxisConfig={{ prefix: '$', mode: 'all-ticks' }}
      showGridY={false}
      height={300}
      margin={{ bottom: 20, left: 30, right: 100 }}
      numColumns={4}
    />
  </GraphicBlock>
</Story>
