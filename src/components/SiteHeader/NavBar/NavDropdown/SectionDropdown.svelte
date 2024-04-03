<script>
  import { normalizeUrl, normalizeUrlJp } from '../utils';

  import NavDropdown from './index.svelte';

  export let section = {};
  export let headingText;
  export let lang = 'en';
  const labels = {
    Browse: {
      default: (name) => `Browse ${name}`,
      ja: (name) => `${name}を閲覧する`,
    },
  };
  const normaliseUrl = lang === 'ja' ? normalizeUrlJp : normalizeUrl;

  $: splitCount =
    section.children && section.children.length > 7
      ? Math.ceil(section.children.length / 2)
      : 0;
</script>

<NavDropdown
  headingText="{headingText}"
  lang="{lang}"
  hideHeadlines="{lang === 'ja' && section.id === '/pictures/'}"
>
  <a href="{normaliseUrl(section.url)}">
    <span class="heading" lang="{lang}">
      {labels.Browse[lang]
        ? labels.Browse[lang](section.name)
        : labels.Browse.default(section.name)}
    </span>
  </a>
  <div class="sections">
    {#if splitCount > 0}
      <ul class="sections-group">
        {#each section.children.slice(0, splitCount) as sub}
          <li>
            <a class="subsection-link" href="{normaliseUrl(sub.url)}">
              {sub.name}
            </a>
          </li>
        {/each}
      </ul>
    {/if}
    <ul class="sections-group">
      {#each section.children.slice(splitCount) as sub}
        <li>
          <a class="subsection-link" href="{normaliseUrl(sub.url)}">
            {sub.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</NavDropdown>

<style lang="scss">
  @import '../../scss/_colors.scss';
  @import '../../scss/_breakpoints.scss';

  a {
    text-decoration: none;
    &:hover {
      color: var(--nav-primary, var(--tr-dark-grey));
      text-decoration: underline !important;
    }
  }

  .sections {
    display: flex;

    @include for-tablet-down {
      display: block;
    }

    .sections-group {
      width: 50%;
      list-style: none;
      padding: 0;
      margin: 12px 0 0 0;

      font-family: var(--theme-font-family-sans-serif);
      font-size: 16px;
      font-weight: 400;
      line-height: 18px;
      color: var(--nav-primary, #404040);

      li {
        margin: 0;
      }

      &:first-child {
        margin-right: 16px;
      }

      @include for-tablet-down {
        &:nth-child(2) {
          margin-top: 0;
        }
      }
    }
  }

  .subsection-link {
    line-height: 18px;
    font-weight: 400;
    display: inline-block;
    padding: 4px 0;
    margin-bottom: 2px;
    font-family: var(--theme-font-family-sans-serif);
    &:hover {
      text-decoration: underline;
    }
  }

  span.heading {
    line-height: 1.333;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    padding: 0;
    letter-spacing: 0;
    text-decoration: none;
    text-transform: none;
    font-smooth: always;
    color: var(--nav-primary, var(--tr-dark-grey));
    -webkit-font-smoothing: antialiased;
    @media (min-width: 1300px) {
      font-size: 18px;
    }
    &:hover {
      color: inherit;
      text-decoration: underline !important;
    }
    &[lang='ja'] {
      font-weight: 600;
    }
  }

  li > a {
    line-height: 1.75;
    letter-spacing: 0;
    font-size: 16px;
    color: var(--nav-primary, var(--tr-dark-grey));
    font-weight: 400;
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
  }
</style>
