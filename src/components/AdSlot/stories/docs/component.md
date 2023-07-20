Display a FreeStar Ad Slot

Note: You must use this domain to access the story book:
<http://localhost.arcpublishing.com:3000>

This domain has been whitelisted on the Ad server. To setup the domain please add the following line to `/etc/hosts`:

```
127.0.0.1 localhost localhost.arcpublishing.com
```

```svelte
<script>
  import { AdSlot, AdScripts } from '@reuters-graphics/graphics-components';
</script>

<!-- Include only ONCE per page -->
<AdScripts />

<AdSlot
  placementName="reuters_desktop_native"
  slotId="reuters_desktop_native"
/>

<AdSlot
  placementName="reuters_desktop_native"
  slotId="reuters_desktop_native"
/>
```
