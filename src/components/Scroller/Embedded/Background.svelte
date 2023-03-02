<script lang="ts">
  import type { ContainerWidth, ScrollerStep } from '../../@types/global';

  export let step: ScrollerStep;
  export let backgroundWidth: ContainerWidth;
  export let index: number;

  import Block from '../../Block/Block.svelte';
</script>

<Block width="{backgroundWidth}" cls="background-container step-{index + 1}">
  <div class="embedded-background step-{index + 1}" aria-hidden="true">
    <svelte:component
      this="{step.background}"
      {...step.backgroundProps || {}}
    />
  </div>
</Block>
