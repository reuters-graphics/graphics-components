<!--
@component
Icons

Renders one of the bundled football PNG icons by name. Assets are co-located
in `./assets/` and bundled via a Vite asset glob (see `./iconNames.ts`) — no
static-dir or `getPath` coupling. The `name` prop is restricted at compile
time to the icons actually present on disk.

```svelte
<Icon name="whistle" width="24px" label="Kick-off" />
```
-->

<script lang="ts">
  import { isIconName, type IconName, ICON_URLS } from './iconNames';

  interface Props {
    /** Icon name — restricted to the PNGs in `./assets/`. */
    name?: IconName;
    /** CSS length, e.g. '300px', '2rem', '100%'. */
    width?: string;
    /** CSS length, e.g. '300px', '2rem', '100%'. */
    height?: string;
    /** Class applied to the rendered <img>. */
    class?: string;
    /** When true, load eagerly with high priority. */
    eager?: boolean;
    /** Accessible label. Omit to treat the icon as decorative. */
    label?: string;
  }

  let {
    name = 'football',
    width = '300px',
    height = '300px',
    class: className = '',
    eager = false,
    label = '',
  }: Props = $props();

  const FALLBACK_NAME: IconName = 'football';
  const fallbackUrl = ICON_URLS[FALLBACK_NAME];

  // Runtime guard for untyped JS callers passing an unknown name.
  let safeName = $derived(isIconName(name) ? name : FALLBACK_NAME);
  let imgUrl = $derived(ICON_URLS[safeName] ?? fallbackUrl);

  const handleError = (event: Event) => {
    const img = event.currentTarget as HTMLImageElement;
    if (img.src !== fallbackUrl) img.src = fallbackUrl;
  };
</script>

<img
  src={imgUrl}
  alt={label}
  aria-hidden={label ? undefined : true}
  draggable="false"
  loading={eager ? 'eager' : 'lazy'}
  decoding="async"
  fetchpriority={eager ? 'high' : 'auto'}
  class={className}
  style:width
  style:height
  onerror={handleError}
/>
