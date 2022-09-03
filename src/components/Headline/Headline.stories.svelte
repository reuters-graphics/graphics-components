<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import withBylineDocs from './stories/docs/withByline.md?raw';
  // @ts-ignore
  import withCrownDocs from './stories/docs/withCrown.md?raw';
  // @ts-ignore
  import customHedDocs from './stories/docs/customHed.md?raw';
  // @ts-ignore
  import crownImgSrc from './stories/crown.png';

  import Headline from './Headline.svelte';

  import {
    withComponentDocs,
    withStoryDocs
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
  args="{{
    section: 'World News',
    hed: 'Reuters Graphics interactive',
  }}"
/>

<Story name="With byline" {...withStoryDocs(withBylineDocs)}>
  <Headline
    hed="{'Reuters Graphics Interactive'}"
    dek="{'The beginning of a beautiful page'}"
    section="{'Global news'}"
  >
    <!-- Use named slots to add a byline... -->
    <span slot="byline">By <strong>Peppa Pig</strong></span>
    <!-- ...and a dateline. -->
    <span slot="dateline"
      >Published <time datetime="{new Date('2020-01-01').toISOString()}"
        >Jan. 1, 2020</time
      ></span
    >
  </Headline>
</Story>

<Story name="Custom hed" {...withStoryDocs(customHedDocs)}>
  <Headline>
    <h1 class="custom-hed" slot='hed'>
      <span class="small">The secret to</span>
      “The Nutcracker's”
      <span class="small">success</span>
    </h1>
    <p class="custom-dek" slot="dek">How “The Nutcracker” ballet became an <span>American holday staple</span>and a financial pillar of ballet companies across the country</p>
  </Headline>
</Story>

<Story name="With crown" {...withStoryDocs(withCrownDocs)}>
  <Headline>
    <!-- Add a crown -->
    <img slot="crown" src="{crownImgSrc}" alt="Illustration of Europe" />
    <!-- Override the hed with a named slot -->
    <h1 slot="hed" class="spaced font-serif">Europa</h1>
    <span slot="dateline"
      >Published <time datetime="{new Date('2020-01-01').toISOString()}"
        >Jan. 1, 2020</time
      ></span
    >
  </Headline>
</Story>

<style lang="scss">
  h1.custom-hed {
    span {
      display: block;
      &.small {
        font-size: 1.4rem;
      }
    }
  }
  p.custom-dek {
    span {
      background-color: rgb(255, 255, 154);
      padding: 2px 4px;
      margin: 0 4px;
      font-weight: 600;
    }
  }
</style>