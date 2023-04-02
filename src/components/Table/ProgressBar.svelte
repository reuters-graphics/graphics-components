<script lang="ts">
  export let progress: number = 0.0;
</script>

<div class="progress-bar">
  <div class="progress-bar--segment" class:active="{progress >= 0}"></div>
  <div class="progress-bar--segment" class:active="{progress >= 0.33}"></div>
  <div class="progress-bar--segment" class:active="{progress >= 0.66}"></div>
</div>

<style lang="scss">
  @import '../../scss/colours/thematic/tr';

  .progress-bar {
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    .progress-bar--segment {
      height: 5px;
      width: 30%;
      background-color: $tr-muted-grey;
      &.active {
        background-color: $tr-medium-grey;
      }
    }
  }
</style>
