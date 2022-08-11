<script>
  import { normalizeUrl } from '../SiteHeader/NavBar/utils';

  export let links = {};
</script>

{#if links.ad_links}
  <section class="legal">
    <div class="content-container">
      <section class="ad-links">
        <ul class="link-group">
          {#each links.ad_links as link}
            <li>
              <a href="{normalizeUrl(link.url)}">
                {link.text}
              </a>
            </li>
          {/each}
        </ul>
      </section>
      <p class="disclaimer">
        All quotes delayed a minimum of 15 minutes. <a
          href="{normalizeUrl(links.disclaimer_link)}"
          >See here for a complete list of exchanges and delays</a
        >.
      </p>
      <section class="misc-links">
        <ul class="link-group">
          {#each links.misc_links.filter((d) => !d.self) as link}
            <li>
              <a href="{normalizeUrl(link.url)}">
                {link.text}
              </a>
            </li>
          {/each}
        </ul>
      </section>
      <p class="copyright">
        © {links.copyright_year} Reuters.
        <a href="{normalizeUrl(links.copyright_link)}">All rights reserved</a>
      </p>
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

  .legal {
    padding-top: 24px;
    padding-bottom: 24px;
    box-sizing: border-box;

    .content-container {
      @include responsive-columns(12);
    }
  }

  .legal {
    border-top: 1px solid var(--nav-rules, $tr-muted-grey);

    .content-container {
      @include spacing-single(padding-left padding-right);

      box-sizing: border-box;
    }
  }

  .legal .content-container {
    @include spacing-50(grid-row-gap);

    .ad-links {
      grid-column: 1 / span 5;
      grid-row: 1;
    }

    .misc-links {
      grid-column: 5 / span 8;
      grid-row: 1;
      justify-self: end;
    }

    .disclaimer {
      grid-column: 1 / span 7;
      grid-row: 2;
    }

    .copyright {
      grid-column: 8 / span 5;
      grid-row: 2;
      justify-self: end;
    }

    @include at-4-columns {
      @include spacing-single(grid-row-gap);

      .ad-links,
      .misc-links,
      .disclaimer,
      .copyright {
        grid-column: 1 / span 4;
        justify-self: start;
      }

      .ad-links {
        grid-row: 1;
      }

      .disclaimer {
        grid-row: 2;
      }

      .misc-links {
        grid-row: 3;
      }

      .copyright {
        grid-row: 4;
      }
    }
  }

  .link-group {
    margin: 0;
    padding: 0;

    li {
      display: inline-flex;
      margin-right: 16px;
      list-style: none;
      align-items: center;
      a {
        @include font-display;
        color: var(--nav-primary, $tr-dark-grey);
        font-size: 14px;
        font-weight: 500;
      }
    }
  }

  section {
    max-width: 100%;
    margin: 0;
  }

  p.copyright,
  p.disclaimer {
    margin: 0;
    @include font-display;
    font-size: 14px;
    color: var(--nav-primary, $tr-dark-grey);
    a {
      color: inherit;
    }
  }
</style>
