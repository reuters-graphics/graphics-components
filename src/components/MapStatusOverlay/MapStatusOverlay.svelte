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
  @use '../../scss/tokens/spacers/mixins/fluid-padding' as padding;
  @use '../../scss/tokens/text/mixins/main' as text;

  .map-status {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);
    @include padding.fpy-1;
    @include padding.fpx-3;
    color: var(--theme-colour-text-secondary, #555);
    background: color-mix(
      in srgb,
      var(--theme-colour-background, #fff) 85%,
      transparent
    );
    @include text.font-note;
    @include text.text-base;
    @include text.font-semibold;
    pointer-events: none;

    @media (max-width: 767px) {
      @include text.text-sm;
    }
  }

  .map-status--loading {
    width: max-content;
    max-width: calc(100% - 2rem);
    @include padding.fpx-2;
    text-align: center;
  }

  .map-status--error {
    max-width: min(34ch, 90%);
    line-height: 1.35;
    text-align: center;
    @include text.text-sm;
    @include text.font-regular;
  }
</style>
