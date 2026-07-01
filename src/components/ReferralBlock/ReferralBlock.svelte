<!-- @component `ReferralBlock` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-page-furniture-referralblock--docs) -->
<script lang="ts">
  // Utils
  import { onMount } from 'svelte';
  import { fetchReferrals } from './getReferrals';

  // Components
  import Block from '../Block/Block.svelte';
  import Referral from './Referral.svelte';

  // Types
  import type { ContainerWidth } from '../@types/global';
  import type { ReferralItem, LinkTarget } from './types';

  type ReferralBlockWidth = Exclude<ContainerWidth, 'narrower' | 'narrow'>;

  interface Props {
    /**
     * Section ID, which is often the URL path to the section page on reuters.com.
     *
     * Note that not all section pages will be available in the recent stories by section API.
     */
    section?: string;
    /**
     * Collection alias, as defined in Arc Collections editor.
     */
    collection?: string;
    /**
     * Provide your own referrals instead of fetching recent stories from
     * Reuters.com. When set, the `section`/`collection` fetch is skipped and
     * these stories are rendered as-is.
     */
    stories?: ReferralItem[];
    /**
     * Number of referrals to show.
     */
    number?: number;
    /**
     * Link [target](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target), e.g., `_blank` or `_parent`.
     */
    linkTarget?: LinkTarget;
    /**
     * Add a heading to the referral block.
     */
    heading?: string;
    /**
     * Width of the component within the text well: 'normal' | 'wide' | 'wider' | 'widest' | 'fluid'
     */
    width?: ReferralBlockWidth;
    /** Add an ID to target with SCSS. */
    id?: string;
    /** Add a class to target with SCSS. */
    class?: string;
  }

  let {
    section = '/world/',
    collection,
    stories = [],
    number = 4,
    linkTarget = '_self',
    heading = '',
    width = 'wide',
    id = '',
    class: cls = 'fmy-5',
  }: Props = $props();

  let clientWidth = $state(0);

  let fetchedReferrals: ReferralItem[] = $state([]);

  // Manually provided stories take precedence. Otherwise, only show fetched
  // stories once the API returns the full requested number, which avoids
  // rendering a partial block.
  const referrals = $derived<ReferralItem[]>(
    stories.length ? stories
    : fetchedReferrals.length === number ? fetchedReferrals
    : []
  );

  onMount(() => {
    // Skip the network request entirely when stories are supplied by hand.
    if (stories.length) return;
    fetchReferrals({ section, collection, number }).then((items) => {
      fetchedReferrals = items;
    });
  });
</script>

{#if referrals.length}
  <Block {width} {id} class="referrals-block {cls}">
    <div
      class="block-container"
      class:stacked={clientWidth && clientWidth < 750}
      bind:clientWidth
    >
      {#if heading}
        <div
          class="heading h4 font-bold"
          class:stacked={clientWidth && clientWidth < 750}
        >
          {heading}
        </div>
      {/if}
      <div
        class="referral-container inline-flex flex-wrap w-full justify-between"
        class:stacked={clientWidth && clientWidth < 750}
        class:xs={clientWidth && clientWidth < 450}
      >
        {#each referrals as referral}
          <Referral
            {...referral}
            {linkTarget}
            compact={clientWidth > 0 && clientWidth < 450}
            stacked={clientWidth > 0 && clientWidth < 750}
          />
        {/each}
      </div>
    </div>
  </Block>
{/if}

<style lang="scss">
  div.block-container.stacked {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div.heading {
    margin-block-start: 0;
    font-family: Knowledge, sans-serif;
    &.stacked {
      max-width: 450px;
    }
  }

  .referral-container {
    &.stacked {
      max-width: 450px;
    }
  }
</style>
