<!-- @component `SearchInput` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-SearchInput--default) -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import MagnifyingGlass from './MagnifyingGlass.svelte';
  import X from './X.svelte';

  /**
   * The placeholder text that appears in the search box.
   * @type {string}
   */
  export let searchPlaceholder: string = 'Search in table';

  let value = '';
  $: active = value !== '';

  const dispatch = createEventDispatcher();

  function input(event) {
    value = event.target.value;
    dispatch('search', { value });
  }

  function clear() {
    value = '';
    dispatch('search', { value: '' });
  }
</script>

<div class="search" class:active>
  <div class="search--icon">
    <MagnifyingGlass />
  </div>
  <input
    id="search--input"
    class="search--input"
    type="text"
    placeholder="{searchPlaceholder}"
    on:input="{input}"
    bind:value
  />
  <div class="search--x" class:invisible="{!active}" on:click="{clear}">
    <X />
  </div>
</div>

<style lang="scss">
  @import '../../scss/colours/thematic/tr';
  @import '../../scss/fonts/variables';

  .search {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 256px;
    padding: 0 0 0 0.1rem;
    .search--icon {
      position: absolute;
      left: 0.5rem;
      top: 0.15rem;
      width: 1.5rem;
      height: 1.5rem;
      fill: var(--theme-colour-brand-rules, $tr-muted-grey);
    }
    .search--input {
      font-family: var(--theme-font-family-hed, $font-family-display);
      color: var(--theme-colour-text-primary, $tr-dark-grey);
      padding: 0 0 0 2rem;
      font-size: 0.8rem;
      height: 33px;
      border: 1px solid var(--theme-colour-brand-rules, $tr-muted-grey);
      background: transparent;
      border-radius: 6px;
      width: 100%;
    }
    .search--x {
      position: absolute;
      right: 0;
      top: 0.15rem;
      width: 1.5rem;
      height: 1.5rem;
      fill: var(--theme-colour-text-primary, $tr-medium-grey);
      cursor: pointer;
      &.invisible {
        display: none;
      }
    }
  }
</style>
