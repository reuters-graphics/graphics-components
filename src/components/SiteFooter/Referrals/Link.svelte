<script>
  import IntersectionObserver from './IntersectionObserver.svelte';
  export let url;
  export let image;
  export let title;
  export let description;
</script>

<div class="referral" title="{description}">
  <a href="{url.replace('index.html', '')}">
    <IntersectionObserver let:intersecting top="{600}" once="{true}">
      {#if intersecting}
        <div class="image" style="{`background-image: url(${image});`}"></div>
      {:else}
        <div class="image"></div>
      {/if}
    </IntersectionObserver>
    <p>{title}</p>
  </a>
</div>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
  @import '../../../scss/bootstrap/imports';
  @import '@reuters-graphics/style-main/scss/fonts/mixins';

  .image {
    width: 100%;
    padding-bottom: 50%;
    background-size: cover;
    background-position: 50%;
  }

  .referral {
    div.image {
      margin-bottom: 5px;
      border: 1px solid var(--nav-rules, #efefef);
      border-radius: 8px;
    }

    a:hover {
      text-decoration: none;
      p {
        text-decoration: underline;
      }
    }

    p {
      @include font-display;

      color: var(--nav-primary, #666);
      font-size: 0.9rem;
      line-height: 1.2rem;
      text-transform: none;
      margin: 0;
      font-weight: 400;
    }

    width: 25%;
    padding: 0 10px;

    @include media-breakpoint-down(sm) {
      width: 33.33333%;

      &:nth-child(4) {
        display: none;
      }
    }

    @include media-breakpoint-down(xs) {
      width: 50%;

      &:nth-child(3) {
        display: none;
      }
    }
  }
</style>
