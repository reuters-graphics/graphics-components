<script>
  import { normalizeUrl } from '../SiteHeader/NavBar/utils';

  import Graphics from './svgs/Graphics.svelte';
  import Pictures from './svgs/Pictures.svelte';
  import Videos from './svgs/Videos.svelte';

  const symbols = {
    graphics: Graphics,
    pictures: Pictures,
    videos: Videos,
  };

  export let links = {};

  let windowWidth = 1200;
  const mobileBreakpoint = 745;
</script>

<svelte:window bind:innerWidth="{windowWidth}" />

{#if links.latest_links}
  <section class="quick-links">
    <h2 class="visually-hidden">Site Index</h2>
    <div class="content-container">
      {#if windowWidth < mobileBreakpoint}
        <div class="latest-and-media">
          <section class="link-group">
            <h3>Latest</h3>
            <ul>
              {#each links.latest_links as link}
                <li>
                  <a href="{normalizeUrl(link.url)}">{link.text}</a>
                </li>
              {/each}
            </ul>
          </section>
          <section class="link-group media">
            <h3>Media</h3>
            <ul>
              {#each links.media_links as link}
                <li>
                  <div class="symbol">
                    <svelte:component this="{symbols[link.symbol]}" />
                  </div>
                  <a href="{normalizeUrl(link.url)}">
                    {link.text}
                  </a>
                </li>
              {/each}
            </ul>
          </section>
        </div>
      {:else}
        <section class="link-group">
          <h3>Latest</h3>
          <ul>
            {#each links.latest_links as link}
              <li>
                <a href="{normalizeUrl(link.url)}">{link.text}</a>
              </li>
            {/each}
          </ul>
        </section>
      {/if}

      <section class="link-group">
        <h3>Browse</h3>
        <ul>
          {#each links.browse_links as link}
            <li>
              <a href="{normalizeUrl(link.url)}">{link.text}</a>
            </li>
          {/each}
        </ul>
      </section>
      {#if windowWidth >= mobileBreakpoint}
        <section class="link-group media">
          <h3>Media</h3>
          <ul>
            {#each links.media_links as link}
              <li>
                <div class="symbol">
                  <svelte:component this="{symbols[link.symbol]}" />
                </div>
                <a href="{normalizeUrl(link.url)}">
                  {link.text}
                </a>
              </li>
            {/each}
          </ul>
        </section>
      {/if}
      <div class="about-and-stay-informed">
        <section class="about">
          <h3>About Reuters</h3>
          <ul>
            {#each links.about_links as link}
              <li>
                <a href="{normalizeUrl(link.url)}">{link.text}</a>
              </li>
            {/each}
          </ul>
        </section>
        <section class="stay-informed">
          <h3>Stay Informed</h3>
          <ul>
            {#each links.stay_informed_links as link}
              <li>
                <a href="{normalizeUrl(link.url)}">{link.text}</a>
              </li>
            {/each}
          </ul>
        </section>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../SiteHeader/scss/_breakpoints.scss';
  @import '../SiteHeader/scss/_grids.scss';
  @import '../SiteHeader/scss/_colors.scss';

  @import '~@reuters-graphics/style-main/scss/fonts/mixins';

  .content-container {
    @include max-width;
    width: 100%;
    margin: 0 auto;
  }

  .quick-links {
    padding-top: 24px;
    padding-bottom: 24px;
    box-sizing: border-box;

    .content-container {
      @include responsive-columns(12);
    }

    ul {
      margin: 0;
      padding: 0;

      li {
        list-style: none;
        display: flex;
        align-items: center;
        margin: 8px 0;
        @include font-display;
        a {
          color: var(--nav-primary, $tr-dark-grey);
          font-weight: 500;
          font-size: 16px;
        }
      }
    }
  }

  section.quick-links {
    border-top: 1px solid var(--nav-rules, $tr-muted-grey);
    max-width: 100%;

    .content-container {
      @include spacing-single(padding-left padding-right);

      box-sizing: border-box;
    }

    h3 {
      color: var(--nav-primary, $tr-dark-grey);
      font-size: 16px;
      font-weight: 400;
      margin: 0;
    }
  }

  .quick-links .content-container {
    @include spacing-single(grid-row-gap);

    section.link-group {
      grid-column: auto / span 2;
      margin: 0;

      @include above-4-columns {
        &:last-child {
          grid-column: 10 / span 3;
        }
      }
    }

    .latest-and-media {
      grid-column: 1 / span 2;
      grid-row: 1;

      .media {
        margin-top: 24px;
      }
    }

    .about-and-stay-informed {
      grid-column: 7 / span 3;
      grid-row: 1;

      @include for-tablet-down {
        grid-column: 9 / span 3;
      }

      @include for-mobile {
        grid-column: 1 / span 2;
        grid-row: 2;
      }
    }

    .stay-informed {
      margin-top: 24px;
    }
  }

  .symbol {
    width: 20px;
    margin-right: 16px;
  }

  .visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }
</style>
