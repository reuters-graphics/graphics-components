<!-- @migration-task Error while migrating Svelte code: Cannot set properties of undefined (setting 'next') -->
<!-- @component `Block` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-page-layout-block--docs) -->
<script lang="ts">
  import type { ContainerWidth } from '../@types/global';

  /** Width of the block within the article well. */
  export let width: ContainerWidth = 'normal';

  /** Add an id to the block tag to target it with custom CSS. */
  export let id: string = '';

  /** Add extra classes to the block tag to target it with custom CSS. */
  let cls: string = '';
  export { cls as class };

  /** Snap block to column widths, rather than fluidly resizing them. */
  export let snap: boolean = false;

  /** ARIA [role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) for the block */
  export let role: string | null = null;

  /** ARIA [label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) for the block */
  export let ariaLabel: string | null = null;
</script>

<div
  {id}
  class="article-block fmx-auto {width} {cls}"
  class:snap={snap && width !== 'fluid' && width !== 'widest'}
  {role}
  aria-label={ariaLabel}
>
  <!-- block content -->
  <slot />
</div>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .article-block {
    max-width: var(--normal-column-width, 660px);

    &.narrower {
      max-width: var(--narrower-column-width, 330px);
    }

    &.narrow {
      max-width: var(--narrow-column-width, 510px);
    }

    &.wide {
      max-width: var(--wide-column-width, 930px);
    }

    &.wider {
      max-width: var(--wider-column-width, 1200px);
    }

    &.widest {
      max-width: 100%;
    }

    &.fluid {
      width: calc(100% + 30px);
      margin-inline-start: -15px;
      max-width: none;
    }

    // Only setup for the default column widths, b/c can't use
    // CSS vars in media queries.
    &.snap {
      @include mixins.block-snap-widths;
    }
  }
</style>
