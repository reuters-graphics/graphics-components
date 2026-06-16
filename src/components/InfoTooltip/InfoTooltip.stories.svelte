<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import InfoTooltip from './InfoTooltip.svelte';

  const { Story } = defineMeta({
    title: 'Components/Utilities/InfoTooltip',
    component: InfoTooltip,
    argTypes: {
      text: { control: 'text' },
      above: { control: 'boolean' },
      width: { control: { type: 'range', min: 120, max: 400, step: 10 } },
      label: { control: 'text' },
    },
    parameters: {
      layout: 'centered',
    },
  });
</script>

{#snippet inLabel()}
  <span
    style="display: inline-flex; align-items: center; gap: 6px; font-weight: bold;"
  >
    Difference from normal high
    <InfoTooltip
      text="Difference from the 1961–1990 average high temperature."
    />
  </span>
{/snippet}

<Story
  name="Demo"
  args={{
    text: 'Based on UTC calendar days. Forecasts using local times will vary.',
  }}
/>

<Story
  name="Above"
  args={{
    above: true,
    text: 'This tooltip opens above the icon instead of below it.',
  }}
/>

<Story name="In a label" exportName="InALabel" children={inLabel} />
