<!-- @component `Table` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-text-elements-table--docs) -->
<script lang="ts">
  /** Import local helpers */
  import Block from '../Block/Block.svelte';
  import Pagination from './components/Pagination.svelte';
  import Select from './components/Select.svelte';
  import SortArrow from './components/SortArrow.svelte';
  import SearchInput from '../SearchInput/SearchInput.svelte';
  import {
    filterArray,
    paginateArray,
    getOptions,
    sortArray,
    formatValue,
    type FieldFormatters,
  } from './utils';

  // Types
  import type { Option } from '$lib/components/@types/global';

  interface Props<T extends Record<string, unknown>> {
    /** Data for the table as an array. */
    data: T[];

    /** A title that runs above the table. */
    title?: string;
    /** A block of text that runs above the table. */
    dek?: string;
    /** A footnote that runs below the table. */
    notes?: string;
    /** A source line that runs below the table. */
    source?: string;
    /** List of the fields to include in the table. By default everything goes. */
    includedFields?: string[];
    /** Whether or not the table is cutoff after a set number of rows. */
    truncated?: boolean;
    /** If the table is truncated, how many rows to allow before the cutoff. */
    truncateLength?: number;
    /** Whether or not the table is paginated after a set number of rows. */
    paginated?: boolean;
    /** The default page size. */
    pageSize?: number;
    /** Whether or not searches are allowed. */
    searchable?: boolean;
    /** The placeholder text that appears in the search box. */
    searchPlaceholder?: string;
    /**  A field to offer uses as an interactive filter. */
    filterField?: string;
    /** The label to place above the filter box. */
    filterLabel?: string;
    /** Whether or not sorts are allowed. */
    sortable?: boolean;
    /** The column to sort by. By default it's the first header. */
    sortField?: string;
    /** The columns that are allowed to sort. It's all of them by default. */
    sortableFields?: string[];
    /** The direction of the sort. By default it's ascending. */
    sortDirection?: 'ascending' | 'descending';
    /** Custom field formatting functions. Should be keyed to the name of the field. */
    fieldFormatters?: FieldFormatters<T>;
    /** Width of the component within the text well. */
    width?: 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';
    /** Add an ID to target with SCSS. */
    id?: string;
    /** Add a class to target with SCSS. */
    class?: string;
  }

  let {
    data,
    title,
    dek,
    notes,
    source,
    includedFields = Object.keys(data[0]).filter((f) => f !== 'searchStr'),
    truncated = false,
    truncateLength = 5,
    paginated = false,
    pageSize = 25,
    searchable = false,
    searchPlaceholder = 'Search in table',
    filterField = '',
    filterLabel,
    sortable = false,
    sortField = Object.keys(data[0])[0],
    sortableFields = Object.keys(data[0]).filter((f) => f !== 'searchStr'),
    sortDirection = $bindable('ascending'),
    fieldFormatters,
    width = 'normal',
    id = '',
    class: cls = '',
  }: Props<Record<string, unknown>> = $props();

  /** Set truncate, filtering and pagination configuration */
  let showAll = $state(false);
  let pageNumber = $state(1);
  let searchText = $state('');
  let filterList = $derived(
    filterField ? getOptions(data, filterField) : undefined
  );
  let filterValue = $state('');

  /** Helper functions that modify variables within this component */
  //* * Handle show all, search, filter, sort and pagination events */
  function toggleTruncate() {
    showAll = !showAll;
  }

  /** Filters table data based on the input value in the search bar */
  function handleSearchInput(newSearchText: string) {
    searchText = newSearchText;
    pageNumber = 1;
  }

  function handleFilterInput(newSearchText: string) {
    filterValue = newSearchText === 'All' ? '' : newSearchText;
    pageNumber = 1;
  }

  function handleSort(event: MouseEvent) {
    if (!sortable) return;
    sortField = (event.target as HTMLElement).getAttribute('data-field') || '';
    sortDirection = sortDirection === 'ascending' ? 'descending' : 'ascending';
  }

  /** Add the `searchStr` field to data */
  let searchableData = $derived.by(() => {
    return data.map((d) => {
      return {
        ...d,
        searchStr: includedFields
          .map((field) => d[field])
          .join(' ')
          .toLowerCase(),
      };
    });
  });
  /** Set up the data pipeline */
  let filteredData = $derived.by(() =>
    filterArray(searchableData, searchText, filterField, filterValue)
  );

  let sortedData = $derived.by(() =>
    sortArray(filteredData, sortField, sortDirection, sortable)
  );

  let currentPageData = $derived.by(() => {
    if (truncated) {
      return showAll ? sortedData : sortedData.slice(0, truncateLength + 1);
    }
    if (paginated) {
      return paginateArray(sortedData, pageSize, pageNumber);
    }
    return sortedData;
  });
</script>

