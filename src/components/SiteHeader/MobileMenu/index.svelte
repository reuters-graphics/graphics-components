<script lang="ts">
  import ReutersLogo from '../../ReutersLogo/ReutersLogo.svelte';
  import CloseIcon from '../svgs/Close.svelte';
  import { normalizeUrl } from '../NavBar/utils/index.js';

  interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any;
    isMobileMenuOpen?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    releaseMobileMenu?: any;
  }

  let {
    data = {},
    isMobileMenuOpen = false,
    releaseMobileMenu = () => {},
  }: Props = $props();
</script>

{#if isMobileMenuOpen}
  <div
    class="overlay"
    aria-modal="true"
    style={`
      --nav-background: var(--theme-colour-background, #fff);
      --nav-primary: var(--theme-colour-text-primary, #404040);
      --nav-rules: var(--theme-colour-brand-rules, #d0d0d0);
      --nav-accent: var(--theme-colour-brand-logo, #fa6400);
      --nav-shadow: 0 1px 4px 2px var(--theme-colour-brand-shadow, rgba(64,64,64,.08));
    `}
  >
    <header class="header">
      <div class="logo">
        <ReutersLogo
          logoColour="var(--nav-accent)"
          textColour="var(--nav-primary)"
        />
      </div>
      <button class="button close-button" onclick={releaseMobileMenu}>
        <div class="button-container">
          <CloseIcon />
        </div>
      </button>
    </header>
    {#each data.sections as section}
      <section class="section">
        <a class="section-link" href={normalizeUrl(section.url)}
          >{section.name}</a
        >
        {#if section.children}
          <ul class="subsections">
            {#each section.children as sub}
              <li>
                <a class="subsection-link" href={normalizeUrl(sub.url)}>
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
  @use '../scss/_grids.scss' as *;
  @use '../scss/_colors.scss' as *;
  @use '../scss/_z-indexes.scss' as *;
  @use '../../../scss/mixins' as *;

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
    justify-content: space-between;
    height: $mobile-nav-height;
    box-sizing: border-box;
    background: var(--nav-background);
  }

  .logo {
    font-size: 0;
    width: 94px;
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
    border-bottom: 1px solid var(--nav-rules, var(--tr-muted-grey));
    @include spacing-single(padding-left padding-right);
  }

  .section {
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--tr-muted-grey);
    width: 100%;
    max-width: 100%;
    @include spacing-single(padding-left padding-right);

    .subsections {
      margin: 20px 0 0;
      padding: 0;
      list-style: none;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 2.2222222222vw;
      grid-row-gap: 16px;
      @include spacing-single(grid-column-gap);
      @media (max-width: 1023.9px) {
        grid-column-gap: 4.2666666667vw;
      }

      li {
        margin: 0;
      }
    }

    .section-link {
      font-size: 14px;
      font-weight: 500;
    }

    .section-link,
    .subsection-link {
      @include font-sans;
      text-decoration: none;
      line-height: 1.2;
      color: var(--nav-primary);

      &:hover {
        text-decoration: underline;
      }
    }
    .subsection-link {
      font-size: 16px;
    }
  }
</style>
