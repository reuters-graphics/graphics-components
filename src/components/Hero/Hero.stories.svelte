<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  // @ts-ignore
  import polarImgSrc from './stories/polar.jpg';

  import Hero from './Hero.svelte';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';
</script>

<Meta
  title="Components/Hero"
  component="{Hero}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <Hero {...args} />
</Template>

<Story
  name="Default"
  args="{{
    section: 'World News',
    hed: 'Reuters Graphics interactive',
    imgSrc: polarImgSrc,
  }}"
/>
