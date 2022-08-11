<script>
  export let rotate = false;
</script>

<svg
  class="arrow"
  class:rotated="{rotate}"
  focusable="false"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 11 7"
>
  <path
    d="M10.413.587a.71.71 0 0 0-1.027 0L5.5 4.474 1.613.587a.71.71 0 0 0-1.027 0 .709.709 0 0 0 0 1.027l4.4 4.4c.147.147.367.22.513.22a.79.79 0 0 0 .513-.22l4.4-4.4a.71.71 0 0 0 0-1.027h.001Z"
  ></path>
</svg>

<style lang="scss">
  @import './../scss/_colors.scss';
  svg {
    margin-left: 4px;
    width: 10px;
    fill: var(--nav-primary, $tr-dark-grey);
    transition: transform 0.15s ease;
    &.rotated {
      transform: rotate(180deg);
    }
  }
</style>
