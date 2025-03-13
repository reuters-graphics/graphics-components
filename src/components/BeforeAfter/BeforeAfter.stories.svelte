<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import BeforeAfter from './BeforeAfter.svelte';

  const { Story } = defineMeta({
    title: 'Components/Multimedia/BeforeAfter',
    component: BeforeAfter,
    argTypes: {
      handleColour: { control: 'color' },
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    },
  });
</script>

<script>
  import beforeImg from './images/myrne-before.jpg';
  import afterImg from './images/myrne-after.jpg';
</script>

<Story
  name="Demo"
  args={{
    beforeSrc: beforeImg,
    beforeAlt:
      'Satellite image of Russian base at Myrne taken on July 7, 2020.',
    afterSrc: afterImg,
    afterAlt:
      'Satellite image of Russian base at Myrne taken on Oct. 20, 2020.',
  }}
/>

<Story name="With overlays" exportName="WithOverlays">
  <BeforeAfter
    beforeSrc={beforeImg}
    beforeAlt="Satellite image of Russian base at Myrne taken on July 7, 2020."
    afterSrc={afterImg}
    afterAlt="Satellite image of Russian base at Myrne taken on Oct. 20, 2020."
  >
    {#snippet beforeOverlay()}
      <div class="overlay p-3 before text-left">
        <p class="h4 font-bold">July 7, 2020</p>
        <p class="body-note">Initially, this site was far smaller.</p>
      </div>
    {/snippet}
    {#snippet afterOverlay()}
      <div class="overlay p-3 after text-right">
        <p class="h4 font-bold">Oct. 20, 2020</p>
        <p class="body-note">But then forces built up.</p>
      </div>
    {/snippet}
    {#snippet caption()}
      <p class="body-note">Photos by MAXAR Technologies, 2021.</p>
    {/snippet}
  </BeforeAfter>

  <style lang="scss">
    .overlay {
      background: rgba(0, 0, 0, 0.45);
      max-width: 350px;
      p {
        color: #ffffff;
      }
    }
  </style>
</Story>

<Story name="ARIA descriptions" exportName="AriaDescriptions">
  <BeforeAfter
    beforeSrc={beforeImg}
    beforeAlt="Satellite image of Russian base at Myrne taken on July 7, 2020."
    afterSrc={afterImg}
    afterAlt="Satellite image of Russian base at Myrne taken on Oct. 20, 2020."
  >
    {#snippet beforeOverlay()}
      <div class="overlay p-3 text-left">
        <p class="body-caption" id="aria-description-before">
          On July 7, 2020, the base contained only a few transport vehicles.
        </p>
      </div>
    {/snippet}
    {#snippet afterOverlay()}
      <div class="overlay p-3 text-right">
        <p class="body-caption" id="aria-description-after">
          But by October, tanks and artillery could be seen.
        </p>
        <p class="body-caption">
          In total, over 50 pieces of heavy machinery and 200 personnel are now
          based here.
        </p>
      </div>
    {/snippet}
    {#snippet caption()}
      <p class="body-note">Photos by MAXAR Technologies, 2021.</p>
    {/snippet}
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
