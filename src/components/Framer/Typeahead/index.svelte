<script lang="ts">
  type TItem = {
    index: number;
    embed: string;
    disabled?: boolean;
  };

  type SelectedItem = {
    selectedIndex: number;
    searched: string;
    selected: string;
    original: TItem;
    originalIndex: number;
  };

  interface Props {
    id?: string;
    value: string;
    label: string;
    data: TItem[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    extract?: (item: TItem) => any;
    disable?: (item: TItem) => boolean;
    filter?: (item: TItem) => boolean;
    onselect: (item: SelectedItem) => void;
    autoselect?: boolean;
    inputAfterSelect?: 'update' | 'clear' | 'keep';
    focusAfterSelect?: boolean;
    showDropdownOnFocus?: boolean;
    limit?: number;
    noResults?: Snippet;
  }

  let {
    id = 'typeahead-' + Math.random().toString(36),
    value = '',
    label = '',
    data = [],
    extract = (item) => item,
    disable = (_item) => false,
    filter = (_item) => false,
    autoselect = true,
    // Set to `keep` to keep the search field unchanged after select, set to `clear` to auto-clear search field
    inputAfterSelect = 'update',
    /** Set to `true` to re-focus the input after selecting a result */
    focusAfterSelect = false,
    /** Set to `true` to only show results when the input is focused */
    showDropdownOnFocus = false,
    /** Specify the maximum number of results to return */
    limit = Infinity,
    noResults,
    onselect,
    ...restProps
  }: Props = $props();

  import fuzzy from './fuzzy';
  import Search from './Search.svelte';
  import { tick, type Snippet } from 'svelte';

  let comboboxRef: HTMLElement | null = $state(null);
  let searchRef: HTMLElement | null = $state(null);
  let hideDropdown = $state(true);
  let selectedIndex = $state(-1);
  let prevResults = $state('');
  let isFocused = $state(false);

  let options = $derived({ pre: '<mark>', post: '</mark>', extract });
  let results = $derived.by(() => {
    return value !== '' ?
        fuzzy
          .filter(value, data, options)
          .filter(({ score }) => score > 0)
          .slice(0, limit)
          .filter((result) => !filter(result.original))
          .map((result) => ({ ...result, disabled: disable(result.original) }))
      : data.map((d, index) => ({
          index,
          string: extract(d),
          original: d,
          disabled: disable(d),
        }));
  });

  let resultsId = $derived(
    results.map((result) => extract(result.original)).join('')
  );

  let showResults: boolean = $state(
    // svelte-ignore state_referenced_locally
    !hideDropdown && results.length > 0 && isFocused
  );
  $effect(() => {
    if (showDropdownOnFocus) {
      showResults = showResults && isFocused;
    }
  });

  $effect(() => {
    if (prevResults !== resultsId && autoselect) {
      selectedIndex = getNextNonDisabledIndex();
    }

    if (prevResults !== resultsId && !noResults) {
      hideDropdown = results.length === 0;
    }

    prevResults = resultsId;
  });

  async function select() {
    const result = results[selectedIndex];

    if (result.original.disabled) return;

    const selectedValue = extract(result.original);
    const searchedValue = value;

    if (inputAfterSelect === 'clear') value = '';
    if (inputAfterSelect === 'update') value = selectedValue;

    onselect({
      selectedIndex,
      searched: searchedValue,
      selected: selectedValue,
      original: result.original,
      originalIndex: result.index,
    });

    await tick();

    if (focusAfterSelect) searchRef?.focus();
    close();
  }

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

  function change(direction: -1 | 1) {
    let index =
      direction === 1 && selectedIndex === results.length - 1 ?
        0
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
</script>

<svelte:window
  onclick={({ target }) => {
    console.log('HELLO', !comboboxRef?.contains(target as Node));
    if (!hideDropdown && !comboboxRef?.contains(target as Node)) {
      close();
    }
  }}
/>

<div
  data-svelte-typeahead
  bind:this={comboboxRef}
  role="combobox"
  aria-haspopup="listbox"
  aria-owns="{id}-listbox"
  class:dropdown={results.length > 0}
  aria-controls="{id}-listbox"
  aria-expanded={showResults ||
    (isFocused && value.length > 0 && results.length === 0)}
  id="{id}-typeahead"
>
  <Search
    bind:value
    {id}
    {label}
    removeFormAriaAttributes={true}
    bind:ref={searchRef!}
    aria-autocomplete="list"
    aria-controls="{id}-listbox"
    aria-labelledby="{id}-label"
    aria-activedescendant={(
      selectedIndex >= 0 && !hideDropdown && results.length > 0
    ) ?
      `${id}-result-${selectedIndex}`
    : null}
    onfocus={() => {
      open();
      if (showDropdownOnFocus) {
        showResults = true;
        isFocused = true;
      }
    }}
    onclear={open}
    onkeydown={(e: KeyboardEvent) => {
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
    }}
    {...restProps}
  />
  <ul
    class:svelte-typeahead-list={true}
    role="listbox"
    aria-labelledby="{id}-label"
    id="{id}-listbox"
  >
    {#if showResults && !hideDropdown}
      {#each results as result, index}
        <li
          role="option"
          id="{id}-result-{index}"
          class:selected={selectedIndex === index}
          class:disabled={result.disabled}
          aria-selected={selectedIndex === index}
          onclick={() => {
            if (result.disabled) return;
            selectedIndex = index;
            select();
          }}
          onkeyup={(e) => {
            if (e.key !== 'Enter') return;
            if (result.disabled) return;
            selectedIndex = index;
            select();
          }}
          onmouseenter={() => {
            if (result.disabled) return;
            selectedIndex = index;
          }}
        >
          {@html result.string}
        </li>
      {/each}
    {/if}
    {#if value.length > 0 && results.length === 0}
      <li class="no-results disabled">No embeds found...</li>
    {/if}
  </ul>
</div>

<style lang="scss">
  @use '../../../scss/mixins' as mixins;

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
    @include mixins.font-sans;
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
    @include mixins.font-sans;
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
    @include mixins.font-sans;
  }

  :global([data-svelte-search] input:focus) {
    outline: none;
    border: 1px solid #ccc;
  }
</style>
