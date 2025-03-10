<!-- @component `SimpleTimeline` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-text-elements-simpletimeline--docs) -->
<script lang="ts">
  interface Event {
    title: string;
    titleLink?: string;
    context?: string;
  }
  interface EventDate {
    date: string;
    events: Event[];
  }
  /**
   * An array of dates with events.
   * @required
   */
  export let dates: EventDate[];
  /**
   * Set a colour for the timeline bullet symbols and line.
   * @type {string}
   */
  export let symbolColour: string = 'var(--theme-colour-brand-rules)';
  /**
   * Set a colour for the date headings in the timeline.
   * @type {string}
   */
  export let dateColour: string = 'var(--theme-colour-accent, red)';
  /**
   * Set a class to target with SCSS.
   * @type {string}
   */
  let cls: string = '';
  export { cls as class };
  /**
   * Set an ID to target with SCSS.
   * @type {string}
   */
  export let id: string = '';

  import Block from '../Block/Block.svelte';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faLink } from '@fortawesome/free-solid-svg-icons';
  import Markdown from '../Markdown/Markdown.svelte';
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
  @use '../../scss/mixins' as *;
  .timeline {
    .date {
      border-left: 1px solid var(--symbol-colour);
      &:last-child {
        border-left: 1px solid $theme-colour-background;
        @include fpb-0;
      }
    }
    svg {
      top: -1px;
      left: -10px;
    }
    div.title {
      @include fmt-2;
      @include fmb-1;
      @include font-medium;
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
        @include body-note;
        @include font-light;
      }
    }
  }
</style>
