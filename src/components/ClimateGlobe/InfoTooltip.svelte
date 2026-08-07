<!--
  @component `InfoTooltip` is a small "i" icon button that reveals explanatory
  text on hover or focus. CSS-only (no JS state) via a `:hover`/`:focus-visible`
  sibling selector.
-->
<script lang="ts">
  interface Props {
    /** Text revealed in the tooltip. */
    text: string;
    /** Accessible label for the icon button. */
    label?: string;
  }

  let { text, label = 'More information' }: Props = $props();

  // Unique per instance so multiple tooltips on one page don't share an id.
  const uid = $props.id();
</script>

<span class="info-tooltip">
  <button
    type="button"
    class="info-tooltip__trigger"
    aria-label={label}
    aria-describedby={`info-tooltip-${uid}`}
  >
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <circle
        cx="8"
        cy="8"
        r="7"
        fill="none"
        stroke="currentColor"
        stroke-width="1.25"
      />
      <line
        x1="8"
        y1="7"
        x2="8"
        y2="11.5"
        stroke="currentColor"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <circle cx="8" cy="4.5" r="0.75" fill="currentColor" />
    </svg>
  </button>
  <span class="info-tooltip__body" id={`info-tooltip-${uid}`} role="tooltip">
    {text}
  </span>
</span>

<style lang="scss">
  .info-tooltip {
    position: relative;
    display: inline-flex;
  }

  .info-tooltip__trigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    padding: 0;
    border: 0;
    background: none;
    color: var(--theme-colour-text-secondary);
    cursor: pointer;
  }

  .info-tooltip__trigger svg {
    width: 100%;
    height: 100%;
  }

  .info-tooltip__body {
    position: absolute;
    bottom: calc(100% + 0.375rem);
    right: 0;
    width: 14rem;
    padding: 0.375rem 0.5rem;
    border-radius: 4px;
    background: var(--theme-colour-text-primary, #121212);
    color: var(--theme-colour-background, #fff);
    font-size: 0.75rem;
    line-height: 1.3;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.1s;
    z-index: 1;
  }

  .info-tooltip__trigger:hover + .info-tooltip__body,
  .info-tooltip__trigger:focus-visible + .info-tooltip__body {
    opacity: 1;
    visibility: visible;
  }
</style>
