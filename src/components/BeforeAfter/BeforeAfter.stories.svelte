<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import withOverlaysDocs from './stories/docs/withOverlays.md?raw';
  // @ts-ignore
  import ariaDescriptionsDocs from './stories/docs/ariaDescriptions.md?raw';

  import BeforeAfter from './BeforeAfter.svelte';

  // @ts-ignore
  import beforeImg from './stories/myrne-before.jpg';
  // @ts-ignore
  import afterImg from './stories/myrne-after.jpg';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  const meta = {
    title: 'Components/BeforeAfter',
    component: BeforeAfter,
    ...withComponentDocs(componentDocs),
    argTypes: {
      handleColour: { control: 'color' },
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    },
  };
</script>

<Meta {...meta} />

<Template let:args>
  <BeforeAfter {...args} />
</Template>

<Story
  name="Default"
  args={{
    beforeSrc: beforeImg,
    beforeAlt: 'Satellite image of Russian base at Myrne taken on July 7, 2020.',
    afterSrc: afterImg,
    afterAlt: 'Satellite image of Russian base at Myrne taken on Oct. 20, 2020.',
  }}
/>

<Story name="With overlays" {...withStoryDocs(withOverlaysDocs)}>
<BeforeAfter
  beforeSrc="{beforeImg}"
  beforeAlt="Satellite image of Russian base at Myrne taken on July 7, 2020."
  afterSrc="{afterImg}"
  afterAlt="Satellite image of Russian base at Myrne taken on Oct. 20, 2020."
>
  <div slot="beforeOverlay" class="overlay before">
    <h6>July 7, 2020</h6>
    <p>Initially, this site was far smaller.</p>
  </div>
  <div slot="afterOverlay" class="overlay after">
    <h6>Oct. 20, 2020</h6>
    <p>But then forces built up.</p>
  </div>
  <aside slot="caption">
    <p>Photos by MAXAR Technologies, 2021.</p>
  </aside>
</BeforeAfter>

<style lang="scss">
.overlay {
  color: white;
  padding: 15px;
  background: rgba(0, 0, 0, 0.2);
  &.after {
    text-align: right;
  }
  h6, p {
    color: white;
  }
}
</style>
</Story>

<Story name="ARIA descriptions" {...withStoryDocs(ariaDescriptionsDocs)}>
  <BeforeAfter
    beforeSrc="{beforeImg}"
    beforeAlt="Satellite image of Russian base at Myrne taken on July 7, 2020."
    afterSrc="{afterImg}"
    afterAlt="Satellite image of Russian base at Myrne taken on Oct. 20, 2020."
  >
    <div let:description="{id}" slot="beforeOverlay" class="overlay">
      <p id="{id}">
        On July 7, 2020, the base contained only a few transport vehicles.
      </p>
    </div>
    <div let:description="{id}" slot="afterOverlay" class="overlay">
      <!-- 👇 id can also be used on an element containing multiple text elements -->
      <div id="{id}">
        <p>But by October, tanks and artillery could be seen.</p>
        <p>
          In total, over 50 pieces of heavy machinery and 200 personnel are now
          based here.
        </p>
      </div>
    </div>
  </BeforeAfter>
  <style lang="scss">
    div.overlay {
      color: white;
      padding: 15px;
      max-width: 250px;
      background: rgba(0, 0, 0, 0.2);
      
    }
    p {
      color: white;
    }
    </style>
</Story>