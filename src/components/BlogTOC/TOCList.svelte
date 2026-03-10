<script lang="ts">
  import Block from '../Block/Block.svelte';

  interface DateEvent {
    title: string;
    titleLink: string;
  }

  interface DateEntry {
    date: string;
    events: DateEvent[];
  }

  interface Props {
    dates: DateEntry[];
    /** Colour for the timeline bullet symbols and line. */
    symbolColour?: string;
    /** Colour for the date headings. */
    dateColour?: string;
    /** The height of the list, bindable for the parent to read. */
    listHeight?: number;
    id?: string;
    class?: string;
  }

  let {
    dates,
    symbolColour = 'var(--theme-colour-brand-rules)',
    dateColour = 'var(--theme-colour-accent, red)',
    listHeight = $bindable(0),
    id = '',
    class: cls = '',
  }: Props = $props();
</script>

<Block width="normal" {id} class="simple-timeline-container {cls}">
  <div
    bind:clientHeight={listHeight}
    class="timeline"
    style="--symbol-colour:{symbolColour};"
  >
    {#each dates as date}
      <div class="date">
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
        <div class="timeline-date" style:color={dateColour}>
          {date.date}
        </div>
        {#each date.events as event}
          <div class="event">
            <a href={event.titleLink}>
              <div class="title">{event.title}</div>
            </a>
          </div>
        {/each}
      </div>
    {/each}
  </div>
</Block>

<style lang="scss">
  @use '../../scss/mixins' as mixins;
  .timeline {
    padding-left: 0.5rem;
    padding-right: 0.875rem;
    .date {
      position: relative;
      padding-top: 0.125rem;
      padding-left: 1.25rem;
      padding-bottom: 1rem;
      scroll-snap-align: start;
      border-left: 1px solid var(--symbol-colour);
      &:last-child {
        border-left: 1px solid mixins.$theme-colour-background;
        @include mixins.fpb-0;
      }
    }

    .timeline-date {
      @include mixins.font-note;
      @include mixins.text-xs;
      text-transform: uppercase;
      @include mixins.font-black;
      @include mixins.tracking-wide;
      @include mixins.fmb-0;
    }

    svg {
      top: -1px;
      left: -10.5px;
    }
    div.title {
      @include mixins.h3;
      @include mixins.fmy-1;
      @include mixins.font-medium;
    }

    div.event {
      a {
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
      :global(p) {
        @include mixins.body-note;
        @include mixins.font-light;
      }
    }
  }
</style>
