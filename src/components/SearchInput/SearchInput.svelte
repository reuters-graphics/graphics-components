<!-- @component `SearchInput` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-SearchInput--default) -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import MagnifyingGlass from './MagnifyingGlass.svelte';
  import X from './X.svelte';

  /**
   * The placeholder text that appears in the search box.
   * @type {string}
   */
  export let searchPlaceholder: string = 'Search...';

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

<div class="search relative inline-flex items-center" class:active="{active}">
  <div class="search--icon absolute">
    <MagnifyingGlass />
  </div>
  <input
    id="search--input"
    class="search--input body-caption pl-8"
    type="text"
    placeholder="{searchPlaceholder}"
    on:input="{input}"
    bind:value="{value}"
  />
  <div
    class="search--x absolute"
    role="button"
    tabindex="0"
    class:invisible="{!active}"
    on:click="{clear}"
    on:keyup="{clear}"
  >
    <X />
  </div>
</div>

<style lang="scss">
  @use '../../scss/mixins' as *;

  .search {
    width: 250px;
    .search--icon {
      left: 0.5rem;
      top: 0.55rem;
      width: 1.5rem;
      height: 1.5rem;
      fill: $theme-colour-brand-rules;
    }
    .search--input {
      height: 2.15rem;
      border: 1px solid $theme-colour-brand-rules;
      background: transparent;
      border-radius: 0.25rem;
      width: 100%;
    }
    .search--x {
      right: 0;
      top: 0.55rem;
      width: 1.5rem;
      height: 1.5rem;
      fill: $theme-colour-text-primary;
      cursor: pointer;
      &.invisible {
        display: none;
      }
    }
  }
</style>
