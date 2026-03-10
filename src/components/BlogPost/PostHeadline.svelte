<script lang="ts">
  import { apdate } from 'journalize';
  import CopyLink from './CopyLink.svelte';
  import { slugify } from '../../utils';
  import Kinesis from '../KinesisLogo/KinesisLogo.svelte';
  import Block from '../Block/Block.svelte';
  import Byline from '../Byline/Byline.svelte';

  interface Props {
    /** Headline of the blog post */
    hed: string;
    /**
     * A sluggable headline of the blog post.
     *
     * **Important:** Do not change this headline after publishing the post. Changes will break
     * published links to the post.
     */
    sluggableHed: string;
    /** Base path prepended to the copied URL, e.g. "/graphics". */
    base: string;
    /** Array of author names, which will be slugified to create links to Reuters author pages */
    authors: string[];
    /** Publish time as a datetime string. */
    publishTime: string;
    /** Update time as a datetime string. */
    updateTime?: string;
    /** Add an id to target with custom CSS. */
    id?: string;
    /** Add extra classes to target with custom CSS. */
    cls?: string;
  }

  let {
    hed = 'Reuters Graphics blog post',
    sluggableHed = 'Reuters Graphics blog post',
    base = '',
    authors = [],
    publishTime = '',
    updateTime = '',
    id = '',
    cls = '',
  }: Props = $props();

  const isValidDate = (datetime: string) => {
    if (!datetime) return false;
    if (!Date.parse(datetime)) return false;
    return true;
  };

  const formatTime = (datetime: string) =>
    new Date(datetime).toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'short',
    });

  const areSameDay = (first: Date, second: Date) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();

  let hedMain = $derived(hed.split(' ').slice(0, -1).join(' '));
  let hedWidow = $derived(hed.split(' ').slice(-1).join(' '));
</script>

<Block {id} class="headline-container post-headline fmt-7 {cls}" width="normal">
  <header class="headline">
    <div class="kinesis">
      <Kinesis width="30px" colour="#fff" />
    </div>
    <div class="dateline-container">
      {#if isValidDate(publishTime)}
        <div class="published-time font-bold whitespace-nowrap inline-block">
          <time class="uppercase" datetime={publishTime}>
            {#if isValidDate(updateTime)}
              {apdate(new Date(publishTime))}
            {:else}
              {apdate(new Date(publishTime))}&nbsp;&nbsp;{formatTime(
                publishTime
              )}
            {/if}
          </time>
        </div>
      {/if}
      {#if isValidDate(publishTime) && isValidDate(updateTime)}
        <div class="updated-time font-bold whitespace-nowrap block">
          <span>Updated</span>
          <time class="uppercase" datetime={updateTime}>
            {#if areSameDay(new Date(publishTime), new Date(updateTime))}
              {formatTime(updateTime)}
            {:else}
              {apdate(new Date(updateTime))}&nbsp;&nbsp;{formatTime(updateTime)}
            {/if}
          </time>
        </div>
      {/if}
    </div>
    <div class="title">
      {#if hed}
        <h2>
          <a href="#{slugify(sluggableHed)}">
            {hedMain}
            <span
              >{hedWidow}
              <CopyLink
                hed={sluggableHed}
                publishedDate={publishTime}
                {base}
              /></span
            >
          </a>
        </h2>
      {/if}
    </div>
    <Byline {authors} />
  </header>
</Block>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .headline {
    position: relative;
    .kinesis {
      position: absolute;
      top: -12px;
      left: -50px;
      background-color: #d64000;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 860px) {
        display: none;
      }
    }
  }

  .dateline-container {
    @include mixins.body-caption;
    @include mixins.fmy-0;
    text-align: left;
    color: var(--theme-colour-accent);

    @media (min-width: mixins.$column-width-narrow) {
      .updated-time {
        display: inline-block;
        &:before {
          content: '·';
          margin: 0 5px 0 3px;
        }
      }
    }
  }

  h2 {
    @include mixins.fmy-1;
    @include mixins.font-black;

    a {
      color: inherit;
      text-decoration: none;
    }

    span {
      white-space: nowrap;
      display: inline-flex;
      align-items: baseline;
    }
  }
</style>
