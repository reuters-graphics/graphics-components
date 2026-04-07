<script lang="ts">
  let { legendItems } = $props();
</script>

<div class="legend">
  {#each legendItems as item}
    <div class="legend-item">
      <span class="legend-color" style="background-color: {item.color};"></span>
      <span class="legend-label">{item.label || item.key}</span>
    </div>
  {/each}
</div>

<style lang="scss">
  .legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 16px;
    padding: 0 16px;
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
  }

  .legend-color {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 2px;
  }

  .legend-label {
    color: #666;
  }
</style>
