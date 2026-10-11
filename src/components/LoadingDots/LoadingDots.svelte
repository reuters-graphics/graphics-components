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

<style>
  .loading-dots {
    display: inline-flex;
    vertical-align: middle;
  }

  .loading-dots__marks {
    display: inline-flex;
    gap: 0.12em;
    font-size: 18px;
    font-weight: 600;
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
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
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
