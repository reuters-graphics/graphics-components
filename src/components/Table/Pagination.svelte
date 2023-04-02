<script lang="ts">
  import { intcomma } from 'journalize';
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

  function goToPreviousPage() {
    if (pageNumber > 1) {
      pageNumber -= 1;
    }
  }

  function goToNextPage() {
    if (pageNumber < Math.ceil(n / pageSize)) {
      pageNumber += 1;
    }
  }
</script>

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
      pageLength} of {intcomma(n)}</span
  >
  <button
    on:click="{goToNextPage}"
    disabled="{pageNumber === Math.ceil(n / pageSize)}"
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

<style lang="scss">
  @import '../../scss/colours/thematic/tr';
  @import '../../scss/fonts/variables';

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
