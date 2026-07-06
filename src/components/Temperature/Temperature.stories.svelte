<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Temperature from './Temperature.svelte';
  import TemperatureToggle from './TemperatureToggle.svelte';

  const { Story } = defineMeta({
    title: 'Components/Utilities/Temperature',
    component: Temperature,
    tags: ['autodocs'],
    args: {
      celsius: 22.4,
      delta: false,
      digits: 1,
      suffix: true,
      degree: true,
    },
    argTypes: {
      celsius: { control: 'number' },
      delta: { control: 'boolean' },
      digits: { control: { type: 'number', min: 0, max: 3 } },
      suffix: { control: 'boolean' },
      degree: { control: 'boolean' },
    },
  });
</script>

<!--
  The Temperature display keys off the `data-temp-unit` attribute on `<html>`.
  Use the toggle below to switch units — every value updates instantly with no
  reflow because both °C and °F are rendered and CSS shows one.
-->
<Story name="Demo">
  {#snippet children(args)}
    <div style="display: flex; align-items: center; gap: 16px;">
      <TemperatureToggle />
      <span style="font-size: 24px;">
        <Temperature {...args} celsius={args.celsius ?? 22.4} />
      </span>
    </div>
  {/snippet}
</Story>

<Story name="Absolute and delta" tags={['!autodocs', '!dev']}>
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <TemperatureToggle />
    <p>Today's high: <Temperature celsius={31.2} digits={1} /></p>
    <p>Anomaly vs. normal: <Temperature celsius={3.4} digits={1} delta /></p>
    <p>Cold snap: <Temperature celsius={-6} delta /></p>
    <p>No suffix: <Temperature celsius={18} suffix={false} /></p>
  </div>
</Story>
