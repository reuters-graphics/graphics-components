<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Theme, { themes } from './Theme.svelte';

  const { Story } = defineMeta({
    title: 'Components/Theming/Theme',
    component: Theme,
    argTypes: {
      base: {
        control: 'select',
        options: ['light', 'dark'],
      },
      theme: { control: false },
    },
  });
</script>

<script lang="ts">
  import ThemedPage from './demo/ThemedPage.svelte';
  import SiteHeader from '../SiteHeader/SiteHeader.svelte';
  import Headline from './../Headline/Headline.svelte';
</script>

<Story name="Demo">
  <div class="reset-article">
    <Theme theme={themes.light} base="light">
      <ThemedPage />
    </Theme>
  </div>
</Story>
<Story name="Custom theme" exportName="CustomTheme">
  <Theme
    base="dark"
    theme={{
      colour: { accent: 'var(--tr-light-orange)' },
      font: { family: { hed: 'FreightText, serif' } },
    }}
  >
    <ThemedPage />
  </Theme>
</Story>

<Story name="Custom Google font" exportName="CustomGoogleFont">
  <Theme
    base="light"
    theme={{
      font: { family: { hed: 'Bebas Neue, sans-serif' } },
    }}
  >
    <div class="gfont">
      <Headline
        hed={'Reuters Graphics Interactive'}
        dek={'The beginning of a beautiful page'}
        section={'Global news'}
      />
    </div>
  </Theme>
</Story>

<Story name="Background patterns" exportName="BackgroundPatterns">
  <div id="pattern-bg">
    <Theme
      base="dark"
      theme={{
        colour: { background: 'transparent' },
      }}
    >
      <SiteHeader />
      <ThemedPage />
    </Theme>
  </div>
</Story>

<Story name="Inheritance">
  <Theme theme={themes.light}>
    <div class="themed">
      <p>Theme</p>
      <Theme theme={themes.dark}>
        <div class="themed">
          <p>Sub-theme</p>
          <Theme theme={themes.light}>
            <div class="themed">
              <p>Sub-sub</p>
            </div>
          </Theme>
          <Theme
            theme={{
              colour: { background: 'steelblue', 'text-primary': '#fff' },
              font: { family: { note: 'FreightText, serif' } },
            }}
            base="dark"
          >
            <div class="themed">
              <p>Sub-sub sibling</p>
            </div>
          </Theme>
        </div>
      </Theme>
    </div>
  </Theme>
</Story>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  div.themed {
    background-color: var(--theme-colour-background);
    padding: 2rem;
    width: 80%;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    flex-flow: column;
    border: 1px solid var(--theme-colour-text-primary);
    border-radius: 20px;
    p {
      font-family: var(--theme-font-family-note);
      color: var(--theme-colour-text-primary);
      text-align: center;
      margin: 0;
      display: block;
      width: 100%;
    }
  }

  div#pattern-bg {
    background-image: url(https://res.cloudinary.com/practicaldev/image/fetch/s--BuPz-p40--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nphrgz8yfnjylrwfr0yl.png);

    :global(.nav-container .inner) {
      background: #161019 !important;
    }
    :global(.nav-container .dropdown) {
      background: #161019 !important;
    }
  }
</style>
