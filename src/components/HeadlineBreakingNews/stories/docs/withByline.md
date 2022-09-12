Add a byline and dateline with `byline` and `dateline` named slots.
If you don't want to display 'Global Graphics' with a link to graphics.reuters.com at the top, you can
replace with a section title using the `section` prop and leaving the `sectionUrl` blank.

```svelte
<script>
  import { HeadlineBreakingNews } from '@reuters-graphics/graphics-components';
</script>

<HeadlineBreakingNews
  hed="{'Reuters Graphics Interactive'}"
  section="{'World News'}"
  sectionUrl=""
>
  <!-- Use named slots to add a byline... -->
  <span slot="byline">By <strong>Peppa Pig</strong></span>
  <!-- ...and a dateline. -->
  <span slot="dateline">Published Jan. 1, 2020</span>
</HeadlineBreakingNews>
```
