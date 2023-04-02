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
   * The label to place above the search box.
   * @type {string}
   */
  export let searchLabel: string;

  /**
   * The placeholder text that appears in the search box.
   * @type {string}
   */
  export let searchPlaceholder: string;

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
  import {
    filterArray,
    paginateArray,
    uniqueAttr,
    isNumeric,
  } from './utils.js';

  /** Set truncate, filtering and pagination configuration */
  let showAll = false;
  let pageNumber = 1;
  let searchText = '';
  const filterList = filterField
    ? uniqueAttr(data, filterField).sort((a, b) => a.localeCompare(b))
    : undefined;
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

  // Estimate the text alignment of our fields. Strings go left. Numbers go right.
  function getAlignment(value) {
    return isNumeric(value) ? 'right' : 'left';
  }
  const fieldAlignments = includedFields.reduce((acc, cur) => {
    acc[cur] = getAlignment(data[0][cur]);
    return acc;
  }, {});

  //* * Handle show all, search, filter, sort and pagination events */
  function toggleTruncate(event) {
    showAll = !showAll;
  }

  function handleSearchInput(event) {
    searchText = event.target.value;
    pageNumber = 1;
  }

  function handleFilterInput(event) {
    const value = event.target.value;
    filterValue = value === 'all' ? '' : value;
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
  <section class="table-wrapper">
    {#if searchable || filterList}
      <section class="input">
        {#if searchable}
          <div class="search">
            <label for="filter--select"
              >{#if searchLabel}{searchLabel}{:else}Search{/if}</label
            >
            <input
              id="search--input"
              class="search--input"
              type="text"
              placeholder="{searchPlaceholder}"
              on:input="{handleSearchInput}"
            />
          </div>
        {/if}
        {#if filterList}
          {#if searchable}<div
              style="clear: both; display: block; padding-top: 1rem;"
            ></div>{/if}
          <div class="filter">
            <label for="filter--select"
              >{#if filterLabel}{filterLabel}{:else}Filter by {filterField}{/if}</label
            >
            <select
              class="filter--select"
              name="filter--select"
              id="filter--select"
              on:input="{handleFilterInput}"
            >
              <option value="all">All</option>
              {#each filterList as object}
                <option value="{object}">{object}</option>
              {/each}
            </select>
          </div>
        {/if}
      </section>
    {/if}
    <section class="table">
      <table
        class:paginated
        class:truncated="{truncated &&
          !showAll &&
          data.length > truncateLength}"
      >
        {#if title || dek}
          <caption class="table--caption">
            {#if title}
              <div class="table--caption--title">{@html title}</div>
            {/if}
            {#if dek}
              <div class="table--caption--dek">{@html dek}</div>
            {/if}
          </caption>
        {/if}
        <thead class="table--thead">
          <tr>
            {#each includedFields as field}
              <th
                scope="col"
                class:sortable
                class:sort-ascending="{sortable &&
                  sortField === field &&
                  sortDirection === 'ascending'}"
                class:sort-descending="{sortable &&
                  sortField === field &&
                  sortDirection === 'descending'}"
                data-field="{field}"
                on:click="{handleSort}"
                style="text-align: {fieldAlignments[field]}"
              >
                {field}
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
                  style="text-align: {fieldAlignments[field]}"
                >
                  {@html formatValue(item, field)}
                </td>
              {/each}
            </tr>
          {/each}
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
  </section>
</Block>

<style lang="scss">
  @import '../../scss/colours/thematic/tr';
  @import '../../scss/fonts/variables';

  .table-wrapper {
    margin: 2rem 0;
  }
  section.table {
    overflow-x: auto;
    table {
      background-color: transparent;
      border-collapse: collapse;
      border-spacing: 0;
      width: 100%;
      font-size: 1rem;
      font-family: $font-family-display;
      color: $tr-dark-grey;
      .table--caption {
        caption-side: top;
        .table--caption--title {
          font-weight: 500;
          color: $tr-dark-grey;
          font-size: 1.33rem;
          padding: 0;
        }
        .table--caption--dek {
          font-size: 1rem;
          font-weight: 300;
          padding: 0;
          line-height: 1.4;
        }
      }
      thead {
        tr {
          border-bottom: 1px solid $tr-light-grey;
          th {
            color: $tr-medium-grey;
            font-size: 0.85rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.06rem;
            line-height: 1.4;
            padding: 0.5rem 0.25rem 0.5rem 0;
            &.sortable {
              cursor: pointer;
            }
            &.sort-ascending:after {
              content: ' ▲';
              font-size: 0.75rem;
              color: $tr-orange;
              vertical-align: 10%;
              padding: 0 0 0 0.0612rem;
            }
            &.sort-descending:after {
              content: ' ▼';
              font-size: 0.75rem;
              color: $tr-orange;
              vertical-align: 10%;
              padding: 0 0 0 0.0612rem;
            }
          }
        }
      }
      tbody {
        tr {
          border-bottom: 1px solid $tr-light-muted-grey;
        }
        td {
          font-size: 1rem;
          font-weight: 300;
          padding: 0.5rem 0.25rem 0.5rem 0;
        }
      }
      tfoot.table--tfoot {
        display: table-row;
        tr {
          border-bottom: 0;
        }
        td {
          font-weight: 300;
          color: $tr-dark-grey;
          font-size: 0.8rem;
          padding: 0.5rem 0 0 0;
        }
      }
      &.truncated {
        tbody tr:last-child:not(:first-child) {
          border-bottom: none;
          mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
          -webkit-mask-image: linear-gradient(
            to bottom,
            black 0%,
            transparent 100%
          );
        }
      }
    }
  }

  section.input {
    margin: 16px 0;
    background-color: $tr-ultra-light-grey;
    padding: 0.75rem;
    font-size: 1rem;
    width: 100%;
    border: 1px solid $tr-light-muted-grey;
    label {
      line-height: 1.333;
      display: block;
      font-size: 1.125rem;
      font-family: $font-family-display;
      font-weight: 500;
    }
    .search {
      .search--input {
        padding: 0.33rem;
        font-size: 1.1rem;
        height: 2.3rem;
        border: 1px solid $tr-muted-grey;
        border-radius: 5px;
        width: 300px;
      }
    }
    .filter {
      .filter--select {
        padding: 0.33rem;
        font-size: 1.1rem;
        height: 2.3rem;
        border: 1px solid $tr-muted-grey;
        border-radius: 5px;
        width: 300px;
      }
    }
  }

  nav.show-all {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    button {
      font-size: 0.8rem;
      font-family: $font-family-display;
      font-weight: 500;
      min-width: 175px;
      padding: 0.33rem 0.5rem;
      border: 1px solid $tr-muted-grey;
      border-radius: 4px;
      background: $white;
      color: $tr-medium-grey;
      cursor: pointer;
    }
  }
</style>
