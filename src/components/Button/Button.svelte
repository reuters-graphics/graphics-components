<!-- @component `Button` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-Button--default) -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  /** The button text.
   * @type {string}
   */
  export let content: string = 'Click';

  /** The button value.
   * @type {string}
   */
  export let value: string = '';

  /** The button pressed state.
   * @type {boolean}
   */
  export let pressed: boolean = false;

  /** Add an ID to target with SCSS.
   * @type {string}
   */
  export let id: string = '';

  /** Add a class to target with SCSS.
   * @type {string}
   */
  export let cls: string = '';

  /** Dispatches an event when the button is clicked. */
  const dispatch = createEventDispatcher();

  /** Handles the button click event. */
  function handleClick() {
    dispatch('buttonClicked', { value });
  }
</script>

<button
  type="button"
  id="{id}"
  class="{cls}"
  value="{value}"
  aria-pressed="{pressed}"
  on:click="{handleClick}">{content}</button
>

<style lang="scss">
  @import '../../scss/colours/thematic/tr';
  @import '../../scss/fonts/variables';

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    height: 33px;
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid var(--theme-colour-brand-rules, $tr-muted-grey);
    font-size: 1.125rem;
    font-weight: 400;
    font-family: var(--theme-font-family-hed, $font-family-display);
    white-space: nowrap;
    user-select: none;
    transition: all 0.15s ease;
    color: var(--theme-colour-text-primary, $tr-dark-grey);
    background-color: var(--nav-background, $white);
    &:hover {
      cursor: pointer;
      background-color: var(--theme-colour-brand-rules, $tr-muted-grey);
    }
    &:active,
    &:focus,
    &[aria-pressed='true'] {
      background-color: var(--theme-colour-text-primary, $tr-dark-grey);
      color: var(--nav-background, $white);
    }
  }
</style>
