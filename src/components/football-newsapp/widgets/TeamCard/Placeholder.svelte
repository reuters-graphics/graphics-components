<!--
@component
TeamCard/Placeholder

Per-row placeholder for `TeamCard`. Mirrors the rendered card's layout
(rectangular flag + name/points block on the left, "Results" badges on the
right) so swapping in the real card causes no layout shift. Purely visual.
-->

<script lang="ts">
  type Props = {
    /**
     * Accessible label announced once. Defaults to "Loading team". Pass
     * `null` to omit the live-region wrapper when the parent already announces
     * the loading state.
     */
    label?: string | null;
  };

  let { label = 'Loading team' }: Props = $props();
</script>

{#snippet card()}
  <div
    class="placeholder team-card-placeholder font-sans flex flex-row items-end justify-left"
    aria-hidden="true"
  >
    <!-- Title block: flag + name + points -->
    <div class="title flex flex-row items-start">
      <div class="flag"></div>
      <div class="text-block">
        <div class="name"></div>
        <div class="points"></div>
      </div>
    </div>

    <!-- Results badges (3 placeholders) -->
    <div class="results fmr-2 fmb-2">
      <div class="results-label"></div>
      <div class="badges">
        <span class="badge"></span>
        <span class="badge"></span>
        <span class="badge"></span>
      </div>
    </div>
  </div>
{/snippet}

{#if label}
  <div role="status" aria-busy="true" aria-live="polite" aria-label={label}>
    {@render card()}
    <span class="visually-hidden">{label}</span>
  </div>
{:else}
  {@render card()}
{/if}

<style lang="scss">
  @use '../../styles/mixins' as mixins;

  .placeholder.team-card-placeholder {
    position: relative;
    background-color: var(--theme-colour-muted-grey);
    width: 100%;
    border: 1px solid var(--theme-colour-muted-grey);
    border-radius: var(--theme-style-border-radius);
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      mix-blend-mode: multiply;
      @include mixins.loading;
    }
  }

  .title {
    line-height: 1;
    align-items: center;
    width: calc(100% - 7rem);
    gap: clamp(0.56rem, 0.52rem + 0.21vw, 0.69rem);
    z-index: 1;
  }

  .flag {
    width: calc(5 * var(--theme-font-size-base));
    aspect-ratio: 3/2;
    flex-shrink: 0;
    background-color: var(--theme-colour-tan-grey);
    outline: 1px solid var(--theme-colour-white);
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  .text-block {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .name {
    width: 6rem;
    height: 0.9rem;
    border-radius: var(--theme-style-border-radius);
    background-color: var(--theme-colour-tan-grey);
  }

  .points {
    width: 3.5rem;
    height: 0.65rem;
    border-radius: var(--theme-style-border-radius);
    background-color: var(--theme-colour-tan-grey);
  }

  .results {
    width: 7rem;
    z-index: 1;

    @media (max-width: 335px) {
      @include mixins.fmr-0;
    }
  }

  .results-label {
    width: 3rem;
    height: 0.55rem;
    margin: 0 auto 0.25rem;
    border-radius: var(--theme-style-border-radius);
    background-color: var(--theme-colour-tan-grey);
  }

  .badges {
    display: flex;
    justify-content: center;
    gap: 0.25rem;
  }

  .badge {
    display: inline-block;
    height: calc(2.2 * var(--theme-font-size-xs));
    aspect-ratio: 1;
    border-radius: 9999px;
    background-color: var(--theme-colour-tan-grey);
    border: 1px solid var(--theme-colour-white);
  }
</style>
