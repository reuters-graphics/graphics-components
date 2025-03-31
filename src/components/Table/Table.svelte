<!-- @component `Table` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-text-elements-table--docs) -->
<script lang="ts">
  /** Import local helpers */
  import Block from '../Block/Block.svelte';
  import Pagination from './components/Pagination.svelte';
  import Select from './components/Select.svelte';
  import SortArrow from './components/SortArrow.svelte';
  import SearchInput from '../SearchInput/SearchInput.svelte';
  import { filterArray, paginateArray, getOptions } from './utils';

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
    fieldFormatters?: object;
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
    fieldFormatters = {},
    width = 'normal',
    id = '',
    class: cls = '',
  }: Props<Record<string, unknown>> = $props();

  /** Derived variables */
  // let includedFieldsDerived = $derived.by(() => {
  //   if (includedFields) return includedFields;
  //   if (data.length > 0)
  //     return Object.keys(data[0]).filter((f) => f !== 'searchStr');
  //   return [];
  // });

  // let sortableFieldsDerived = $derived.by(() => {
  //   if (sortableFields) return sortableFields;
  //   if (data.length > 0)
  //     return Object.keys(data[0]).filter((f) => f !== 'searchStr');
  //   return [];
  // });

  // let sortFieldDerived = $derived.by(() => {
  //   if (sortField) return sortField;
  //   if (data.length > 0) return Object.keys(data[0])[0];
  //   return '';
  // });

  /** Set truncate, filtering and pagination configuration */
  let showAll = $state(false);
  let pageNumber = $state(1);
  let searchText = $state('');
  let filterList = $derived(
    filterField ? getOptions(data, filterField) : undefined
  );
  let filterValue = '';

  //* * Handle show all, search, filter, sort and pagination events */
  function toggleTruncate(_event) {
    showAll = !showAll;
  }

  // function handleSearchInput(event: CustomEvent<string>) {
  //   searchText = event.detail;

  //   console.log('searchText', searchText);
  //   pageNumber = 1;
  // }

  /** Filters table data based on the input value in the search bar */
  function handleSearchInput(newSearchText: string) {
    searchText = newSearchText;
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
    sortArray(filteredData, sortField, sortDirection)
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
                  options={filterList}
                  on:select={handleFilterInput}
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
                  {@html formatValue(item, field)}
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
        bind:pageLength={currentPageData.length}
        bind:n={sortedData.length}
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
          border-bottom: 1px solid var(--theme-colour-text-primary);
          @include mixins.bg;
          text-align: inherit;
          &.sortable {
            cursor: pointer;
            white-space: nowrap;
          }
          .table--thead--sortarrow {
            display: inline-block;
            position: relative;
            top: 5px;
          }
        }
      }
    }
    tbody {
      td {
        @include mixins.text-sm;
        @include mixins.font-regular;
        vertical-align: top;
        border-bottom: 1px solid
          var(--theme-colour-brand-rules, var(--tr-muted-grey));
        &.no-results {
          @include mixins.text-secondary;
        }
      }
    }
    tfoot.table--tfoot {
      tr {
        border-bottom: 0;
      }
      td {
        @include mixins.body-caption;
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
