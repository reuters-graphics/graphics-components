Add a custom styled headline.

```svelte
<script>
  import { HeroHeadline } from '@reuters-graphics/graphics-components';
  import { assets } from '$app/paths'; // 👈 If using in the Graphics Kit...

  export let embedded = false;
</script>

<HeroHeadline
  embedded="{embedded}"
  class="custom-hed"
  authors="{[
    'Prasanta Kumar Dutta',
    'Dea Bankova',
    'Aditi Bhandari',
    'Anurag Rao',
  ]}"
  publishTime="{new Date('2023-05-11').toISOString()}"
  img="{`${assets}/images/myImage.jpg`}"
>
  <h1 slot="hed">
    <div class="body-note">A visual guide to</div>
    <div class="title text-6xl font-light tracking-widest">EUROVISION</div>
  </h1>
</HeroHeadline>

<style lang="scss">
  .custom-hed {
    h1 {
      .body-note {
        color: #ffffff;
      }
      .title {
        color: #ffffff;
        text-shadow: 1px 1px 8px #ff7c88;
        filter: drop-shadow(0px 0px 12px #ff7c88);
      }
    }
  }
</style>
```
