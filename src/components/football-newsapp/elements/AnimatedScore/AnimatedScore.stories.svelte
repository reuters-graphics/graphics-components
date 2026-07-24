<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import AnimatedScore from './AnimatedScore.svelte';

  const { Story } = defineMeta({
    title: 'Components/Football/Elements/AnimatedScore',
    component: AnimatedScore,
    tags: ['autodocs'],
    argTypes: {
      value: { control: 'number' },
      bold: { control: 'boolean' },
    },
  });
</script>

<script lang="ts">
  // Instance state for the interactive demo story below.
  let n = $state(0);
</script>

<!-- Change `value` in the controls panel to see the bump animation. -->
<Story name="Default" args={{ value: 1 }} />

<Story name="Interactive counter" asChild>
  <span style="font-size:3rem; font-weight:700;">
    <AnimatedScore value={n} bold />
  </span>
  <button style="margin-inline-start:1rem;" onclick={() => (n += 1)}>+1</button>
</Story>
