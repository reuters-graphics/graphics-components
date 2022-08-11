Pass up to four custom referrals to the `referrals` prop.

```svelte
<script>
  import { SiteFooter } from '@reuters-graphics/graphics-svelte-components';
  
  const customReferrals = [
    {
      url: 'https://graphics.reuters.com/world-coronavirus-tracker-and-maps/',
      title: 'COVID-19: the latest global statistics, charts and maps',
      description: 'Tracking the global coronavirus outbreak, updated daily',
      image:
        'https://graphics.thomsonreuters.com/cdn/2020/covid-global-tracker/share-cards/global/en/share.png',
    },
    {
      url: 'https://graphics.reuters.com/world-coronavirus-tracker-and-maps/regions/europe',
      title: 'Coronavirus in Europe: the latest counts, charts and maps',
      description: 'Tracking the global coronavirus outbreak, updated daily',
      image:
        'https://graphics.thomsonreuters.com/cdn/2020/covid-global-tracker/share-cards/regions/en/europe.png',
    },
  ];
</script>

<SiteFooter referrals="{customReferrals}" />
```
