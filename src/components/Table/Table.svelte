<!-- @component `Table` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-Table--default) -->
<script lang="ts">
  import { onMount } from 'svelte';

  /**
   * A source for the data.
   * @type []
   * @required
   */
  export let data: [];

  /**
   * A title that runs above the table.
   * @type {string}
   */
  export let title: string | null = null;

  /**
   * A block of text that runs above the table.
   * @type {string}
   */
  export let dek: string | null = null;

  /**
   * A footnote that runs below the table.
   * @type {string}
   */
  export let notes: string | null = null;

  /**
   * A source line that runs below the table.
   * @type {string}
   */
  export let source: string | null = null;

  /**
   * list of the fields to include in the table. By default everything goes.
   * @type []
   */
  export let includedFields: string[] = Object.keys(data[0]).filter(
    (f) => f !== 'searchStr'
  );

  /**
   * Whether or not the table is cutoff after a set number of rows.
   * @type {boolean}
   */
  export let truncated: boolean = false;

  /**
   * If the table is truncated, how many rows to allow before the cutoff.
   * @type {number}
   */
  export let truncateLength: number = 5;

  /**
   * Whether or not the table is paginated after a set number of rows.
   * @type {boolean}
   */
  export let paginated: boolean = false;

  /**
   * The default page size.
   * @type {number}
   */
  export let pageSize: number = 25;

  /**
   * Whether or not searches are allowed.
   * @type {boolean}
   */
  export let searchable: boolean = false;

  /**
   * The placeholder text that appears in the search box.
   * @type {string}
   */
  export let searchPlaceholder: string = 'Search in table';

  /**
   * A field to offer uses as an interactive filter.
   * @type {string}
   */
  export let filterField: string;

  /**
   * The label to place above the filter box
   * @type {string}
   */
  export let filterLabel: string;

  /**
   * Whether or not sorts are allowed.
   * @type {boolean}
   */
  export let sortable: boolean = false;

  /**
   * The column to sort by. By default it's the first header.
   * @type {string}
   */
  export let sortField: string = Object.keys(data[0])[0];

  /**
   * The columns that are allowed to sort. It's all of them by default.
   * @type {string}
   */
  export let sortableFields: string[] = Object.keys(data[0]).filter(
    (f) => f !== 'searchStr'
  );

  /**
   * The direction of the sort. By default it's ascending.
   * @type {SortDirection}
   */
  type SortDirection = 'ascending' | 'descending';
  export let sortDirection: SortDirection = 'ascending';

  /**
   * Custom field formatting functions. Should be keyed to the name of the field.
   * @type {object}
   */
  export let fieldFormatters: object = {};

  /** Width of the component within the text well. */
  type ContainerWidth = 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';
  export let width: ContainerWidth = 'normal';

  /** Add an ID to target with SCSS. */
  export let id: string = '';

  /** Add a class to target with SCSS. */
  export let cls: string = '';

  /** Import local helpers */
  import Block from '../Block/Block.svelte';
  import Pagination from './Pagination.svelte';
  import Search from './Search.svelte';
  import Select from './Select.svelte';
  import SortArrow from './SortArrow.svelte';
  import { filterArray, paginateArray, getOptions } from './utils.js';

  /** Set truncate, filtering and pagination configuration */
  let showAll = false;
  let pageNumber = 1;
  let searchText = '';
  const filterList = filterField ? getOptions(data, filterField) : undefined;
  let filterValue = '';
  $: filteredData = filterArray(data, searchText, filterField, filterValue);
  $: sortedData = sortArray(filteredData, sortField, sortDirection);
  $: currentPageData = truncated
    ? showAll
      ? sortedData
      : sortedData.slice(0, truncateLength + 1)
    : paginated
    ? paginateArray(sortedData, pageSize, pageNumber)
    : sortedData;

  //* * Handle show all, search, filter, sort and pagination events */
  function toggleTruncate(event) {
    showAll = !showAll;
  }

  function handleSearchInput(event) {
    searchText = event.detail.value;
    pageNumber = 1;
  }

  function handleFilterInput(event) {
    const value = event.detail.value;
    filterValue = value === 'All' ? '' : value;
    pageNumber = 1;
  }

  function handleSort(event) {
    if (!sortable) return;
    sortField = event.target.getAttribute('data-field');
    sortDirection = sortDirection === 'ascending' ? 'descending' : 'ascending';
  }

  function sortArray(array, column, direction) {
    if (!sortable) return array;
    return array.sort((a, b) => {
      if (a[column] < b[column]) {
        return direction === 'ascending' ? -1 : 1;
      } else if (a[column] > b[column]) {
        return direction === 'ascending' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  function formatValue(item, field) {
    const value = item[field];
    if (field in fieldFormatters) {
      const func = fieldFormatters[field];
      return func(value);
    } else {
      return value;
    }
  }

  /** Boot it up. */
  onMount(() => {
    data.forEach((d) => {
      // Compose the string we will allow users to search
      d.searchStr = includedFields
        .map((field) => d[field])
        .join(' ')
        .toLowerCase();
    });
  });
</script>

<Block width="{width}" id="{id}" cls="{cls}">
  <article class="table-wrapper">
    {#if title || dek || searchable || filterList}
      <header class="table--header">
        {#if title}
          <h2 class="table--header--title">{@html title}</h2>
        {/if}
        {#if dek}
          <p class="table--header--dek">{@html dek}</p>
        {/if}
        {#if searchable || filterList}
          <nav class="input">
            {#if filterList}
              <div class="table--header--filter">
                <Select
                  label="{filterLabel || filterField}"
                  options="{filterList}"
                  on:select="{handleFilterInput}"
                />
              </div>
            {/if}
            {#if searchable}
              <div class="table--header--search">
                <Search
                  bind:searchPlaceholder
                  on:search="{handleSearchInput}"
                />
              </div>
            {/if}
          </nav>
        {/if}
      </header>
    {/if}
    <section class="table">
      <table
        class:paginated
        class:truncated="{truncated &&
          !showAll &&
          data.length > truncateLength}"
      >
        <thead class="table--thead">
          <tr>
            {#each includedFields as field}
              <th
                scope="col"
                class="table--thead--th"
                class:sortable="{sortable && sortableFields.includes(field)}"
                class:sort-ascending="{sortable &&
                  sortField === field &&
                  sortDirection === 'ascending'}"
                class:sort-descending="{sortable &&
                  sortField === field &&
                  sortDirection === 'descending'}"
                data-field="{field}"
                on:click="{handleSort}"
              >
                {field}
                {#if sortable && sortableFields.includes(field)}
                  <div class="table--thead--sortarrow avoid-clicks">
                    <SortArrow
                      bind:sortDirection
                      active="{sortField === field}"
                    />
                  </div>
                {/if}
              </th>
            {/each}
          </tr>
        </thead>
        <tbody class="table--tbody">
          {#each currentPageData as item, idx}
            <tr data-row-index="{idx}">
              {#each includedFields as field}
                <td
                  data-row-index="{idx}"
                  data-field="{field}"
                  data-value="{item[field]}"
                >
                  {@html formatValue(item, field)}
                </td>
              {/each}
            </tr>
          {/each}
          {#if searchable && searchText && currentPageData.length === 0}
            <tr>
              <td class="no-results" colspan="{includedFields.length}">
                No results found for "{searchText}"
              </td>
            </tr>
          {/if}
        </tbody>
        {#if notes || source}
          <tfoot class="table--tfoot">
            {#if notes}
              <tr>
                <td colspan="{includedFields.length}">{@html notes}</td>
              </tr>
            {/if}
            {#if source}
              <tr>
                <td colspan="{includedFields.length}">{@html source}</td>
              </tr>
            {/if}
          </tfoot>
        {/if}
      </table>
    </section>
    {#if truncated && data.length > truncateLength}
      <nav aria-label="Show all button" class="show-all">
        <button on:click="{toggleTruncate}"
          >{#if showAll}Show fewer rows{:else}Show {data.length -
              truncateLength} more rows{/if}</button
        >
      </nav>
    {/if}
    {#if paginated}
      <Pagination
        bind:pageNumber
        bind:pageSize
        bind:pageLength="{currentPageData.length}"
        bind:n="{sortedData.length}"
      />{/if}
  </article>
</Block>

<style lang="scss">
  @import '../../scss/colours/thematic/tr';
  @import '../../scss/fonts/variables';

  .table-wrapper {
    font-size: 1rem;
    font-family: var(--theme-font-family-hed, $font-family-display);
    color: var(--theme-colour-text-primary, $tr-dark-grey);
  }

  .table--header {
    width: 100%;
    h2.table--header--title {
      font-weight: 500;
      color: var(--theme-colour-text-primary, $tr-dark-grey);
      font-size: 1.33rem;
      padding: 0;
      margin: 0.5rem 0;
    }
    p.table--header--dek {
      font-family: var(--theme-font-family-hed, $font-family-display);
      color: var(--theme-colour-text-primary, $tr-dark-grey);
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.4;
      padding: 0;
      margin: 0.5rem 0;
    }
  }

  section.table {
    overflow-x: auto;
  }
  section.table table {
    background-color: transparent;
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    thead {
      tr {
        th {
          border-bottom: 1px solid
            var(--theme-colour-text-primary, $tr-medium-grey);
          color: var(--theme-colour-text-primary, $tr-medium-grey);
          background-color: var(--theme-colour-background, #fff);
          font-size: 0.85rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.06rem;
          line-height: 1.4;
          padding: 0.5rem 0.25rem 0.5rem 0;
          &.sortable {
            cursor: pointer;
          }
          .table--thead--sortarrow {
            display: inline-block;
            margin: 0 0 0 0.125rem;
          }
        }
      }
    }
    tbody {
      td {
        font-size: 1rem;
        font-weight: 300;
        padding: 0.5rem 0.75rem 0.5rem 0;
        vertical-align: top;
        border-bottom: 1px solid var(--theme-colour-brand-rules, $tr-muted-grey);
        &.no-results {
          color: var(--theme-colour-text-secondary, $tr-muted-grey);
        }
      }
    }
    tfoot.table--tfoot {
      display: table-row;
      tr {
        border-bottom: 0;
      }
      td {
        font-weight: 300;
        color: var(--theme-colour-text-primary, $tr-dark-grey);
        font-size: 0.8rem;
        padding: 0.5rem 0 0 0;
      }
    }
    &.truncated {
      tbody tr:last-child:not(:first-child) {
        border-bottom: none;
        mask-image: linear-gradient(
          to bottom,
          var(--theme-colour-text-primary) 0%,
          transparent 100%
        );
        -webkit-mask-image: linear-gradient(
          to bottom,
          var(--theme-colour-text-primary) 0%,
          transparent 100%
        );
      }
    }
  }

  .avoid-clicks {
    pointer-events: none;
  }

  nav.input {
    margin: 0.5rem 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }

  nav.show-all {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    button {
      font-size: 0.8rem;
      font-family: var(--theme-font-family-hed, $font-family-display);
      font-weight: 500;
      min-width: 175px;
      padding: 0.33rem 0.5rem;
      border: 1px solid var(--theme-colour-brand-rules, $tr-muted-grey);
      border-radius: 4px;
      background: var(--theme-colour-background);
      color: var(--theme-colour-text-primary, $tr-medium-grey);
      cursor: pointer;
    }
  }
</style>
