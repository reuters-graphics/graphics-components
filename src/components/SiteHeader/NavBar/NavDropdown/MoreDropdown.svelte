<script lang="ts">
  import NavDropdown from './index.svelte';
  import { normalizeUrl } from '../utils';

  let { sections = [] } = $props();
</script>

<NavDropdown>
  <div class="more-sections" data-chromatic="ignore">
    <div class="groupContainer">
      {#each sections as section}
        <section
          class="more-section-group"
          class:has-children={section.children}
        >
          <a href={normalizeUrl(section.url)} class="section-link">
            {section.name}
          </a>
          {#if section.children}
            <ul class="subsections">
              {#each section.children as sub}
                <li>
                  <a class="subsection-link" href={normalizeUrl(sub.url)}
                    >{sub.name}</a
                  >
                </li>
              {/each}
            </ul>
          {/if}
        </section>
      {/each}
    </div>
  </div>
</NavDropdown>

<style lang="scss">
  @use '../../scss/_colors.scss' as *;
  @use '../../scss/_breakpoints.scss' as breakpoints;
  @use '../../scss/_eases.scss' as *;
  @use '../../scss/_grids.scss' as grids;
  @use '../../scss/_z-indexes.scss' as *;

  a {
    text-decoration: none;
    font-family: var(--theme-font-family-sans-serif);
    &:hover {
      color: inherit;
      text-decoration: underline !important;
    }
  }

  .more-sections {
    position: relative;

    @include breakpoints.for-tablet-down {
      display: flex;
      flex-direction: row;
      column-gap: 64px;
    }
  }

  .more-section-group {
    &.has-children {
      margin-block-end: 20px;
    }

    .subsections {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 0;
      margin: 0;
      list-style: none;
      @include grids.spacing-single(grid-column-gap);

      li {
        margin: 0;
      }

      .subsection-link {
        font-size: 16px;
        color: var(--nav-primary, var(--tr-dark-grey));
        line-height: 18px;
        font-weight: 400;
        display: inline-block;
        padding: 4px 0;
        margin-block-end: 2px;
        text-decoration: none;
        &:hover {
          text-decoration: underline !important;
        }
      }
    }

    .section-link {
      grid-column: 1 / -1;
      margin-block-end: 16px;
      line-height: 18px;
      font-size: 16px;
      display: inline-block;
      color: var(--nav-primary, var(--tr-dark-grey));
      text-decoration: none;
      @media (min-width: 1300px) {
        font-size: 18px;
      }
      &:hover {
        text-decoration: underline !important;
      }
    }
  }
</style>
