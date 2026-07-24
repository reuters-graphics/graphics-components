<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Icon from './Icon.svelte';
  import { ICON_NAMES } from './iconNames';

  const { Story } = defineMeta({
    title: 'Components/Football/Elements/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
      name: { control: 'select', options: [...ICON_NAMES] },
      width: { control: 'text' },
      height: { control: 'text' },
      label: { control: 'text' },
    },
  });
</script>

<Story name="Default" args={{ name: 'football', width: '80px', height: '80px' }} />

<Story name="Whistle" args={{ name: 'whistle', width: '80px', height: '80px', label: 'Kick-off' }} />

<Story name="All icons" asChild>
  <div style="display:flex; flex-wrap:wrap; gap:1rem;">
    {#each ICON_NAMES as name (name)}
      <figure style="text-align:center; margin:0;">
        <Icon {name} width="48px" height="48px" />
        <figcaption style="font-size:0.7rem;">{name}</figcaption>
      </figure>
    {/each}
  </div>
</Story>
