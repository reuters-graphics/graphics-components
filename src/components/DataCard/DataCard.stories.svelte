<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import DataCard from './DataCard.svelte';
  import DataCardTopline from './DataCardTopline.svelte';
  import DataCardBigNumber from './DataCardBigNumber.svelte';
  import DataCardLabel from './DataCardLabel.svelte';
  import DataCardColumns from './DataCardColumns.svelte';
  import DataCardColumn from './DataCardColumn.svelte';
  import DataCardChartWrap from './DataCardChartWrap.svelte';
  import DataCardFootnote from './DataCardFootnote.svelte';
  import DataCardRow from './DataCardRow.svelte';

  const { Story } = defineMeta({
    title: 'Components/Graphics/DataCard',
    component: DataCard,
    tags: ['autodocs'],
    argTypes: {
      width: {
        control: { type: 'select' },
        options: ['single', 'double'],
        description:
          'Named card width: `single` for one-number cards, `double` for two-column cards and charts. Override with the `--dc-card-max-width` CSS variable.',
      },
      href: {
        control: 'text',
        description:
          'When set, the whole card renders as a link with a hover affordance.',
      },
      target: {
        control: 'text',
        description: 'Link target when `href` is set. Defaults to `_blank`.',
      },
    },
  });
</script>

<!-- The primary example: a single card showing one headline statistic. A card
     fills the width it's given (it's a CSS size container, so it can't
     shrink-wrap), so pick a named width that fits the content — here `single`,
     for one-number cards. -->
<Story name="Card" args={{ width: 'single' }}>
  <DataCard width="single">
    <DataCardTopline>Today's high</DataCardTopline>
    <DataCardLabel muted>June 17–18</DataCardLabel>
    <DataCardBigNumber value="80" unit="°F" />
    <DataCardLabel>Forecast</DataCardLabel>
  </DataCard>
</Story>

<!-- A row of cards. When the row is wide they sit side by side and share the
     space evenly; each card scales its own type to the width it gets. -->
<Story name="Row" tags={['!autodocs']}>
  <DataCardRow maxWidth={540}>
    <DataCard>
      <DataCardTopline>Today's high</DataCardTopline>
      <DataCardBigNumber value="80" unit="°F" />
      <DataCardLabel>Forecast</DataCardLabel>
    </DataCard>
    <DataCard>
      <DataCardTopline>This year</DataCardTopline>
      <DataCardBigNumber value="61" unit="°F" />
      <DataCardLabel muted>Average to date</DataCardLabel>
    </DataCard>
    <DataCard>
      <DataCardTopline>Record</DataCardTopline>
      <DataCardBigNumber value="118" unit="°F" />
      <DataCardLabel muted>Set in 2024</DataCardLabel>
    </DataCard>
  </DataCardRow>
</Story>

<!-- Two value columns inside one card, laid out with `DataCardColumns`. The
     `double` width gives the two columns room to breathe. -->
<Story name="Two columns" tags={['!autodocs']}>
  <DataCard width="double">
    <DataCardTopline>Today's high</DataCardTopline>
    <DataCardLabel muted>June 17–18</DataCardLabel>
    <DataCardColumns>
      <DataCardColumn>
        <DataCardBigNumber value="80" unit="°F" />
        <DataCardLabel>Forecast</DataCardLabel>
      </DataCardColumn>
      <DataCardColumn>
        <DataCardBigNumber value="+4.2" unit="°" color="#d64000" />
        <DataCardLabel color="#d64000">Above normal</DataCardLabel>
      </DataCardColumn>
    </DataCardColumns>
    <DataCardFootnote>* Calculated in UTC for comparison</DataCardFootnote>
  </DataCard>
</Story>

<!-- When the cards don't all fit, the row turns into a horizontal swipe carousel
     with scroll-snap. It only scrolls on real overflow — the 360px frame below is
     narrow enough to trigger it. Scroll or drag sideways to move between the
     snapped cards. -->
<Story name="Carousel" tags={['!autodocs']}>
  <div style="max-width: 360px; border: 1px dashed #ccc; padding: 8px;">
    <DataCardRow>
      {#each ['Madrid', 'Lisbon', 'Rome', 'Athens', 'Cairo'] as city (city)}
        <DataCard>
          <DataCardTopline>{city}</DataCardTopline>
          <DataCardBigNumber value="9{city.length}" unit="°F" />
          <DataCardLabel>Forecast high</DataCardLabel>
        </DataCard>
      {/each}
    </DataCardRow>
  </div>
</Story>

<!-- A card that wraps a chart. `DataCardChartWrap` grows to fill the leftover
     card height beneath fixed-size siblings. Charts use the `double` width. -->
<Story name="With a chart" tags={['!autodocs']}>
  <DataCard width="double">
    <DataCardTopline>How this year compares</DataCardTopline>
    <DataCardChartWrap>
      <svg viewBox="0 0 180 70" width="100%" role="img" aria-label="Trend">
        <polyline
          points="8,56 24,50 40,52 56,40 72,38 88,30 104,34 120,22 136,18 152,12 168,16"
          fill="none"
          stroke="#d64000"
          stroke-width="2"
        />
        <polyline
          points="8,58 24,54 40,55 56,48 72,46 88,42 104,44 120,38 136,36 152,32 168,34"
          fill="none"
          stroke="#999"
          stroke-width="1.5"
          stroke-dasharray="3 3"
        />
      </svg>
    </DataCardChartWrap>
  </DataCard>
</Story>

<!-- The chart wrapper works in a `single`-width card too, for a compact
     sparkline tucked under a headline number — here a president's approval
     trend. -->
<Story name="Single column chart" tags={['!autodocs']}>
  <DataCard width="single">
    <DataCardTopline>Approval rating</DataCardTopline>
    <DataCardBigNumber value="43" unit="%" />
    <DataCardChartWrap>
      <svg
        viewBox="0 0 90 36"
        width="100%"
        role="img"
        aria-label="Approval rating trend"
      >
        <polyline
          points="2,9 12,11 22,8 32,13 42,15 52,14 62,19 72,21 82,23 88,25"
          fill="none"
          stroke="#d64000"
          stroke-width="2"
        />
      </svg>
    </DataCardChartWrap>
    <DataCardLabel muted>Jan–Jun 2026</DataCardLabel>
  </DataCard>
</Story>

<!-- Pass `href` to turn the whole card into a link with a hover affordance. -->
<Story name="As a link" tags={['!autodocs']}>
  <DataCard href="#">
    <DataCardTopline>Hottest day on record</DataCardTopline>
    <DataCardBigNumber value="118" unit="°F" />
  </DataCard>
</Story>
