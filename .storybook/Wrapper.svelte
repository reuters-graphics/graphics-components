<script>
  import Article from '../src/components/Article/Article.svelte';
  import Theme from '../src/components/Theme/Theme.svelte';
</script>

<Theme>
  <Article>
    <slot />
  </Article>
</Theme>
