<!--
@component
AnimatedScore

Renders a numeric (or string) value and animates a "score bump" whenever it
changes: the outgoing value zooms + fades away while the incoming value pops
in. Purely structural — inherits font-size/colour/weight from its wrapper so
it's a drop-in for any plain `{score}` expression. No data/service coupling.

```svelte
<AnimatedScore value={goals} />
```
-->

<script lang="ts">
  import { scale } from 'svelte/transition';
  import type { Snippet } from 'svelte';

  type Props = {
    /** The value to render. When it changes, the bump animation fires. */
    value: number | string;
    /** Optional snippet for fully custom rendering of `value`. */
    children?: Snippet<[number | string]>;
    /** Whether the value should be bold while displayed. Default false. */
    bold?: boolean;
    /** in: transition duration (ms). */
    inDuration?: number;
    /** out: transition duration (ms). */
    outDuration?: number;
    /** in: starting scale factor. */
    inStart?: number;
    /** out: starting scale factor. */
    outStart?: number;
    /** in: starting opacity. */
    inOpacity?: number;
    /** out: starting opacity. */
    outOpacity?: number;
    /** Extra class on the outer stack. */
    class?: string;
  };

  let {
    value,
    children,
    bold = false,
    inDuration = 300,
    outDuration = 350,
    inStart = 1.5,
    outStart = 2,
    inOpacity = 0,
    outOpacity = 0,
    class: cls = '',
  }: Props = $props();
</script>

<span class="animated-score {cls}" class:bold>
  {#key value}
    <span
      class="animated-score__value"
      in:scale={{ duration: inDuration, start: inStart, opacity: inOpacity }}
      out:scale={{ duration: outDuration, start: outStart, opacity: outOpacity }}
    >
      {#if children}
        {@render children(value)}
      {:else}
        {value}
      {/if}
    </span>
  {/key}
</span>

<style lang="scss">
  .animated-score {
    display: inline-grid;
    grid-template-areas: 'value';
    vertical-align: baseline;

    &.bold > .animated-score__value {
      font-weight: 700;
    }
  }

  .animated-score__value {
    grid-area: value;
    display: inline-block;
    transform-origin: center center;
    will-change: transform, opacity;
  }
</style>
