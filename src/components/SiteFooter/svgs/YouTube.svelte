<script>
  export let width = 20;
</script>

<svg
  aria-hidden="true"
  focusable="false"
  viewBox="0 0 21 17"
  xmlns="http://www.w3.org/2000/svg"
  style="width: {width}px;"
  ><path
    d="M18.375 0H2.625A2.617 2.617 0 0 0 0 2.609V14.39A2.617 2.617 0 0 0 2.625 17h15.75A2.617 2.617 0 0 0 21 14.391V2.61A2.617 2.617 0 0 0 18.375 0Zm-10.5 13.044V4.348l7 4.348-7 4.348Z"
  ></path></svg
>

<style lang="scss">
  @import './../../SiteHeader/scss/_colors.scss';
  svg {
    fill: var(--nav-primary, $tr-dark-grey);
  }
</style>
