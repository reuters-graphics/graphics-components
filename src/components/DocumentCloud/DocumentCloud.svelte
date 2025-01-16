<!-- @migration-task Error while migrating Svelte code: Cannot set properties of undefined (setting 'next') -->
<!-- @component `DocumentCloud` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-multimedia-documentcloud--docs) -->
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
  let cls: string = '';
  export { cls as class };

  import Block from '../Block/Block.svelte';
</script>

<Block {width} {id} class="photo fmy-6 {cls}">
  <iframe
    class="h-screen"
    src="https://embed.documentcloud.org/documents/{slug}/?embed=1&amp;responsive=1&amp;title=1"
    title="{altText}"
    width="700"
    height="540"
    sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-popups-to-escape-sandbox"
  ></iframe>
</Block>
