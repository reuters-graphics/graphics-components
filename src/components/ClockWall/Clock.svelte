<script lang="ts">
  import { onDestroy, onMount } from 'svelte';

  const CLOCK_WEIGHT = { Light: 1, Normal: 2, Bold: 4 } as const;
  type ClockWeight = keyof typeof CLOCK_WEIGHT;

  const CLOCK_SIZE = { XS: 48, MD: 80, LG: 120, XL: 160 } as const;
  type ClockSize = keyof typeof CLOCK_SIZE;

  interface Props {
    /**
     * The name of the clock (to be displayed), e.g. "New York"
     */
    name: string;
    /**
     * The UTC time to display, defaults to current time
     */
    UTCTime?: Date;
    /**
     * The timezone identifier, e.g. "America/New_York"
     */
    tzIdentifier: string;
    /**
     * Whether to show the clock, defaults to true
     */
    showClock?: boolean;
    /**
     * The weight of the clock, either "normal" or "bold"
     */
    clockWeight?: ClockWeight;
    /**
     * The size of the clock, either "XS", "MD", "LG", or "XL"
     */
    clockSize?: ClockSize;
  }

  const {
    name,
    UTCTime = new Date(new Date().toUTCString()),
    tzIdentifier,
    showClock = true,
    clockWeight = 'Normal',
    clockSize = 'MD',
  }: Props = $props();

  /**
   * Converts a UTC date to a specified timezone and formats it to a.m./p.m. style.
   *
   * @param utcDate - The UTC date to convert.
   * @param timezone - The timezone identifier.
   * @returns The formatted time string.
   *
   */
  function convertUTCToTimezone(utcDate: Date, timezone: string) {
    const time = new Date(utcDate).toLocaleString('en-US', {
      timeZone: timezone,
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    // Convert AM/PM to a.m./p.m. format
    return time.replace('AM', 'a.m.').replace('PM', 'p.m.');
  }

  let clockInterval: ReturnType<typeof setInterval> | null = null;
  let time: string = $state(convertUTCToTimezone(UTCTime, tzIdentifier));

  onMount(() => {
    clockInterval = setInterval(() => {
      time = convertUTCToTimezone(
        new Date(new Date().toUTCString()),
        tzIdentifier
      );
    }, 1000 * 10); // Update every 10 seconds
  });

  let minute: number = $derived(
    parseFloat(time?.split(' ')[0].split(':')[1]) || 0
  );
  let hour: number = $derived(
    parseFloat(time?.split(' ')[0].split(':')[0]) || 0
  );

  onDestroy(() => {
    if (clockInterval) {
      clearInterval(clockInterval);
      clockInterval = null;
    }
  });
</script>

<div class="clock-container" style="--clock-size: {CLOCK_SIZE[clockSize]}px;">
  {#if showClock}
    <svg class="clock-svg" width="100%" height="100%" viewBox="0 0 120 120">
      <defs>
        <filter id="inset-shadow">
          <!-- Shadow offset -->
          <feOffset dx="0" dy="4" />
          <!-- Shadow blur -->
          <feGaussianBlur stdDeviation="8" result="offset-blur" />
          <!-- Invert drop shadow to make an inset shadow-->
          <feComposite
            operator="out"
            in="SourceGraphic"
            in2="offset-blur"
            result="inverse"
          />
          <!-- Cut colour inside shadow -->
          <feFlood flood-color="black" flood-opacity=".2" result="color" />
          <feComposite operator="in" in="color" in2="inverse" result="shadow" />
          <!-- Placing shadow over element -->
          <feComposite operator="over" in="shadow" in2="SourceGraphic" />
        </filter>
      </defs>
      <circle
        class="clock-outer-border"
        cx="50%"
        cy="50%"
        r="58"
        fill="transparent"
        stroke="#cccccc"
        stroke-width="2"
      ></circle>
      <circle
        class="clock-inner-shadow"
        cx="50%"
        cy="50%"
        r="54"
        fill="#ffffff"
        filter="url(#inset-shadow)"
      ></circle>
      <g id="clock-ticks" style="mix-blend-mode: multiply;">
        {#each Array(12) as _, i (i)}
          <line
            class="clock-hour-mark"
            x1="50%"
            y1="56"
            x2="50%"
            y2="64"
            stroke="var(--tr-light-grey)"
            stroke-width="2"
            transform-origin="50% 50%"
            transform="rotate({i * 30}) translate(0, -46)"
          ></line>
        {/each}
      </g>
      <g
        id="clock-hand-minute"
        transform-origin="50% 50%"
        transform="rotate({(minute / 60) * 360})"
      >
        <circle
          cx="50%"
          cy="50%"
          r="4"
          fill="transparent"
          stroke="var(--tr-light-grey)"
          stroke-width={CLOCK_WEIGHT[clockWeight]}
        ></circle>
        <line
          x1="50%"
          y1={60 - 4 - 36}
          x2="50%"
          y2={60 - 4}
          stroke="var(--tr-light-grey)"
          stroke-width={CLOCK_WEIGHT[clockWeight]}
          transform-origin="50% 50%"
        ></line>
        <line
          x1="50%"
          y1={60 + 4}
          x2="50%"
          y2={60 + 4 + 4}
          stroke="var(--tr-light-grey)"
          stroke-width={CLOCK_WEIGHT[clockWeight]}
          transform-origin="50% 50%"
        ></line>
      </g>
      <g
        id="clock-hand-hour"
        transform-origin="50% 50%"
        transform="rotate({(hour / 12) * 360 + (360 / 12) * (minute / 60)})"
      >
        <circle
          cx="50%"
          cy="50%"
          r="4"
          fill="transparent"
          stroke="var(--tr-dark-grey)"
          stroke-width={CLOCK_WEIGHT[clockWeight]}
        ></circle>
        <line
          x1="50%"
          y1={60 - 4 - 24}
          x2="50%"
          y2={60 - 4}
          stroke="var(--tr-dark-grey)"
          stroke-width={CLOCK_WEIGHT[clockWeight]}
          transform-origin="50% 50%"
        ></line>
        <line
          x1="50%"
          y1={60 + 4}
          x2="50%"
          y2={60 + 4 + 4}
          stroke="var(--tr-dark-grey)"
          stroke-width={CLOCK_WEIGHT[clockWeight]}
          transform-origin="50% 50%"
        ></line>
      </g>
      <circle
        class="clock-origin"
        cx="50%"
        cy="50%"
        r="2"
        fill="var(--tr-dark-grey)"
      ></circle>
    </svg>
  {/if}
  <div class="clock-info">
    <p class="m-0 p-0 font-sans font-medium leading-none text-sm">
      {name}
    </p>
    <p
      class="m-0 p-0 font-sans text-xs leading-none"
      style="color: var(--tr-medium-grey);"
    >
      {time}
    </p>
  </div>
</div>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .clock-container {
    height: var(--clock-size);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex: 1 1 0px;

    @media (max-width: 659px) {
      height: 48px; // XS size
    }

    .clock-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
      p {
        text-wrap: nowrap;
      }
    }

    svg {
      aspect-ratio: 1 / 1;
      width: auto;
      height: 100%;
    }
  }
</style>
