<!-- @component `Spinner` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-utilities-spinner--docs) -->
<script lang="ts">
  interface Props {
    /** Primary colour of the spinner. */
    colour?: string;
    /**
     * Outer width of the spinner
     */
    width?: number;
    /**
     * Width of the spinner ring
     */
    ringWidth?: number;
    /**
     * How fast the spinner spins in seconds
     */
    speed?: number;
    /**
     * Vertical padding for the spinner's container
     */
    containerPadding?: number;
  }

  let {
    colour = '#666',
    width = 40,
    ringWidth = 6,
    speed = 0.8,
    containerPadding = 10,
  }: Props = $props();
</script>

<div
  style:width="100%"
  style:height={`${width + containerPadding * 2}px`}
  class="component-container flex items-center justify-center"
>
  <div
    style="
      --spinner-colour: {colour};
      --spinner-ring-width: {ringWidth}px;
      --spinner-ring-offset: -{ringWidth}px;
      --spinner-speed: {speed}s;
      width: {width}px;
      height: {width}px;
      margin: 0 auto;
    "
  >
    <div class="spinner-container relative">
      <div class="spinner absolute"></div>
    </div>
  </div>
</div>

<style lang="scss">
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .spinner-container {
    height: 0;
    padding-block-end: 100%;
    color: var(--spinner-colour, #666);
  }

  .spinner {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: var(--spinner-ring-width, 6px) solid transparent;
    border-top-color: currentColor;
    animation: spinner var(--spinner-speed, 0.8s) linear infinite;

    &::before {
      content: '';
      position: absolute;
      display: block;
      left: var(--spinner-ring-offset, -6px);
      top: var(--spinner-ring-offset, -6px);
      width: 100%;
      height: 100%;
      border: var(--spinner-ring-width, 6px) solid currentColor;
      box-sizing: content-box;
      border-radius: 50%;
      opacity: 0.25;
    }
  }
</style>
