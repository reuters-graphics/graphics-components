<!-- @component A flash-free temperature reading that shows a Celsius value in the reader's preferred unit via CSS. Pairs with TemperatureToggle. -->
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
