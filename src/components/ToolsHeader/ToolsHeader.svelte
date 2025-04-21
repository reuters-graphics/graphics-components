<!-- @component `ToolsHeader` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-page-furniture-toolsheader--docs) -->
<script lang="ts">
  import ReutersGraphicsLogo from '../ReutersGraphicsLogo/ReutersGraphicsLogo.svelte';
  import type { Snippet } from 'svelte';

  interface Props {
    /** Snippet content */
    children?: Snippet;

    /** ID of the header container */
    id?: string;
    /** Add a class to target with SCSS. */
    class?: string;
    /**
     * Make the header stick when user scrolls.
     */
    sticky?: boolean;
    /**
     * Background CSS
     */
    background?: string;
    /**
     * Border bottom CSS
     */
    borderBottom?: string;
    /**
     * Colour props passed to `ReutersGraphicsLogo` component.
     */
    logoProps?: {
      logoColour?: string;
      textColor?: string;
    };
    /**
     * Link the logo points to.
     */
    homeLink?: string;
  }

  let {
    children,
    id = '',
    class: cls = '',
    sticky = false,
    background = 'transparent',
    borderBottom = '1px solid #dedede',
    logoProps = { logoColour: '#404040' },
    homeLink = '/',
  }: Props = $props();
</script>

<header
  {id}
  class={cls}
  class:sticky
  style:background
  style:border-bottom={borderBottom}
>
  <div class="logo-container">
    <a href={homeLink}>
      <ReutersGraphicsLogo {...{ ...logoProps, ...{ width: '100%' } }} />
    </a>
  </div>

  <!-- Any additional content -->
  {#if children}
    <div class="menu-items-container">
      {@render children()}
    </div>
  {/if}
</header>

<style lang="scss">
  header {
    padding: 10px 15px;
    display: flex;
    gap: 15px;
    &.sticky {
      position: sticky;
      top: 0;
    }
    div.logo-container {
      width: 250px;
      display: flex;
      align-items: center;
      @media (max-width: 1200px) {
        width: 200px;
      }
    }
    div.menu-items-container {
      width: calc(100% - 265px);
      @media (max-width: 1200px) {
        width: calc(100% - 215px);
      }
    }
  }
</style>
