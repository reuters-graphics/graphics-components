<!-- @component `Referral` renders a single referral card (a linked headline, kicker, time and thumbnail). It's used by `ReferralBlock` but can be dropped into any layout on its own. -->
<script lang="ts">
  // Utils
  import { getTime } from '../SiteHeader/NavBar/NavDropdown/StoryCard/time';

  // Types
  import type { ReferralItem, LinkTarget } from './types';

  interface Props extends ReferralItem {
    /**
     * Link [target](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target), e.g., `_blank` or `_parent`.
     */
    linkTarget?: LinkTarget;
    /** Use the narrower thumbnail sizing, for tight layouts. */
    compact?: boolean;
    /** Render as a single full-width column instead of a half-width card. */
    stacked?: boolean;
    /** Add a class to the card's root element. */
    class?: string;
  }

  let {
    url,
    kicker,
    title,
    imageUrl,
    imageAlt = '',
    time,
    linkTarget = '_self',
    compact = false,
    stacked = false,
    class: cls = '',
  }: Props = $props();
</script>

<div class="referral {cls}" class:stacked>
  <a
    href={url}
    target={linkTarget}
    rel={linkTarget === '_blank' ? 'noreferrer' : null}
  >
    <div class="referral-pack flex justify-around my-0 mx-auto">
      <div class="headline" class:xs={compact}>
        <div
          class="kicker m-0 body-caption leading-tighter"
          data-chromatic="ignore"
        >
          {kicker}
        </div>
        <div
          class="title m-0 body-caption leading-tighter"
          data-chromatic="ignore"
        >
          {title}
        </div>
        {#if time}
          <div
            class="publish-time body-caption leading-tighter"
            data-chromatic="ignore"
          >
            {getTime(new Date(time))}
          </div>
        {/if}
      </div>
      <div
        class="image-container block m-0 overflow-hidden relative"
        class:xs={compact}
      >
        <img
          class="block object-cover m-0 w-full"
          data-chromatic="ignore"
          src={imageUrl}
          alt={imageAlt}
        />
      </div>
    </div>
  </a>
</div>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  a {
    text-decoration: none;
  }

  .referral {
    display: block;
    width: calc(50% - 30px);
    max-width: 450px;
    @include mixins.fmy-1;

    &.stacked {
      width: 100%;
      .headline {
        width: calc(100% - 7rem);
      }
    }

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
      @include mixins.fpr-2;
      .kicker {
        @include mixins.text-xxs;
        font-family: Knowledge, sans-serif;
      }
      .title {
        @include mixins.fmt-1;
        @include mixins.font-medium;
        @include mixins.text-sm;
        @include mixins.text-primary;
        font-family: Knowledge, sans-serif;
      }
      .publish-time {
        @include mixins.text-xxs;
        font-family: Knowledge, sans-serif;
      }
    }
    .image-container {
      border-radius: 0.25rem;
      border: 1px solid mixins.$theme-colour-brand-rules;
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
</style>
