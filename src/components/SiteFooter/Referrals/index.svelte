<script>
  import Referrals from './Referrals.svelte';
  import IntersectionObserver from './IntersectionObserver.svelte';

  export let referrals = [];
</script>

<IntersectionObserver let:intersecting top="{2400}" once="{true}">
  {#if intersecting}
    <section class="referrals">
      <h2>
        <a href="https://graphics.reuters.com/">More from Reuters Graphics</a>
      </h2>
      {#if (typeof window !== 'undefined')}
        <Referrals referrals="{referrals}" />
      {/if}
    </section>
  {/if}
</IntersectionObserver>

<style lang="scss">
  @import '@reuters-graphics/style-main/scss/fonts/mixins';
  @import '../../SiteHeader/scss/_breakpoints.scss';
  @import '../../SiteHeader/scss/_grids.scss';

  section.referrals {
    margin: 0;
    max-width: 1400px;
    padding: 25px 0;
    @include spacing-single(padding-left padding-right);
    border-top: 1px solid var(--nav-rules, #999);

    h2 {
      font-size: 16px;
      font-weight: 500;
      margin: 0 0 10px;
      color: var(--nav-primary, #666);
      a {
        color: var(--nav-primary, #666);
      }
    }
  }
</style>
