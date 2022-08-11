<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import withBylineDocs from './stories/docs/withByline.md?raw';
  // @ts-ignore
  import withCrownDocs from './stories/docs/withCrown.md?raw';
  // @ts-ignore
  import crownImgSrc from './stories/crown.png';

  import Headline from './Headline.svelte';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  const meta = {
    title: 'Components/Headline',
    component: Headline,
    ...withComponentDocs(componentDocs),
  };
</script>

<Meta {...meta} />

<Template let:args>
  <Headline {...args} />
</Template>

<Story
  name="Default"
  args={{
    section: 'World News',
    hed: 'Reuters Graphics interactive'
  }}
/>

<Story
  name="With byline"
  {...withStoryDocs(withBylineDocs)}
>
  <Headline
    hed="{'Reuters Graphics Interactive'}"
    dek="{'The beginning of a beautiful page'}"
    section="{'Global news'}"
    sectionColour="{'orange'}"
  >
    <!-- Use named slots to add a byline... -->
    <span slot="byline">By <strong>Peppa Pig</strong></span>
    <!-- ...and a dateline. -->
    <span slot="dateline">Published Jan. 1, 2020</span>
  </Headline>
</Story>

<Story
  name="With crown"
  {...withStoryDocs(withCrownDocs)}
>
  <Headline>
    <!-- Add a crown -->
    <img slot="crown" src="{crownImgSrc}" alt="Illustration of Europe" />
    <!-- Override the hed with a named slot -->
    <h2 slot="hed" class="spaced font-serif">Europa</h2>
    <span slot="dateline">Published Jan. 1, 2020</span>
  </Headline>
</Story>