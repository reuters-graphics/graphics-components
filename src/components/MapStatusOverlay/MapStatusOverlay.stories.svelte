<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import MapStatusOverlay from './MapStatusOverlay.svelte';

  const { Story } = defineMeta({
    title: 'Components/Maps/MapStatusOverlay',
    component: MapStatusOverlay,
    args: { status: 'loading', message: 'Loading map…' },
    argTypes: {
      status: { control: 'inline-radio', options: ['loading', 'error'] },
    },
  });
</script>

{#snippet template(args: { status: 'loading' | 'error'; message: string })}
  <div class="map-scene">
    <MapStatusOverlay {...args} />
  </div>
{/snippet}

<Story name="Loading" {template} />
<Story
  name="Error"
  {template}
  args={{
    status: 'error',
    message: 'Map unavailable. Please refresh.',
  }}
/>
<Story
  name="Long message"
  {template}
  args={{
    status: 'error',
    message:
      'The map could not be loaded right now. Check your connection and try again in a moment.',
  }}
/>

<style>
  .map-scene {
    position: relative;
    min-height: 200px;
    background: var(--tr-light-muted-grey, #f4f4f4);
  }
</style>
