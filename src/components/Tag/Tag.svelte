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

<p>
  Here is some running <span class="body-tag">long text tag</span> text and some
  more...
</p>

<div>
  Just a <span class="body-tag !text-xs">smolpill</span>
</div>

<p class="mt-5">
  Here is some hyperlinked <span class="body-tag"
    ><a href="#home">long text tag</a></span
  > text and some more...
</p>

<style lang="scss">
  @import '../../scss/mixins';

  .body-tag {
    @include text-sm;
    @include font-bold;
    @include font-sans;
    text-transform: uppercase;
    @include tracking-wide;
    @include fpx-2;
    @include fpy-1;
    white-space: nowrap;
    border: 1px solid var(--theme-colour-background, #ffffff);
    background-color: var(--theme-colour-accent, #fafafa);
    border-radius: 0.125rem;

    a {
      // text-decoration-line: none;
      @include fpx-2;
      @include fpy-1;
      margin-top: calc(-1 * clamp(0.31rem, calc(0.31rem + 0vw), 0.31rem));
      margin-bottom: calc(-1 * clamp(0.31rem, calc(0.31rem + 0vw), 0.31rem));
      margin-left: calc(-1 * clamp(0.56rem, calc(0.52rem + 0.21vw), 0.69rem));
      margin-right: calc(-1 * clamp(0.56rem, calc(0.52rem + 0.21vw), 0.69rem));
      &:hover {
        outline: 1px solid var(--theme-colour-text-secondary, #404040);
      }
    }
  }

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
