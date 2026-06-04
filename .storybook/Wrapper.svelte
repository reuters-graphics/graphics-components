<script>
  import Article from '../src/components/Article/Article.svelte';
  import Theme from '../src/components/Theme/Theme.svelte';

  import 'prism-themes/themes/prism-nord.css';
</script>

<div id="reuters-graphics-svelte-app">
  <Theme>
    <Article>
      <slot />
    </Article>
  </Theme>
</div>
