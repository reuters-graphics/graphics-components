<script>
  import { normalizeUrl } from '../utils';

  import NavDropdown from './index.svelte';

  export let section = {};
  export let headingText;

  $: splitCount =
    section.children && section.children.length > 7
      ? Math.ceil(section.children.length / 2)
      : 0;
</script>

<NavDropdown headingText="{headingText}">
  <a href="{normalizeUrl(section.url)}">
    <span class="heading">
      Browse {section.name}
    </span>
  </a>
  <div class="sections">
    {#if splitCount > 0}
      <ul class="sections-group">
        {#each section.children.slice(0, splitCount) as sub}
          <li>
            <a class="subsection-link" href="{normalizeUrl(sub.url)}">
              {sub.name}
            </a>
          </li>
        {/each}
      </ul>
    {/if}
    <ul class="sections-group">
      {#each section.children.slice(splitCount) as sub}
        <li>
          <a class="subsection-link" href="{normalizeUrl(sub.url)}">
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
    color: var(--nav-primary, $tr-dark-grey);
    -webkit-font-smoothing: antialiased;
    @media (min-width: 1300px) {
      font-size: 18px;
    }
  }

  li > a {
    line-height: 1.75;
    letter-spacing: 0;
    font-size: 16px;
    color: var(--nav-primary, $tr-dark-grey);
    font-weight: 400;
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
  }
</style>
