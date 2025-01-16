<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Option } from '../@types/global';

  

  
  interface Props {
    /**
   * The label that appears above the select input.
   * @type {string}
   */
    label?: string;
    /**
   * The label that appears above the select input.
   * @type {Array}
   */
    options?: Option[];
  }

  let { label = '', options = [] }: Props = $props();

  const dispatch = createEventDispatcher();

  function input(event) {
    const value = event.target.value;
    dispatch('select', { value });
  }
</script>

<div class="select">
  {#if label}
    <label class="body-caption block" for="select--input">{label}</label>
  {/if}
  <select
    class="select--input body-caption fpx-2"
    name="select--input"
    id="select--input"
    oninput={input}
  >
    {#each options as obj}
      <option value="{obj.value}">{obj.text}</option>
    {/each}
  </select>
</div>

<style lang="scss">
  .select {
    width: 250px;

    .select--input {
      position: relative;
      height: 2.15rem;
      border: 1px solid var(--theme-colour-brand-rules, var(--tr-muted-grey));
      border-radius: 0.25rem;
      width: 100%;

      -moz-appearance: none; /* Firefox */
      -webkit-appearance: none; /* Safari and Chrome */
      appearance: none; /* Remove the default arrow */

      background: transparent;
      background-image: url('data:image/svg+xml;utf8,<svg width="15" height="9" viewBox="0 0 15 9" xmlns="http://www.w3.org/2000/svg"><path d="M6.76474 8.30466L0.236082 1.54523C-0.0786943 1.21934 -0.0786943 0.69069 0.236082 0.364804C0.550521 0.0392666 1.19794 0.0403099 1.51305 0.364804L7.33483 6.49522L12.9249 0.475171C13.3549 0.0451683 14.1195 0.0396141 14.4339 0.365152C14.7487 0.691037 14.7487 1.21969 14.4339 1.54557L7.90492 8.30466C7.59015 8.63054 7.07952 8.63054 6.76474 8.30466Z" fill="gray"/></svg>');
      background-repeat: no-repeat;
      background-position-x: 225px;
      background-position-y: 55%;
    }
    .select--input::-ms-expand {
      display: none; /* Remove the default arrow in Internet Explorer 11 */
    }
  }
</style>
