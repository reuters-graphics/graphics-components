<!-- @component `ToolsHeader` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-ToolsHeader--default) -->
<script lang="ts">
  /** Add an ID to target with SCSS. */
  export let id: string = '';

  /** Add a class to target with SCSS. */
  export let cls: string = '';

  /**
   * Make the header stick when user scrolls.
   */
  export let sticky = false;

  /**
   * Background CSS
   */
  export let background: string = 'transparent';

  /**
   * Border bottom CSS
   */
  export let borderBottom: string = '1px solid #dedede';

  /**
   * Colour props passed to `ReutersGraphicsLogo` component.
   */
  export let logoProps: {
    logoColour?: string;
    primaryTextColor?: string;
    secondaryTextColor?: string;
  } = { logoColour: '#404040' };

  /**
   * Link the logo points to.
   */
  export let homeLink: string = '/';

  import ReutersGraphicsLogo from '../ReutersGraphicsLogo/ReutersGraphicsLogo.svelte';
</script>

<header
  id="{id}"
  class="{cls}"
  class:sticky
  style:background="{background}"
  style:border-bottom="{borderBottom}"
>
  <div class="logo-container">
    <a href="{homeLink}">
      <ReutersGraphicsLogo {...{ ...logoProps, ...{ width: '100%' } }} />
    </a>
  </div>
  <div class="menu-items-container">
    <!-- Any additional content -->
    <slot />
  </div>
</header>

<style lang="scss">
  header {
    width: 100%;
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
