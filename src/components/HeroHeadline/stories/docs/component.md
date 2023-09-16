Reuters Graphics headline with a Hero media

```svelte
<script>
  import { HeroHeadline } from '@reuters-graphics/graphics-components';
  import { assets } from '$app/paths'; // 👈 If using in the Graphics Kit...

  export let embedded = false;
</script>

<HeroHeadline
  embedded="{embedded}"
  img="{`${assets}/images/myImage.jpg`}"
  hed="{'Reuters Graphics Interactive'}"
  dek="{'The beginning of a beautiful page'}"
  section="{'World News'}"
  authors="{['Simon Scarr', 'Vijdan Mohammad Kawoosa']}"
  publishTime="{new Date('2022-03-04').toISOString()}"
/>
```
