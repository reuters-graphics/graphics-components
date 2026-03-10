<script lang="ts">
  import Block from '../Block/Block.svelte';
  import TOCList from './TOCList.svelte';
  import { apmonth } from 'journalize';
  import { slugify } from '../../utils';
  import { slide } from 'svelte/transition';
  import Fa from 'svelte-fa';
  import {
    faCaretDown,
    faAngleDoubleUp,
    faAngleDoubleDown,
  } from '@fortawesome/free-solid-svg-icons';

  interface Post {
    title: string;
    slugTitle: string;
    publishTime: string;
  }

  interface Props {
    posts: Post[];
    /** Base path prepended to post links, e.g. "/graphics". */
    base: string;
    /** The label for the table of contents toggle button. */
    label?: string;
    /** The maximum height of the table of contents list in pixels. */
    maxHeight?: number;
  }

  let {
    posts,
    base = '',
    label = 'All posts',
    maxHeight = 600,
  }: Props = $props();

  let showContents = $state(false);
  let scrollPos = $state(0);
  let listHeight = $state(0);

  const contents = $derived(
    [...posts]
      .sort(
        (a, b) =>
          new Date(a.publishTime).getTime() - new Date(b.publishTime).getTime()
      )
      .map((post) => ({
        date: `${apmonth(new Date(post.publishTime))} ${new Date(post.publishTime).getDate()}`,
        events: [
          {
            title: post.title,
            titleLink: `${base}/#${slugify(post.slugTitle)}`,
          },
        ],
      }))
  );
</script>

{#if contents.length > 1}
  <Block width="normal" class="my-0 relative">
    <div class="table-of-contents" style="--mh: {maxHeight}px;">
      <div class="flex w-full">
        <button
          onclick={() => {
            showContents = !showContents;
            scrollPos = 0;
          }}
          ><div class="icon" class:expanded={showContents}>
            <Fa icon={faCaretDown} size="lg" />
          </div>
          <div
            class="label text-xs uppercase leading-loose tracking-wide py-0.5"
          >
            {label}
          </div></button
        >
      </div>
      <Block
        width="narrow"
        class="my-0 ml-2 relative {showContents ? 'fpb-6' : ''}"
      >
        <div>
          {#if showContents}
            <div
              class="content-container fmt-3"
              transition:slide={{ axis: 'y', duration: 350 }}
              onscroll={(e) => {
                scrollPos = e.currentTarget.scrollTop;
              }}
            >
              <TOCList dates={contents} bind:listHeight />

              {#if scrollPos > 10 && listHeight > maxHeight}
                <div class="scroll-icon up">
                  <Fa icon={faAngleDoubleUp} />
                </div>
              {/if}

              {#if listHeight > maxHeight && scrollPos < 0.95 * (listHeight - maxHeight)}
                <div class="scroll-icon down">
                  <Fa icon={faAngleDoubleDown} />
                </div>
              {/if}
            </div>
          {/if}
        </div></Block
      >
    </div>
  </Block>
{/if}

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .table-of-contents {
    overflow: hidden;
    margin-bottom: calc(-2 * clamp(0.88rem, 0.83rem + 0.21vw, 1rem));
  }
  .content-container {
    max-height: var(--mh);
    overflow-y: auto;
    scroll-snap-type: y mandatory;
  }

  .scroll-icon {
    position: absolute;
    margin-left: -4px;
    color: var(--theme-colour-accent);
    background-color: var(--theme-colour-background);
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.up {
      top: 0px;
      animation: fade_scroll_up 1.5s ease-in-out infinite;
    }

    &.down {
      bottom: 30px;
      animation: fade_scroll_down 1.5s ease-in-out infinite;
    }
  }
  @keyframes fade_scroll_up {
    0% {
      transform: translate(0, 5px);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(0, -10px);
      opacity: 0;
    }
  }
  @keyframes fade_scroll_down {
    0% {
      transform: translate(0, -10px);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(0, 5px);
      opacity: 0;
    }
  }

  button {
    border: 0;
    background-color: transparent;
    display: inline-flex;
    font-family: var(--theme-font-family-hed);
    font-weight: normal;
    padding: 0;
    color: var(--theme-colour-accent);
    @include mixins.text-sm;
    align-items: center;
    cursor: pointer;

    div.icon {
      z-index: 1;
      @include mixins.text-sm;
      @include mixins.leading-loose;
      width: 32px;
      height: 32px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background: var(--theme-colour-accent);
      color: white;
      border-radius: 50%;
      transition: transform 0.3s ease;

      &.expanded {
        transform: rotate(180deg);
      }
    }
    div.label {
      color: var(--theme-colour-accent);
      display: inline-flex;
      font-weight: 500;
      @include mixins.fpl-4;
      @include mixins.fpr-2;
      margin-left: -15px;
      position: relative;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.2;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        background-color: var(--theme-colour-accent);
      }
    }
  }
</style>
