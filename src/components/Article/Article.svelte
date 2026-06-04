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

  import { getContext } from 'svelte';
  import cssVariables from '../../actions/cssVariables/index';

  interface Props {
    /** Set to true for embeddables. */
    embedded?: boolean;
    /** Add an id to the article tag to target it with custom CSS. */
    id?: string;
    /** ARIA role of the article */
    role?: string | null;
    /** Set custom widths for the normal, wide and wider column dimensions */
    columnWidths?: ColumnWidths;
    children?: import('svelte').Snippet;
  }

  let {
    embedded = false,
    id = '',
    role = null,
    columnWidths = {
      narrower: 330,
      narrow: 510,
      normal: 660,
      wide: 930,
      wider: 1200,
    },
    children,
  }: Props = $props();

  // Read the render-mode getter set by an ancestor `<ArcRendering>` via
  // Svelte context. It returns `'reuters'` when the page is configured to
  // render inside the reuters.com Arc shell, and an empty string otherwise.
  // The context is absent on pages that don't use `<ArcRendering>` at all
  // (e.g. standalone embeds, Storybook, legacy graphics).
  const getRenderMode =
    getContext<() => string | undefined>('arcxp:renderMode');

  // Detect whether the page is actually being served from reuters.com. We
  // gate the <main>-skipping behaviour on this so that local dev, preview
  // builds and Storybook still render their own <main> landmark — only the
  // production Arc shell provides one for us.
  const onReutersDotcom =
    typeof window !== 'undefined' &&
    (window.location.hostname === 'reuters.com' ||
      window.location.hostname === 'www.reuters.com');

  // Skip wrapping in <main> only when BOTH conditions are true:
  //   1. An ancestor `<ArcRendering>` set renderMode to `'reuters'`, AND
  //   2. We're actually running on reuters.com.
  // In that case Arc XP's shell already provides the page's <main> landmark,
  // and rendering another would produce two <main> elements in the document.
  // In every other case (no context, non-reuters render mode, or off-domain),
  // we render our own <main id="main-content"> so the page has a proper
  // landmark for accessibility and skip-links.
  let wrapInMain = $derived(
    !getRenderMode || getRenderMode() !== 'reuters' || !onReutersDotcom
  );

  let columnWidthVars = $derived({
    'narrower-column-width': columnWidths.narrower + 'px',
    'narrow-column-width': columnWidths.narrow + 'px',
    'normal-column-width': columnWidths.normal + 'px',
    'wide-column-width': columnWidths.wide + 'px',
    'wider-column-width': columnWidths.wider + 'px',
  });
</script>

{#if wrapInMain}
  <!-- Default: render our own <main> landmark for the page. -->
  <main id="main-content">
    <article {id} class:embedded {role} use:cssVariables={columnWidthVars}>
      <!-- Article content -->
      {@render children?.()}
    </article>
  </main>
{:else}
  <!-- Inside the reuters.com Arc shell: the shell already renders <main>,
       so we only emit the <article> to avoid nesting/duplicate landmarks. -->
  <article {id} class:embedded {role} use:cssVariables={columnWidthVars}>
    <!-- Article content -->
    {@render children?.()}
  </article>
{/if}

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
