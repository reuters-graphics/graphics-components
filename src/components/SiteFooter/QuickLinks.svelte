<script lang="ts">
  import { normalizeUrl } from '../SiteHeader/NavBar/utils';

  import Graphics from './svgs/Graphics.svelte';
  import Pictures from './svgs/Pictures.svelte';
  import Videos from './svgs/Videos.svelte';

  const symbols = {
    graphics: Graphics,
    pictures: Pictures,
    videos: Videos,
  };

  interface Props {
    links: {
      latest_links: {
        url: string;
        text: string;
      }[];
      media_links: {
        symbol: string;
        url: string;
        text: string;
      }[];
      browse_links: {
        url: string;
        text: string;
      }[];
      about_links: {
        url: string;
        text: string;
      }[];
      stay_informed_links: {
        url: string;
        text: string;
      }[];
    };
  }

  let { links }: Props = $props();

  let windowWidth = $state(1200);
  const mobileBreakpoint = 745;
</script>

<svelte:window bind:innerWidth={windowWidth} />

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
                  <a href={normalizeUrl(link.url)}>{link.text}</a>
                </li>
              {/each}
            </ul>
          </section>
          <section class="link-group media">
            <h3>Media</h3>
            <ul>
              {#each links.media_links as link}
                {@const SvelteComponent =
                  symbols[link.symbol as keyof typeof symbols]}
                <li>
                  <div class="symbol">
                    <SvelteComponent />
                  </div>
                  <a href={normalizeUrl(link.url)}>
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
                <a href={normalizeUrl(link.url)}>{link.text}</a>
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
              <a href={normalizeUrl(link.url)}>{link.text}</a>
            </li>
          {/each}
        </ul>
      </section>
      {#if windowWidth >= mobileBreakpoint}
        <section class="link-group media">
          <h3>Media</h3>
          <ul>
            {#each links.media_links as link}
              {@const SvelteComponent_1 =
                symbols[link.symbol as keyof typeof symbols]}
              <li>
                <div class="symbol">
                  <SvelteComponent_1 />
                </div>
                <a href={normalizeUrl(link.url)}>
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
                <a href={normalizeUrl(link.url)}>{link.text}</a>
              </li>
            {/each}
          </ul>
        </section>
        <section class="stay-informed">
          <h3>Stay Informed</h3>
          <ul>
            {#each links.stay_informed_links as link}
              <li>
                <a href={normalizeUrl(link.url)}>{link.text}</a>
              </li>
            {/each}
          </ul>
        </section>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @use '../SiteHeader/scss/_breakpoints.scss' as breakpoints;
  @use '../SiteHeader/scss/_grids.scss' as grids;

  @use '../../scss/mixins' as *;

  .content-container {
    width: 100%;
    margin: 0 auto;
    @include breakpoints.max-width;
  }

  .quick-links {
    padding-block-start: 24px;
    padding-block-end: 24px;
    box-sizing: border-box;

    .content-container {
      @include grids.responsive-columns(12);
    }

    ul {
      margin: 0;
      padding: 0;

      li {
        list-style: none;
        display: flex;
        align-items: center;
        margin: 8px 0;
        @include font-sans;
        a {
          color: var(--nav-primary);
          font-weight: 500;
          font-size: 16px;
        }
      }
    }
  }

  section.quick-links {
    border-top: 1px solid var(--nav-rules);
    max-width: 100%;

    .content-container {
      box-sizing: border-box;
      @include grids.spacing-single(padding-inline-start padding-inline-end);
    }

    h3 {
      color: var(--nav-primary);
      font-size: 16px;
      font-weight: 400;
      margin: 0;
    }
  }

  .quick-links .content-container {
    @include grids.spacing-single(grid-row-gap);

    section.link-group {
      grid-column: auto / span 2;
      margin: 0;

      @include grids.above-4-columns {
        &:last-child {
          grid-column: 10 / span 3;
        }
      }
    }

    .latest-and-media {
      grid-column: 1 / span 2;
      grid-row: 1;

      .media {
        margin-block-start: 24px;
      }
    }

    .about-and-stay-informed {
      grid-column: 7 / span 3;
      grid-row: 1;

      @include breakpoints.for-tablet-down {
        grid-column: 9 / span 3;
      }

      @include breakpoints.for-mobile {
        grid-column: 1 / span 2;
        grid-row: 2;
      }
    }

    .stay-informed {
      margin-block-start: 24px;
    }
  }

  .symbol {
    width: 20px;
    margin-inline-end: 16px;
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
