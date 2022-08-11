<script>
  /* This component wraps ai2svelte graphics. */
  export let AiGraphic;
  export let id = '';
  export let ariaHidden = true;

  export let ariaDescription = null;

  // normal, wide, wider, widest or fluid
  export let size = 'normal';
  export let onAiMounted = () => {};

  if (ariaHidden && !ariaDescription) {
    console.warn(
      'Must provide aria description for ai2svelte components if ariaHidden is true.'
    );
  }
</script>

<section class="ai2svelte-container graphic {size}" id="{id}">
  {#if (ariaHidden && (ariaDescription || $$slots.hidden)) || !ariaHidden}
    {#if $$slots.title}
      <div class="chatter-container">
        <slot name="title" />
      </div>
    {/if}
    {#if ariaDescription}
      <p class="visually-hidden">{ariaDescription}</p>
    {/if}
    {#if $$slots.hidden}
      <div class="visually-hidden custom">
        <slot name="hidden" />
      </div>
    {/if}
    <div class="ai-wrapper" aria-hidden="{ariaHidden}">
      <svelte:component this="{AiGraphic}" onAiMounted="{onAiMounted}" />
    </div>
    {#if $$slots.notes}
      <div class="chatter-container">
        <slot name="notes" />
      </div>
    {/if}
  {/if}
</section>

<style lang="scss">
  @import '~@reuters-graphics/style-theme-eisbaer/scss/components/containers/widths';
  .chatter-container {
    @extend .well;
  }
  .visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important; // Fix for https://github.com/twbs/bootstrap/issues/25686
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
    white-space: nowrap !important;
    border: 0 !important;
  }
</style>
