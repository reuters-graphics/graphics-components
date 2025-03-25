<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Table from './Table.svelte';

  const { Story } = defineMeta({
    title: 'Components/Graphics/Table',
    component: Table,
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    },
  });
</script>

<script lang="ts">
  import pressFreedom from './demo/pressFreedom.json';
  import homeRuns from './demo/homeRuns.json';
  import richestWomen from './demo/richestWomen.json';

  const currencyFormat = (v: number) => '$' + v.toFixed(1);
</script>

<Story
  name="Demo"
  args={{
    width: 'normal',
    data: homeRuns,
  }}
/>

<!-- <Story
  name="Metadata"
  args={{
    width: 'normal',
    data: homeRuns,
    title: 'Career home run leaders',
    dek: 'In baseball, a home run (also known as a "dinger" or "tater") occurs when a batter hits the ball over the outfield fence. When a home run is hit, the batter and any runners on base are able to score.',
    notes: 'Note: As of Opening Day 2023',
    source: 'Source: Baseball Reference',
  }}
/>

<Story
  name="Truncate"
  args={{
    data: homeRuns,
    truncated: true,
    source: 'Source: Baseball Reference',
  }}
/>

<Story
  name="Paginate"
  args={{
    data: pressFreedom,
    title: 'Press Freedom Index',
    paginated: true,
    source: 'Source: Reporters Without Borders',
  }}
/>

<Story
  name="Search"
  args={{
    data: pressFreedom,
    searchable: true,
    paginated: true,
    title: 'Press Freedom Index',
    source: 'Source: Reporters Without Borders',
  }}
/>

<Story
  name="Filter"
  args={{
    data: pressFreedom,
    paginated: true,
    filterField: 'Region',
    title: 'Press Freedom Index',
    notes: 'Source: Reporters Without Borders',
  }}
/>

<Story
  name="Search and filter"
  args={{
    data: pressFreedom,
    searchable: true,
    filterField: 'Region',
    paginated: true,
    title: 'Press Freedom Index',
    dek: 'Reporters Without Borders ranks countries based on their level of press freedom using criteria such as the degree of media pluralism and violence against journalists.',
    source: 'Source: Reporters Without Borders',
  }}
/>

<Story
  name="Sort"
  args={{
    data: pressFreedom,
    sortable: true,
    sortField: 'Score',
    sortDirection: 'descending',
    paginated: true,
    title: 'Press Freedom Index',
    notes: 'Note: data as of 2018',
    source: 'Source: Reporters Without Borders',
  }}
/>

<Story
  name="Format"
  args={{
    data: richestWomen,
    title: 'The Richest Women in the World',
    source: 'Source: Forbes',
    sortable: true,
    sortField: 'Net worth (in billions)',
    sortDirection: 'descending',
    fieldFormatters: { 'Net worth (in billions)': currencyFormat },
  }}
/>

<Story
  name="Style"
  args={{
    id: 'custom-table',
    data: richestWomen,
    title: 'The Richest Women in the World',
    source: 'Source: Forbes',
  }}
/> -->
