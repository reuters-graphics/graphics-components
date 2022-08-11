<script>
  import { ReutersLogo } from '../../../index.js';
  import CloseIcon from '../svgs/Close.svelte';
  import { normalizeUrl } from '../NavBar/utils/index.js';

  export let data = [];
  export let theme = {};
  export let isMobileMenuOpen = false;
  export let releaseMobileMenu = () => {};
</script>

{#if isMobileMenuOpen}
  <div
    class="overlay"
    aria-modal="true"
    style="{`
      --nav-background: ${theme.background};
      --nav-primary: ${theme.primary};
      --nav-accent: ${theme.accent};
      --nav-rules: ${theme.rules};
      --nav-shadow: ${theme.shadow};
    `}"
  >
    <header class="header">
      <div class="logo">
        <ReutersLogo logoColour="{theme.accent}" textColour="{theme.primary}" />
      </div>
      <button class="button close-button" on:click="{releaseMobileMenu}">
        <div class="button-container">
          <CloseIcon />
        </div>
      </button>
    </header>
    {#each data.sections as section}
      <section class="section">
        <a class="section-link" href="{normalizeUrl(section.url)}"
          >{section.name}</a
        >
        {#if section.children}
          <ul class="subsections">
            {#each section.children as sub}
              <li>
                <a class="subsection-link" href="{normalizeUrl(sub.url)}">
                  {sub.name}
                </a>
              </li>
            {/each}
          </ul>
        {/if}
      </section>
    {/each}
  </div>
{/if}

<style lang="scss">
  @import '../scss/_grids.scss';
  @import '../scss/_colors.scss';
  @import '../scss/_z-indexes.scss';
  @import '@reuters-graphics/style-main/scss/fonts/mixins';

  $mobile-nav-height: 56px;

  .overlay {
    position: fixed;
    z-index: $zindex-modal;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-bottom: 60px;
    box-sizing: border-box;
    background: var(--nav-background);
    color: var(--nav-primary);
    overflow: auto;
  }

  .header {
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    height: $mobile-nav-height;
    box-sizing: border-box;
    background: var(--nav-background);
  }

  .logo {
    font-size: 0;
    width: 127px;
  }

  .close-button {
    width: 40px;
    height: 40px;
    margin-left: auto;
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

  .header {
    @include spacing-single(padding-left padding-right);
    border-bottom: 1px solid var(--nav-rules, $tr-muted-grey);
  }

  .section {
    @include spacing-single(padding-left padding-right);
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid $tr-muted-grey;
    width: 100%;
    max-width: 100%;

    .subsections {
      margin: 20px 0 0 0;
      padding: 0;
      list-style: none;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 16px;
      @include spacing-single(grid-column-gap);
    }

    .section-link {
      font-size: 14px;
    }

    .section-link,
    .subsection-link {
      @include font-display;
      line-height: 1.2;
      color: var(--nav-primary);

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
