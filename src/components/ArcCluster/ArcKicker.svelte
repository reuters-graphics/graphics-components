<!-- @component The small label above an ArcHeader headline, gaining Reuters.com's chevron when linked — a sub-part of ArcHeader. -->
<script lang="ts">
  interface Props {
    /** Small label above the headline, e.g. a section name. */
    kicker: string;
    /** Optional link for the kicker. */
    href?: string;
  }

  let { kicker, href }: Props = $props();
</script>

{#if href}
  <a class="arc-kicker" {href} target="_blank" rel="noopener noreferrer"
    >{kicker}
    <svg
      class="chevron"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="9"
      fill="currentColor"
      viewBox="0 0 15 9"
      aria-hidden="true"
      ><path
        d="M14.093.337c-.411-.45-1.028-.45-1.44 0L7.2 6.3 1.749.337c-.411-.45-1.028-.45-1.44 0a1.16 1.16 0 0 0 0 1.576l6.171 6.75c.206.225.515.337.72.337.205 0 .515-.112.72-.338l6.172-6.75a1.16 1.16 0 0 0 0-1.575h.001Z"
      /></svg
    ></a
  >
{:else}
  <span class="arc-kicker">{kicker}</span>
{/if}

<style lang="scss">
  span.arc-kicker,
  a.arc-kicker {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: rgb(64, 64, 64);
    text-decoration: none;
  }

  a.arc-kicker:hover {
    text-decoration: underline;
  }

  a.arc-kicker .chevron {
    width: 0.6em;
    height: 0.6em;
    transform: rotate(-90deg);
    vertical-align: baseline;
    margin-left: 2px;
  }
</style>
