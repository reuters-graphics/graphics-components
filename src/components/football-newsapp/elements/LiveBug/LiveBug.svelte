<!--
@component
LiveBug

A small "Live" status pill with a pulsing beacon. No data or service coupling.
-->

<script lang="ts"></script>

<div class="live-container" role="status" aria-label="Live">
  <span class="live-text" aria-hidden="true">Live</span>
  <span class="beacon" aria-hidden="true"></span>
</div>

<style lang="scss">
  @use '../../styles/mixins' as mixins;

  .live-container {
    background-color: var(--theme-colour-background);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    gap: 0.25rem;
    padding: 0.125rem 0.5rem;
    color: var(--theme-colour-live-red);
    outline: 1px solid var(--theme-colour-live-red);
    border-radius: 10rem;
  }

  .live-text {
    @include mixins.text-xxs;
    @include mixins.font-bold;
    @include mixins.tracking-wide;
    display: inline-block;
    line-height: 1;
    text-transform: uppercase;
  }

  .beacon {
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: var(--theme-colour-live-red);
    transform-origin: center;
    animation: beacon 1s ease-out infinite alternate-reverse;
  }

  @keyframes beacon {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .beacon {
      animation: none;
      opacity: 1;
    }
  }
</style>
