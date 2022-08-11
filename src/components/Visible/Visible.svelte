<script lang="ts">
  import { onMount } from 'svelte';
  /**
   * Whether to change visibility just once. 
   * 
   * Useful for loading expensive images or other media and then keeping them around once they're first loaded.
   */
  export let once: boolean = false;
  /** Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `top`. */
  export let top = 0;
  /** Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `bottom`. */
  export let bottom = 0;
  /** Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `left`. */
  export let left = 0;
  /** Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `right`. */
  export let right = 0;
  /** Set the Intersection Observer [threshold](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold). */
  export let threshold = 0;
  
  let visible = false;
  let container: HTMLElement;
  
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
  <slot visible="{visible}" />
</div>
