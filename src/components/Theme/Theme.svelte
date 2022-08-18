<script context="module" lang="ts">
  const main = {
    colour: {
      background: '#ffffff',
      primary: '#333333',
    },
  };
  const dark = {
    colour: {
      background: '#333333',
      primary: '#ffffff',
    },
  };

  export const themes = {
    main,
    dark,
  };
</script>

<script lang="ts">
  export let styles: object = main;
  export let name: string = 'theme';

  import cssVariables from '../../actions/cssVariables';
  import flatten from './utils/flatten';
</script>

<div
  class="theme theme-{name}"
  style="display: contents;"
  use:cssVariables={flatten({ [name]: styles })}
>
  <!-- Clients can override the theme above by attaching custom properties to this element. -->
  <div
    class="theme-client-override theme-{name}"
    style="display: contents;"
  >
    <!-- Themed content -->
    <slot></slot>
  </div>
</div>