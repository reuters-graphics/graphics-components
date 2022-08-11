<script lang="ts">
  import { onMount } from 'svelte';
  /** 
   * iFrame title 
   * @required
   */
  export let title: string = '';
  /** 
   * iFrame aria label
   * @required
   */
  export let ariaLabel: string = '';
  /** iFrame id */
  export let id: string = '';
  /** 
   * Datawrapper embed URL
   * @required
   */
  export let src: string;

  type ScrollingOption = 'auto' | 'yes' | 'no';

  /** iFrame scrolling option */
  export let scrolling: ScrollingOption = 'no';

  type ContainerWidth = 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';
  /** Width of the chart within the text well. */
  export let width: ContainerWidth = 'normal'; // options: wide, wider, widest, fluid

  onMount(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('message', function (e) {
        if (void 0 !== e.data['datawrapper-height']) {
          const t = document.querySelectorAll('iframe');
          for (const a in e.data['datawrapper-height']) {
            for (let r = 0; r < t.length; r++) {
              if (t[r].contentWindow === e.source) {
                t[r].style.height = e.data['datawrapper-height'][a] + 'px';
              }
            }
          }
        }
      });
    }
  });
</script>

<section class="graphic {width}">
  {#if $$slots.title}
    <div class="chatter-container">
      <!-- Custom headline and chatter slot -->
      <slot name="title" />
    </div>
  {/if}

  <div class="datawrapper-chart">
    <iframe
      title="{title}"
      aria-label="{ariaLabel}"
      id="{id}"
      src="{src}"
      scrolling="{scrolling}"
      frameborder="0"
      style="width: 0; min-width: 100% !important; border: none;"></iframe>
  </div>

  {#if $$slots.notes}
    <div class="chatter-container">
      <!-- Custom notes and source slot -->
      <slot name="notes" />
    </div>
  {/if}
</section>

<style lang="scss">
  @import '@reuters-graphics/style-theme-eisbaer/scss/components/containers/widths';
  .chatter-container {
    @extend .well;
  }
  .datawrapper-chart {
    margin: auto;
  }
</style>
