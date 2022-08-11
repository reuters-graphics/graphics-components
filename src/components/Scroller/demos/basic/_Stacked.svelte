<script>
  export let colour = 'lightblue';
  export let i = 0;
  export let steps = 3;
</script>

<div class='step-cont'>
  <div
    class='step'
    style={`
      background: ${colour};
      height: ${400 / steps}px;
      top: ${i * (400 / steps)}px;
  `}></div>
</div>


<style lang="scss">
  .step-cont{
    height: 400px;
    position: relative;
    .step {
      width: 100vw;
      max-width: 100%;
      margin: 0 auto;
      position: absolute;
      left: 0;
    }
  }
</style>