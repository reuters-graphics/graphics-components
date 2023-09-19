Use text elements in your overlays as [ARIA descriptions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) for your images by setting an ID on text elements within each overlay with the `description` [slot prop](https://svelte.dev/tutorial/slot-props).

> **💡 TIP:** You must always use the `beforeAlt` / `afterAlt` props to label your image for visually impaired readers, but you can use these descriptions to provide more information or context that the reader might also need.

```svelte
  <BeforeAfter
    beforeSrc="{beforeImg}"
    beforeAlt="Satellite image of Russian base at Myrne taken on July 7, 2020."
    afterSrc="{afterImg}"
    afterAlt="Satellite image of Russian base at Myrne taken on Oct. 20, 2020."
  >
    <div slot="beforeOverlay" class="overlay p-3 before">
      <p class="h4 font-bold">July 7, 2020</p>
      <p class="body-note">Initially, this site was far smaller.</p>
    </div>
    <div slot="afterOverlay" class="overlay p-3 after">
      <p class="h4 font-bold">Oct. 20, 2020</p>
      <p class="body-note">But then forces built up.</p>
    </div>
    <p slot="caption">Photos by MAXAR Technologies, 2021.</p>
  </BeforeAfter>

  <style lang="scss">
    .overlay {
      background: rgba(0, 0, 0, 0.45);
      max-width: 350px;
      &.after {
        text-align: right;
      }
      p {
        color: #ffffff;
      }
    }
  </style>
</BeforeAfter>
```
