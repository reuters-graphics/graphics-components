<!-- @component `SearchInput` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-controls-searchinput--docs) -->
<script lang="ts">
  import MagnifyingGlass from './components/MagnifyingGlass.svelte';
  import X from './components/X.svelte';

  interface Props {
    /** The placeholder text that appears in the search box.*/
    searchPlaceholder?: string;

    onsearch?: (newValue: string) => void;
  }

  let { searchPlaceholder = 'Search...', onsearch }: Props = $props();

  let value = $state('');
  let active = $derived(value !== '');

  function clear() {
    value = '';
    if (onsearch) onsearch(value); // Call the prop to update the parent when cleared
  }

  function oninput(event: Event) {
    value = (event.target as HTMLInputElement).value;
    if (onsearch) onsearch(value); // Update the parent on every input change
  }
</script>

<div class="search relative inline-flex items-center" class:active>
  <div class="search--icon absolute">
    <MagnifyingGlass />
  </div>

  <input
    id="search--input"
    class="search--input body-caption pl-8"
    type="text"
    placeholder={searchPlaceholder}
    bind:value
    {oninput}
  />
  <div
    class="search--x absolute"
    role="button"
    tabindex="0"
    class:invisible={!active}
    onclick={clear}
    onkeyup={clear}
  >
    <X />
  </div>
</div>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .search {
    width: 250px;
    .search--icon {
      left: 0.5rem;
      top: 0.55rem;
      width: 1.5rem;
      height: 1.5rem;
      fill: mixins.$theme-colour-brand-rules;
    }
    .search--input {
      height: 2.15rem;
      border: 1px solid mixins.$theme-colour-brand-rules;
      background: transparent;
      border-radius: 0.25rem;
      width: 100%;
    }
    .search--x {
      right: 0;
      top: 0.55rem;
      width: 1.5rem;
      height: 1.5rem;
      fill: mixins.$theme-colour-text-primary;
      cursor: pointer;
      &.invisible {
        display: none;
      }
    }
  }
</style>
