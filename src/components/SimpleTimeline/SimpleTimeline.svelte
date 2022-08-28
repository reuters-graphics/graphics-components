<!-- @component `SimpleTimeline` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-SimpleTimeline--default) -->
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
  export let symbolColour: string = '#ccc';
  /**
   * Set a colour for the date headings in the timeline.
   * @type {string}
   */
  export let dateColour: string = 'var(--theme-colour-accent, red)';
  /**
   * Set a class to target with SCSS.
   * @type {string}
   */
  export let cls: string = '';
  /**
   * Set an ID to target with SCSS.
   * @type {string}
   */
  export let id: string = '';


  import Block from '../Block/Block.svelte';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faLink } from '@fortawesome/free-solid-svg-icons';
  import { marked } from 'marked';
</script>

<Block width="normal" id={id} cls="simple-timeline-container {cls}">
  <div class="timeline" style="--symbol-colour:{symbolColour};">
    {#each dates as date}
      <div class="date">
        <svg height="25" width="20">
          <circle
            cx="10"
            cy="12"
            r="5"
            stroke="{symbolColour}"
            stroke-width="2"
            fill="transparent"></circle>
        </svg>
        <h5 style:color={dateColour}>{date.date}</h5>
        {#each date.events as event}
          <div class="event pb-2">
            {#if event.titleLink}
              <a href="{event.titleLink}" target="_blank">
                <h6>
                  {event.title} <span><Fa fw icon="{faLink}" /></span>
                </h6>
              </a>
            {:else}
              <h6>{event.title}</h6>
            {/if}
            {#if event.context}
              {@html marked(event.context)}
            {/if}
          </div>
        {/each}
      </div>
    {/each}
  </div>
</Block>

<style lang="scss">
  .timeline {
    margin-top: 2rem;
    padding-left: 8px;
    padding-right: 15px;
    .date {
      border-left: 1px solid var(--symbol-colour);
      padding-left: 20px;
      padding-bottom: 1rem;
      position: relative;
      margin: 0;
      display: block;

      &:last-child {
        border-left: 1px solid var(--theme-colour-background, #fff);
      }

      h5 {
        font-size: 0.95rem;
        margin-top: 0px;
      }
    }
    svg {
      background-color: var(--theme-colour-background, #fff);
      position: absolute;
      top: -1px;
      left: -10px;
    }
    div.event {
      h6 {
        margin: 0;
        font-size: 1.2rem;
        color: var(--theme-colour-text-primary, #666);
      }
      a {
        color: var(--theme-colour-text-primary, #666);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
      a h6 {
        span {
          opacity: 0.5;
          font-size: 1rem;
        }
        &:hover span {
          opacity: 0.8;
        }
      }
      :global(p) {
        margin-top: 0;
        margin-bottom: 0.7rem;
        font-size: 1rem;
        font-weight: 300;
        color: var(--theme-colour-text-primary, #666);
        font-family: var(--theme-font-family-sans-serif);
        &:last-of-type {
          margin-bottom: 0;
        }
      }
      :global(a) {
        color: var(--theme-colour-text-primary, #666);
      }
    }
  }
</style>
