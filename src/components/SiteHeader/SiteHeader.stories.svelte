<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { expect, userEvent, within, waitFor } from '@storybook/test';
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

<Story
  name="Demo"
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('More'));
    await waitFor(() =>
      expect(canvas.getByText('Graphics')).toBeInTheDocument()
    );
    await userEvent.click(canvas.getByText('World'));
    await waitFor(() => expect(canvas.getByText('Europe')).toBeInTheDocument());
  }}
>
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
    margin-inline-start: -15px;
  }
</style>
