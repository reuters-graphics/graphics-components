<script>
  export let ad;

  const handleClick = () => {
    console.log(`AdSlot clicked: ${ad.id}`);
  };

  const getCreativeType = () => {
    switch (ad.type) {
      case 'image':
        return 'Image';
      case 'text':
        return 'Text';
      default:
        return 'Unknown';
    }
  };
</script>

<div class="ad-slot" on:click="{handleClick}">
  <h2>{ad.title}</h2>
  <div class="ad-content">
    {#if ad.type === 'image'}
      <img src="{ad.imageUrl}" alt="{ad.title}" />
    {:else if ad.type === 'text'}
      <p>{ad.text}</p>
    {:else}
      <p>Unknown ad type</p>
    {/if}
  </div>
  <div class="ad-info">
    <p>Creative Type: {getCreativeType()}</p>
    <p>Advertiser: {ad.advertiser}</p>
  </div>
</div>
