<script>
  export let count = 0;
</script>

<h4>Interactive step</h4>

<p>The count is {count}</p>

<button on:click="{() => { count += 1; }}">Click Me</button>