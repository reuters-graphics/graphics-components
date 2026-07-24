<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TabGroup from './TabGroup.svelte';

  const { Story } = defineMeta({
    title: 'Components/UI/TabGroup',
    component: TabGroup,
    tags: ['autodocs'],
    argTypes: {
      ariaLabel: { control: 'text' },
    },
  });
</script>

<script lang="ts">
  let value = $state('stats');
  const tabs = [
    { id: 'commentary', label: 'Action' },
    { id: 'stats', label: 'Stats' },
    { id: 'lineups', label: 'Lineups' },
    { id: 'photos', label: 'Photos' },
  ];
</script>

<Story name="Default" asChild>
  <TabGroup bind:value {tabs} ariaLabel="Match views" />
  <p style="text-align:center; margin-top:1rem;">
    Selected: <strong>{value}</strong>
  </p>
</Story>

<Story name="With a hidden and disabled tab" asChild>
  <TabGroup
    value="stats"
    tabs={[
      { id: 'stats', label: 'Stats' },
      { id: 'lineups', label: 'Lineups', disabled: true },
      { id: 'photos', label: 'Photos', show: false },
    ]}
  />
</Story>
