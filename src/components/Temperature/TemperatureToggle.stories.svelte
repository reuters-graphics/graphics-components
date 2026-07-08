<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TemperatureToggle from './TemperatureToggle.svelte';
  import Temperature from './Temperature.svelte';

  const { Story } = defineMeta({
    title: 'Components/Controls/TemperatureToggle',
    component: TemperatureToggle,
  });
</script>

<!--
  The toggle flips the shared unit state and persists the choice. Any
  `Temperature` on the page — and any cross-bundle listener on the
  `temperature-unit-changed` window event — updates in lock-step.
-->
<Story asChild name="Demo">
  <div style="display: flex; align-items: center; gap: 16px;">
    <TemperatureToggle />
    <span style="font-size: 20px;">
      <Temperature celsius={26.7} digits={1} />
    </span>
  </div>
</Story>
