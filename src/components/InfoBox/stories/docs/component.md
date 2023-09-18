InfoBox is used to provide additional information that needs to be visually set aside from the main content flow. e.g. Methodology, Detailed notes about data, Extra context as text stories.

Use the slots to customize the content as needed, e.g. adding icons and thumbnail images etc.

```svelte
<script>
  import { InfoBox } from '@reuters-graphics/graphics-components';
</script>

<InfoBox
  title="About this data"
  text="{'Reuters is collecting daily COVID-19 infections and deaths data for 240 countries and territories around the world, updated regularly throughout each day. \n\n Every country reports those figures a little differently and, inevitably, misses undiagnosed infections and deaths. With this project we are focusing on the trends within countries as they try to contain the virus’ spread, whether they are approaching or past peak infection rates, or if they are seeing a resurgence of infections or deaths.'}"
  notes="{'[Read more about our methodology](https://www.reuters.com/world-coronavirus-tracker-and-maps/en/methodology/)'}"
/>
```
