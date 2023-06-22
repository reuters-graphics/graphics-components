<!-- @component `Tag` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-Tag--default) -->
<script lang="ts">
  export let text: string;
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
  @import '../../scss/colours/thematic/tr';
  @import '../../scss/fonts/variables';

  .tag {
    .tag--label {
      font-family: var(--theme-font-family-hed, $font-family-display);
      font-weight: 500;
      font-size: 1rem;
      text-transform: uppercase;
      background-color: $tr-medium-yellow;
      color: var(--theme-colour-text-primary, $tr-dark-grey);
      width: auto;
      margin: 0;
      padding: 6px 4px;
      border: 1px solid var(--nav-background, $white);
    }
    a {
      color: var(--theme-colour-text-primary, $tr-dark-grey);
      text-decoration: none;
    }
    a:hover {
      cursor: pointer;
      color: var(--theme-colour-text-primary, $tr-dark-grey);
      text-decoration: underline;
      .tag--label {
        border: 1px solid var(--theme-colour-text-primary, $tr-dark-grey);
      }
    }
    &[data-size='big'] {
      .tag--label {
        font-size: 1.33rem;
      }
    }
  }
</style>
