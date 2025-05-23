<script lang="ts">
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

  interface Props {
    links: {
      company_description?: string;
      social_links?: {
        type: string;
        url: string;
      }[];
    };
  }

  let { links = {} }: Props = $props();

  const normaliseSocialName = (name: string) => {
    if (name === 'twitter') return 'X';
    return name;
  };
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
              {@const SvelteComponent =
                symbols[link.type as keyof typeof symbols]}
              <li class="social-links symbol">
                <a
                  href={normalizeUrl(link.url)}
                  aria-label="Visit Reuters on {normaliseSocialName(link.type)}"
                >
                  <div class="button">
                    <div class="social">
                      <SvelteComponent />
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
  @use '../SiteHeader/scss/_breakpoints.scss' as breakpoints;
  @use '../SiteHeader/scss/_grids.scss' as grids;

  @use '../../scss/mixins' as *;
  .content-container {
    width: 100%;
    margin: 0 auto;
    @include breakpoints.max-width;
  }

  .company {
    padding-block-start: 24px;
    padding-block-end: 24px;
    box-sizing: border-box;

    .content-container {
      @include grids.responsive-columns(12);
    }
  }

  .company {
    border-top: 1px solid var(--nav-rules);

    .content-container {
      box-sizing: border-box;
      @include grids.spacing-single(padding-inline-start padding-inline-end);
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

    @include grids.at-4-columns {
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
        border: 1px solid var(--nav-rules);
        background: var(--nav-background, #fff);
        color: var(--nav-primary, #666);

        &:hover {
          border: 1px solid var(--nav-primary);
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
    margin-inline-start: 16px;

    &:first-child {
      margin-inline-start: 0;
    }
  }

  section.company {
    max-width: 100%;
    h2 {
      margin-block-end: 12px;
      line-height: 1.333;
      font-size: 16px;
      color: var(--nav-primary);
      font-weight: 400;
      -webkit-font-smoothing: antialiased;
      @media (min-width: 1300px) {
        font-size: 18px;
      }
    }
    p {
      @include font-sans;
      line-height: 1.43;
      font-size: 14px;
      color: var(--nav-primary);
      font-weight: 400;
    }
  }
</style>
