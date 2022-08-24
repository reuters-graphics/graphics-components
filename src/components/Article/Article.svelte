<script lang="ts">
  /** Set to true for embeddables. */
  export let embedded: boolean = false;

  /** Add an id to the article tag to target it with custom CSS. */
  export let id: string | null = null;

  /** ARIA role of the article */
  export let role: string | null = null;

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

  /** Set custom widths for the normal, wide and wider column dimensions */
  export let columnWidths: ColumnWidths = {
    narrower: 330,
    narrow: 510,
    normal: 660,
    wide: 930,
    wider: 1200,
  };

  import cssVariables from '$lib/actions/cssVariables/index.js';

  $: columnWidthVars = {
    'narrower-column-width': columnWidths.narrower + 'px',
    'narrow-column-width': columnWidths.narrow + 'px',
    'normal-column-width': columnWidths.normal + 'px',
    'wide-column-width': columnWidths.wide + 'px',
    'wider-column-width': columnWidths.wider + 'px',
  };
</script>

<main>
  <article
    id="{id}"
    class:embedded
    role="{role}"
    use:cssVariables="{columnWidthVars}"
  >
    <!-- Article content -->
    <slot />
  </article>
</main>

<style lang="scss">
  article {
    width: 100%;
    display: block;
    margin: 0;
    padding: 0 15px;
    overflow-x: hidden;
    background-color: var(--theme-colour-background, transparent);
    &.embedded {
      overflow: auto;
    }
  }
</style>
