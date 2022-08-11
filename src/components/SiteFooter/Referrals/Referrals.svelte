<script>
  import { onMount } from 'svelte';
  import Link from './Link.svelte';

  export let referrals = [];

  $: verifiedReferrals = referrals
    .filter((r) => r.url && r.title && r.image)
    .slice(0, 4);

  let metadata;

  onMount(() => {
    if (verifiedReferrals.length === 4) {
      metadata = verifiedReferrals;
      return;
    }
    fetch(
      'https://graphics.thomsonreuters.com/data/reuters-graphics/homepage/graphics.json'
    )
      .then((resp) => resp.json())
      .then((d) => {
        const data = d
          .filter(({ canonical }) => {
            const pathname = window.location.pathname
              .replace(/\/index\.html$/, '')
              .replace(/\/$/, '');
            if (!pathname) return true;
            return !canonical.includes(pathname);
          })
          .slice(0, 4)
          .map(({ url, image, title, description }) => ({
            url,
            image,
            title,
            description,
          }));
        metadata = [...verifiedReferrals, ...data].slice(0, 4);
      });
  });
</script>

{#if metadata}
  <nav class="referral-rail row">
    {#each metadata as referral}
      <Link {...referral} />
    {/each}
  </nav>
{/if}

<style lang="scss">
  .row {
    margin-right: -10px;
    margin-left: -10px;
  }
</style>
