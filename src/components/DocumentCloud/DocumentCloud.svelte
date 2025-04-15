<!-- @component `DocumentCloud` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-multimedia-documentcloud--docs) -->
<script lang="ts">
  import type { ContainerWidth } from '../@types/global';
  import Block from '../Block/Block.svelte';

  interface Props {
    /**
     * The unique identifier for the document.
     */
    slug: string;
    /**
     * Alt text for the document.
     */
    altText: string;
    /**
     * Width of the container, one of: normal, wide, wider, widest or fluid
     */
    width?: ContainerWidth;
    /** Add an ID to target with SCSS. */
    id?: string;
    /** Add a class to target with SCSS. */
    class?: string; // Add a class to target with SCSS.
  }

  let {
    slug,
    altText,
    width = 'normal',
    id = '',
    class: cls = '',
  }: Props = $props();
</script>

<Block {width} {id} class="photo fmy-6 {cls}">
  <iframe
    class="h-screen"
    src="https://embed.documentcloud.org/documents/{slug}/?embed=1&amp;responsive=1&amp;title=1"
    title={altText}
    sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-popups-to-escape-sandbox"
  ></iframe>
</Block>
