<script>
  export let step;
  export let backgroundSize;
  export let index;
</script>

<section class="background-container graphic {backgroundSize}" step="{index + 1}">
  <div class="embedded-background step-{index + 1}">
    <svelte:component
      this="{step.background}"
      {...step.backgroundProps || {}}
    />
  </div>
</section>
