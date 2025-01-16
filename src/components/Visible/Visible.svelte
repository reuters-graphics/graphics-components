<!-- @component `Visible` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-utilities-visible--docs) -->
<script lang="ts">
  import { onMount } from 'svelte';
  
  
  
  
  
  
  interface Props {
    /**
   * Whether to change visibility just once.
   *
   * Useful for loading expensive images or other media and then keeping them around once they're first loaded.
   */
    once?: boolean;
    /** Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `top`. */
    top?: number;
    /** Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `bottom`. */
    bottom?: number;
    /** Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `left`. */
    left?: number;
    /** Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `right`. */
    right?: number;
    /** Set the Intersection Observer [threshold](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold). */
    threshold?: number;
    children?: import('svelte').Snippet<[any]>;
  }

  let {
    once = false,
    top = 0,
    bottom = 0,
    left = 0,
    right = 0,
    threshold = 0,
    children
  }: Props = $props();

  let visible = $state(false);
  let container: HTMLElement = $state();

  onMount(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      const rootMargin = `${bottom}px ${left}px ${top}px ${right}px`;
      const observer = new IntersectionObserver(
        (entries) => {
          visible = entries[0].isIntersecting;
          if (visible && once) {
            observer.unobserve(container);
          }
        },
        {
          rootMargin,
          threshold,
        }
      );
      observer.observe(container);
      return () => observer.unobserve(container);
    }
    function handler() {
      const bcr = container.getBoundingClientRect();
      visible =
        bcr.bottom + bottom > 0 &&
        bcr.right + right > 0 &&
        bcr.top - top < window.innerHeight &&
        bcr.left - left < window.innerWidth;
      if (visible && once) {
        window.removeEventListener('scroll', handler);
      }
    }
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  });
</script>

<div bind:this="{container}">
  <!-- An element or component -->
  {@render children?.({ visible, })}
</div>
