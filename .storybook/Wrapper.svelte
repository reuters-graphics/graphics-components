<script>
  import Article from '../src/components/Article/Article.svelte';
  import Theme from '../src/components/Theme/Theme.svelte';

  import 'prism-themes/themes/prism-nord.css';

  // `base` is supplied by the global decorator from a story's `theme`
  // parameter (defaulting to light), so an individual story can opt into the
  // dark theme without nesting a second Theme/Article inside this wrapper.
  export let base = 'light';
</script>

<Theme {base}>
  <Article>
    <slot />
  </Article>
</Theme>
