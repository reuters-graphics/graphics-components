<!-- @component `Article` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-page-layout-article--docs) -->
<script lang="ts">
  

  

  

  interface ColumnWidths {
    /** Narrower column width */
    narrower: number;
    /** Narrow column width */
    narrow: number;
    /** Normal column width */
    normal: number;
    /** Wide column width */
    wide: number;
    /** Wider column width */
    wider: number;
  }

  

  import cssVariables from '../../actions/cssVariables/index.js';
  interface Props {
    /** Set to true for embeddables. */
    embedded?: boolean;
    /** Add an id to the article tag to target it with custom CSS. */
    id?: string | null;
    /** ARIA role of the article */
    role?: string | null;
    /** Set custom widths for the normal, wide and wider column dimensions */
    columnWidths?: ColumnWidths;
    children?: import('svelte').Snippet;
  }

  let {
    embedded = false,
    id = null,
    role = null,
    columnWidths = {
    narrower: 330,
    narrow: 510,
    normal: 660,
    wide: 930,
    wider: 1200,
  },
    children
  }: Props = $props();

  let columnWidthVars = $derived({
    'narrower-column-width': columnWidths.narrower + 'px',
    'narrow-column-width': columnWidths.narrow + 'px',
    'normal-column-width': columnWidths.normal + 'px',
    'wide-column-width': columnWidths.wide + 'px',
    'wider-column-width': columnWidths.wider + 'px',
  });
</script>

<main id="main-content">
  <article {id} class:embedded {role} use:cssVariables="{columnWidthVars}">
    <!-- Article content -->
    {@render children?.()}
  </article>
</main>

<style lang="scss">
  article {
    width: 100%;
    display: block;
    margin: 0;
    padding: 0 15px;
    background-color: var(--theme-colour-background, transparent);
    &.embedded {
      overflow: auto;
    }
  }
</style>
