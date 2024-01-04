<script>
  import { normalizeUrl, normalizeUrlJp } from '../../utils';
  import { getTime, dayjs } from './time';
  import ja from 'dayjs/locale/ja';

  export let story;
  export let withSection = false;
  export let lang = 'en';
  if (lang === 'ja') {
    dayjs.locale(ja);
  }

  const normaliseUrl = lang === 'ja' ? normalizeUrlJp : normalizeUrl;
  const localeOptions = {
    default: {
      timeZone: false,
      formatTime: 'h:mm A z',
      formatDay: 'MMMM D, YYYY',
    },
    ja: {
      timeZone: 'JST',
      formatTime: 'Ah:mm z',
      formatDay: 'YYYY年M月D日',
    },
  };

  $: thumbnail = story.thumbnail;
</script>

<div class="story-card" lang="{lang}">
  <div class="story-text" class:has-thumbnail="{thumbnail}">
    {#if withSection && story.kicker}
      <a href="{normaliseUrl(story.kicker.path)}">
        <span class="label">{story.kicker.name}</span>
      </a>
    {/if}
    <a href="{normaliseUrl(story.canonical_url)}">{story.title}</a>
    {#if !withSection}
      <time datetime="{story.display_time}"
        >{getTime(
          story.display_time,
          localeOptions[lang] || localeOptions.default
        )}</time
      >
    {/if}
  </div>
  {#if thumbnail}
    <div class="thumbnail">
      <a href="{normaliseUrl(story.canonical_url)}">
        <img
          src="{thumbnail.renditions.square['120w']}"
          alt="{thumbnail.alt_text}"
        />
      </a>
    </div>
  {/if}
</div>

<style lang="scss">
  @import '../../../../../scss/mixins';

  .story-card {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    color: var(--nav-primary, var(--tr-dark-grey));
    a {
      text-decoration: none;
      color: var(--nav-primary, var(--tr-dark-grey));
      font-size: 16px;
      font-weight: 500;
      @include font-sans;
      @media (min-width: 1300px) {
        font-size: 18px;
      }

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }

    .story-text {
      margin-right: 10px;
      width: 100%;
      &.has-thumbnail {
        width: calc(100% - 84px);
      }

      span.label {
        font-size: 14px;
        line-height: 1.1;
        margin-bottom: 8px;
        display: block;
        font-weight: 400;
      }

      time {
        @include font-sans;
        margin-top: 8px;
        display: block;
        font-size: 12px;
        font-weight: 400;
        text-decoration: none !important;
      }
    }

    .thumbnail {
      width: 84px;
      height: 84px;
      flex: 0 0 84px;
      overflow: hidden;
      position: relative;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        margin: 0;
      }
      a {
        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          background: rgba(0, 0, 0, 0.2);
          transition: opacity 0.15s ease;
          opacity: 0;
        }
        &:hover,
        &:focus {
          &:after {
            opacity: 1;
          }
        }
      }
    }

    &[lang='ja'] {
      .story-text {
        a {
          font-weight: 600;
        }
      }
      time {
        font-size: 11px;
      }
    }
  }
</style>
