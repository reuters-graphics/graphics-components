<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import type { ContainerWidth } from '../@types/global';
  import Block from '../Block/Block.svelte';
  import Clock from './Clock.svelte';

  type ClockProps = ComponentProps<typeof Clock>;

  interface City {
    name: string;
    tzIdentifier: string;
  }

  interface Props {
    cities?: City[];
    width?: ContainerWidth;
    clockSize?: ClockProps['clockSize'];
    clockWeight?: ClockProps['clockWeight'];
  }

  let {
    cities = [
      { name: 'Tehran', tzIdentifier: 'Asia/Tehran' },
      { name: 'Tel Aviv', tzIdentifier: 'Asia/Tel_Aviv' },
      { name: 'Washington D.C.', tzIdentifier: 'America/New_York' },
    ],
    width = 'normal',
    clockSize = 'XS',
    clockWeight = 'Bold',
  }: Props = $props();
</script>

<Block {width}>
  <div id="clock-group">
    {#each cities as city (city.tzIdentifier)}
      <Clock
        name={city.name}
        tzIdentifier={city.tzIdentifier}
        {clockSize}
        {clockWeight}
      />
    {/each}
  </div>
</Block>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  div#clock-group {
    width: 100%;
    margin: 0px auto;
    display: flex;
    flex-wrap: wrap;
    gap: 10px 2rem;
    justify-content: space-evenly;

    @media (max-width: 659px) {
      justify-content: center;
    }
  }
</style>
