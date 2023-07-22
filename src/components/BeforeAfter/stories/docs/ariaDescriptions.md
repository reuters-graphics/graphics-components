Use text elements in your overlays as [ARIA descriptions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) for your images by setting an ID on text elements within each overly with the `description` [slot prop](https://svelte.dev/tutorial/slot-props).

> **💡 TIP:** You must always use the `beforeAlt` / `afterAlt` props to label your image for visually impaired readers, but you can use these descriptions to provide more information or context that the reader might also need.

```svelte
<BeforeAfter
  beforeSrc="{`${assets}/images/before-after/myrne-before.jpg`}"
  beforeAlt="Satellite image of Russian base at Myrne taken on July 7, 2020."
  afterSrc="{`${assets}/images/before-after/myrne-after.jpg`}"
  afterAlt="Satellite image of Russian base at Myrne taken on Oct. 20, 2020."
>
  <!-- 👇 Define the prop on each slot... -->
  <div let:description="{id}" slot="beforeOverlay">
    <p id="{id}">
      On July 7, 2020, the base contained only a few transport vehicles.
    </p>
  </div>
  <div let:description="{id}" slot="afterOverlay">
    <!-- 👇 id can also be used on an element containing multiple text elements -->
    <div id="{id}">
      <p>But by October, tanks and artillery could be seen.</p>
      <p>
        In total, over 50 pieces of heavy machinery and 200 personnel are now
        based here.
      </p>
    </div>
  </div>
</BeforeAfter>
```
