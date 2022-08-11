<script>
  import NavDropdown from './index.svelte';
  import { normalizeUrl } from '../utils';

  export let sections = [];
</script>

<NavDropdown>
  <div class="more-sections">
    <div class="groupContainer">
      {#each sections as section}
        <section
          class="more-section-group"
          class:has-children="{section.children}"
        >
          <a href="{normalizeUrl(section.url)}" class="section-link">
            {section.name}
          </a>
          {#if section.children}
            <ul class="subsections">
              {#each section.children as sub}
                <li>
                  <a class="subsection-link" href="{normalizeUrl(sub.url)}"
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
  @import '../../scss/_colors.scss';
  @import '../../scss/_breakpoints.scss';
  @import '../../scss/_eases.scss';
  @import '../../scss/_grids.scss';
  @import '../../scss/_z-indexes.scss';

  .more-sections {
    position: relative;

    @include for-tablet-down {
      display: flex;
      flex-direction: row;
      column-gap: 64px;
    }
  }

  .more-section-group {
    &.has-children {
      margin-bottom: 20px;
    }

    .subsections {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      @include spacing-single(grid-column-gap);
      padding: 0;
      margin: 0;
      list-style: none;

      .subsection-link {
        font-size: 16px;
        color: var(--nav-primary, $tr-dark-grey);
        line-height: 18px;
        font-weight: 400;
        display: inline-block;
        padding: 4px 0;
        margin-bottom: 2px;
      }
    }

    .section-link {
      grid-column: 1 / -1;
      margin-bottom: 16px;
      line-height: 18px;
      font-size: 16px;
      display: inline-block;
      color: var(--nav-primary, $tr-dark-grey);
      @media (min-width: 1300px) {
        font-size: 18px;
      }
    }
  }
</style>
