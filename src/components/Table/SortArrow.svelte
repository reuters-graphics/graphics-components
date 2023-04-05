<script lang="ts">
  /**
   * The direction of the sort. By default it's ascending.
   * @type {SortDirection}
   */
  type SortDirection = 'ascending' | 'descending';
  export let sortDirection: SortDirection = 'ascending';

  /**
   * Whether or not this arrow is currently sorting. It is false by default.
   * @type {boolean}
   */
  export let active: boolean = false;
</script>

<svg
  width="15"
  height="21"
  viewBox="0 0 15 21"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="avoid-clicks"
>
  <path
    class:active="{sortDirection === 'descending' && active}"
    d="M6.76474 20.2244L0.236082 13.4649C-0.0786943 13.139 -0.0786943 12.6104 0.236082 12.2845C0.550521 11.959 1.19794 11.96 1.51305 12.2845L7.33483 12.2845L13 12.2845C13.43 11.8545 14.1195 11.9593 14.4339 12.2849C14.7487 12.6107 14.7487 13.1394 14.4339 13.4653L7.90492 20.2244C7.59015 20.5503 7.07952 20.5503 6.76474 20.2244Z"
  ></path>
  <path
    class:active="{sortDirection === 'ascending' && active}"
    d="M7.90518 0.244414L14.4338 7.00385C14.7486 7.32973 14.7486 7.85838 14.4338 8.18427C14.1194 8.50981 13.472 8.50876 13.1569 8.18427L7.33509 8.18427L1.66992 8.18427C1.23992 8.61427 0.550443 8.50946 0.236003 8.18392C-0.0787725 7.85803 -0.0787725 7.32938 0.236003 7.0035L6.765 0.244414C7.07978 -0.0814713 7.5904 -0.0814713 7.90518 0.244414Z"
  ></path>
</svg>

<style lang="scss">
  @import '../../scss/colours/thematic/tr';
  .avoid-clicks {
    pointer-events: none;
  }
  path {
    fill: var(--theme-colour-brand-rules, $tr-muted-grey);
    &.active {
      fill: var(--theme-colour-text-primary, $tr-dark-grey);
    }
  }
</style>
