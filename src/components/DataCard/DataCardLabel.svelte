<!-- @component `DataCardLabel`

A small descriptive label, typically placed beneath a `DataCardBigNumber`. Use
`muted` for secondary context like dates or footnote-level notes. -->

<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    /** The label content. */
    children: Snippet;
    /** Soften the label to a tertiary colour (e.g. date subtitles, context). */
    muted?: boolean;
    /** Optional label colour passed by the composition site. */
    color?: string;
  }

  let { children, muted = false, color }: Props = $props();
</script>

<p class="data-card-label" class:muted style:--dc-label-color={color ?? null}>
  {@render children()}
</p>

<style lang="scss">
  .data-card-label {
    margin: 1px 0 0 0;
    font-size: var(--dc-label-size, 12px);
    color: var(--dc-label-color, var(--theme-colour-text-secondary, #666));

    &.muted {
      font-size: var(--dc-sublabel-size, 11px);
      color: var(--dc-label-muted-color, #999);
    }
  }
</style>
