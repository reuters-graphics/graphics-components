<!--
@component
MatchCard/Placeholder

Per-card loading placeholder for `MatchCard`. Mimics the live card's visual
signature (two flag rectangles offset above the top edge + two faux team-name
lines) so the swap to the real card is positionally seamless. No data or
service coupling — purely visual.
-->

<script lang="ts">
  type Props = {
    /**
     * Accessible label announced once. Defaults to "Loading match".
     * Pass `null` to omit the live-region wrapper when the parent already
     * labels the loading state.
     */
    label?: string | null;
  };

  let { label = 'Loading match' }: Props = $props();
</script>

{#snippet card()}
  <div class="placeholder match-card-placeholder" aria-hidden="true">
    <!-- Home team (left, offset above the card's top edge) -->
    <div class="team home-team">
      <div class="flag"></div>
      <div class="team-name"></div>
    </div>

    <!-- Away team (right, offset above the card's top edge) -->
    <div class="team away-team">
      <div class="flag"></div>
      <div class="team-name"></div>
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

  .placeholder.match-card-placeholder {
    position: relative;
    margin: auto;
    width: 100%;
    max-width: 560px;
    height: 7rem;
    background-color: var(--theme-colour-muted-grey);
    border-radius: var(--theme-style-border-radius);
    margin-top: 3rem;

    @media (max-width: 475px) {
      height: 5.6rem;
      margin-top: 2.5rem;
    }

    &:before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      mix-blend-mode: multiply;
      border-radius: inherit;
      @include mixins.loading;
    }
  }

  .team {
    position: absolute;
    top: -11%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    z-index: 1;

    &.home-team {
      left: 25%;
      transform: translate(-50%, 0);

      @media (max-width: 475px) {
        left: 21%;
      }
    }

    &.away-team {
      right: 25%;
      transform: translate(50%, 0);

      @media (max-width: 475px) {
        right: 21%;
      }
    }
  }

  .flag {
    width: 4rem;
    aspect-ratio: 3/2;
    background-color: var(--theme-colour-tan-grey);
    border-radius: calc(0.25 * var(--theme-style-border-radius));
    outline: 1px solid var(--theme-colour-white);
    @include mixins.hard-shadow;
  }

  .team-name {
    width: 5rem;
    height: 1rem;
    border-radius: var(--theme-style-border-radius);
    background-color: var(--theme-colour-tan-grey);

    @media (max-width: 475px) {
      width: 3.75rem;
      height: 0.8rem;
    }
  }
</style>
