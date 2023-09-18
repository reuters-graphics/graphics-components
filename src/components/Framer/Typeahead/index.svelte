<script>
  /**
   * @typedef {Object} TItem
   * @property {number} index
   * @property {string} embed
   */

  export let id = 'typeahead-' + Math.random().toString(36);
  export let value = '';

  /** @type {TItem[]} */
  export let data = [];

  /** @type {(item: TItem) => any} */
  export let extract = (item) => item;

  /** @type {(item: TItem) => boolean} */
  export let disable = (item) => false;

  /** @type {(item: TItem) => boolean} */
  export let filter = (item) => false;

  /** Set to `false` to prevent the first result from being selected */
  export let autoselect = true;

  /**
   * Set to `keep` to keep the search field unchanged after select, set to `clear` to auto-clear search field
   * @type {"update" | "clear" | "keep"}
   */
  export let inputAfterSelect = 'update';

  /** @type {{ original: TItem; index: number; score: number; string: string; disabled?: boolean; }[]} */
  export let results = [];

  /** Set to `true` to re-focus the input after selecting a result */
  export let focusAfterSelect = false;

  /** Set to `true` to only show results when the input is focused */
  export let showDropdownOnFocus = false;

  /**
   * Specify the maximum number of results to return
   * @type {number}
   */
  export let limit = Infinity;

  import fuzzy from './fuzzy.js';
  import Search from 'svelte-search';
  import { tick, createEventDispatcher, afterUpdate } from 'svelte';

  const dispatch = createEventDispatcher();

  let comboboxRef = null;
  let searchRef = null;
  let hideDropdown = false;
  let selectedIndex = -1;
  let prevResults = '';
  let isFocused = false;

  afterUpdate(() => {
    if (prevResults !== resultsId && autoselect) {
      selectedIndex = getNextNonDisabledIndex();
    }

    if (prevResults !== resultsId && !$$slots['no-results']) {
      hideDropdown = results.length === 0;
    }

    prevResults = resultsId;
  });

  async function select() {
    const result = results[selectedIndex];

    if (result.disabled) return;

    const selectedValue = extract(result.original);
    const searchedValue = value;

    if (inputAfterSelect === 'clear') value = '';
    if (inputAfterSelect === 'update') value = selectedValue;

    dispatch('select', {
      selectedIndex,
      searched: searchedValue,
      selected: selectedValue,
      original: result.original,
      originalIndex: result.index,
    });

    await tick();

    if (focusAfterSelect) searchRef.focus();
    close();
  }

  /** @type {() => number} */
  function getNextNonDisabledIndex() {
    let index = 0;
    let disabled = results[index]?.disabled ?? false;

    while (disabled) {
      if (index === results.length) {
        index = 0;
      } else {
        index += 1;
      }

      disabled = results[index]?.disabled ?? false;
    }

    return index;
  }

  /** @type {(direction: -1 | 1) => void} */
  function change(direction) {
    let index =
      direction === 1 && selectedIndex === results.length - 1
        ? 0
        : selectedIndex + direction;
    if (index < 0) index = results.length - 1;

    let disabled = results[index].disabled;

    while (disabled) {
      if (index === results.length) {
        index = 0;
      } else {
        index += direction;
      }

      disabled = results[index].disabled;
    }

    selectedIndex = index;
  }

  const open = () => (hideDropdown = false);
  const close = () => (hideDropdown = true);

  $: options = { pre: '<mark>', post: '</mark>', extract };
  $: results =
    value !== ''
      ? fuzzy
          .filter(value, data, options)
          .filter(({ score }) => score > 0)
          .slice(0, limit)
          .filter((result) => !filter(result.original))
          .map((result) => ({ ...result, disabled: disable(result.original) }))
      : data.map((d) => ({ string: extract(d), original: d }));

  $: resultsId = results.map((result) => extract(result.original)).join('');
  $: showResults = !hideDropdown && results.length > 0 && isFocused;
  $: if (showDropdownOnFocus) {
    showResults = showResults && isFocused;
  }
</script>

