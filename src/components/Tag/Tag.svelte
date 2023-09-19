<!-- @component `Tag` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-Tag--default) -->
<script lang="ts">
  /**
   * The text that appears in the tag
   * @type {string}
   */
  export let text: string;

  /**
   * A link to wrap the tag in
   * @type {string}
   */
  export let link: string | null = null;

  type tagSize = 'normal' | 'big';
  export let size: tagSize = 'normal';

  /** Add an ID to target with SCSS. */
  export let id: string = '';

  /** Add a class to target with SCSS. */
  export let cls: string = '';
</script>

<div id="{id}" class="tag {cls}" data-size="{size}">
  {#if link}
    <a href="{link}">
      <span class="tag--label">{text}</span>
    </a>
  {:else}
    <span class="tag--label">{text}</span>
  {/if}
</div>

<style lang="scss">
  @import '../../scss/mixins';

  .tag {
    .tag--label {
      @include font-hed;
      @include font-medium;
      @include tracking-normal;
      @include fmt-3;
      text-transform: uppercase;
      background-color: var(--tr-medium-yellow);
      color: var(--theme-colour-text-primary, var(--tr-dark-grey));
      width: auto;
      margin: 0;
      padding: 6px 4px;
      border: 1px solid var(--nav-background, var(--tr-white));
    }
    a {
      color: var(--theme-colour-text-primary, var(--tr-dark-grey));
      text-decoration: none;
    }
    a:hover {
      cursor: pointer;
      color: var(--theme-colour-text-primary, var(--tr-dark-grey));
      text-decoration: underline;
      .tag--label {
        border: 1px solid var(--theme-colour-text-primary, var(--tr-dark-grey));
      }
    }
    &[data-size='big'] {
      .tag--label {
        font-size: 1.33rem;
      }
    }
  }
</style>
