<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import {
    pivotToWideData,
    prepareMultilineSmallMultiplesData,
  } from './utils/index.js';
  import { prettifyDate, slugify } from '../../utils/index.js';

  // Component
  import LineChart from './LineChart.svelte';

  // Data
  import stockDummyData from './data/stocks.json';
  import countriesData from './data/countries.json';

  const { Story } = defineMeta({
    title: 'Components/Charts/LineChart',
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
      //   strokeWidth: 2,
      endLabelType: 'label' as const,
      showEndLabel: true,
    })),
  }));

  // Formatter helpers for axis-formatting stories
  const xFormatterTwoLine = (d: Date): string | string[] => {
    const month = d.toLocaleDateString('en-GB', { month: 'short' });
    const year = d.getFullYear().toString();
    return [prettifyDate(month), year];
  };

  const yFormatterLocale = (v: number): string | string[] =>
    `$${v.toLocaleString('en-US')}`;

  // Additional formatter examples
  const yFormatterMultiLine = (v: number) => {
    const formatted = v / 10000;
    if (v === 20000) {
      return [`$${formatted} million`, 'per acre'];
    }
    return `$${formatted} mln`;
  };

  const endLabelFormatterUnits = (value: number) => `$${value}`;

  const xFormatterShort = (d: Date, idx: number) => {
    // Get the abbreviated month name e.g. "Jan"
    const month = d.toLocaleDateString('en-US', { month: 'short' });

    // Get the full year e.g. 2024
    const fullYear = d.getFullYear();

    // Get the last 2 digits of the year e.g. "24"
    const shortYear = String(fullYear).slice(-2);

    // For the first tick show the full year e.g. "Jan 2024"
    // For all other ticks show the short year with apostrophe e.g. "Jan '24"
    const dateLabel =
      idx === 0 ? `${month} ${fullYear}` : `${month} '${shortYear}`;

    // Format the date in Reuters style
    return prettifyDate(dateLabel);
  };
</script>

<!-- Single chart stories -->
<Story
  name="Single line"
  tags={['!autodocs', '!dev']}
  args={{
    data: stockDummyData.filter((d) => d.company === 'AAPL'),
    xKey: 'date',
    yKey: 'endDayVal',
    xAxisConfig: { xAxisDateFormat: '%b %-d, %Y' },
    yAxisConfig: { suffix: '', prefix: '$', zeroBase: true, mode: 'all-ticks' },
    height: 250,
    margin: { left: 15, right: 60 },
  }}
/>
<Story
  name="Multiple lines"
  tags={['!autodocs', '!dev']}
  parameters={{
    controls: { include: ['layout'] },
  }}
  args={{
    data: stockWideData,
    series: [
      {
        key: 'AAPL',
        label: 'Apple',
        colour: '#1f77b4',
        endLabelType: 'label' as const,
      },
      {
        key: 'GOOGL',
        label: 'Google',
        colour: '#2ca02c',
        endLabelType: 'label' as const,
      },
      {
        key: 'MSFT',
        label: 'Microsoft',
        colour: '#ff7f0e',
        endLabelType: 'label' as const,
      },
      {
        key: 'AMZN',
        label: 'Amazon',
        colour: '#d62728',
        endLabelType: 'label' as const,
      },
    ],
    layout: 'single',
    xKey: 'date',
    xAxisConfig: { xAxisDateFormat: '%b %-d, %Y' },
    yAxisConfig: { prefix: '$', mode: 'all-ticks' },
    showGridY: false,
    height: 250,
    margin: { right: 80 },
  }}
/>

<!-- Small multiples stories -->
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
    // margin: { top: 20, right: 70, bottom: 60, left: 30 },
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

<!-- X axis formatting stories -->
<Story
  name="Axis formatting: x-axis D3 format string"
  exportName="XAxisD3Format"
  tags={['!autodocs', '!dev']}
  args={{
    data: stockDummyData.filter((d) => d.company === 'AAPL'),
    xKey: 'date',
    yKey: 'endDayVal',
    xAxisConfig: { xAxisDateFormat: "%b '%y" },
    yAxisConfig: { prefix: '$', mode: 'all-ticks' },
    margin: { left: 30, right: 60 },
    height: 250,
  }}
/>

<Story
  name="Formatter examples: x-axis short date format"
  exportName="XAxisShortFormat"
  tags={['!autodocs', '!dev']}
  parameters={{
    controls: { include: ['xAxisConfig'] },
  }}
  args={{
    data: stockDummyData.filter((d) => d.company === 'AAPL'),
    xKey: 'date',
    yKey: 'endDayVal',
    xAxisConfig: { xFormatter: xFormatterShort },
    yAxisConfig: { prefix: '$', mode: 'all-ticks' },
    height: 250,
    margin: { left: 50, bottom: 50, right: 30 },
  }}
/>

<Story
  name="Axis formatting: x-axis multi-line formatter"
  exportName="XAxisMultiLineFormatter"
  tags={['!autodocs', '!dev']}
  args={{
    data: stockDummyData.filter((d) => d.company === 'AAPL'),
    xKey: 'date',
    yKey: 'endDayVal',
    xAxisConfig: { xFormatter: xFormatterTwoLine },
    yAxisConfig: { prefix: '$', mode: 'all-ticks' },
    height: 250,
    margin: { left: 15, right: 60, bottom: 40 },
  }}
/>

<!-- Y axis formatting stories -->
<Story
  name="Axis formatting: y-axis units & modes"
  exportName="YAxisUnitsMode"
  tags={['!autodocs', '!dev']}
  args={{
    data: stockDummyData.filter((d) => d.company === 'AAPL'),
    xKey: 'date',
    yKey: 'endDayVal',
    xAxisConfig: { xAxisDateFormat: "%b '%y" },
    yAxisConfig: { prefix: '$', suffix: ' per barrel', mode: 'top-only' },
    endLabelFormatter: endLabelFormatterUnits,
    height: 250,
    margin: { left: 15, right: 60 },
  }}
/>
<Story
  name="Axis formatting: y-axis custom formatter"
  exportName="YAxisCustomFormatter"
  tags={['!autodocs', '!dev']}
  args={{
    data: stockDummyData
      .filter((d) => d.company === 'AAPL')
      .map((d) => ({ ...d, endDayVal: d.endDayVal * 100 })),
    xKey: 'date',
    yKey: 'endDayVal',
    xAxisConfig: { xAxisDateFormat: "%b '%y" },
    yAxisConfig: {
      yFormatter: yFormatterLocale,
      mode: 'all-ticks',
      zeroBase: false,
    },
    height: 250,
    margin: { left: 15, right: 60 },
  }}
/>

<Story
  name="Formatter examples: y-axis multi-line abbreviation"
  exportName="YAxisMultiLineAbbrev"
  tags={['!autodocs', '!dev']}
  args={{
    data: stockDummyData
      .filter((d) => d.company === 'AAPL')
      .map((d) => ({ ...d, endDayVal: d.endDayVal * 100 })),
    xKey: 'date',
    yKey: 'endDayVal',
    xAxisConfig: { xAxisDateFormat: "%b '%y" },
    yAxisConfig: {
      yFormatter: yFormatterMultiLine,
      mode: 'all-ticks',
      zeroBase: false,
    },
    endLabelFormatter: (d) => `$${d / 10000} mln`,
    height: 250,
    margin: { left: 15, right: 60 },
  }}
/>

<!-- All props -->
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
        colour: '#1f77b4',
        strokeWidth: 2,
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
    children: undefined,
    afterChart: undefined,
  }}
/>
