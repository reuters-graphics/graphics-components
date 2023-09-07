<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // Don't lose the "?raw" in markdown imports!
  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import metadataDocs from './stories/docs/metadata.md?raw';
  // @ts-ignore
  import truncateDocs from './stories/docs/truncate.md?raw';
  // @ts-ignore
  import paginateDocs from './stories/docs/paginate.md?raw';
  // @ts-ignore
  import searchDocs from './stories/docs/search.md?raw';
  // @ts-ignore
  import filterDocs from './stories/docs/filter.md?raw';
  // @ts-ignore
  import bothDocs from './stories/docs/both.md?raw';
  // @ts-ignore
  import sortDocs from './stories/docs/sort.md?raw';
  // @ts-ignore
  import formatDocs from './stories/docs/format.md?raw';
  // @ts-ignore
  import styleDocs from './stories/docs/style.md?raw';

  import Table from './Table.svelte';

  import { withComponentDocs, withStoryDocs } from '$docs/utils/withParams.js';

  // @ts-ignore
  import pressFreedom from './stories/pressFreedom.json';
  import homeRuns from './stories/homeRuns.json';
  import richestWomen from './stories/richestWomen.json';

  const metaProps = {
    ...withComponentDocs(componentDocs),
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    },
  };
</script>

<Meta title="Components/Table" component="{Table}" {...metaProps} />

<Template let:args>
  <Table {...args} />
</Template>

<Story
  name="Default"
  args="{{
    width: 'normal',
    data: homeRuns,
  }}"
/>

<Story
  name="Metadata"
  {...withStoryDocs(metadataDocs)}
  args="{{
    width: 'normal',
    data: homeRuns,
    title: 'Career home run leaders',
    dek: 'In baseball, a home run (also known as a "dinger" or "tater") occurs when a batter hits the ball over the outfield fence. When a home run is hit, the batter and any runners on base are able to score.',
    notes: 'Note: As of Opening Day 2023',
    source: 'Source: Baseball Reference',
  }}"
/>

<Story
  name="Truncate"
  {...withStoryDocs(truncateDocs)}
  args="{{
    data: homeRuns,
    truncated: true,
    source: 'Source: Baseball Reference',
  }}"
/>

<Story
  name="Paginate"
  {...withStoryDocs(paginateDocs)}
  args="{{
    data: pressFreedom,
    title: 'Press Freedom Index',
    paginated: true,
    source: 'Source: Reporters Without Borders',
  }}"
/>

<Story
  name="Search"
  {...withStoryDocs(searchDocs)}
  args="{{
    data: pressFreedom,
    searchable: true,
    paginated: true,
    title: 'Press Freedom Index',
    source: 'Source: Reporters Without Borders',
  }}"
/>

<Story
  name="Filter"
  {...withStoryDocs(filterDocs)}
  args="{{
    data: pressFreedom,
    paginated: true,
    filterField: 'Region',
    title: 'Press Freedom Index',
    notes: 'Source: Reporters Without Borders',
  }}"
/>

<Story
  name="Search and filter"
  {...withStoryDocs(bothDocs)}
  args="{{
    data: pressFreedom,
    searchable: true,
    filterField: 'Region',
    paginated: true,
    title: 'Press Freedom Index',
    dek: 'Reporters Without Borders ranks countries based on their level of press freedom using criteria such as the degree of media pluralism and violence against journalists.',
    source: 'Source: Reporters Without Borders',
  }}"
/>

<Story
  name="Sort"
  {...withStoryDocs(sortDocs)}
  args="{{
    data: pressFreedom,
    sortable: true,
    sortField: 'Score',
    sortDirection: 'descending',
    paginated: true,
    title: 'Press Freedom Index',
    notes: 'Note: data as of 2018',
    source: 'Source: Reporters Without Borders',
  }}"
/>

<Story
  name="Format"
  {...withStoryDocs(formatDocs)}
  args="{{
    data: richestWomen,
    title: 'The Richest Women in the World',
    source: 'Source: Forbes',
    sortable: true,
    sortField: 'Net worth (in billions)',
    sortDirection: 'descending',
    fieldFormatters: { 'Net worth (in billions)': (v) => '$' + v.toFixed(1) },
  }}"
/>

<Story
  name="Style"
  {...withStoryDocs(styleDocs)}
  args="{{
    id: 'custom-table',
    data: richestWomen,
    title: 'The Richest Women in the World',
    source: 'Source: Forbes',
  }}"
  ,
/>
