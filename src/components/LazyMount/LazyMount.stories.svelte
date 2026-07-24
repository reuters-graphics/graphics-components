<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import LazyMount from './LazyMount.svelte';

  const { Story } = defineMeta({
    title: 'Components/UI/LazyMount',
    component: LazyMount,
    tags: ['autodocs'],
  });
</script>

<Story name="Scroll to mount" asChild>
  <p>Scroll down — the card below only mounts when it nears the viewport.</p>
  <div style="height:120vh;"></div>
  <LazyMount height="120px">
    {#snippet placeholder()}
      <div style="height:120px; background:#f3f4f6; border-radius:12px;"></div>
    {/snippet}
    <div
      style="height:120px; display:grid; place-items:center; background:#e1f4cd; border-radius:12px;"
    >
      Mounted!
    </div>
  </LazyMount>
</Story>
