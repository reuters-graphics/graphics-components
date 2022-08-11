Customise colours by passing an object to the `theme` prop. You can customise any or all of the following default properties:

```javascript
// Customisable colours
{
  background: '#fff',
  primary: '#404040',
  accent: '#fa6400',
  rules: '#d0d0d0',
  shadow: '0 1px 4px 2px rgb(64 64 64 / 8%)',
}
```

The component also exports some preset themes you can use or customise:

```svelte
<script>
  import { SiteFooter, SiteFooterThemes } from '@reuters-graphics/graphics-svelte-components';
</script>

<!-- Use a preset theme. -->
<SiteFooter theme={SiteFooterThemes.dark} />

<!-- Customise a couple colours in a theme. -->
<SiteFooter theme={{ ...SiteFooterThemes.default, background: '#e0d3b8', rules: '#aaa' }} />
```
