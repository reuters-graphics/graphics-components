<script lang="ts">
  let { value = $bindable(0), label = 'label' } = $props();
  let isDragging = false;

  function drag(node, callback) {
    function handleMousedown(event) {
      function handleMousemove(event) {
        event.preventDefault();

        node.dispatchEvent(
          new CustomEvent('drag', {
            detail: {
              value: event.clientY / window.innerHeight,
            },
          })
        );
      }

      function handleMouseup(event) {
        window.removeEventListener('mousemove', handleMousemove);
        window.removeEventListener('mouseup', handleMouseup);
      }

      window.addEventListener('mousemove', handleMousemove);
      window.addEventListener('mouseup', handleMouseup);
    }

    node.addEventListener('mousedown', handleMousedown);

    return {
      destroy() {
        node.removeEventListener('mousedown', handleMousedown);
      },
    };
  }

  // Round to 2 decimal places
  function round(value) {
    return Math.round(value * 100) / 100;
  }
</script>

<div
  class="label"
  style="top: {value * 100}%"
  use:drag
  on:drag={(e) => (value = e.detail.value)}
>
  <div class="drag-target"></div>
  <hr />
  <p>{label}: {round(value)}</p>
</div>

<style lang="scss">
  @use '../../../scss/mixins' as mixins;

  .label {
    position: fixed;
    top: 0;
    right: 0;
    width: 150px;
    height: 0;
    cursor: ns-resize;

    .drag-target {
      position: absolute;
      height: 20px;
      top: -10px;
    }

    hr {
      position: absolute;
      top: 0;
      width: 100%;
      height: 2px;
      background: red;
      border: none;
      margin: 0;
    }
    p {
      position: absolute;
      @include mixins.font-sans;
      @include mixins.font-medium;
      @include mixins.text-sm;
    }
  }
</style>
