<!-- @component `Table` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-Table--default) -->
<script lang="ts">
  import { onMount } from 'svelte';

  /**
   * A source for the data.
   * @required
   */
  export let data: [];

  // A list of the fields to include in the table. By default everything goes.
  export let includedFields: string[] = Object.keys(data[0]);

  export let allowSearch: boolean = true;
  export let searchPlaceholder: string = 'Type to search';

  // Table row limit
  export let pageSize: number = 25;

  // You can declare custom types to help users implement your component.
  type ContainerWidth = 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';

  /** Width of the component within the text well. */
  export let width: ContainerWidth = 'normal';

  /** Add an ID to target with SCSS. */
  export let id: string = '';

  /** Add a class to target with SCSS. */
  export let cls: string = '';

  /** Import local helpers */
  import Block from '../Block/Block.svelte';
  import { filterArray, paginateArray, numberWithCommas } from './utils.js';

  /** Set filtering and pagination configuration */
  let pageNumber = 1;
  let searchText = '';
  $: filteredData = filterArray(data, searchText);
  $: currentPageData = paginateArray(filteredData, pageSize, pageNumber);

  //* * Handle filtering and pagination events */
  function handleSearchInput(event) {
    searchText = event.target.value;
    pageNumber = 1;
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

  /** Boot it up. */
  onMount(() => {
    data.forEach((d) => {
      d.searchStr = includedFields
        .map((field) => d[field])
        .join(' ')
        .toLowerCase();
    });
  });
</script>

<Block width="{width}" id="{id}" cls="{cls}">
  <section class="table-wrapper">
    {#if allowSearch}
      <section class="input">
        <div class="search">
          <input
            id="search--input"
            class="search--input"
            type="text"
            placeholder="{searchPlaceholder}"
            on:input="{handleSearchInput}"
          />
        </div>
      </section>
    {/if}
    <section class="table">
      <table>
        <thead>
          <tr>
            {#each includedFields as field}
              <th>{field}</th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each currentPageData as item, idx}
            <tr data-row-index="{idx}">
              {#each includedFields as field}
                <td>
                  {@html item[field]}
                </td>
              {/each}
            </tr>
          {/each}
        </tbody>
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
      thead {
        tr {
          border-bottom: 1px solid $tr-muted-grey;
          th {
            font-weight: 500;
            vertical-align: bottom;
          }
        }
      }
      tbody {
        tr {
          border-bottom: 1px solid $tr-light-muted-grey;
        }
        td {
          line-height: 2rem;
        }
      }
    }
  }

  section.input {
    margin: 16px 0;
    background-color: $tr-ultra-light-grey;
    padding: 1.25rem 0.75rem;
    font-size: 1rem;
    width: 100%;
    border: 1px solid $tr-light-muted-grey;
    .search {
      .search--input {
        padding: 0.33rem;
        font-size: 1.15rem;
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
