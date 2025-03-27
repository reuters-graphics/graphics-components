<script lang="ts">
  interface Props {
    count?: number;
  }

  let { count = $bindable(0) }: Props = $props();
</script>

<h4>Interactive step</h4>

<p>The count is {count}</p>

<button
  onclick="{() => {
    count += 1;
  }}">Click Me</button
>
