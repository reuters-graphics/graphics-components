<!--
  @component A slow-turning Kinesis mark with a descriptive loading message.

  [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-utilities-loadinglogo--docs)
-->
<script lang="ts">
  import KinesisLogo from '../KinesisLogo/KinesisLogo.svelte';

  interface Props {
    /** Describe the pending request, including when the message is hidden. */
    message: string;
    /** Use a compact 24px mark in the current line instead of a centered 32px block. */
    inline?: boolean;
    /** Show the message beside the mark. */
    showMessage?: boolean;
    /** Disable when a parent already announces this loading message. */
    announce?: boolean;
    /** Message colour. Defaults to the theme's secondary text colour. */
    colour?: string;
    /** Mark colour. Defaults to neutral grey. */
    markColour?: string;
  }

  let {
    message,
    inline = false,
    showMessage = false,
    announce = true,
    colour,
    markColour,
  }: Props = $props();
</script>

<span
  class="loading-logo"
  class:loading-logo--block={!inline}
  role={announce ? 'status' : undefined}
  aria-atomic={announce ? 'true' : undefined}
  style:color={colour}
>
  <span class="loading-logo__mark" aria-hidden="true">
    <KinesisLogo
      colour={markColour ??
        'var(--loading-logo-mark-color, var(--neutral-400, #a3a3a3))'}
      width="100%"
    />
  </span>
  <span class="loading-logo__message" class:sr-only={!showMessage}>
    {message}
  </span>
</span>

<style lang="scss">
  @use '../../scss/tokens/text/mixins/font-weight' as weight;
  @use '../../scss/tokens/accessibility/mixins/visibility' as visibility;

  .loading-logo {
    display: inline-flex;
    align-items: center;
    gap: 0.625rem;
    max-width: 100%;
    vertical-align: middle;
    color: var(--loading-logo-color, var(--theme-colour-text-secondary, #666));
    font-family: var(--theme-font-family-note, 'Knowledge', Arial, sans-serif);
    font-size: var(--theme-font-size-xs, 0.875rem);
    @include weight.font-regular;
    line-height: 1.4;
    letter-spacing: normal;
  }

  .loading-logo--block {
    display: flex;
    justify-content: center;
    padding: 0.75rem 1rem;
    text-align: center;
  }

  .loading-logo__mark {
    display: block;
    flex: 0 0 auto;
    width: 1.5rem;
    height: 1.5rem;
    animation: kinesis-turn 8s linear infinite;
  }

  .loading-logo--block .loading-logo__mark {
    width: 2rem;
    height: 2rem;
  }

  .loading-logo__message {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  .sr-only {
    @include visibility.visually-hidden;
  }

  @keyframes kinesis-turn {
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .loading-logo__mark {
      animation: none;
    }
  }
</style>
