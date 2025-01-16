<script lang="ts">
  interface Props {
    width?: number;
  }

  let { width = 20 }: Props = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 30 30"
  aria-labelledby="TwitterIconId"
  role="presentation"
  aria-hidden="true"
  focusable="false"
  style="width: {width}px;"
  ><title id="TwitterIconId">X</title><path
    d="M17.923 14.387 25.569 5.5h-1.812l-6.64 7.717L11.817 5.5H5.7l8.018 11.67L5.7 26.49h1.812l7.01-8.15 5.6 8.15h6.116l-8.316-12.102Zm-2.482 2.885-.812-1.162-6.464-9.246h2.783l5.216 7.462.813 1.162 6.78 9.7h-2.782l-5.534-7.915Z"
  ></path></svg
>

<style lang="scss">
  @import './../../SiteHeader/scss/_colors.scss';
  svg {
    fill: var(--nav-primary, var(--tr-dark-grey));
  }
</style>
