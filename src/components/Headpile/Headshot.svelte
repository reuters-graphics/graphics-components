<script lang="ts">
  let { img = '', colour = 'var(--theme-colour-accent)' } = $props();
</script>

<div class="headshot-wrapper">
  <div class="background" style="background-color: {colour};"></div>
  <div class="headshot" style="background-image: url({img}); "></div>
</div>

<style lang="scss">
  .headshot-wrapper {
    width: 7rem;
    height: 6.75rem;
    position: relative;
    margin-block-start: -1.75rem;
    margin-block-end: -1.75rem;
    border-radius: 0.25rem;
    overflow: hidden;
  }
  .background {
    position: absolute;
    inset-block-end: 0;
    inset-inline-start: 0;
    width: 7rem;
    height: 4.75rem;
    display: inline-block;
    border-radius: 0.25rem;
  }
  .headshot {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-size: 106%;
    background-position: center bottom;
    background-repeat: no-repeat;
    position: absolute;
    inset-block-end: 0;
    inset-inline-start: 0;
    overflow: hidden;
  }
</style>
