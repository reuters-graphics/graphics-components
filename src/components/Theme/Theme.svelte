<script context="module" lang="ts">
  import light from './themes/light.js';
  import dark from './themes/dark.js';
  /**
   * Pre-made themes you can import.
   * @type {{ light, dark }}
   */
  export const themes = { light, dark };
</script>

<script lang="ts">
  import type { CustomTheme } from './@types/component';
  /** Custom theme object. Can be a partial theme with just
   * what you want to change.
   */
  export let theme: CustomTheme = {};

  type Base = 'light' | 'dark';
  /**
   * Base theme is one of `light` or `dark` and will be merged
   * with your custom theme to fill in any values you don't
   * explicitly set.
   */
  export let base: Base = 'light';

  import cssVariables from '../../actions/cssVariables';
  import flatten from './utils/flatten';
  import mergeThemes from './utils/merge';

  /** @type {Theme} */
  $: mergedTheme = mergeThemes({}, themes[base] || themes.light, theme);
</script>

<div
  class="theme"
  style="display: contents;"
  use:cssVariables="{flatten({ theme: mergedTheme })}"
>
  <!-- Clients can override the theme above by attaching custom properties to this element. -->
  <div class="theme-client-override" style="display: contents;">
    <!-- Themed content -->
    <slot />
  </div>
</div>
