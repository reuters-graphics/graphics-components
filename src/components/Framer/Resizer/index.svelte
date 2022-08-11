<script>
  import { faDesktop, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { width } from './../stores.js';

  export let breakpoints = [330, 510, 660, 930, 1200];
  export let maxFrameWidth = 1200;
  export let minFrameWidth = 320;

  let container;

  const sliderWidth = 90;
  let windowInnerWidth = 1200;
  $: minWidth = minFrameWidth;
  $: maxWidth = Math.min(windowInnerWidth - 70, maxFrameWidth);
  $: pixelRange = maxWidth - minWidth;
  $: if ($width > maxWidth) width.set(maxWidth);
  $: offset = ($width - minWidth) / pixelRange;

  let sliding = false;
  let isFocused = false;

  const roundToNearestFive = (d) => Math.ceil(d / 5) * 5;
  const getPx = () => Math.round(pixelRange * offset + minWidth);

  let pixelLabel = null;

  const move = (e) => {
    if (!sliding || !container) return;
    const { left } = container.getBoundingClientRect();
    offset = Math.min(Math.max(0, e.pageX - left), sliderWidth) / sliderWidth;
    pixelLabel = roundToNearestFive(getPx());
  };
  const handleKeyDown = (e) => {
    if (!isFocused) return;
    const { keyCode } = e;
    const pixelWidth = sliderWidth / pixelRange;
    // right
    if (keyCode === 39) {
      offset = Math.min(1, offset + pixelWidth / sliderWidth);
      // left
    } else if (keyCode === 37) {
      offset = Math.max(0, offset - pixelWidth / sliderWidth);
    }
    width.set(getPx());
  };
  const start = (e) => {
    sliding = true;
    move(e);
  };
  const end = () => {
    sliding = false;
    pixelLabel = null;
    width.set(roundToNearestFive(getPx()));
  };
  const onFocus = () => {
    isFocused = true;
  };
  const onBlur = () => {
    isFocused = false;
  };
  const increment = () => {
    const availableBreakpoints = breakpoints
      .filter((b) => b <= maxWidth)
      .filter((b) => b > $width);
    if (availableBreakpoints.length === 0) {
      width.set(maxWidth);
    } else {
      width.set(availableBreakpoints[0]);
    }
  };
  const decrement = () => {
    const availableBreakpoints = breakpoints.filter((b) => b < $width);
    if (availableBreakpoints.length === 0) {
      width.set(minWidth);
    } else {
      width.set(availableBreakpoints.slice(-1)[0]);
    }
  };
</script>

<svelte:window
  on:mousemove="{move}"
  on:mouseup="{end}"
  on:keydown="{handleKeyDown}"
  bind:innerWidth="{windowInnerWidth}"
/>

<div id="resizer">
  <div class="slider">
    <div class="label" style="{`opacity: ${sliding || isFocused ? 1 : 0};`}">
      {pixelLabel || $width}px
    </div>
    <button
      class="icon left"
      disabled="{$width === minWidth}"
      on:click="{decrement}"
      on:focus="{onFocus}"
      on:mouseover="{onFocus}"
      on:mouseleave="{onBlur}"
    >
      <Fa icon="{faMobileAlt}" fw />
    </button>
    <div class="slider-container" bind:this="{container}">
      <div class="track"></div>
      <div
        class="handle"
        tabindex="0"
        style="left: calc({offset * 100}% - 5px);"
        on:mousedown="{start}"
        on:focus="{onFocus}"
        on:blur="{onBlur}"
      ></div>
    </div>
    <button
      class="icon right"
      disabled="{$width === maxWidth}"
      on:click="{increment}"
      on:focus="{onFocus}"
      on:mouseover="{onFocus}"
      on:mouseleave="{onBlur}"
    >
      <Fa icon="{faDesktop}" fw />
    </button>
  </div>
</div>

<style lang="scss">
  #resizer {
    width: 250px;
    position: fixed;
    bottom: 0px;
    right: 0px;
    padding: 15px;

    .slider {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      & > div,
      button {
        display: inline-block;
      }
    }

    div.label {
      font-family: monospace;
      font-size: 13px;
      line-height: 13px;
      text-align: center;
      transition: opacity 0.2s;
      color: grey;
      background-color: rgba(255, 255, 255, 0.8);
      padding: 4px 8px;
      border-radius: 4px;
      margin-right: 5px;
    }
    button.icon {
      font-size: 14px;
      line-height: 14px;
      color: #bbb;
      cursor: pointer;
      background-color: transparent;
      border: 0;
      &:active,
      &:focus {
        outline: none;
      }
      &:hover {
        color: #999;
      }
      &:active {
        transform: translate(1px, 1px);
      }
      &[disabled] {
        color: #ccc;
        cursor: default;
        &:hover {
          color: #ccc;
        }
        &:active {
          transform: translate(0px, 0px);
        }
      }
      &.left {
        text-align: right;
        padding-right: 3px;
      }
      &.right {
        padding-left: 6px;
        text-align: left;
      }
    }
    div.slider-container {
      width: 90px;
      height: 20px;
      position: relative;

      div.track {
        height: 4px;
        width: 100%;
        position: absolute;
        border-radius: 2px;
        top: calc(50% - 2px);
        background-color: lightgrey;
      }
    }
  }

  .handle {
    z-index: 30;
    width: 10px;
    height: 20px;
    cursor: ew-resize;
    background: #bbb;
    user-select: none;
    position: absolute;
    border-radius: 4px;
    border: 1px solid grey;
    top: calc(50% - 10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    &:active,
    &:focus {
      outline: none;
    }
  }
</style>
