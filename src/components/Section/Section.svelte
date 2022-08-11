<script lang="ts">
  type ColumnWidth = 'narrower' | 'narrow' | 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';
  
  /** Width of the section within the article well. */
  export let width: ColumnWidth = 'normal';

  /** Add an id to the section tag to target it with custom CSS. */
  export let id: string = '';
  /** Add extra classes to the section tag to target it with custom CSS. */
  export let cls: string = '';

  /** Snap section to column widths, rather than fluidly resizing them. */
  export let snap: boolean = false;

  /** By default, all Sections have a margin bottom, except the last child. Set to `false` to remove this margin or set a `cls`/`id` and target with custom CSS. */
  export let noMargin: boolean = false;
</script>

<section
  {id}
  class="{width} {cls}"
  class:snap={snap && width !== 'fluid' && width !== 'widest'}
  class:no-margin={noMargin}
>
  <!-- Section content -->
  <slot></slot>
</section>

<style lang="scss">
  @import "../../scss/mixins";

  section {
    max-width: var(--normal-column-width, 660px);
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    &:not(:last-child) {
      margin-bottom: 4rem;
    }

    &.no-margin {
      margin-bottom: 0;
    }

    &.narrower {
      max-width: var(--narrower-column-width, 330px);
    }

    &.narrow {
      max-width: var(--narrow-column-width, 330px);
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
      margin-left: -15px;
      max-width: none;
    }

    // Only setup for the default column widths, b/c can't use
    // CSS vars in media queries.
    &.snap {
      @include snap-section;
    }
  }
</style>
