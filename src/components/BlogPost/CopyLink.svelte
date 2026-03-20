<script lang="ts">
  import Fa from 'svelte-fa';
  import { slugify } from '../../utils';
  import { getShortDate } from './utils';
  import { faLink } from '@fortawesome/free-solid-svg-icons';

  interface Props {
    /** The published date of the post. */
    publishedDate?: string;
    /** The heading of the post. */
    hed?: string;
    /** Base path prepended to the copied URL, e.g. "/graphics". */
    base: string;
    /** The ARIA label for the copy link button. */
    ariaLabel?: string;
    /** The message to display before copying the link. */
    copyMessageBefore?: string;
    /** The message to display after copying the link. */
    copyMessageAfter?: string;
  }

  let {
    publishedDate = '',
    hed = '',
    base = '',
    ariaLabel = 'Copy link to this post',
    copyMessageBefore = 'Copy link',
    copyMessageAfter = 'Copied',
  }: Props = $props();

  let hovering = $state(false);
  let clicked = $state(false);

  let publishDate = $derived(getShortDate(publishedDate));
</script>

<div class="link-container pl-0.5">
  <div class="mask"></div>
  <button
    class:clicked
    aria-label={ariaLabel}
    role="link"
    onclick={(e) => {
      e.preventDefault();
      clicked = true;
      navigator.clipboard.writeText(
        `${window.location.origin}${base}/${publishDate}/${slugify(hed)}/`
      );
      setTimeout(() => {
        clicked = false;
      }, 2000);
    }}
    onmouseenter={() => {
      hovering = true;
    }}
    onmouseleave={() => {
      hovering = false;
    }}
  >
    <Fa icon={faLink} />
  </button>

  {#if !clicked}
    <div class="message" class:active={hovering}>{copyMessageBefore}</div>
  {:else}
    <div class="message" class:active={clicked}>{copyMessageAfter}</div>
  {/if}
</div>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .link-container {
    display: inline-flex;
    justify-items: center;
    align-items: center;
    overflow-y: hidden;
    position: relative;

    .message {
      background-color: var(--theme-colour-text-primary);
      color: var(--theme-colour-background);
      @include mixins.text-xxs;
      font-weight: 500;
      @include mixins.fpl-3;
      @include mixins.fpr-2;
      @include mixins.leading-loose;
      display: inline-flex;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      transform: translateX(-100px);
      transition: all 0.15s ease;
      opacity: 0;
      &.active {
        transform: translateX(-10px);
        opacity: 1;
      }
    }
  }
  .mask {
    background-color: var(--theme-colour-background);
    display: inline-block;
    height: 30px;
    width: 20px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  button {
    z-index: 1;
    background-color: var(--theme-colour-background);
    border-radius: 50%;
    @include mixins.text-sm;
    aspect-ratio: 1;
    display: inline-flex;
    justify-items: center;
    align-items: center;
    border: 1px solid var(--theme-colour-background);
    color: var(--tr-light-grey);
    cursor: pointer;
    &:hover,
    &.clicked {
      color: var(--tr-dark-grey);
      border: 1px solid var(--tr-dark-grey);
    }
  }
</style>
