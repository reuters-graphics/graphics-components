<!--
  @component A button for expanding and collapsing a content region.

  Pass the region's id through `controls`, keep `expanded` in the parent, and
  update it from `ontoggle`.
-->
<script lang="ts">
  interface Props {
    /** Whether the controlled content is currently expanded. */
    expanded: boolean;
    /** The id of the content region controlled by this button. */
    controls: string;
    /** Visible label while the content is collapsed. */
    expandLabel?: string;
    /** Visible label while the content is expanded. */
    collapseLabel?: string;
    /** Called when the reader activates the button. */
    ontoggle: () => void;
  }

  let {
    expanded,
    controls,
    expandLabel = 'Read more',
    collapseLabel = 'Show less',
    ontoggle,
  }: Props = $props();
</script>

<button
  class="expand-collapse-button px-3.5 py-2 rounded-sm"
  type="button"
  aria-expanded={expanded}
  aria-controls={controls}
  onclick={ontoggle}
>
  {expanded ? collapseLabel : expandLabel}
</button>

<style lang="scss">
  .expand-collapse-button {
    border: 1px solid var(--theme-colour-brand-rules, #d3d3d3);
    background: var(--theme-colour-background, #fff);
    color: var(--theme-colour-text-primary, #404040);
    font: inherit;
    cursor: pointer;

    &:hover {
      border-color: var(--theme-colour-text-secondary, #666);
    }

    &:focus-visible {
      outline: 2px solid var(--theme-colour-text-primary, #404040);
      outline-offset: 2px;
    }
  }
</style>
