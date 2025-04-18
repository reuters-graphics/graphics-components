<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SiteHeader from './SiteHeader.svelte';
  import Theme from '../Theme/Theme.svelte';

  const { Story } = defineMeta({
    title: 'Components/Page furniture/SiteHeader',
    component: SiteHeader,
    argTypes: {
      themes: { control: { disable: true } },
    },
  });
</script>

<Story name="Demo">
  <div>
    <SiteHeader />
  </div>
</Story>

<Story name="Customised theme">
  <div>
    <Theme base="dark">
      <SiteHeader />
    </Theme>
  </div>
</Story>

<style lang="scss">
  div {
    min-height: 625px;
    width: calc(100% + 30px);
    margin-left: -15px;
  }
</style>
