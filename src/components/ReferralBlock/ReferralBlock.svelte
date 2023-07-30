<!-- @component `ReferralBlock` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-ReferralBlock--default) -->
<script lang="ts">
  /** ✏️ DOCUMENT your chart's props using TypeScript and JSDoc comments like below! */

  /**
   * Section ID, which is often the URL path to the section page on reuters.com.
   *
   * Note that not all section pages will be available in the recent stories by section API.
   * @required
   */
  export let section: string = '/world/';

  /**
   * Number of referrals to show.
   * @required
   */
  export let number: number = 4;

  /**
   * Link [target](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target), e.g., `_blank` or `_parent`.
   */
  export let linkTarget: string = '_self';

  /**
   * Add a heading to the referral block.
   */
  export let heading: string = '';

  type ContainerWidth = 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';

  /**
   * Width of the component within the text well.
   * @required
   */
  export let width: ContainerWidth = 'wide';

  /** Add an ID to target with SCSS. */
  export let id: string = '';

  /** Add a class to target with SCSS. */
  let cls: string = '';
  export { cls as class };

  import Block from '../Block/Block.svelte';
  import { referrals } from './stores.js';

  import { onMount } from 'svelte';
  import { getTime } from '../SiteHeader/NavBar/NavDropdown/StoryCard/time';

  let clientWidth;

  onMount(async () => {
    try {
      const response = await fetch(
        'https://www.reuters.com/pf/api/v3/content/fetch/recent-stories-by-sections-v1?' +
          new URLSearchParams({
            query: JSON.stringify({
              section_ids: section,
              size: 20,
              website: 'reuters',
            }),
          })
      );
      const articles = (await response.json()).result.articles
        .filter((a) => a?.kicker?.name)
        .filter((a) => a?.thumbnail?.renditions?.landscape?.['240w'])
        .filter((a) => !a?.content?.third_party)
        .slice(0, number);
      referrals.set(articles);
    } catch (e) {
      console.warn('Unable to fetch referral links.');
    }
  });

  getTime();
</script>

{#if $referrals.length === number}
  <Block width="{width}" id="{id}" class="referrals-block {cls}">
    {#if heading}
      <div
        class="heading font-subhed text-secondary underline text-xs font-bold"
        class:stacked="{clientWidth && clientWidth < 750}"
      >
        {heading}
      </div>
    {/if}
    <div
      class="referral-container inline-flex flex-wrap w-full justify-center"
      class:stacked="{clientWidth && clientWidth < 750}"
      class:xs="{clientWidth && clientWidth < 450}"
      bind:clientWidth="{clientWidth}"
    >
      {#each $referrals as referral}
        <div class="referral">
          <a
            href="https://www.reuters.com{referral.canonical_url}"
            target="{linkTarget}"
            rel="{linkTarget === '_blank' ? 'noreferrer' : null}"
          >
            <div class="referral-pack flex justify-around my-0 mx-auto">
              <div
                class="headline"
                class:xs="{clientWidth && clientWidth < 450}"
              >
                <div
                  class="kicker m-0 font-note text-secondary"
                  data-chromatic="ignore"
                >
                  {referral.kicker.name}
                </div>
                <div
                  class="title m-0 font-subhed font-bold text-primary"
                  data-chromatic="ignore"
                >
                  {referral.title}
                </div>
                <div
                  class="publish-time font-note text-secondary"
                  data-chromatic="ignore"
                >
                  {getTime(new Date(referral.display_time))}
                </div>
              </div>
              <div
                class="image-container block m-0 overflow-hidden relative"
                class:xs="{clientWidth && clientWidth < 450}"
              >
                <img
                  class="block object-cover m-0 w-full"
                  data-chromatic="ignore"
                  src="{referral.thumbnail.renditions.landscape['240w']}"
                  alt="{referral.thumbnail.caption ||
                    referral.thumbnail.alt_text}"
                />
              </div>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </Block>
{/if}

<style lang="scss">
  @use '../../scss/mixins' as *;

  div.heading {
    margin: 0 0 5px;
    &.stacked {
      max-width: 450px;
      margin: 0 auto 5px;
    }
  }

  .referral-container {
    gap: 10px 40px;
    a {
      text-decoration: none;
    }
    &.stacked {
      .referral {
        width: 100%;
        .headline {
          padding: 0 10px 0 0;
        }
      }
    }
    .referral {
      display: block;
      width: calc(50% - 20px);
      max-width: 450px;

      &:hover {
        .title {
          text-decoration: underline;
        }
        img {
          filter: brightness(85%);
        }
      }

      .headline {
        display: inline-block;
        width: calc(100% - 140px);
        padding: 0 10px 0 0;
        &.xs {
          width: calc(100% - 80px);
          .kicker {
            font-size: 0.85rem;
          }
          .title {
            font-size: 0.9rem;
            line-height: 1.1rem;
          }
        }
        .kicker {
          font-size: 0.9rem;
        }
        .title {
          font-size: 0.95rem;
          line-height: 1.15rem;
        }
        .publish-time {
          font-size: 0.75rem;
          margin: 2px 0 0;
        }
      }
      .image-container {
        border-radius: 10px;
        border: 1px solid $theme-colour-brand-rules;
        width: 140px;
        height: 90px;
        &.xs {
          width: 80px;
          height: 60px;
        }
        img {
          transition: filter 0.1s;
          height: inherit;
        }
      }
    }
  }
</style>
