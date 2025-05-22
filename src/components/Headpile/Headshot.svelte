<script lang="ts">
  let { img = '', colour = 'var(--theme-colour-accent)' } = $props();
</script>

<div class="headshot-wrapper">
  <div class="background" style="background-color: {colour};"></div>
  <div class="headshot" style="background-image: url({img}); "></div>
</div>

<style lang="scss">
  .headshot-wrapper {
    width: 100px;
    height: 120px;
    position: relative;
    margin-top: -46px;
    margin-bottom: -46px;
    border-radius: 4px;
    overflow: hidden;
  }
  .background {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 70px;
    display: inline-block;
    border-radius: 4px;
  }
  .headshot {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-size: 106%;
    background-position: center bottom;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    left: 0;
    overflow: hidden;
  }
</style>
