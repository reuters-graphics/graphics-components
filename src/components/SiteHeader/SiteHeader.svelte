<!-- @component `SiteHeader` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-SiteHeader--default) -->
<script lang="ts">
  import ReutersLogo from '../ReutersLogo/ReutersLogo.svelte';
  import NavBar from './NavBar/index.svelte';
  import starterData from './data.json';
  import { onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import MenuIcon from './svgs/Menu.svelte';
  import MobileMenu from './MobileMenu/index.svelte';

  setContext('nav-active-section', writable(null));

  let data = starterData;

  $: sections = data[0].sections;

  let isMobileMenuOpen = false;

  onMount(async () => {
    try {
      const response = await fetch(
        'https://www.reuters.com/site-api/header/?' +
          new URLSearchParams({
            _website: 'reuters',
            outputType: 'json',
          })
      );
      const headerData = await response.json();
      // Dumb verification...
      if (!headerData[0].sections) return;
      data = headerData;
    } catch {
      console.warn('Unable to fetch site header data');
    }
  });
</script>

<header
  style="{`
    --nav-background: var(--theme-colour-background, #fff);
    --nav-primary: var(--theme-colour-text-primary, #404040);
    --nav-rules: var(--theme-colour-brand-rules, #d0d0d0);
    --nav-accent: var(--theme-colour-brand-logo, #fa6400);
    --nav-shadow: 0 1px 4px 2px var(--theme-colour-brand-shadow, rgb(255 255 255 / 10%));
  `}"
>
  <div class="nav-container show-nav">
    <div class="scroll-container">
      <div class="inner">
        <div class="main-bar">
          <div class="logo-container">
            <div class="logo">
              <a href="https://www.reuters.com">
                <ReutersLogo
                  logoColour="var(--nav-accent)"
                  textColour="var(--nav-primary)"
                />
              </a>
            </div>
          </div>
          <NavBar sections="{sections}" />
          <!-- Space takes the place of the MyViewMenu, NavSearchBar & Account components... -->
          <div class="spacer-container">
            <div class="spacer"></div>
          </div>

          <div class="mobile-button-group">
            <div class="mobile-menu">
              <button
                class="menu-button"
                aria-label="Menu"
                aria-haspopup="true"
                aria-expanded="{isMobileMenuOpen}"
                on:click="{() => {
                  isMobileMenuOpen = !isMobileMenuOpen;
                }}"
              >
                <div class="button-container">
                  <MenuIcon />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

<MobileMenu
  isMobileMenuOpen="{isMobileMenuOpen}"
  releaseMobileMenu="{() => {
    isMobileMenuOpen = false;
  }}"
  data="{data[0]}"
/>

<style lang="scss">
  @import './scss/_grids.scss';
  @import './scss/_colors.scss';
  @import './scss/_eases.scss';
  @import './scss/_breakpoints.scss';
  @import './scss/_z-indexes.scss';

  $nav-height: 64px;
  $mobile-nav-height: 56px;
  $subnav-height: 48px;

  .nav-container {
    background-color: var(--nav-background, $white);
    position: relative;
    height: $nav-height;
    z-index: $zindex-sticky;
    --page-height: 0px;

    @include for-tablet-down {
      height: $mobile-nav-height;
    }

    a {
      text-decoration: none;
    }
  }

  .scroll-container {
    height: calc(var(--page-height) - 50vh);
    pointer-events: none;

    .inner {
      position: sticky;
      top: 0;
      background: var(--nav-background, $white);
      pointer-events: auto;
      border-bottom: 1px solid var(--nav-rules, var(--tr-muted-grey));

      // @include for-tablet-down {
      //   border-bottom: none;
      //   transition: transform 0.25s $principleDefaultEase;
      //   transform: translateY(-100%);
      //   will-change: transform;
      // }
    }
  }

  .main-bar {
    @include spacing-single(padding-left padding-right);
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    height: $nav-height;
    justify-content: space-between;
    @include max-width;

    @include for-mobile {
      height: $mobile-nav-height;
    }
  }

  .logo-container {
    align-self: center;

    .logo {
      display: block;
      font-size: 0;

      @include for-tablet-down {
        width: 127px;
        min-width: 127px;
      }

      @include for-desktop {
        width: 154px;
        min-width: 154px;
      }

      @include for-wide-desktop {
        width: 184px;
        min-width: 184px;
      }
    }
  }

  .spacer-container {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @include for-mobile {
      display: none;
    }

    .spacer {
      width: 193.47px;
      height: 64px;
      @media (max-width: 1225px) {
        width: 88px;
      }
    }
  }

  .mobile-button-group {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @include for-tablet-up {
      display: none;
    }
  }

  .mobile-menu {
    @include for-tablet-up {
      display: none;
    }
    margin-left: 8px;
    .menu-button {
      width: 40px;
      height: 40px;
      display: inline-block;
      vertical-align: top;
      outline: none;
      border: none;
      margin: 0;
      padding: 0;
      overflow: visible;
      background: transparent;
      color: inherit;
      font: inherit;
      line-height: normal;

      .button-container {
        border-radius: 8px;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 2px solid var(--nav-background);
      }

      &:hover .button-container {
        box-shadow: var(--nav-shadow);
      }
      &:focus-visible .button-container {
        border: 2px solid var(--nav-accent);
      }
    }
  }
</style>
