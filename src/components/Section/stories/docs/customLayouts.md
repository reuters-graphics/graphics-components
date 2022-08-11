Our article well is designed to handle basic page layout when you're not trying to think about it, but it's also made to get out of the way quickly when you need to do something custom.

If you need to get really radical, the easiest way is to create a `Section` with a `fluid` width -- which basically cancels out the article well dimensions -- and then code whatever you need from scratch or with another framework.

```svelte
<Section width="fluid">
  <div class="my-radical-container">
    <!-- Now, you have full control! -->
  </div>
</Section>
```

The demo below does exactly that to create an edge-to-edge grid with [bootstrap](https://getbootstrap.com/docs/5.2/layout/grid/).