<svelte:window
  on:click="{({ target }) => {
    if (!hideDropdown && !comboboxRef?.contains(target)) {
      close();
    }
  }}"
/>

<div
  data-svelte-typeahead
  bind:this="{comboboxRef}"
  role="combobox"
  aria-haspopup="listbox"
  aria-owns="{id}-listbox"
  class:dropdown="{results.length > 0}"
  aria-expanded="{showResults ||
    (isFocused && value.length > 0 && results.length === 0)}"
  id="{id}-typeahead"
>
  <Search
    id="{id}"
    removeFormAriaAttributes="{true}"
    {...$$restProps}
    bind:ref="{searchRef}"
    aria-autocomplete="list"
    aria-controls="{id}-listbox"
    aria-labelledby="{id}-label"
    aria-activedescendant="{selectedIndex >= 0 &&
    !hideDropdown &&
    results.length > 0
      ? `${id}-result-${selectedIndex}`
      : null}"
    bind:value="{value}"
    on:type
    on:input
    on:change
    on:focus
    on:focus="{() => {
      open();
      if (showDropdownOnFocus) {
        showResults = true;
        isFocused = true;
      }
    }}"
    on:clear
    on:clear="{open}"
    on:blur
    on:keydown
    on:keydown="{(e) => {
      if (results.length === 0) return;

      switch (e.key) {
        case 'Enter':
          select();
          break;
        case 'ArrowDown':
          e.preventDefault();
          change(1);
          break;
        case 'ArrowUp':
          e.preventDefault();
          change(-1);
          break;
        case 'Escape':
          e.preventDefault();
          value = '';
          searchRef?.focus();
          close();
          break;
      }
    }}"
  />
  <ul
    class:svelte-typeahead-list="{true}"
    role="listbox"
    aria-labelledby="{id}-label"
    id="{id}-listbox"
  >
    {#if showResults}
      {#each results as result, index}
        <li
          role="option"
          id="{id}-result-{index}"
          class:selected="{selectedIndex === index}"
          class:disabled="{result.disabled}"
          aria-selected="{selectedIndex === index}"
          on:click="{() => {
            if (result.disabled) return;
            selectedIndex = index;
            select();
          }}"
          on:mouseenter="{() => {
            if (result.disabled) return;
            selectedIndex = index;
          }}"
        >
          <slot result="{result}" index="{index}" value="{value}">
            {@html result.string}
          </slot>
        </li>
      {/each}
    {/if}
    {#if value.length > 0 && results.length === 0}
      <li class="no-results disabled">No embeds found...</li>
    {/if}
  </ul>
</div>

<style lang="scss">
  @import '../../../scss/mixins';

  [data-svelte-typeahead] {
    position: relative;
  }

  ul {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    background-color: #fff;
  }

  [aria-expanded='true'] ul {
    z-index: 1;
    border: 1px solid #ddd;
    max-height: 50vh;
    overflow-y: scroll;
  }

  li,
  li.no-results {
    padding: 0.25rem 1rem;
    @include font-sans;
    color: #333;
  }
  li.no-results {
    color: #333;
    font-size: 0.85rem;
    font-style: italic;
  }

  li {
    cursor: pointer;
    :global(mark) {
      padding: 0;
      background-color: #ffff9a;
    }
  }

  li:not(:last-of-type) {
    border-bottom: 1px solid #e0e0e0;
  }

  li:hover {
    background-color: #efefef;
  }

  .selected {
    background-color: #efefef;
  }

  .selected:hover {
    background-color: #e5e5e5;
  }

  .disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  :global([data-svelte-search] label) {
    margin-bottom: 0.25rem;
    display: inline-flex;
    font-size: 0.75rem;
    color: #aaa;
    @include font-sans;
  }

  :global([data-svelte-search] input) {
    width: 100%;
    padding: 0.5rem 0.75rem;
    background: none;
    font-size: 1rem;
    border: 0;
    border-radius: 0 !important;
    background-color: #fff;
    border: 1px solid #ddd;
    @include font-sans;
  }

  :global([data-svelte-search] input:focus) {
    outline: none;
    border: 1px solid #ccc;
  }
</style>
