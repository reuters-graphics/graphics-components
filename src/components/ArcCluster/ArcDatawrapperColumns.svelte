<!--
  @component A two-column Datawrapper layout for ArcCluster embeds with built-in responsive stacking and Datawrapper postMessage height syncing.
-->
<script lang="ts">
  import { onDestroy, onMount } from 'svelte';

  type ScrollingOption = 'auto' | 'yes' | 'no';

  export interface ArcDatawrapperChart {
    /** iframe title */
    frameTitle: string;
    /** iframe aria label */
    ariaLabel: string;
    /** iframe id */
    id: string;
    /** Datawrapper embed URL */
    src: string;
    /** iframe scrolling option */
    scrolling?: ScrollingOption;
    /** Optional initial/fallback iframe height in pixels */
    height?: number;
  }

  interface Props {
    /** Two charts for the standard Reuters Arc two-column pattern. */
    charts: [ArcDatawrapperChart, ArcDatawrapperChart];
    /** Gap between columns in pixels. */
    gap?: number;
    /** Extra class on the root element. */
    class?: string;
  }

  let { charts, gap = 24, class: cls = '' }: Props = $props();

  let containerElement: HTMLDivElement | undefined;

  const frameFiller = (event: MessageEvent) => {
    const messageData = event.data;
    let datawrapperHeights: unknown;
    if (messageData && typeof messageData === 'object') {
      datawrapperHeights = (messageData as Record<string, unknown>)[
        'datawrapper-height'
      ];
    }

    if (!datawrapperHeights || typeof datawrapperHeights !== 'object') return;

    const iframes =
      containerElement?.querySelectorAll<HTMLIFrameElement>(
        'iframe.datawrapper'
      );
    if (!iframes?.length) return;

    for (const chartId in datawrapperHeights as Record<string, number>) {
      const reportedHeight = (datawrapperHeights as Record<string, number>)[
        chartId
      ];
      if (!Number.isFinite(reportedHeight)) continue;

      for (const iframe of iframes) {
        if (iframe.contentWindow === event.source) {
          iframe.style.height = `${reportedHeight}px`;
        }
      }
    }
  };

  onMount(() => {
    if (typeof window === 'undefined') return;
    window.addEventListener('message', frameFiller);
  });

  onDestroy(() => {
    if (typeof window === 'undefined') return;
    window.removeEventListener('message', frameFiller);
  });
</script>

<div
  bind:this={containerElement}
  class="embed--container {cls}"
  style={`--arc-datawrapper-gap: ${gap}px;`}
>
  {#each charts as chart (chart.id)}
    <div class="embed--column">
      <iframe
        class="datawrapper"
        title={chart.frameTitle}
        aria-label={chart.ariaLabel}
        id={chart.id}
        src={chart.src}
        scrolling={chart.scrolling ?? 'no'}
        frameborder="0"
        data-external="1"
        height={chart.height}
      ></iframe>
    </div>
  {/each}
</div>

<style>
  .embed--container {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: var(--arc-datawrapper-gap, 24px);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .embed--column {
    flex: 1 1 calc((100% - var(--arc-datawrapper-gap, 24px)) / 2);
    min-width: 0;
  }

  .datawrapper {
    width: 0;
    min-width: 100% !important;
    border: none;
  }

  @media (max-width: 768px) {
    .embed--column {
      flex-basis: 100%;
      align-self: flex-start;
    }
  }
</style>
