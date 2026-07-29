<!--
  @component `Toggle` is a compact segmented control for choosing one option from a small set.

  It is built on native `<input type="radio">` elements rather than buttons.
  Radio semantics are the honest description of "pick one of these views", and
  they come with arrow-key navigation, focus management and selected-state
  announcements without hand-rolled ARIA. The inputs are visually hidden but
  remain focusable, with the focus ring drawn on the label.
-->
<script lang="ts" module>
  export interface ToggleOption {
    /** Stable value emitted when this option is selected. */
    value: string;
    /** Visible label for the option. */
    label: string;
  }
</script>

<script lang="ts">
  interface Props {
    /** Selectable options. Two or three short options work best. */
    options: ToggleOption[];
    /** Currently selected option value. */
    value: string;
    /** Accessible name for the group as a whole. */
    legend: string;
    /** Called with the newly selected option value. */
    onselect: (value: string) => void;
    /** Form control name. Defaults to a unique, prerender-safe value. */
    name?: string;
  }

  let { options, value, legend, onselect, name }: Props = $props();

  // Unique per instance so multiple toggles on one page don't share a radio
  // group. `$props.id()` is prerender-safe; `crypto.randomUUID()` would not
  // match between server and client and also requires a secure context.
  const uid = $props.id();
  const groupName = $derived(name ?? `toggle-${uid}`);
</script>

<fieldset class="toggle">
  <legend class="visually-hidden">{legend}</legend>
  <div class="toggle__track">
    {#each options as option, index (option.value)}
      {#if index > 0}
        <span class="toggle__divider" aria-hidden="true">/</span>
      {/if}
      <label
        class="toggle__option"
        class:is-active={value === option.value}
        data-label={option.label}
      >
        <input
          type="radio"
          name={groupName}
          value={option.value}
          checked={value === option.value}
          onchange={() => onselect(option.value)}
        />
        <span>{option.label}</span>
      </label>
    {/each}
  </div>
</fieldset>

<style lang="scss">
  .toggle {
    margin: 0 0 1rem;
    padding: 0;
    border: 0;
  }

  .toggle__track {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
    transition: border-color 0.2s;

    &:hover {
      border-color: #999;
    }
  }

  .toggle__option {
    position: relative;
    display: inline-grid;
    align-items: center;
    justify-content: center;
    min-height: 28px;
    padding: 4px;
    cursor: pointer;
    font-family: var(--font-family-base, 'Knowledge', Arial, sans-serif);
    font-size: 16px;
    color: var(--color-text-secondary, #666);
    transition: color 0.15s;

    // Reserve the selected label's semibold width so changing font weight
    // doesn't resize the option or make the control flash sideways.
    &::after {
      content: attr(data-label);
      grid-area: 1 / 1;
      height: 0;
      overflow: hidden;
      visibility: hidden;
      font-weight: 600;
      pointer-events: none;
    }

    > span {
      grid-area: 1 / 1;
    }

    &:hover {
      color: var(--color-text-primary, #333);
    }
  }

  .toggle__option.is-active {
    color: var(--color-text-primary, #333);
    font-weight: 600;
  }

  .toggle__divider {
    color: #ccc;
    font-size: 16px;
  }

  /* Visually hidden but focusable — the focus ring is drawn on the label. */
  .toggle__option input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    overflow: hidden;
    white-space: nowrap;
    clip-path: inset(50%);
  }

  .toggle__option:focus-within {
    outline: 2px solid var(--color-text-primary, #333);
    outline-offset: 2px;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    overflow: hidden;
    white-space: nowrap;
    clip-path: inset(50%);
  }

  @media (prefers-reduced-motion: reduce) {
    .toggle__track,
    .toggle__option {
      transition: none;
    }
  }
</style>
