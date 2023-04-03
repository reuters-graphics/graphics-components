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

  import Table from './Table.svelte';

  import { withComponentDocs, withStoryDocs } from '$docs/utils/withParams.js';

  // You can import JSON you need in stories directly in code!
  // @ts-ignore
  import pressFreedom from './stories/pressFreedom.json';
  import homeRuns from './stories/homeRuns.json';
  import richestWomen from './stories/richestWomen.json';

  const meta = {
    title: 'Components/Table',
    component: Table,
    ...withComponentDocs(componentDocs),
    // https://storybook.js.org/docs/svelte/essentials/controls
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    },
  };
</script>

<Meta {...meta} />

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
    source:
      "Source: <a href='https://en.wikipedia.org/wiki/Press_Freedom_Index'>Reporters Without Borders</a>",
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
    source:
      "Source: <a href='https://en.wikipedia.org/wiki/Press_Freedom_Index'>Reporters Without Borders</a>",
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
    notes:
      "Source: <a href='https://en.wikipedia.org/wiki/Press_Freedom_Index'>Reporters Without Borders</a>",
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
    notes:
      "Source: <a href='https://en.wikipedia.org/wiki/Press_Freedom_Index'>Reporters Without Borders</a>",
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
    source:
      "Source: <a href='https://en.wikipedia.org/wiki/Press_Freedom_Index'>Reporters Without Borders</a>",
  }}"
/>

<Story
  name="Format"
  {...withStoryDocs(formatDocs)}
  args="{{
    data: richestWomen,
    title: 'The Richest Women in the World',
    notes:
      "Source: <a href='https://www.forbes.com/sites/rachelsandler/2022/04/05/the-top-richest-women-in-the-world-2022/?sh=29c2f69446a8'>Forbes</a>",
    sortable: true,
    sortField: 'Net worth (in billions)',
    sortDirection: 'descending',
    fieldFormatters: { 'Net worth (in billions)': (v) => '$' + v },
  }}"
/>
