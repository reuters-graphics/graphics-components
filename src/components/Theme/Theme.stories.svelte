<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import customiseDocs from './stories/docs/customise.md?raw';
  // @ts-ignore
  import inheritanceDocs from './stories/docs/inheritance.md?raw';

  import ThemedPage from './stories/ThemedPage.svelte';

  import Theme, { themes } from './Theme.svelte';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  const meta = {
    title: 'Theming/Theme',
    component: Theme,
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

<Meta {...meta} />

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
      colour: { accent: 'yellow' },
      font: { 'family-hed': 'freight-book' },
    }}"
  >
    <ThemedPage />
  </Theme>
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
              font: { 'family-note': 'freight-book' },
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
  @import '../../scss/mixins/fonts';
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
</style>
