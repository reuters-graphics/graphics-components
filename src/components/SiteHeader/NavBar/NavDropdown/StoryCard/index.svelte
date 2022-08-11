<script>
  import { normalizeUrl } from '../../utils';
  import { getTime } from './time';

  export let story;
  export let withSection = false;

  $: thumbnail = story.thumbnail;
</script>

<div class="story-card">
  <a href="{normalizeUrl(story.canonical_url)}">
    <div class="story-text" class:has-thumbnail="{thumbnail}">
      {#if withSection}
        <a href="{normalizeUrl(story.primary_section.id)}">
          <span class="label">{story.primary_section.name}</span>
        </a>
      {/if}
      <span>{story.title}</span>
      {#if !withSection}
        <time datetime="{story.display_time}"
          >{getTime(story.display_time)}</time
        >
      {/if}
    </div>
    {#if thumbnail}
      <div class="thumbnail">
        <img
          src="{thumbnail.renditions.square['120w']}"
          alt="{thumbnail.alt_text}"
        />
      </div>
    {/if}
  </a>
</div>

<style lang="scss">
  @import '../../../scss/_colors.scss';
  @import '@reuters-graphics/style-main/scss/fonts/mixins';

  .story-card a {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    color: var(--nav-primary, $tr-dark-grey);

    &:hover,
    &:focus {
      text-decoration: none;
      .story-text span {
        text-decoration: underline;
        &.label {
          text-decoration: none;
        }
      }
    }

    .story-text {
      margin-right: 10px;
      width: 100%;
      &.has-thumbnail {
        width: calc(100% - 84px);
      }

      span {
        color: var(--nav-primary, $tr-dark-grey);
        font-size: 16px;
        font-weight: 500;
        @include font-display;
        @media (min-width: 1300px) {
          font-size: 18px;
        }
      }

      span.label {
        font-size: 14px;
        line-height: 1.1;
        margin-bottom: 8px;
        display: block;
        font-weight: 200;
      }

      time {
        @include font-display;
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
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #ddd;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
