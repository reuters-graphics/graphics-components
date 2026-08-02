<!-- @component An accessible °C/°F switch that flips and persists the reader's unit preference so every Temperature updates. Pairs with Temperature. -->
<script lang="ts">
  import { otherUnit, type TemperatureUnit } from './units';
  import { getUnitContext, type TemperatureUnitState } from './state.svelte';

  export interface TemperatureToggleProps {
    /** State to control; defaults to the nearest context or the shared singleton. */
    state?: TemperatureUnitState;
    /** Accessible label for the control. */
    label?: string;
    /**
     * Optional pre-mutation hook. Called **synchronously** with the *next*
     * {@link TemperatureUnit} immediately before `state.set(next)` commits the
     * change.  Throw to prevent the mutation and all canonical side-effects
     * (attribute, localStorage, window event) entirely.  Omitting the prop
     * leaves all existing behaviour unchanged.
     *
     * @example Synchronise an external renderer before the unit commits:
     * ```svelte
     * <TemperatureToggle
     *   onbeforetoggle={(next) => myChart.setUnit(next)}
     * />
     * ```
     */
    onbeforetoggle?: (next: TemperatureUnit) => void;
  }

  let {
    state = getUnitContext(),
    label = 'Temperature unit',
    onbeforetoggle,
  }: TemperatureToggleProps = $props();
</script>

<button
  type="button"
  class="temperature-toggle"
  role="switch"
  aria-checked={state.current === 'fahrenheit'}
  aria-label={label}
  onclick={() => {
    const next = otherUnit(state.current);
    onbeforetoggle?.(next);
    state.set(next);
  }}
>
  <span
    class="temperature-toggle__option"
    class:is-active={state.current === 'celsius'}>°C</span
  >
  <span class="temperature-toggle__divider" aria-hidden="true">/</span>
  <span
    class="temperature-toggle__option"
    class:is-active={state.current === 'fahrenheit'}>°F</span
  >
</button>

<style lang="scss">
  @use '../../scss/mixins/segmented-control';

  .temperature-toggle {
    @include segmented-control.track;

    cursor: pointer;
    font-size: 14px;
    color: #999;
  }

  .temperature-toggle:focus-visible {
    outline: 2px solid #0078d1;
    outline-offset: 2px;
  }

  .temperature-toggle__option {
    transition: color 0.2s;
  }

  .temperature-toggle__option.is-active {
    color: #333;
    font-weight: 600;
  }
</style>
