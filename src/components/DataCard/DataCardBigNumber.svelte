<!-- @component `DataCardBigNumber`

A large, tabular-figure statistic with an optional unit suffix. Its size scales
with the parent `DataCardBase`'s width via container queries. -->
<script lang="ts">
  interface Props {
    /** The headline value to display. */
    value: string | number;
    /** Optional unit suffix shown next to the value (e.g. `°C`, `%`). */
    unit?: string;
    /** Optional colour applied to both the value and unit. */
    color?: string;
  }

  let { value, unit, color }: Props = $props();
</script>

<div
  class="data-card-big-number"
  style:--dc-big-number-value-color={color ?? null}
  style:--dc-big-number-unit-color={color ?? null}
>
  <span class="big-number-value">{value}</span>
  {#if unit}
    <span class="big-number-unit">{unit}</span>
  {/if}
</div>

<style lang="scss">
  .data-card-big-number {
    display: flex;
    align-items: flex-start;
    margin: 4px 0 0 0;
  }

  .big-number-value {
    font-size: var(--dc-big-number-size, 42px);
    font-weight: 700;
    line-height: 1;
    font-variant-numeric: tabular-nums;
    color: var(--dc-big-number-value-color, currentColor);
  }

  .big-number-unit {
    font-size: var(--dc-big-number-unit-size, 14px);
    font-weight: 400;
    color: var(
      --dc-big-number-unit-color,
      var(--theme-colour-text-secondary, #666)
    );
  }
</style>
