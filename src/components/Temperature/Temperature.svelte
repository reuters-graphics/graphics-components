<!--
  @component Flash-free temperature display.

  Renders a Celsius value in whichever unit the reader prefers. Both the °C and
  °F strings are rendered and CSS shows exactly one based on the `data-temp-unit`
  attribute the pre-paint bootstrap sets on `<html>` — so even server-rendered
  markup never flashes the wrong unit and toggling swaps every instance instantly
  with no per-node JS. Defaults to Celsius when the attribute is absent (e.g. no
  JS).

  Flash-free rendering needs a static CSS selector, so this component always keys off
  the default `data-temp-unit` attribute. If you change `UnitConfig.attribute` for
  the bootstrap/state/toggle, this component will not respond unless you also
  provide matching CSS selectors (or keep the attribute name as `data-temp-unit`).

  ```svelte
  <Temperature celsius={22.4} digits={1} />
  <Temperature celsius={3} delta />
  ```

  Renders e.g. `72°F` / `22.4°C`, or `+5°F` / `+3°C` for a delta.
-->
<script lang="ts">
  import { formatDelta, formatTemperature } from './units';

  interface Props {
    /** The value in degrees Celsius (an absolute temperature or, with `delta`, a difference). */
    celsius: number;
    /** Render as a signed difference (`+5°F`) instead of an absolute temperature. */
    delta?: boolean;
    /** Decimal places (default 0). */
    digits?: number;
    /** Append the degree suffix (default true). */
    suffix?: boolean;
    /** Include the degree ring in the suffix (default true). */
    degree?: boolean;
  }

  let {
    celsius,
    delta = false,
    digits = 0,
    suffix = true,
    degree = true,
  }: Props = $props();

  const format = (unit: 'celsius' | 'fahrenheit') =>
    delta ?
      formatDelta(celsius, unit, { digits, suffix, degree })
    : formatTemperature(celsius, unit, { digits, suffix, degree });

  const celsiusText = $derived(format('celsius'));
  const fahrenheitText = $derived(format('fahrenheit'));
</script>

<span class="temperature"
  ><span class="temperature__c">{celsiusText}</span><span class="temperature__f"
    >{fahrenheitText}</span
  ></span
>

<style>
  /* Default (attribute absent or Celsius): show °C, hide °F. */
  .temperature__f {
    display: none;
  }
  :global(html[data-temp-unit='fahrenheit']) .temperature__c {
    display: none;
  }
  :global(html[data-temp-unit='fahrenheit']) .temperature__f {
    display: inline;
  }
</style>
