<!--
@component
Countdown

A "live in" countdown to a match kick-off. Ticks once per second and hides
leading segments (days/hours) once they reach zero. Fully decoupled — pass the
target kick-off time via the `matchtime` prop; no app store or `$utils` used.

```svelte
<Countdown matchtime={new Date('2026-06-11T20:00:00Z')} />
```
-->

<script lang="ts">
  type Props = {
    /** Target kick-off time to count down to. */
    matchtime: Date;
  };
  let { matchtime }: Props = $props();

  /** Zero-pad a number to two digits. */
  const pad = (n: number) => `${n}`.padStart(2, '0');

  const SECONDS_PER_MINUTE = 60;
  const SECONDS_PER_HOUR = 60 * SECONDS_PER_MINUTE;
  const SECONDS_PER_DAY = 24 * SECONDS_PER_HOUR;

  /**
   * Zero-padded countdown from now to `futureTime`. `days`/`hours` are `null`
   * once they hit zero so leading segments can be hidden; `minutes`/`seconds`
   * are always present. Past targets return all-zero.
   */
  const getTimeTill = (futureTime: Date) => {
    const total = Math.max(
      0,
      Math.floor((futureTime.getTime() - Date.now()) / 1000)
    );
    const days = Math.floor(total / SECONDS_PER_DAY);
    const hours = Math.floor(total / SECONDS_PER_HOUR) % 24;
    const minutes = Math.floor(total / SECONDS_PER_MINUTE) % 60;
    const seconds = total % 60;

    return {
      days: days > 0 ? pad(days) : null,
      hours: hours > 0 ? pad(hours) : null,
      minutes: pad(minutes),
      seconds: pad(seconds),
    };
  };

  let time = $state(getTimeTill(matchtime));
  // Track whether the component has mounted on the client. Until then we
  // render placeholder ellipses so SSR/initial markup doesn't flash stale
  // numbers that then shift once the client recomputes the countdown.
  let mounted = $state(false);

  $effect(() => {
    // Re-run whenever `matchtime` changes. We deliberately avoid reading
    // `time` here — reading and writing the same state inside an effect
    // would trigger `effect_update_depth_exceeded`.
    const target = matchtime;
    time = getTimeTill(target);
    mounted = true;

    // If the match has already started, there's nothing left to count down.
    if (target.getTime() <= Date.now()) return;

    // Align ticks to the next whole-second boundary to avoid visible drift,
    // then tick once per second (matches the displayed precision).
    let intervalId: ReturnType<typeof setInterval> | undefined;
    const msToNextSecond = 1000 - (Date.now() % 1000);
    const timeoutId = setTimeout(() => {
      time = getTimeTill(target);
      intervalId = setInterval(() => {
        time = getTimeTill(target);
        // Stop once we've reached the target time.
        if (target.getTime() <= Date.now() && intervalId) {
          clearInterval(intervalId);
          intervalId = undefined;
        }
      }, 1000);
    }, msToNextSecond);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  });

  // Segments rendered by the template. `days` / `hours` can be null, in which
  // case the segment is skipped. Before the component mounts on the client we
  // show all four segments with an ellipsis placeholder so the layout doesn't
  // shift when real values arrive.
  const segments = $derived(
    mounted ?
      ([
        { value: time.days, label: 'days' },
        { value: time.hours, label: 'hours' },
        { value: time.minutes, label: 'mins' },
        { value: time.seconds, label: 'secs' },
      ].filter((s) => s.value !== null) as {
        value: string;
        label: string;
      }[])
    : [
        { value: '––', label: 'days' },
        { value: '––', label: 'hours' },
        { value: '––', label: 'mins' },
        { value: '––', label: 'secs' },
      ]
  );
</script>

<div class="countdown-container">
  <div class="note h4">Live in</div>
  <div class="countdown">
    {#each segments as { value, label }, i (label)}
      {#if i > 0}
        <span class="separator">:</span>
      {/if}
      <div class="bloc">
        {#key value}
          <span class="figure text-xl" class:placeholder={!mounted}
            >{mounted ? value : '––'}</span
          >
        {/key}
        <span class="title text-xs text-secondary">{label}</span>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  @use '../../styles/mixins' as mixins;

  .countdown-container {
    flex-direction: column;
    margin: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 425px) {
      margin-top: -1.4rem;
    }
  }
  .note {
    text-align: center;
    color: var(--theme-colour-live-red);
    @include mixins.font-extrabold;
    display: block;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }
  .countdown {
    display: flex;
    justify-content: space-between;
    text-align: center;

    .separator {
      margin-top: 1rem;
      padding: 0 0.15rem;
      position: relative;
      @include mixins.font-semibold;
      color: var(--theme-colour-text-secondary);

      @media (max-width: 475px) {
        margin-top: 0.75rem;
      }
    }

    .bloc {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 4.2rem;
      height: 5.6rem;
      overflow: hidden;
      position: relative;

      @media (max-width: 475px) {
        width: 3.5rem;
      }

      .title {
        margin-top: 0;
        position: absolute;
        top: 3.75rem;
        left: auto;

        @media (max-width: 475px) {
          top: 3rem;
        }
      }

      .figure {
        position: absolute;
        margin: auto;
        line-height: 1.4;
        top: 0;
        left: auto;
        width: 4rem;
        border-radius: var(--theme-style-border-radius);
        background-color: var(--theme-colour-muted-grey);
        box-shadow: 0 1px 3px var(--theme-colour-mid-grey);
        letter-spacing: 1px;
        @include mixins.font-bold;
        font-variant: tabular-nums;
        font-variant-numeric: tabular-nums;
        @include mixins.fpy-1;
        pointer-events: none;
        background: linear-gradient(
          110deg,
          transparent 8%,
          #f8f8f8 18%,
          transparent 33%
        );
        background-size: 200% 100%;
        // Animation runs once on mount. Because the parent {#key value} block
        // destroys & re-creates this element whenever the displayed value
        // changes, the shimmer plays exactly when the number flips.
        animation: football-shine 1s linear 1;

        @media (prefers-reduced-motion: reduce) {
          animation: none;
        }

        &::before {
          content: '';
          pointer-events: none;
          position: absolute;
          inset: 0;
          background: var(--theme-colour-muted-grey);
          mix-blend-mode: multiply;
          border-radius: var(--theme-style-border-radius);
        }

        &.placeholder {
          // Don't animate the static placeholder
          animation: none;
          // Slightly raise the ellipsis so it sits visually centred within the
          // figure block (the digits are top-padded for baseline align).
          padding-top: 0;
          line-height: 3.5rem;

          @media (max-width: 475px) {
            line-height: 2.8rem;
          }
        }

        @media (max-width: 475px) {
          width: 3.5rem;
          height: 2.8rem;
          padding-top: 0.5rem;
        }
      }
    }
  }
</style>
