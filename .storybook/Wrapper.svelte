<script>
  import Article from '../src/components/Article/Article.svelte';
  import Theme from '../src/components/Theme/Theme.svelte';

  import 'prism-themes/themes/prism-nord.css';
</script>

<Theme>
  <Article>
    <slot />
  </Article>
</Theme>
