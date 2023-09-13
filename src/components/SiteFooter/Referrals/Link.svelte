<script>
  import IntersectionObserver from './IntersectionObserver.svelte';
  export let url;
  export let image;
  export let title;
  export let description;
</script>

<div class="referral py-0 px-3" title="{description}">
  <a href="{url.replace('index.html', '')}">
    <IntersectionObserver let:intersecting top="{600}" once="{true}">
      {#if intersecting}
        <div
          data-chromatic="ignore"
          class="image"
          style="{`background-image: url(${image});`}"
        ></div>
      {:else}
        <div class="image"></div>
      {/if}
    </IntersectionObserver>
    <p class="body-caption font-bold" data-chromatic="ignore">{title}</p>
  </a>
</div>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
  @import '../../../scss/mixins';

  a {
    text-decoration: none;
  }

  .image {
    width: 100%;
    padding-bottom: 50%;
    background-size: cover;
    background-position: 50%;
  }

  .referral {
    div.image {
      @include fmb-1;
      border: 1px solid var(--nav-rules, #efefef);
      border-radius: 0.25rem;
    }

    a:hover {
      text-decoration: none;
      p {
        text-decoration: underline;
      }
    }

    p {
      color: var(--nav-primary, #666);
      text-transform: none;
      margin: 0;
    }

    width: 25%;
    // padding: 0 10px;

    @media (max-width: 768px) {
      width: 33.33333%;

      &:nth-child(4) {
        display: none;
      }
    }

    @media (max-width: 575px) {
      width: 50%;

      &:nth-child(3) {
        display: none;
      }
    }
  }
</style>
