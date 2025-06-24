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
    /** Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `top` with units. Units must be `px` or `%`. */
    top?: string;
    /** Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `bottom` with units. Units must be `px` or `%`. */
    bottom?: string;
    /** Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `left` with units. Units must be `px` or `%`. */
    left?: string;
    /** Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `right` with units. Units must be `px` or `%`. */
    right?: string;
    /** Set the Intersection Observer [threshold](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold). */
    threshold?: number;
    children?: Snippet<[boolean]>;
  }

  let {
    once = false,
    top = '0px',
    bottom = '0px',
    left = '0px',
    right = '0px',
    threshold = 0,
    children,
  }: Props = $props();

  let visible = $state(false);
  let container: HTMLElement | undefined = $state(undefined);

  onMount(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      const rootMargin = `${bottom} ${left} ${top} ${right}`;

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
        if (container) observer.observe(container);
      };
    }
  });
</script>

<div
  bind:this={container}
  class="visibility-tracker"
  class:visible
  class:not-visible={!visible}
>
  {#if children}
    {@render children(visible)}
  {/if}
</div>
