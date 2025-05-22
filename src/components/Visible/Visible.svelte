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
     * Specify a value and unit (e.g. `px`, `%`, `vw`, `vh`, `rem`, `em`).
     */
    top?: { value: number; unit: 'px' | '%' | 'vw' | 'vh' | 'rem' | 'em' };
    /**
     * Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `bottom`.
     * Specify a value and unit (e.g. `px`, `%`, `vw`, `vh`, `rem`, `em`).
     */
    bottom?: { value: number; unit: 'px' | '%' | 'vw' | 'vh' | 'rem' | 'em' };
    /**
     * Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `left`.
     * Specify a value and unit (e.g. `px`, `%`, `vw`, `vh`, `rem`, `em`).
     */
    left?: { value: number; unit: 'px' | '%' | 'vw' | 'vh' | 'rem' | 'em' };
    /**
     * Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `right`.
     * Specify a value and unit (e.g. `px`, `%`, `vw`, `vh`, `rem`, `em`).
     */
    right?: { value: number; unit: 'px' | '%' | 'vw' | 'vh' | 'rem' | 'em' };
    /** Set the Intersection Observer [threshold](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold). */
    threshold?: number;
    children?: Snippet<[boolean]>;
  }

  let {
    once = false,
    top = { value: 0, unit: 'px' },
    bottom = { value: 0, unit: 'px' },
    left = { value: 0, unit: 'px' },
    right = { value: 0, unit: 'px' },
    threshold = 0,
    children,
  }: Props = $props();

  let visible = $state(false);
  let container: HTMLElement | undefined = $state(undefined);

  onMount(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      const rootMargin = `${bottom.value}${bottom.unit} ${left.value}${left.unit} ${top.value}${top.unit} ${right.value}${right.unit}`;

      const observer = new IntersectionObserver(
        (entries) => {
          visible = entries[0].isIntersecting;
          if (visible && once && container) {
            observer.unobserve(container);
          }
        },
        {
          rootMargin,
          threshold,
        }
      );
      if (container) observer.observe(container);
      return () => {
        if (container) observer.unobserve(container);
      };
    }
    function handler() {
      if (container) {
        const bcr = container.getBoundingClientRect();
        visible =
          bcr.bottom + bottom.value > 0 &&
          bcr.right + right.value > 0 &&
          bcr.top - top.value < window.innerHeight &&
          bcr.left - left.value < window.innerWidth;
      }
      if (visible && once) {
        window.removeEventListener('scroll', handler);
      }
    }
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  });
</script>

<div bind:this={container}>
  {#if children}
    {@render children(visible)}
  {/if}
</div>
