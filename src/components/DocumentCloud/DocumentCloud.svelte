<!-- @component `DocumentCloud` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-DocumentCloud--default) -->
<script lang="ts">
  import type { ContainerWidth } from '../@types/global';
  /** ✏️ DOCUMENT your chart's props using TypeScript and JSDoc comments like below! */

  /**
   * Width of the container, one of: normal, wide, wider, widest or fluid
   */
  export let width: ContainerWidth = 'normal';

  /**
   * The unique identifier for the document.
   * @required
   */
  export let slug: string;

  /**
   * Alt text for the document.
   * @required
   */
  export let altText: string;

  /** Add an ID to target with SCSS. */
  export let id: string = '';

  /** Add a class to target with SCSS. */
  export let cls: string = '';

  import Block from '../Block/Block.svelte';
</script>

<Block width="{width}" id="{id}" cls="photo {cls}">
  <iframe
    src="https://embed.documentcloud.org/documents/{slug}/?embed=1&amp;responsive=1&amp;title=1"
    title="{altText}"
    width="700"
    height="540"
    style="border: 1px solid #aaa; width: 100%; height: 800px; height: calc(100vh - 100px);"
    sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-popups-to-escape-sandbox"
  ></iframe>
</Block>
