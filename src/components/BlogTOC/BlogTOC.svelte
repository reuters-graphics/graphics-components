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
    label = 'Jump to article',
    maxHeight = 300,
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
      .reduce(
        (acc, post) => {
          const d = new Date(post.publishTime);
          const dateKey = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
          const existing = acc.find((entry) => entry.dateKey === dateKey);
          const event = {
            title: post.title,
            titleLink: `${base}/#${slugify(post.slugTitle)}`,
          };
          if (existing) {
            existing.events.push(event);
          } else {
            acc.push({
              dateKey,
              date: `${apmonth(d)} ${d.getDate()}`,
              events: [event],
            });
          }
          return acc;
        },
        [] as {
          dateKey: string;
          date: string;
          events: { title: string; titleLink: string }[];
        }[]
      )
      .map(({ dateKey: _dateKey, ...rest }) => rest)
  );
</script>

{#if contents.length > 1}
  <Block width="fluid" class="mt-4 mb-0">
    <div class="toc-gutter">
      <div class="table-of-contents" style="--mh: {maxHeight}px;">
        <div class="flex w-full">
          <button
            onclick={() => {
              showContents = !showContents;
              scrollPos = 0;
            }}
          >
            <div class="icon" class:expanded={showContents}>
              <Fa icon={faCaretDown} size="lg" />
            </div>
            <div class="label text-xs leading-loose tracking-wide py-0.5">
              {label}
            </div>
          </button>
        </div>
        <Block
          width="normal"
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
    </div>
  </Block>
{/if}

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .toc-gutter {
    // background-color: #fafafa;
    // border-top: 1px solid #dedede;
    // border-bottom: 1px solid #dedede;
    padding: 5px 0;
    margin-bottom: -40px;
    @media (max-width: 860px) {
      margin-bottom: -45px;
    }
  }

  .table-of-contents {
    overflow: hidden;
    max-width: calc(var(--normal-column-width) + 95px);
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 860px) {
      max-width: calc(var(--normal-column-width) + 15px);
    }
  }
  .content-container {
    max-height: var(--mh);
    overflow-y: auto;
    scroll-snap-type: y mandatory;
  }

  .scroll-icon {
    position: absolute;
    margin-left: -4px;
    color: var(--theme-colour-text-secondary);
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
    padding: 0 3px 0 0;
    color: var(--theme-colour-accent);
    @include mixins.text-sm;
    align-items: center;
    cursor: pointer;
    border: 1px solid #fff;
    border-radius: 50px;
    &:hover {
      border: 1px solid #dedede;
      background-color: #efefef;
    }
    @media (max-width: 860px) {
      border: 1px solid #dedede;
      margin-left: 5px;
    }

    div.icon {
      z-index: 1;
      @include mixins.text-sm;
      @include mixins.leading-loose;
      width: 24px;
      height: 24px;
      margin-left: 6px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: var(--theme-colour-text-secondary);
      border-radius: 50%;
      transition: transform 0.3s ease;

      &.expanded {
        transform: rotate(180deg);
      }
    }
    div.label {
      color: var(--theme-colour-text-secondary);
      display: inline-flex;
      font-weight: 500;
      @include mixins.fpl-4;
      @include mixins.fpr-2;
      margin-left: -15px;
      position: relative;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      font-style: italic;

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
        // background-color: var(--theme-colour-accent);
      }
    }
  }
</style>
