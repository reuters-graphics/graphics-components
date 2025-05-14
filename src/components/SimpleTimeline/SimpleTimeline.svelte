<!-- @component `SimpleTimeline` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-text-elements-simpletimeline--docs) -->
<script lang="ts">
  import Fa from 'svelte-fa';
  import { faLink } from '@fortawesome/free-solid-svg-icons';
  import Block from '../Block/Block.svelte';
  import { Markdown } from '@reuters-graphics/svelte-markdown';

  interface Event {
    title: string;
    titleLink?: string;
    context?: string;
  }
  interface EventDate {
    date: string;
    events: Event[];
  }

  interface Props {
    /**
     * An array of dates with events.
     */
    dates: EventDate[];
    /**
     * Set a colour for the timeline bullet symbols and line.
     */
    symbolColour?: string;
    /**
     * Set a colour for the date headings in the timeline.
     */
    dateColour?: string;
    /**
     * Set a class to target with SCSS.
     */
    class?: string;
    /**
     * Set an ID to target with SCSS.
     */
    id?: string;
  }

  let {
    dates,
    symbolColour = 'var(--theme-colour-brand-rules)',
    dateColour = 'var(--theme-colour-accent, red)',
    class: cls = '',
    id = '',
  }: Props = $props();
</script>

<Block width="normal" {id} class="simple-timeline-container fmy-6 {cls}">
  <div class="timeline pl-2 pr-3.5" style="--symbol-colour:{symbolColour};">
    {#each dates as date}
      <div class="date relative pt-0.5 pl-5 pb-4">
        <svg class="absolute bg" height="25" width="20">
          <circle
            cx="10"
            cy="12"
            r="5"
            stroke={symbolColour}
            stroke-width="2"
            fill="transparent"
          ></circle>
        </svg>
        <div
          class="timeline-date font-note text-xs uppercase font-black tracking-wide fmb-0"
          style:color={dateColour}
        >
          {date.date}
        </div>
        {#each date.events as event}
          <div class="event pb-2">
            {#if event.titleLink}
              <a href={event.titleLink} target="_blank">
                <div class="title h3">
                  {event.title}
                  <span class="text-sm"><Fa fw icon={faLink} /></span>
                </div>
              </a>
            {:else}
              <div class="title h3">
                {event.title}
              </div>
            {/if}
            {#if event.context}
              <Markdown source={event.context} />
            {/if}
          </div>
        {/each}
      </div>
    {/each}
  </div>
</Block>

<style lang="scss">
  @use '../../scss/mixins' as mixins;
  .timeline {
    .date {
      border-inline-start: 1px solid var(--symbol-colour);
      &:last-child {
        border-inline-start: 1px solid mixins.$theme-colour-background;
        @include mixins.fpb-0;
      }
    }
    svg {
      inset-block-start: -1px;
      inset-inline-start: -10px;
    }
    div.title {
      @include mixins.fmt-2;
      @include mixins.fmb-1;
      @include mixins.font-medium;
    }

    div.event {
      a {
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
      a div.title {
        span {
          opacity: 0.5;
        }
        &:hover span {
          opacity: 0.8;
        }
      }
      :global(p) {
        @include mixins.body-note;
        @include mixins.font-light;
      }
    }
  }
</style>
