<script lang="ts">
  import { intcomma } from 'journalize';
  import LeftArrow from './LeftArrow.svelte';
  import RightArrow from './RightArrow.svelte';

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
  @import '../../scss/mixins';

  nav.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    button {
      border: 1px solid var(--theme-colour-text-secondary, var(--tr-light-grey));
      border-radius: 50%;
      @include bg;
      @include text-secondary;
      cursor: pointer;
      width: 35px;
      height: 35px;
      &:disabled {
        cursor: default;
        color: var(--theme-colour-brand-rules);
        border-color: var(--theme-colour-brand-rules);
        .icon-wrapper:hover {
          color: var(--theme-colour-brand-rules);
          border-color: var(--theme-colour-brand-rules);
        }
      }
      .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        &:hover {
          @include text-primary;
          border-color: var(--theme-colour-text-primary, var(--tr-medium-grey));
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
        @include font-sans;
        font-weight: 300;
        margin: 0 1rem;
        @include text-primary;
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
