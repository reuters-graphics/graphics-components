<!-- @component `Theme` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-theming-theme--docs) -->
<script module lang="ts">
  import light from './themes/light.js';
  import dark from './themes/dark.js';
  /**
   * Pre-made themes you can import.
   */
  export const themes = { light, dark };
</script>

<script lang="ts">
  // Utils
  import flatten from './utils/flatten.js';
  import mergeThemes from './utils/merge.js';

  // Types
  import type { CustomThemeConfig, ThemeConfig } from './@types/component';
  import type { Snippet } from 'svelte';
  type Base = 'light' | 'dark';

  interface Props {
    /** Custom theme object. Can be a partial theme with just
     * what you want to change.
     */
    theme?: CustomThemeConfig | ThemeConfig;
    /**
     * Base theme is one of `light` or `dark` and will be merged
     * with your custom theme to fill in any values you don't
     * explicitly set.
     */
    base?: Base;
    /** Content wrapped inside `Theme` */
    children: Snippet;
  }

  let { theme = {}, base = 'light', children }: Props = $props();

  let mergedTheme = $derived(
    mergeThemes({}, themes[base] || themes.light, theme)
  );

  let cssVariables = $derived(
    Object.entries(flatten({ theme: mergedTheme }))
      .map(([key, value]) => `--${key}: ${value};`)
      .join(' ')
  );
</script>

<div class="theme" style={cssVariables} style:display="contents">
  <!-- Clients can override the theme above by attaching custom properties to this element. -->
  <div class="theme-client-override" style="display: contents;">
    <!-- Themed content -->
    {@render children()}
  </div>
</div>
