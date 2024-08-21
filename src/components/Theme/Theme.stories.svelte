<script lang="ts">
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore raw
  import customiseDocs from './stories/docs/customise.md?raw';
  // @ts-ignore raw
  import customiseFontDocs from './stories/docs/customise-font.md?raw';
  // @ts-ignore raw
  import patternDocs from './stories/docs/pattern.md?raw';
  // @ts-ignore raw
  import inheritanceDocs from './stories/docs/inheritance.md?raw';

  import ThemedPage from './stories/ThemedPage.svelte';
  import SiteHeader from '../SiteHeader/SiteHeader.svelte';

  import Theme, { themes } from './Theme.svelte';

  import Headline from './../Headline/Headline.svelte';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '../../docs/utils/withParams.js';

  const metaProps = {
    ...withComponentDocs(componentDocs),
    argTypes: {
      base: {
        control: 'select',
        options: ['light', 'dark'],
      },
      themes: { control: false },
    },
  };
</script>

<Meta title="Theming/Theme" component="{Theme}" {...metaProps} />

<Template let:args>
  <div class="reset-article">
    <Theme {...args}>
      <ThemedPage />
    </Theme>
  </div>
</Template>

<Story
  name="Default"
  args="{{
    theme: themes.light,
    base: 'light',
  }}"
/>

<Story name="Custom theme" {...withStoryDocs(customiseDocs)}>
  <Theme
    base="dark"
    theme="{{
      colour: { accent: 'var(--tr-light-orange)' },
      font: { family: { hed: 'FreightText, serif' } },
    }}"
  >
    <ThemedPage />
  </Theme>
</Story>

<Story name="Custom Google font" {...withStoryDocs(customiseFontDocs)}>
  <Theme
    base="light"
    theme="{{
      font: { family: { hed: 'Bebas Neue, sans-serif' } },
    }}"
  >
    <div class="gfont">
      <Headline
        hed="{'Reuters Graphics Interactive'}"
        dek="{'The beginning of a beautiful page'}"
        section="{'Global news'}"
      />
    </div>
  </Theme>
</Story>

<Story name="Background patterns" {...withStoryDocs(patternDocs)}>
  <div id="pattern-bg">
    <Theme
      base="dark"
      theme="{{
        colour: { background: 'transparent' },
      }}"
    >
      <SiteHeader />
      <ThemedPage />
    </Theme>
  </div>
</Story>

<Story name="Inheritance" {...withStoryDocs(inheritanceDocs)}>
  <Theme theme="{themes.light}">
    <div class="themed">
      <p>Theme</p>
      <Theme theme="{themes.dark}">
        <div class="themed">
          <p>Sub-theme</p>
          <Theme theme="{themes.light}">
            <div class="themed">
              <p>Sub-sub</p>
            </div>
          </Theme>
          <Theme
            theme="{{
              colour: { background: 'steelblue', 'text-primary': '#fff' },
              font: { family: { note: 'FreightText, serif' } },
            }}"
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
