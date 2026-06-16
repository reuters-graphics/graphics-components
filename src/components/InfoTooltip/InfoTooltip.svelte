<!-- @component `InfoTooltip` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-utilities-infotooltip--docs) -->
<script module lang="ts">
  // Module-scoped counter gives each instance a unique id so the button's
  // `aria-describedby` reliably points at its own tooltip, even with many on a
  // page.
  let uid = 0;
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    /**
     * Tooltip text shown on hover or focus. Ignored when a `children` snippet
     * is provided.
     */
    text?: string;
    /**
     * Custom tooltip content. Takes precedence over `text` when both are set.
     */
    children?: Snippet;
    /**
     * Position the tooltip above the icon instead of below it.
     */
    above?: boolean;
    /**
     * Width of the tooltip, in pixels.
     */
    width?: number;
    /**
     * Accessible label for the info button, read by screen readers.
     */
    label?: string;
    /** Add a class to the wrapper to target with custom CSS. */
    class?: string;
  }

  let {
    text = '',
    children,
    above = false,
    width = 240,
    label = 'More information',
    class: cls = '',
  }: Props = $props();

  const tooltipId = `info-tooltip-${(uid += 1)}`;
</script>

<span class="info-tooltip-wrapper {cls}">
  <button
    class="info-tooltip-icon"
    type="button"
    aria-label={label}
    aria-describedby={tooltipId}
  >
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5" />
      <circle cx="8" cy="5" r="1" fill="currentColor" />
      <line
        x1="8"
        y1="7.5"
        x2="8"
        y2="12"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  </button>
  <span
    id={tooltipId}
    class="info-tooltip"
    class:above
    style:width="{width}px"
    role="tooltip"
  >
    {#if children}{@render children()}{:else}{text}{/if}
  </span>
</span>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .info-tooltip-wrapper {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .info-tooltip-icon {
    display: flex;
    align-items: center;
    padding: 0;
    background: none;
    border: none;
    font: inherit;
    color: var(--theme-colour-text-secondary);
    cursor: help;
  }

  .info-tooltip {
    display: none;
    position: absolute;
    top: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    padding: 6px 10px;
    background: var(--theme-colour-background);
    border: 1px solid var(--theme-colour-brand-rules);
    border-radius: 4px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 15%);
    color: var(--theme-colour-text-primary);
    white-space: normal;
    line-height: 1.4;
    @include mixins.body-note;
    @include mixins.text-xs;
    @include mixins.font-regular;

    &.above {
      top: auto;
      bottom: calc(100% + 6px);
    }
  }

  .info-tooltip-icon:hover + .info-tooltip,
  .info-tooltip-icon:focus-visible + .info-tooltip {
    display: block;
  }

  @media (max-width: 767px) {
    .info-tooltip {
      right: 0;
      left: auto;
      transform: none;

      &.above {
        right: 0;
        left: auto;
      }
    }
  }
</style>
