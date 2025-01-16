<!-- @migration-task Error while migrating Svelte code: end is out of bounds -->
<script context="module" lang="ts">
  import BeforeAfter from './BeforeAfter.svelte';
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore raw
  import withOverlaysDocs from './stories/docs/withOverlays.md?raw';
  // @ts-ignore raw
  import ariaDescriptionsDocs from './stories/docs/ariaDescriptions.md?raw';

  import { withComponentDocs, withStoryDocs } from '$docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Graphics/BeforeAfter',
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

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import beforeImg from './stories/myrne-before.jpg';
  // @ts-ignore raw
  import afterImg from './stories/myrne-after.jpg';
</script>

<Template let:args>
  <BeforeAfter {...args} />
</Template>

<Story
  name="Default"
  args="{{
    beforeSrc: beforeImg,
    beforeAlt:
      'Satellite image of Russian base at Myrne taken on July 7, 2020.',
    afterSrc: afterImg,
    afterAlt:
      'Satellite image of Russian base at Myrne taken on Oct. 20, 2020.',
  }}"
/>

<Story name="With overlays" {...withStoryDocs(withOverlaysDocs)}>
  <BeforeAfter
    beforeSrc="{beforeImg}"
    beforeAlt="Satellite image of Russian base at Myrne taken on July 7, 2020."
    afterSrc="{afterImg}"
    afterAlt="Satellite image of Russian base at Myrne taken on Oct. 20, 2020."
  >
    <div slot="beforeOverlay" class="overlay p-3 before">
      <p class="h4 font-bold">July 7, 2020</p>
      <p class="body-note">Initially, this site was far smaller.</p>
    </div>
    <div slot="afterOverlay" class="overlay p-3 after">
      <p class="h4 font-bold">Oct. 20, 2020</p>
      <p class="body-note">But then forces built up.</p>
    </div>
    <p slot="caption">Photos by MAXAR Technologies, 2021.</p>
  </BeforeAfter>

  <style lang="scss">
    .overlay {
      background: rgba(0, 0, 0, 0.45);
      max-width: 350px;
      &.after {
        text-align: right;
      }
      p {
        color: #ffffff;
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
    <div let:description="{id}" slot="beforeOverlay" class="overlay p-3">
      <p class="body-caption" {id}>
        On July 7, 2020, the base contained only a few transport vehicles.
      </p>
    </div>
    <div let:description="{id}" slot="afterOverlay" class="overlay p-3">
      <!-- 👇 id can also be used on an element containing multiple text elements -->
      <div {id}>
        <p class="body-caption">
          But by October, tanks and artillery could be seen.
        </p>
        <p class="body-caption">
          In total, over 50 pieces of heavy machinery and 200 personnel are now
          based here.
        </p>
      </div>
    </div>
    <p slot="caption">Photos by MAXAR Technologies, 2021.</p>
  </BeforeAfter>
  <style lang="scss">
    div.overlay {
      max-width: 250px;
      background: rgba(0, 0, 0, 0.45);
      p {
        color: #ffffff;
      }
    }
  </style>
</Story>
