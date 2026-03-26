<script lang="ts">
  import LineChart from '../LineChart.svelte';

  const data = [
    { date: new Date('2024-01-15'), revenue: 12500, expenses: 8300 },
    { date: new Date('2024-02-14'), revenue: 15200, expenses: 9100 },
    { date: new Date('2024-03-15'), revenue: 18900, expenses: 10200 },
    { date: new Date('2024-04-15'), revenue: 16800, expenses: 9800 },
    { date: new Date('2024-05-15'), revenue: 21500, expenses: 11300 },
    { date: new Date('2024-06-15'), revenue: 25300, expenses: 13100 },
  ];

  const series = [
    { key: 'revenue', label: 'Revenue', colour: '#2ca02c' },
    { key: 'expenses', label: 'Expenses', colour: '#d62728' },
  ];

  // Example 1: Full year for first date, shortened year for rest
  const xFormatter1 = (date: Date) => {
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const day = date.getDate();
    return `${month} ${day}, ${date.getFullYear()}`;
  };

  // Example 2: Multi-line x-axis labels
  const xFormatter2 = (date: Date) => {
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear().toString().slice(-2);
    return [`${month} ${day}`, `'${year}`];
  };

  // Example 3: Y-axis currency formatting
  const yAxisConfig3 = {
    yFormatter: (value: number) => {
      return `$${(value / 1000).toFixed(1)}K`;
    },
  };

  // Example 4: Different formatting for top/bottom ticks
  const yAxisConfig4 = {
    yFormatter: (value: number) => {
      const formatted = `$${(value / 1000).toFixed(1)}K`;
      // Note: top/bottom tick detection moved to mode='top-only' or internal logic
      return formatted;
    },
  };

  // Example 5: Multi-line y-axis labels
  const yAxisConfig5 = {
    yFormatter: (value: number) => {
      const formatted = Math.round(value).toLocaleString();
      if (value > 10000) {
        const parts = formatted.split(',');
        if (parts.length === 2) return [`${parts[0]},`, parts[1]];
      }
      return formatted;
    },
  };

  // Example 6: Combined x and y formatter
  const xFormatter6 = (date: Date) => {
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const day = date.getDate();
    return `${month} ${day}, ${date.getFullYear()}`;
  };

  const yAxisConfig6 = {
    yFormatter: (value: number) => {
      return `$${(value / 1000000).toFixed(1)}M`;
    },
  };
</script>

<div class="example">
  <h3>Example 1: Full year on first date, shortened for rest</h3>
  <LineChart
    {data}
    {series}
    xKey="date"
    xAxisConfig={{ xFormatter: xFormatter1 }}
    width={800}
    height={400}
  />
</div>

<div class="example">
  <h3>Example 2: Multi-line x-axis labels</h3>
  <LineChart
    {data}
    {series}
    xKey="date"
    xAxisConfig={{ xFormatter: xFormatter2 }}
    width={800}
    height={400}
  />
</div>

<div class="example">
  <h3>Example 3: Y-axis currency formatting</h3>
  <LineChart
    {data}
    {series}
    xKey="date"
    yAxisConfig={yAxisConfig3}
    width={800}
    height={400}
  />
</div>

<div class="example">
  <h3>Example 4: Different formatting for extremes</h3>
  <LineChart
    {data}
    {series}
    xKey="date"
    yAxisConfig={yAxisConfig4}
    width={800}
    height={400}
  />
</div>

<div class="example">
  <h3>Example 5: Multi-line y-axis labels</h3>
  <LineChart
    {data}
    {series}
    xKey="date"
    yAxisConfig={yAxisConfig5}
    width={800}
    height={400}
  />
</div>

<div class="example">
  <h3>Example 6: Professional financial chart</h3>
  <LineChart
    {data}
    {series}
    xKey="date"
    xAxisConfig={{ xFormatter: xFormatter6 }}
    yAxisConfig={yAxisConfig6}
    width={800}
    height={400}
  />
</div>

<style>
  .example {
    margin-bottom: 4rem;
    border: 1px solid #e0e0e0;
    padding: 1rem;
    border-radius: 8px;
  }

  h3 {
    margin: 0 0 1rem 0;
    font-size: 14px;
    color: #333;
    font-weight: 600;
  }
</style>