<Block {width} {id} class="fmy-6 {cls}">
  <div class="table-wrapper">
    {#if title || dek || searchable || filterList}
      <div class="table--header w-full">
        {#if title}
          <h3 class="table--header--title">{@html title}</h3>
        {/if}
        {#if dek}
          <p class="table--header--dek body-note">{@html dek}</p>
        {/if}
        {#if searchable || filterList}
          <nav class="input fmx-0 fmy-2">
            {#if filterList}
              <div class="table--header--filter">
                <Select
                  label={filterLabel || filterField}
                  options={filterList as Option[]}
                  onselect={handleFilterInput}
                />
              </div>
            {/if}
            {#if searchable}
              <div class="table--header--search">
                <SearchInput {searchPlaceholder} onsearch={handleSearchInput} />
              </div>
            {/if}
          </nav>
        {/if}
      </div>
    {/if}
    <div class="table w-full">
      <table
        class="w-full"
        class:paginated
        class:truncated={truncated &&
          !showAll &&
          searchableData.length > truncateLength}
      >
        <thead class="table--thead">
          <tr>
            {#each includedFields as field}
              <th
                scope="col"
                class="table--thead--th h4 pl-0 py-2 pr-2"
                class:sortable={sortable && sortableFields.includes(field)}
                class:sort-ascending={sortable &&
                  sortField === field &&
                  sortDirection === 'ascending'}
                class:sort-descending={sortable &&
                  sortField === field &&
                  sortDirection === 'descending'}
                data-field={field}
                onclick={handleSort}
              >
                {field}
                {#if sortable && sortableFields.includes(field)}
                  <div class="table--thead--sortarrow fml-1 avoid-clicks">
                    <SortArrow {sortDirection} active={sortField === field} />
                  </div>
                {/if}
              </th>
            {/each}
          </tr>
        </thead>
        <tbody class="table--tbody">
          {#each currentPageData as item, idx}
            <tr data-row-index={idx}>
              {#each includedFields as field}
                <td
                  class="body-note pl-0 py-2 pr-2"
                  data-row-index={idx}
                  data-field={field}
                  data-value={item[field]}
                >
                  {@html formatValue(item, field, fieldFormatters)}
                </td>
              {/each}
            </tr>
          {/each}
          {#if searchable && searchText && currentPageData.length === 0}
            <tr>
              <td class="no-results" colspan={includedFields.length}>
                No results found for "{searchText}"
              </td>
            </tr>
          {/if}
        </tbody>
        {#if notes || source}
          <tfoot class="table--tfoot">
            {#if notes}
              <tr>
                <td class="" colspan={includedFields.length}>
                  <div class="fmt-2">
                    {@html notes}
                  </div>
                </td>
              </tr>
            {/if}
            {#if source}
              <tr>
                <td class="" colspan={includedFields.length}>
                  <div class="fmt-1">
                    {@html source}
                  </div>
                </td>
              </tr>
            {/if}
          </tfoot>
        {/if}
      </table>
    </div>
    {#if truncated && searchableData.length > truncateLength}
      <nav
        aria-label="Show all button"
        class="show-all flex items-center justify-center fmt-2"
      >
        <button class="body-caption" onclick={toggleTruncate}>
          {#if showAll}
            Show fewer rows
          {:else}
            Show {searchableData.length - truncateLength}
            more rows
          {/if}
        </button>
      </nav>
    {/if}
    {#if paginated}
      <Pagination
        bind:pageNumber
        bind:pageSize
        pageLength={currentPageData.length}
        n={sortedData.length}
      />{/if}
  </div>
</Block>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .table {
    overflow-x: auto;
  }
  .table table {
    background-color: transparent;
    border-collapse: separate;
    border-spacing: 0;
    thead {
      tr {
        th {
          border-block-end: 1px solid var(--theme-colour-text-primary);
          @include mixins.bg;
          text-align: inherit;
          &.sortable {
            cursor: pointer;
            white-space: nowrap;
          }
          .table--thead--sortarrow {
            display: inline-block;
            position: relative;
            inset-inline-start: 5px;
          }
        }
      }
    }
    tbody {
      td {
        @include mixins.text-sm;
        @include mixins.font-regular;
        font-variant-numeric: tabular-nums;
        vertical-align: top;
        border-block-end: 1px solid
          var(--theme-colour-brand-rules, var(--tr-muted-grey));
        &.no-results {
          @include mixins.text-secondary;
        }
      }
    }
    tfoot.table--tfoot {
      tr {
        border-block-end: 0;
      }
      td {
        @include mixins.body-caption;
      }
    }
    &.truncated {
      tbody tr:last-child:not(:first-child) {
        border-block-end: none;
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
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    flex-direction: row;
    flex-wrap: wrap;
    gap: clamp(0.31rem, calc(0.29rem + 0.1vw), 0.38rem);
  }

  nav.show-all {
    button {
      min-width: 13rem;
      height: 2.15rem;
      border: 1px solid var(--theme-colour-brand-rules, var(--tr-muted-grey));
      border-radius: 0.25rem;
      @include mixins.bg;
      cursor: pointer;
    }
  }
</style>
