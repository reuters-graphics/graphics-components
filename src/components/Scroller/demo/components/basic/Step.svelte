<script lang="ts">
  interface Props {
    colour?: string;
  }

  let { colour = 'lightblue' }: Props = $props();
</script>

<div class="step" style={`background: ${colour};`}></div>

<style lang="scss">
  .step {
    width: 100vw;
    max-width: 100%;
    margin: 0 auto;
    height: 400px;
  }
</style>
