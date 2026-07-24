<!--
@component
MatchStrip/Placeholder

Per-row placeholder for `MatchStrip`. Matches the rendered strip's footprint
exactly (circular flag + code + middle slot + code + circular flag) so
swapping in the real strip causes no layout shift. Purely visual — no state,
images, or observers.
-->

<script lang="ts">
  type Props = {
    /**
     * Accessible label announced once. Defaults to "Loading match". Pass
     * `null` to omit the live-region wrapper when the parent already labels
     * the loading state.
     */
    label?: string | null;
  };

  let { label = 'Loading match' }: Props = $props();
</script>

{#snippet card()}
  <div
    class="placeholder match-strip-placeholder font-sans flex flex-row items-center justify-between"
    style="--h: 3rem;"
    aria-hidden="true"
  >
    <!-- Home team (flag + code) -->
    <div class="team flex items-center justify-start">
      <div class="flag"></div>
      <div class="team-name"></div>
    </div>

    <!-- Middle slot (date/time or score) -->
    <div class="middle"></div>

    <!-- Away team (code + flag) -->
    <div class="team flex items-center justify-end">
      <div class="team-name"></div>
      <div class="flag"></div>
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

  .placeholder.match-strip-placeholder {
    position: relative;
    background-color: var(--theme-colour-muted-grey);
    width: 100%;
    height: var(--h);
    border: 1px solid var(--theme-colour-muted-grey);
    border-radius: calc(10 * var(--theme-style-border-radius));
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

  .team {
    gap: clamp(0.56rem, 0.52rem + 0.21vw, 0.69rem);
    z-index: 1;
  }

  .flag {
    width: var(--h);
    height: var(--h);
    border-radius: var(--theme-style-border-radius-pill);
    background-color: var(--theme-colour-tan-grey);
    outline: 1px solid var(--theme-colour-white);
    flex-shrink: 0;
  }

  .team-name {
    width: 2.25rem;
    height: 0.75rem;
    border-radius: var(--theme-style-border-radius);
    background-color: var(--theme-colour-tan-grey);
    min-width: 3rem;
  }

  .middle {
    width: 3rem;
    height: 0.75rem;
    border-radius: var(--theme-style-border-radius);
    background-color: var(--theme-colour-tan-grey);
    z-index: 1;
  }
</style>
