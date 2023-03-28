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
   * @type string
   */
  export let title: string;

  /**
   * A footnote that runs below the table.
   * @type string
   */
  export let notes: string;

  /**
   * list of the fields to include in the table. By default everything goes.
   * @type []
   */
  export let includedFields: string[] = Object.keys(data[0]).filter(
    (f) => f !== 'searchStr'
  );

  /**
   * The default page size.
   * @type number
   */
  export let pageSize: number = 25;

  /**
   * Whether or not searches are allowed.
   * @type boolean
   */
  export let searchable: boolean = false;

  /**
   * The label to place above the search box.
   * @type string
   */
  export let searchLabel: string;

  /**
   * The placeholder text that appears in the search box.
   * @type string
   */
  export let searchPlaceholder: string;

  /**
   * A field to offer uses as an interactive filter.
   * @type string
   */
  export let filterField: string;

  /**
   * The label to place above the filter box
   * @type string
   */
  export let filterLabel: string;

  /**
   * Whether or not sorts are allowed.
   * @type boolean
   */
  export let sortable: boolean = false;

  /**
   * The column to sort by. By default it's the first header.
   * @type string
   */
  export let sortField: string = Object.keys(data[0])[0];

  /**
   * The direction of the sort. By default it's ascending.
   * @type SortDirection
   */
  type SortDirection = 'ascending' | 'descending';
  export let sortDirection: SortDirection = 'ascending';

  /**
   * Custom field formatting functions. Should be keyed to the name of the field.
   * @type object
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
  import {
    filterArray,
    paginateArray,
    numberWithCommas,
    uniqueAttr,
    isNumeric,
  } from './utils.js';

  /** Set filtering and pagination configuration */
  let pageNumber = 1;
  let searchText = '';
  const filterList = filterField
    ? uniqueAttr(data, filterField).sort((a, b) => a.localeCompare(b))
    : undefined;
  let filterValue = '';
  $: filteredData = filterArray(data, searchText, filterField, filterValue);
  $: sortedData = sortArray(filteredData, sortField, sortDirection);
  $: currentPageData = paginateArray(sortedData, pageSize, pageNumber);

  // Estimate the text alignment of our fields. Strings go left. Numbers go right.
  function getAlignment(value) {
    return isNumeric(value) ? 'right' : 'left';
  }
  const fieldAlignments = includedFields.reduce((acc, cur) => {
    acc[cur] = getAlignment(data[0][cur]);
    return acc;
  }, {});

  //* * Handle search, filter, sort and pagination events */
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

  function goToPreviousPage() {
    if (pageNumber > 1) {
      pageNumber -= 1;
    }
  }

  function goToNextPage() {
    if (pageNumber < Math.ceil(filteredData.length / pageSize)) {
      pageNumber += 1;
    }
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
      <table>
        {#if title}
          <caption class="table--caption table--caption--title"
            >{@html title}</caption
          >
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
        {#if notes}
          <tfoot class="table--tfoot table--tfoot--footnote">
            <tr>
              <td colspan="{includedFields.length}">{@html notes}</td>
            </tr>
          </tfoot>
        {/if}
      </table>
    </section>
    {#if filteredData.length > pageSize}
      <nav aria-label="pagination" class="pagination">
        <button on:click="{goToPreviousPage}" disabled="{pageNumber === 1}"
          ><div class="icon-wrapper">
            <svg
              class="icon"
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 6 11"
              ><path
                d="m1.76 5.134 3.887-3.887a.71.71 0 0 0 0-1.027.709.709 0 0 0-1.027 0l-4.4 4.4a.71.71 0 0 0 0 1.027l4.4 4.4c.147.147.367.22.513.22a.79.79 0 0 0 .513-.22.71.71 0 0 0 0-1.027L1.76 5.133Z"
              ></path></svg
            > <span class="visually-hidden">Previous page</span>
          </div></button
        >
        <span class="label" aria-label="page {pageNumber}" aria-current="page"
          >{pageNumber * pageSize - pageSize + 1}-{pageNumber * pageSize -
            pageSize +
            currentPageData.length} of {numberWithCommas(
            filteredData.length
          )}</span
        >
        <button
          on:click="{goToNextPage}"
          disabled="{pageNumber === Math.ceil(filteredData.length / pageSize)}"
          ><div class="icon-wrapper">
            <svg
              class="icon"
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 7 11"
              ><path
                d="m6.013 4.987-4.4-4.4a.71.71 0 0 0-1.027 0 .709.709 0 0 0 0 1.027L4.473 5.5.586 9.387a.71.71 0 0 0 0 1.027c.147.147.293.22.513.22.22 0 .367-.073.514-.22l4.4-4.4a.71.71 0 0 0 0-1.027Z"
              ></path></svg
            > <span class="visually-hidden">Next page</span>
          </div></button
        >
      </nav>
    {/if}
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
      font-family: var(--theme-font-family-sans-serif, $font-family-sans-serif);
      color: var(--theme-colour-text-primary, $tr-dark-grey);
      .table--caption--title {
        caption-side: top;
        font-weight: 500;
        color: var(--theme-colour-text-primary, $tr-dark-grey);
        font-size: 1.25rem;
      }
      thead {
        tr {
          border-bottom: 1px solid $tr-muted-grey;
          th {
            font-weight: 500;
            line-height: 1.4;
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
          padding: 0.333rem 0.1667rem;
        }
      }
      .table--tfoot--footnote {
        tr {
          border-bottom: 0;
        }
        td {
          font-weight: 400;
          color: var(--theme-colour-text-primary, $tr-dark-grey);
          font-size: 0.75rem;
          padding: 0.666rem 0 0 0;
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

  nav.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    font-size: 1rem;
    font-family: $font-family-display;
    font-weight: 400;
    button {
      padding: 5px 10px;
      border: 1px solid;
      border-color: $tr-contrast-grey;
      border-radius: 8px;
      background: $white;
      color: $tr-medium-grey;
      cursor: pointer;
      width: 40px;
      height: 40px;
      &:disabled {
        border-color: $tr-light-grey;
        color: $tr-light-grey;
        cursor: default;
      }
      .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        transition: all 0.15s ease;
        .icon {
          height: 1rem;
          width: 1rem;
          fill: currentColor;
        }
      }
    }
    .label {
      margin: 0 1rem;
    }
  }

  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
</style>
