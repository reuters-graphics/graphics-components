<script>
  import Twitter from './svgs/Twitter.svelte';
  import YouTube from './svgs/YouTube.svelte';
  import Facebook from './svgs/Facebook.svelte';
  import Instagram from './svgs/Instagram.svelte';
  import LinkedIn from './svgs/LinkedIn.svelte';
  import { normalizeUrl } from '../SiteHeader/NavBar/utils';

  const symbols = {
    twitter: Twitter,
    facebook: Facebook,
    instagram: Instagram,
    youtube: YouTube,
    linkedin: LinkedIn,
  };

  export let links = {};
</script>

{#if links.social_links}
  <section class="company">
    <div class="content-container">
      <article class="company-info">
        <h2>Information you can trust</h2>
        <p>{links.company_description}</p>
      </article>
      <div class="social">
        <h2>Follow Us</h2>
        <div>
          <ul class="links">
            {#each links.social_links as link}
              <li class="social-links symbol">
                <a href="{normalizeUrl(link.url)}">
                  <div class="button">
                    <div class="social">
                      <svelte:component this="{symbols[link.type]}" />
                    </div>
                  </div>
                </a>
              </li>
            {/each}
          </ul>
        </div>
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

  .company {
    padding-top: 24px;
    padding-bottom: 24px;
    box-sizing: border-box;

    .content-container {
      @include responsive-columns(12);
    }
  }

  .company {
    border-top: 1px solid var(--nav-rules, $tr-muted-grey);

    .content-container {
      @include spacing-single(padding-left padding-right);

      box-sizing: border-box;
    }
  }
  .company .content-container {
    grid-row-gap: 24px;

    .company-info {
      grid-column: 1 / span 5;
    }

    .social {
      grid-column: 7 / span 5;
    }

    @include at-4-columns {
      .company-info,
      .social {
        grid-column: 1 / span 4;
        grid-row: auto;
      }
    }
  }

  .links {
    padding: 0;
    margin: 0;

    .symbol {
      .button {
        border-radius: 8px;
        border: 1px solid var(--nav-rules, $tr-muted-grey);
        background: var(--nav-background, #fff);
        color: var(--nav-primary, #666);

        &:hover {
          border: 1px solid var(--nav-primary, $tr-dark-grey);
        }
      }
    }

    .social {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: inherit;
    }
  }

  .symbol {
    list-style: none;
    display: inline-block;
    vertical-align: middle;
    margin-left: 16px;

    &:first-child {
      margin-left: 0;
    }
  }

  section.company {
    max-width: 100%;
    h2 {
      margin-bottom: 12px;
      line-height: 1.333;
      font-size: 16px;
      color: var(--nav-primary, $tr-dark-grey);
      font-weight: 400;
      -webkit-font-smoothing: antialiased;
      @media (min-width: 1300px) {
        font-size: 18px;
      }
    }
    p {
      @include font-display;
      line-height: 1.43;
      font-size: 14px;
      color: var(--nav-primary, $tr-dark-grey);
      font-weight: 400;
    }
  }
</style>
