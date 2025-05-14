<script lang="ts">
  import { intcomma } from 'journalize';
  import PrevArrow from './PrevArrow.svelte';
  import NextArrow from './NextArrow.svelte';

  interface Props {
    /**
     * The current page number.
     */
    pageNumber?: number;
    /**
     * The default page size.
     */
    pageSize?: number;
    /**
     * The number of records in the current page.
     */
    pageLength?: number;
    /**
     * The total number of records in the data set.
     */
    n?: number;
  }

  let {
    pageNumber = $bindable(1),
    pageSize = $bindable(25),
    pageLength = 1,
    n = 1,
  }: Props = $props();

  let minRow = $derived(pageNumber * pageSize - pageSize + 1);
  let maxRow = $derived(pageNumber * pageSize - pageSize + pageLength);
  let numPages = $derived(Math.ceil(n / pageSize));

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

<nav aria-label="pagination" class="pagination fmt-4">
  <button onclick={goToPreviousPage} disabled={pageNumber === 1}
    ><div class="icon-wrapper">
      <PrevArrow />
      <span class="visually-hidden">Previous page</span>
    </div></button
  >
  <div class="label fmx-2" aria-label="page {pageNumber}" aria-current="page">
    <div class="records body-caption mt-1.5">
      {minRow}-{maxRow} of {intcomma(n)}
    </div>
  </div>
  <button
    onclick={goToNextPage}
    disabled={pageNumber === Math.ceil(n / pageSize)}
    ><div class="icon-wrapper">
      <NextArrow />
      <span class="visually-hidden">Next page</span>
    </div></button
  >
</nav>

<style lang="scss">
  @use '../../../scss/mixins' as mixins;

  nav.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    button {
      border: 1px solid var(--theme-colour-text-secondary, var(--tr-light-grey));
      border-radius: 50%;
      @include mixins.bg;
      @include mixins.text-secondary;
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
          @include mixins.text-primary;
          border-color: var(--theme-colour-text-primary, var(--tr-medium-grey));
        }
      }
    }
    .label {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: auto;
      min-width: 5rem;
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
