<script module lang="ts">
  import YourComponent from './YourComponent.svelte';
  // Don't lose the "?raw" in markdown imports!
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import { withComponentDocs } from '$docs/utils/withParams.js';

  export const meta = {
    title: 'Components/ComponentFolder/YourComponent',
    component: YourComponent,
    ...withComponentDocs(componentDocs),
    // https://storybook.js.org/docs/svelte/essentials/controls
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    },
  };
</script>

<script lang="ts">
  import { Template, Story } from '@storybook/addon-svelte-csf';

  // 🖼️ You can import images you need in stories directly in code!
  // @ts-ignore img
  import SharkImg from './stories/shark.jpg';
</script>

<Template>
  {#snippet children({ args })}
    <YourComponent {...args} />
  {/snippet}
</Template>

<Story
  name="Default"
  args={{
    width: 'normal',
    src: SharkImg,
    altText: "Duh dum! It's a shark!!",
  }}
/>
