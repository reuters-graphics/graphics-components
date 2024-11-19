<!-- @component `ReferralBlock` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-ReferralBlock--default) -->
<script lang="ts">
  /** ✏️ DOCUMENT your chart's props using TypeScript and JSDoc comments like below! */

  /**
   * Section ID, which is often the URL path to the section page on reuters.com.
   *
   * Note that not all section pages will be available in the recent stories by section API.
   */
  export let section: string | undefined = '/world/';

  /**
   * Collection alias, as defined in Arc Collections editor.
   */
  export let collection: string | undefined;

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
  let cls: string = 'fmy-8';
  export { cls as class };

  import Block from '../Block/Block.svelte';

  import { onMount } from 'svelte';
  import { getTime } from '../SiteHeader/NavBar/NavDropdown/StoryCard/time';

  let clientWidth: number;

  const SECTION_API = 'recent-stories-by-sections-v1';
  const COLLECTION_API = 'articles-by-collection-alias-or-id-v1';

  let referrals = [];

  const getReferrals = async () => {
    const isCollection = Boolean(collection);
    const API = isCollection ? COLLECTION_API : SECTION_API;
    try {
      const response = await fetch(
        `https://www.reuters.com/pf/api/v3/content/fetch/${API}?` +
          new URLSearchParams({
            query: JSON.stringify({
              section_ids: isCollection ? undefined : section,
              collection_alias: isCollection ? collection : undefined,
              size: 20,
              website: 'reuters',
            }),
          })
      );
      const data = await response.json();
      const articles = data.result.articles
        .filter((a) => a?.headline_category || a?.kicker?.name)
        .filter((a) => a?.thumbnail?.renditions?.landscape?.['240w'])
        .filter((a) => !a?.content?.third_party)
        .slice(0, number);
      referrals = articles;
    } catch {
      console.warn('Unable to fetch referral links.');
    }
  };

  onMount(getReferrals);
</script>

{#if referrals.length === number}
  <Block {width} {id} class="referrals-block {cls}">
    <div
      class="block-container"
      class:stacked="{clientWidth && clientWidth < 750}"
      bind:clientWidth
    >
      {#if heading}
        <div
          class="heading h4 font-bold"
          class:stacked="{clientWidth && clientWidth < 750}"
        >
          {heading}
        </div>
      {/if}
      <div
        class="referral-container inline-flex flex-wrap w-full justify-between"
        class:stacked="{clientWidth && clientWidth < 750}"
        class:xs="{clientWidth && clientWidth < 450}"
      >
        {#each referrals as referral}
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
                    class="kicker m-0 body-caption leading-tighter"
                    data-chromatic="ignore"
                  >
                    {referral.headline_category || referral.kicker.name}
                  </div>
                  <div
                    class="title m-0 body-caption leading-tighter"
                    data-chromatic="ignore"
                  >
                    {referral.title}
                  </div>
                  <div
                    class="publish-time body-caption leading-tighter"
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
    </div>
  </Block>
{/if}

<style lang="scss">
  @use '../../scss/mixins' as *;

  div.block-container.stacked {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div.heading {
    margin-top: 0;
    &.stacked {
      max-width: 450px;
    }
  }

  .referral-container {
    a {
      text-decoration: none;
    }
    &.stacked {
      max-width: 450px;
      .referral {
        width: 100%;
        .headline {
          width: calc(100% - 7rem);
        }
      }
    }
    .referral {
      display: block;
      width: calc(50% - 30px);
      max-width: 450px;
      @include fmy-1;

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
        width: calc(100% - 9rem);
        @include fpr-2;
        .kicker {
          @include text-xxs;
        }
        .title {
          @include font-medium;
          @include text-sm;
          @include text-primary;
        }
        .publish-time {
          @include text-xxs;
        }
      }
      .image-container {
        border-radius: 0.25rem;
        border: 1px solid $theme-colour-brand-rules;
        width: 9rem;
        &.xs {
          width: 7rem;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: filter 0.1s;
        }
      }
    }
  }
</style>
