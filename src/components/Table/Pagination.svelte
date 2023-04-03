<script lang="ts">
  import { intcomma } from 'journalize';
  import LeftArrow from './LeftArrow.svelte';
  import RightArrow from './RightArrow.svelte';
  import ProgressBar from './ProgressBar.svelte';
  /**
   * The current page number.
   * @type {number}
   */
  export let pageNumber: number = 1;

  /**
   * The default page size.
   * @type {number}
   */
  export let pageSize: number = 25;

  /**
   * The number of records in the current page.
   * @type {number}
   */
  export let pageLength: number = null;

  /**
   * The total number of records in the data set.
   * @type {number}
   */
  export let n: number = null;

  $: minRow = pageNumber * pageSize - pageSize + 1;
  $: maxRow = pageNumber * pageSize - pageSize + pageLength;
  $: numPages = Math.ceil(n / pageSize);
  $: progress = pageNumber / numPages;

  function goToPreviousPage() {
    if (pageNumber > 1) {
      pageNumber -= 1;
    }
  }

  function goToNextPage() {
    if (pageNumber < numPages) {
      pageNumber += 1;
    }
  }
</script>

<nav aria-label="pagination" class="pagination">
  <button on:click="{goToPreviousPage}" disabled="{pageNumber === 1}"
    ><div class="icon-wrapper">
      <LeftArrow />
      <span class="visually-hidden">Previous page</span>
    </div></button
  >
  <div class="label" aria-label="page {pageNumber}" aria-current="page">
    <div class="records">{minRow}-{maxRow} of {intcomma(n)}</div>
    <div class="progress"><ProgressBar bind:progress /></div>
  </div>
  <button
    on:click="{goToNextPage}"
    disabled="{pageNumber === Math.ceil(n / pageSize)}"
    ><div class="icon-wrapper">
      <RightArrow />
      <span class="visually-hidden">Next page</span>
    </div></button
  >
</nav>

<style lang="scss">
  @import '../../scss/colours/thematic/tr';
  @import '../../scss/fonts/variables';

  nav.pagination {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 1rem;
    button {
      border: 1px solid $tr-light-grey;
      border-radius: 50%;
      background: $white;
      color: $tr-light-grey;
      cursor: pointer;
      width: 35px;
      height: 35px;
      &:disabled {
        cursor: default;
        .icon-wrapper:hover {
          color: $tr-light-grey;
          border-color: $tr-light-grey;
        }
      }
      .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        &:hover {
          color: $tr-medium-grey;
          border-color: $tr-medium-grey;
        }
      }
    }
    .label {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: auto;
      min-width: 110px;
      margin: 0 0.5rem;
      .records {
        font-size: 0.8rem;
        font-family: $font-family-display;
        font-weight: 300;
        margin: 0 1rem;
        color: $tr-medium-grey;
      }
      .progress {
        padding: 0.33rem 0 0 0;
      }
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