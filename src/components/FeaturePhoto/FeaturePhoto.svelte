<!-- @component `FeaturePhoto` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-multimedia-featurephoto--docs) -->
<script lang="ts">
  import { onMount } from 'svelte';
  import type { ContainerWidth } from '../@types/global';

  import Block from '../Block/Block.svelte';
  import PaddingReset from '../PaddingReset/PaddingReset.svelte';

  interface Props {
    /**
     * Photo source
     */
    src: string;
    /**
     * Photo altText
     */
    altText: string;
    /**
     * Add an id to target with custom CSS.
     */
    id?: string;
    /**
     * Add classes to target with custom CSS.
     */
    class?: string;
    /**
     * Photo caption
     */
    caption?: string;
    /**
     * Height of the photo placeholder when lazy-loading
     */
    height?: number;
    /**
     * Width of the container: normal, wide, wider, widest or fluid
     */
    width?: ContainerWidth;
    /**
     * Set a different width for the text vs the photo. For example, "normal" to keep the title, description and notes inline with the rest of the text well. Can't ever be wider than `width`.
     */
    textWidth?: ContainerWidth;
    /**
     * Whether to lazy load the photo using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
     */
    lazy?: boolean;
    /**
     * Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `top` when lazy loading.
     */
    top?: number;
    /**
     * Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `bottom` when lazy loading.
     */
    bottom?: number;
    /**
     * Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `left` when lazy loading.
     */
    left?: number;
    /**
     * Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `right` when lazy loading.
     */
    right?: number;
  }

  let {
    src,
    altText,
    id = '',
    class: cls = '',
    caption,
    height = 100,
    width = 'normal',
    textWidth = 'normal',
    lazy = true,
    top = 0,
    bottom = 0,
    left = 0,
    right = 0,
  }: Props = $props();

  let intersecting = $state(false);
  let container: HTMLElement;
  const intersectable = typeof IntersectionObserver !== 'undefined';

  onMount(() => {
    if (!lazy) return;

    if (intersectable) {
      const rootMargin = `${bottom}px ${left}px ${top}px ${right}px`;

      const observer = new IntersectionObserver(
        (entries) => {
          intersecting = entries[0].isIntersecting;
          if (intersecting) {
            observer.unobserve(container);
          }
        },
        {
          rootMargin,
        }
      );

      observer.observe(container);
      return () => observer.unobserve(container);
    }
  });
</script>

<Block {width} class="photo fmy-6 {cls}" {id}>
  <figure
    bind:this={container}
    aria-label="media"
    class="w-full flex flex-col relative"
  >
    {#if !lazy || (intersectable && intersecting)}
      <img class="w-full my-0" {src} alt={altText} />
    {:else}
      <div class="placeholder w-full" style={`height: ${height}px;`}></div>
    {/if}
    {#if caption}
      <PaddingReset containerIsFluid={width === 'fluid'}>
        <Block width={textWidth} class="notes w-full fmy-0">
          <figcaption>
            {caption}
          </figcaption>
        </Block>
      </PaddingReset>
    {/if}
    {#if !altText}
      <div class="alt-warning absolute text-xxs py-1 px-2">altText</div>
    {/if}
  </figure>
</Block>

<style lang="scss">
  .placeholder {
    background-color: #ccc;
  }

  div.alt-warning {
    background-color: red;
    color: white;
    top: 0;
    right: 0;
  }
</style>
