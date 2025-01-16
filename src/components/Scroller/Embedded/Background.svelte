<script lang="ts">
  import type { ContainerWidth, ScrollerStep } from '../../@types/global';

  import Block from '../../Block/Block.svelte';
  interface Props {
    step: ScrollerStep;
    backgroundWidth: ContainerWidth;
    index: number;
  }

  let { step, backgroundWidth, index }: Props = $props();
</script>

<Block width="{backgroundWidth}" class="background-container step-{index + 1}">
  <div class="embedded-background step-{index + 1}" aria-hidden="true">
    <step.background {...step.backgroundProps || {}}></step.background>
  </div>
</Block>
