<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import MapMarkerCallout from './MapMarkerCallout.svelte';

  const { Story } = defineMeta({
    title: 'Components/Graphics/MapMarkerCallout',
    component: MapMarkerCallout,
    tags: ['autodocs'],
    argTypes: {
      placement: {
        control: 'select',
        options: ['above', 'below'],
        description: 'Place the callout surface above or below the anchor dot.',
      },
      flip: {
        control: 'boolean',
        description: 'Flip the callout surface to the left of the anchor dot.',
      },
    },
  });
</script>

<script lang="ts">
  import Theme from '../Theme/Theme.svelte';
</script>

<Story asChild name="Default">
  <Theme>
    <div class="demo-stage">
      <MapMarkerCallout>New York</MapMarkerCallout>
    </div>
  </Theme>
</Story>

<Story asChild name="Flipped">
  <Theme>
    <div class="demo-stage align-right">
      <MapMarkerCallout flip>Shanghai</MapMarkerCallout>
    </div>
  </Theme>
</Story>

<Story asChild name="Above and below" tags={['!autodocs', '!dev']}>
  <Theme>
    <div class="demo-stage variants">
      <MapMarkerCallout placement="above">Above anchor</MapMarkerCallout>
      <MapMarkerCallout placement="below">Below anchor</MapMarkerCallout>
      <MapMarkerCallout placement="below" flip>Below + flipped</MapMarkerCallout
      >
    </div>
  </Theme>
</Story>

<Story asChild name="Rich content">
  <Theme>
    <div class="demo-stage">
      <MapMarkerCallout placement="below" flip>
        <div class="rich-callout">
          <strong>Jakarta</strong>
          <span>Population: 10.7 mln</span>
        </div>
      </MapMarkerCallout>
    </div>
  </Theme>
</Story>

<style lang="scss">
  .demo-stage {
    min-height: 220px;
    padding: 72px 32px;
    background:
      linear-gradient(rgb(255 255 255 / 70%), rgb(255 255 255 / 70%)),
      repeating-linear-gradient(
        45deg,
        #e9edf2,
        #e9edf2 8px,
        #f4f6f8 8px,
        #f4f6f8 16px
      );
    box-sizing: border-box;
  }

  .align-right {
    display: flex;
    justify-content: flex-end;
  }

  .variants {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    align-items: center;
  }

  .rich-callout {
    display: grid;
    gap: 0.125rem;
    font-weight: 400;
  }

  .rich-callout strong {
    font-weight: 700;
  }

  .rich-callout span {
    color: var(--theme-colour-text-secondary);
    font-size: 0.85em;
  }
</style>
