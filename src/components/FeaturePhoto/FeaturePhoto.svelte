<!-- @component `FeaturePhoto` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-FeaturePhoto--default) -->
<script lang="ts">
  import { onMount } from 'svelte';
  import Block from '../Block/Block.svelte';
  import type { ContainerWidth } from '../@types/global';
  import PaddingReset from '../PaddingReset/PaddingReset.svelte';

  /**
   * Photo src
   * @type {string}
   * @required
   */
  export let src: string;
  /**
   * Photo altText
   * @type {string}
   * @required
   */
  export let altText: string;
  /**
   * Add an id to target with custom CSS.
   * @type {string}
   */
  export let id: string = '';
  /**
   * Add extra classes to target with custom CSS.
   * @type {string}
   */
  let cls: string = '';
  export { cls as class };
  /**
   * Caption below the photo
   * @type {string}
   */
  export let caption: string;
  /**
   * Height of the photo placeholder when lazy-loading
   */
  export let height: number = 100;
  /**
   * Width of the container, one of: normal, wide, wider, widest or fluid
   */
  export let width: ContainerWidth = 'normal';
  /**
   * Whether to lazy load the photo using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
   */
  export let lazy: boolean = false;
  /** Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `top` when lazy loading. */
  export let top = 0;
  /** Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `bottom` when lazy loading. */
  export let bottom = 0;
  /** Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `left` when lazy loading. */
  export let left = 0;
  /** Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `right` when lazy loading. */
  export let right = 0;

  let intersecting = false;
  let container;
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

<Block width="{width}" class="photo {cls}" id="{id}">
  <figure
    bind:this="{container}"
    aria-label="media"
    class="mt-0 mx-0 mb-6 flex flex-col relative"
  >
    {#if !lazy || (intersectable && intersecting)}
      <img class="m-0" src="{src}" alt="{altText}" />
    {:else}
      <div class="placeholder" style="{`height: ${height}px;`}"></div>
    {/if}
    {#if caption}
      <PaddingReset containerIsFluid="{width === 'fluid'}">
        <figcaption class="font-note my-0 text-xs leading-tight">
          {caption}
        </figcaption>
      </PaddingReset>
    {/if}
    {#if !altText}
      <div class="alt-warning absolute text-xxs py-1 px-2">altText</div>
    {/if}
  </figure>
</Block>

<style lang="scss">
  figure {
    width: 100%;

    img {
      width: 100%;
    }

    .placeholder {
      background-color: #ccc;
      width: 100%;
    }

    div.alt-warning {
      background-color: red;
      color: white;
      top: 0;
      right: 0;
    }
  }
</style>
