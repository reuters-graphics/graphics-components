<script>
  import Referrals from './Referrals.svelte';
  import IntersectionObserver from './IntersectionObserver.svelte';

  export let referrals = [];
</script>

<IntersectionObserver let:intersecting top="{2400}" once="{true}">
  {#if intersecting}
    <section class="referrals px-0 py-5">
      <h2 class="fmt-0 text-base font-medium">
        <a href="https://graphics.reuters.com/">More from Reuters Graphics</a>
      </h2>
      {#if typeof window !== 'undefined'}
        <Referrals {referrals} />
      {/if}
    </section>
  {/if}
</IntersectionObserver>

<style lang="scss">
  @import '../../SiteHeader/scss/_breakpoints.scss';
  @import '../../SiteHeader/scss/_grids.scss';

  section.referrals {
    margin: 0;
    max-width: 1400px;
    @include spacing-single(padding-left padding-right);
    border-top: 1px solid var(--nav-rules, #999);

    h2 {
      color: var(--nav-primary, #666);
      a {
        color: var(--nav-primary, #666);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
