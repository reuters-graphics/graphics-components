<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Geocoder from './Geocoder.svelte';

  const { Story } = defineMeta({
    title: 'Components/Controls/Geocoder',
    component: Geocoder,
  });
</script>

<script lang="ts">
  const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN ?? '';

  function handleSelect(location: { lng: number; lat: number; name: string }) {
    console.log('Selected:', location);
  }
</script>

<Story asChild name="Demo">
  <div style="min-height: 330px; padding-top: 1rem;">
    <Geocoder {accessToken} onselect={handleSelect} />
  </div>
</Story>
