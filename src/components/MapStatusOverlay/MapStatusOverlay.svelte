<!--
  @component A centered loading or error message for a map or other visual stage.
-->
<script lang="ts">
  import LoadingLogo from '../LoadingLogo/LoadingLogo.svelte';

  interface Props {
    /** Show the loading mark or an error message. */
    status: 'loading' | 'error';
    /** Visible text describing the current state. */
    message: string;
  }

  let { status, message }: Props = $props();
</script>

<div
  class="map-status map-status--{status}"
  role={status === 'error' ? 'alert' : undefined}
>
  {#if status === 'loading'}
    <LoadingLogo {message} inline showMessage />
  {:else}
    {message}
  {/if}
</div>

<style lang="scss">
  .map-status {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);
    padding: 0.4rem 1rem;
    color: var(--theme-colour-text-secondary, #555);
    background: color-mix(
      in srgb,
      var(--theme-colour-background, #fff) 85%,
      transparent
    );
    font-family: var(--theme-font-family-note, Knowledge, Arial, sans-serif);
    font-size: 1.1rem;
    font-weight: 600;
    pointer-events: none;

    @media (max-width: 767px) {
      padding: 0.3rem 0.75rem;
      font-size: 0.85rem;
    }
  }

  .map-status--loading {
    width: max-content;
    max-width: calc(100% - 2rem);
    padding: 0.4rem 0.75rem;
    text-align: center;
  }

  .map-status--error {
    max-width: min(34ch, 90%);
    line-height: 1.35;
    text-align: center;
  }
</style>
