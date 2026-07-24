<!--
@component
MatchCardGoals

A vertical list of goal / red-card events for one side of a `MatchCard`.
Takes the pre-derived events array as a prop — no `$utils` coupling.
-->

<script lang="ts">
  import type { Card, Goal } from '../../types';
  import Icon from '../../elements/Icons/Icon.svelte';

  type MatchEvent = Goal | Card;

  type Props = {
    events: MatchEvent[];
  };

  let { events }: Props = $props();

  const isRedCard = (event: MatchEvent) =>
    event.type === 'Y2C' || event.type === 'RC';
</script>

{#if events.length}
  <div class="goals-detail">
    {#each events as event (`${event.timeMin}-${event.type}-${(event as Card).playerName ?? (event as Goal).scorerName ?? ''}`)}
      {#if isRedCard(event)}
        <div class="red-card">
          <span class="icon">
            <Icon name="red-card" width="1rem" height="1rem" />
          </span>
          <span class="time">{event.timeMin}'</span>
          <span class="scorer">{(event as Card).playerName || ''}</span>
        </div>
      {:else}
        <div class="goal">
          <div class="icon" class:og={event.type === 'OG'}>
            <Icon name="football" width="1rem" height="1rem" />
          </div>
          <span class="time">{event.timeMin}'</span>
          <span class="scorer">
            {(event as Goal).scorerName}
            {#if event.type === 'OG'}&nbsp;(OG){/if}
            {#if event.type === 'PG'}&nbsp;(P){/if}
          </span>
        </div>
      {/if}
    {/each}
  </div>
{/if}

<style lang="scss">
  @use '../../styles/mixins' as mixins;

  .goals-detail {
    .scorer {
      white-space: pre-wrap;
      text-align: left;
    }

    .goal,
    .red-card {
      display: flex;

      @include mixins.text-sm;
      @include mixins.leading-none;
      @include mixins.fmy-2;
      @include mixins.fpx-3;

      @media (max-width: 475px) {
        @include mixins.text-xs;
      }

      .time {
        min-width: 2rem;
        width: auto;
        @include mixins.font-medium;
        @include mixins.fpr-1;

        @media (max-width: 475px) {
          min-width: auto;
        }
      }

      .icon {
        margin-right: 0.15rem;

        :global(img) {
          margin: 0;
        }
      }
    }
  }
</style>
