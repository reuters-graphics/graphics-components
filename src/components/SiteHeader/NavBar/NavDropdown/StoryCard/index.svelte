<script lang="ts">
  import { normalizeUrl } from '../../utils';
  import { getTime } from './time';

  let { story } = $props();

  let thumbnail = $derived(story.thumbnail);
</script>

<div class="story-card" data-chromatic="ignore">
  <a href={normalizeUrl(story.canonical_url)}>
    <div class="story-text" class:has-thumbnail={thumbnail}>
      <span>{story.title}</span>
      <time datetime={story.display_time}>{getTime(story.display_time)}</time>
    </div>
    {#if thumbnail && (thumbnail.resizer_url || thumbnail?.renditions?.square?.['120w'])}
      <div class="thumbnail">
        {#if thumbnail.resizer_url}
          <img
            src="{thumbnail.resizer_url}&width=120&quality=80"
            alt={thumbnail.alt_text}
          />
        {:else}
          <img
            src={thumbnail.renditions.square['120w']}
            alt={thumbnail.alt_text}
          />
        {/if}
      </div>
    {/if}
  </a>
</div>

<style lang="scss">
  @use '../../../../../scss/mixins' as *;

  .story-card a {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    color: var(--nav-primary, var(--tr-dark-grey));
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: none;
      .story-text span {
        text-decoration: underline;
      }
    }

    .story-text {
      margin-inline-end: 10px;
      width: 100%;
      &.has-thumbnail {
        width: calc(100% - 84px);
      }

      span {
        color: var(--nav-primary, var(--tr-dark-grey));
        font-size: 16px;
        font-weight: 500;
        @include font-sans;
        @media (min-width: 1300px) {
          font-size: 18px;
        }
      }

      time {
        @include font-sans;
        margin-block-start: 8px;
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
        margin: 0;
      }
    }
  }
</style>
