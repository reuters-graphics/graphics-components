<!-- @component An accessible °C/°F switch that flips and persists the reader's unit preference so every Temperature updates. Pairs with Temperature. -->
<script lang="ts">
  import { getUnitContext, type TemperatureUnitState } from './state.svelte';

  interface Props {
    /** State to control; defaults to the nearest context or the shared singleton. */
    state?: TemperatureUnitState;
    /** Accessible label for the control. */
    label?: string;
  }

  let { state = getUnitContext(), label = 'Temperature unit' }: Props =
    $props();
</script>

<button
  type="button"
  class="temperature-toggle"
  role="switch"
  aria-checked={state.current === 'fahrenheit'}
  aria-label={label}
  onclick={() => state.toggle()}
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

<style>
  .temperature-toggle {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;
    font-size: 14px;
    color: #999;
    transition: border-color 0.2s;
  }

  .temperature-toggle:hover {
    border-color: #999;
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
