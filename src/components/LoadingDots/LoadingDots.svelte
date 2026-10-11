<!--
  @component Three gently lifting periods for compact loading states.

  [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-utilities-loadingdots--docs)
-->
<script lang="ts">
  interface Props {
    /** Describe the pending request for screen readers. */
    message: string;
    /** Disable when a parent already announces or labels the pending request. */
    announce?: boolean;
    /** Dot colour. Inherits the surrounding text colour by default. */
    colour?: string;
  }

  let { message, announce = true, colour }: Props = $props();
</script>

<span
  class="loading-dots"
  role={announce ? 'status' : undefined}
  aria-atomic={announce ? 'true' : undefined}
  style:color={colour}
>
  <span class="loading-dots__marks" aria-hidden="true">
    <span>.</span><span>.</span><span>.</span>
  </span>
  <span class="sr-only">{message}</span>
</span>

<style lang="scss">
  @use '../../scss/tokens/text/mixins/font-weight' as weight;
  @use '../../scss/tokens/accessibility/mixins/visibility' as visibility;

  .loading-dots {
    display: inline-flex;
    vertical-align: middle;
  }

  .loading-dots__marks {
    display: inline-flex;
    gap: 0.12em;
    font-size: var(--theme-font-size-base, 1.125rem);
    @include weight.font-semibold;
  }

  .loading-dots__marks span {
    display: inline-block;
    animation: dot-lift 1.8s ease-in-out infinite;
  }

  .loading-dots__marks span:nth-child(2) {
    animation-delay: 0.18s;
  }

  .loading-dots__marks span:nth-child(3) {
    animation-delay: 0.36s;
  }

  .sr-only {
    @include visibility.visually-hidden;
  }

  @keyframes dot-lift {
    0%,
    40%,
    100% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-2px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .loading-dots__marks span {
      animation: none;
    }
  }
</style>
