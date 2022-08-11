<script lang="ts">
  import { onMount } from 'svelte';

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
   * Caption below the photo
   * @type {string}
   */
  export let caption: string;
  /**
   * Height of the photo placeholder when lazy-loading
   */
  export let height: number = 100;

  type ContainerWidth = 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';

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

<figure
  class="photo { width }"
  bind:this="{container}"
>
  {#if !lazy || (intersectable && intersecting)}
    <img src="{src}" alt="{altText}" />
  {:else}
    <div class="placeholder" height="{`${height}px`}"></div>
  {/if}
  {#if caption}
    <figcaption>{caption}</figcaption>
  {/if}
  {#if (!altText)}
    <div class='alt-warning'>Missing altText</div>
  {/if}
</figure>

<style lang="scss">
  @import "@reuters-graphics/style-main/scss/fonts/mixins";
  figure {
    position: relative;
    div.alt-warning {
      @include font-display;
      padding: 5px 10px;
      background-color: red;
      color: white;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 14px;
      line-height: 16px;
    }
  }
  .placeholder {
    background-color: #ccc;
    width: 100%;
  }
  figcaption {
    @include font-display;
    font-weight: 400;
  }
</style>
