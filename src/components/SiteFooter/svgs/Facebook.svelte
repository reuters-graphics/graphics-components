<script lang="ts">
  interface Props {
    width?: number;
  }

  let { width = 20 }: Props = $props();
</script>

<svg
  aria-hidden="true"
  focusable="false"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 16 16"
  style="width: {width}px;"
  ><path
    d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5H8V9H6V7h2V6c0-1.653 1.347-3 3-3h2v2h-2c-.55 0-1 .45-1 1v1h3l-.5 2H10v7h4.5c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5Z"
  ></path></svg
>

<style lang="scss">
  @use './../../SiteHeader/scss/_colors.scss' as *;
  svg {
    fill: var(--nav-primary, var(--tr-dark-grey));
  }
</style>
