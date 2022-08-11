Add overlays with the `beforeOverlay` and `afterOverlay` slots and a caption to the `caption` slot, then style these elements to match your page design as below.

```svelte
<BeforeAfter
  beforeSrc="{`${assets}/images/before-after/myrne-before.jpg`}"
  beforeAlt="Satellite image of Russian base at Myrne taken on July 7, 2020."
  afterSrc="{`${assets}/images/before-after/myrne-after.jpg`}"
  afterAlt="Satellite image of Russian base at Myrne taken on Oct. 20, 2020."
>
  <div slot="beforeOverlay" class="overlay before">
    <h6>July 7, 2020</h6>
    <p>Initially, this site was far smaller.</p>
  </div>
  <div slot="afterOverlay" class="overlay after">
    <h6>Oct. 20, 2020</h6>
    <p>But then forces built up.</p>
  </div>
</BeforeAfter>

<style lang="scss">
  .overlay {
    color: white;
    padding: 15px;
    background: rgba(0, 0, 0, 0.2);
    h6, p {
      color: white;
      margin: 0;
    }
    &.after {
      text-align: right;
    }
  }
</style>
```
