<script lang="ts">
  import StoryCard from './StoryCard/index.svelte';
  import Spinner from './Spinner/index.svelte';
  import { getContext, type Snippet } from 'svelte';
  import type { Writable } from 'svelte/store';

  interface Props {
    headingText?: string;
    children: Snippet;
  }

  let { headingText = 'Trending Stories', children }: Props = $props();

  const activeSection =
    getContext<Writable<null | string>>('nav-active-section');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let stories = $state<any[]>([]);
  let lastFetched = $state<null | string>(null);

  $effect(() => {
    try {
      fetchSection($activeSection);
    } catch {
      console.log('Error fetching articles');
    }
  });

  const fetchSection = async (activeSection: null | string) => {
    if (lastFetched === activeSection) return;
    if (activeSection === 'more') {
      await fetch(
        'https://www.reuters.com/pf/api/v3/content/fetch/articles-by-trends-v1?' +
          new URLSearchParams({
            query: JSON.stringify({
              size: 4,
              website: 'reuters',
            }),
          })
      )
        .then((response) => response.json())
        .then((data) => {
          stories = data.result.articles;
          lastFetched = activeSection;
        })
        .catch(() => {
          console.log('Error fetching articles');
        });
    } else {
      await fetch(
        'https://www.reuters.com/pf/api/v3/content/fetch/recent-stories-by-sections-v1?' +
          new URLSearchParams({
            query: JSON.stringify({
              section_ids: activeSection,
              size: 4,
              website: 'reuters',
            }),
          })
      )
        .then((response) => response.json())
        .then((data) => {
          stories = data.result.articles;
          lastFetched = activeSection;
        })
        .catch(() => {
          console.log('Error fetching articles');
        });
    }
  };
</script>

<div class="dropdown" data-chromatic="ignore">
  <div class="dropdown-container">
    <div class="inner">
      <div class="submenu">
        <div class="inner">
          {@render children?.()}
        </div>
      </div>
      <div class="stories-container">
        <div class="inner">
          {#if stories.length > 0}
            <span class="latest">{headingText}</span>
            <ul class="story-list">
              {#each stories as story}
                <li class="story-item">
                  <StoryCard {story} />
                </li>
              {/each}
            </ul>
          {:else}
            <div class="spinner">
              <Spinner />
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @use '../../scss/_colors.scss' as *;
  @use '../../scss/_breakpoints.scss' as breakpoints;
  @use '../../scss/_eases.scss' as *;
  @use '../../scss/_grids.scss' as grids;
  @use '../../scss/_z-indexes.scss' as *;

  $nav-height: 64px;
  $mobile-nav-height: 56px;

  .dropdown {
    position: absolute;
    z-index: $zindex-dropdown;
    left: 0;
    top: $nav-height;
    width: 100%;

    @include breakpoints.for-mobile {
      top: $mobile-nav-height;
    }
  }

  .dropdown-container {
    border-top: 1px solid var(--nav-rules, var(--tr-muted-grey));
    box-shadow: 0 10px 16px rgba(black, 0.1);
    overflow: hidden;
    background: var(--nav-background, $white);

    > .inner {
      margin: 0 auto;
      @include breakpoints.max-width;
      @include grids.responsive-columns(12);
      @include grids.spacing-single(padding-inline-start padding-inline-end);
    }
  }

  .submenu,
  .stories-container {
    padding: 24px 0;
    grid-row: 1;

    .inner {
      position: relative;
      height: 100%;
    }
  }

  .submenu {
    grid-column: 1 / span 4;

    @include breakpoints.for-extra-wide-desktop {
      grid-column: 2 / span 3;
    }

    @include grids.at-4-columns {
      grid-column: 1 / span 2;
    }
  }

  .stories-container {
    grid-column: 5 / span 8;
    min-height: 300px;

    .inner {
      border-left: 1px solid var(--nav-rules, var(--tr-muted-grey));
      @include grids.spacing-single(padding-inline-start);
    }

    @include breakpoints.for-extra-wide-desktop {
      grid-column: 5 / span 7;
    }

    @include grids.at-4-columns {
      grid-column: 3 / span 2;
    }
  }

  .story-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
    padding: 0;
    margin: 20px 0 0 0;

    font-family: var(--theme-font-family-sans-serif);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--nav-primary, #404040);

    @include grids.spacing-single(grid-column-gap);
    @include grids.at-4-columns {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .story-item {
    padding-block-end: 20px;
    margin: 0;
    animation: fadein 0.5s both $easeOutExpo;

    &:nth-child(1),
    &:nth-child(2) {
      border-bottom: 1px solid var(--nav-rules, var(--tr-muted-grey));
    }

    &:nth-child(3),
    &:nth-child(4) {
      padding-block-start: 20px;
    }

    @include grids.at-4-columns {
      &:nth-child(2) {
        padding-block-start: 20px;
      }
      &:nth-child(3) {
        border-bottom: 1px solid var(--nav-rules, var(--tr-muted-grey));
      }
    }
  }

  .spinner {
    width: 40px;
    margin-inline-start: -20px;
    position: absolute;
    top: 60px;
    left: 50%;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  span.latest {
    font-size: 16px;
    color: var(--nav-primary, var(--tr-dark-grey));
    @media (min-width: 1300px) {
      font-size: 18px;
    }
  }
</style>
