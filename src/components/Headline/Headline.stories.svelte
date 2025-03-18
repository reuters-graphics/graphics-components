<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Headline from './Headline.svelte';

  const { Story } = defineMeta({
    title: 'Components/Text elements/Headline',
    component: Headline,
    argTypes: {
      hedSize: {
        control: 'select',
        options: ['small', 'normal', 'big', 'bigger', 'biggest'],
      },
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest'],
      },
    },
  });
</script>

<script>
  import crownImgSrc from './demo/crown.png';
  import Map from './demo/graphic.svelte';
</script>

<Story
  name="Demo"
  args={{
    section: 'World News',
    hed: 'Reuters Graphics interactive',
    hedSize: 'normal',
    dek: '',
    authors: [],
  }}
/>

<Story name="Dek">
  <Headline
    hed={'Reuters Graphics Interactive'}
    dek={'The beginning of a beautiful page'}
    section={'Global news'}
  />
</Story>

<Story name="Byline">
  <Headline
    hed={'Reuters Graphics Interactive'}
    dek={'The beginning of a beautiful page'}
    section={'Global news'}
    authors={['Dea Bankova', 'Aditi Bhandari']}
    publishTime={new Date('2020-01-01').toISOString()}
  />
</Story>

<Story name="Custom hed" exportName="CustomHed">
  <Headline width="wide">
    {#snippet hed()}
      <h1 class="custom-hed">
        <span class="small block text-base">The secret to</span>
        “The Nutcracker's”
        <span class="small block text-base fpt-1">success</span>
      </h1>
    {/snippet}
    {#snippet dek()}
      <p class="custom-dek !fmt-3">
        How “The Nutcracker” ballet became an<span
          class="font-medium mx-1 px-1.5 py-1">American holday staple</span
        >and a financial pillar of ballet companies across the country
      </p>
    {/snippet}
  </Headline>
</Story>

<Story name="Crown image" exportName="CrownImage">
  >
  <Headline class="!fmt-3" publishTime={new Date('2020-01-01').toISOString()}>
    <!-- Add a crown -->
    {#snippet crown()}
      <img
        src={crownImgSrc}
        width="100"
        class="mx-auto mb-0"
        alt="Illustration of Europe"
      />
    {/snippet}
    <!-- Override the hed with a snippet -->
    {#snippet hed()}
      <h1 class="!font-serif !tracking-wide">Europa</h1>
    {/snippet}
  </Headline>
</Story>

<Story name="Crown graphic" exportName="CrownGraphic">
  <Headline
    width="wider"
    class="!fmt-1"
    hed={'Unfriendly skies'}
    dek={'How Russia’s invasion of Ukraine is redrawing air routes'}
    section={'Ukraine Crisis'}
    authors={['Simon Scarr', 'Vijdan Mohammad Kawoosa']}
    publishTime={new Date('2022-03-04').toISOString()}
  >
    <!-- Add a crown graphic -->
    {#snippet crown()}
      <div>
        <Map />
      </div>
    {/snippet}
  </Headline>
</Story>

<style lang="scss">
  .custom-hed {
    line-height: 0.9;
  }
  .custom-dek {
    span {
      background-color: #fde68a;
    }
  }
</style>
