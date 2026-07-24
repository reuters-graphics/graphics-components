<!--
@component
LazyMount

Mount children only when the wrapper enters (or is near) the viewport.
Off-screen content stays a fixed-height placeholder so the page's scrollbar /
layout stays accurate, but the actual children never hydrate or paint until
needed. Once mounted, a row stays mounted (incremental hydration) — so URL
hash, find-in-page and transitions keep working.

```svelte
<LazyMount height="180px">
  <ExpensiveCard {...props} />
</LazyMount>
```
-->

<script lang="ts">
  import { onMount, type Snippet } from 'svelte';

  type Props = {
    /** CSS length reserved for the placeholder while unmounted. */
    height: string;
    /** `IntersectionObserver` rootMargin. @default '400px 0px' */
    rootMargin?: string;
    /** Optional lightweight skeleton rendered while unmounted. */
    placeholder?: Snippet;
    children: Snippet;
  };

  let {
    height,
    rootMargin = '400px 0px',
    placeholder,
    children,
  }: Props = $props();

  let el: HTMLDivElement;
  let mounted = $state(false);

  onMount(() => {
    if (typeof IntersectionObserver === 'undefined') {
      mounted = true;
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            mounted = true;
            io.disconnect();
            return;
          }
        }
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  });
</script>

<div
  bind:this={el}
  class="lazy-mount"
  style={mounted ? undefined : `min-height: ${height};`}
>
  {#if mounted}
    {@render children()}
  {:else if placeholder}
    {@render placeholder()}
  {/if}
</div>

<style lang="scss">
  .lazy-mount {
    contain: style;
  }
</style>
