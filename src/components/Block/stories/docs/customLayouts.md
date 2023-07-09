Our article well is designed to provide a basic responsive layout for you, but it's also made to get out of the way quickly when you need to do something custom.

If you need to get really radical, the easiest way is to create a `Block` with a `fluid` width -- which basically cancels out the article well dimensions -- and then code whatever you need from scratch or with another framework.

```html
<Block width="fluid">
  <div class="my-radical-container">
    <!-- Now, you have full control! -->
  </div>
</Block>
```

The demo below does exactly that to create an edge-to-edge grid with [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).
