<!-- @component `Visible` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-utilities-visible--docs) -->
<script lang="ts">
  import { onMount, type Snippet } from 'svelte';

  interface Props {
    /**
     * Whether to change visibility just once.
     *
     * Useful for loading expensive images or other media and then keeping them around once they're first loaded.
     */
    once?: boolean;
    /**
     * Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `top`.
     * Specify a pixel value.
     */
    top?: number;
    /**
     * Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `bottom`.
     * Specify a pixel value.
     */
    bottom?: number;
    /**
     * Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `left`.
     * Specify a pixel value.
     */
    left?: number;
    /**
     * Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `right`.
     * Specify a pixel value.
     */
    right?: number;
    /** Set the Intersection Observer [threshold](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold). */
    threshold?: number;
    children?: Snippet<[boolean]>;
  }

  let {
    once = false,
    top = 0,
    bottom = 0,
    left = 0,
    right = 0,
    threshold = 0,
    children,
  }: Props = $props();

  let visible = $state(false);
  let visibleOnce = $state(false);
  let container: HTMLElement | undefined = $state(undefined);

  let observer: IntersectionObserver | undefined = $state(undefined);

  // function scrollHandler() {
  //   // Only trigger if `visibleOnce` is false
  //   if (container && observer && !visibleOnce) {
  //     const bcr = container.getBoundingClientRect();
  //     visible =
  //       bcr.bottom + bottom > 0 &&
  //       bcr.right + right > 0 &&
  //       bcr.top - top < window.innerHeight &&
  //       bcr.left - left < window.innerWidth;

  //     if (container) {
  //       // console.log('Observing container:', observer);
  //       observer.observe(container);
  //     }

  //     // If `once` is true, set `visibleOnce` to true once `visible` becomes true
  //     if (once && visible) visibleOnce = true;
  //   }
  // }

  onMount(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      const rootMargin = `${top}px ${right}px ${bottom}px ${left}px`;

      const observer = new IntersectionObserver(
        (entries) => {
          visible = entries[0].isIntersecting;
          if (visible && once && container && observer) {
            observer.unobserve(container);
          }
        },
        {
          rootMargin,
          threshold,
        }
      );

      // Unobserve when the component is unmounted
      return () => {
        if (container && observer) observer.unobserve(container);
      };
    }
  });

  $effect(() => {
    console.log('visible:', visible);
  });
</script>

<!-- <svelte:window onscroll={scrollHandler} /> -->

<div
  class="visibility-tracker"
  class:visible
  class:not-visible={!visible}
  bind:this={container}
>
  {#if children}
    {@render children(visible)}
  {/if}
</div>
