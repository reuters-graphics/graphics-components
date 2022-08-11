Easily add a responsive Datawrapper embed on your page.

```svelte
<script>
  import { DatawrapperChart } from '@reuters-graphics/graphics-svelte-components';
</script>

<DatawrapperChart
  title='Global abortion access'
  ariaLabel='map'
  id='abortion-rights-map'
  src='https://graphics.reuters.com/USA-ABORTION/lgpdwggnwvo/media-embed.html'
 />
```

##### Getting the chart URL for `src`

Copy the source url for the Datawrapper chart in the `src` prop.
You can get this from the published url on Reuters Graphics.

- Publish the chart on Datawrapper.
- Go to the **Datawrapper charts** Teams channel, wait for the graphic to finish publishing.
- Inside **Embed code (for developers only)**, find and copy the url inside the `src` prop. (It ends in `media-embed.html`.)

**Note:** There is no need to update the url if you update the chart inside Datawrapper. Any changes will be automatically reflected.
