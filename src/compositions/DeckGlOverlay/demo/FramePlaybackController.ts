export interface FramePlaybackState {
  index: number;
  running: boolean;
  readerControlled: boolean;
}

type FramePlaybackListener = (state: FramePlaybackState) => void;

/**
 * Controls a discrete sequence of animation frames independently of rendering.
 *
 * Automatic playback loops until the reader interacts. Manual playback stops
 * on the final frame, while seeking and restarting both pause the animation.
 */
export class FramePlaybackController {
  private timer: ReturnType<typeof setInterval> | null = null;
  private loop = false;
  private state: FramePlaybackState = {
    index: 0,
    running: false,
    readerControlled: false,
  };

  constructor(
    private readonly frameCount: number,
    private readonly listener: FramePlaybackListener,
    private readonly intervalMs = 650,
    private readonly reducedMotion = false
  ) {
    if (!Number.isInteger(frameCount) || frameCount < 1) {
      throw new RangeError('Playback requires at least one frame.');
    }

    this.notify();
  }

  get current(): FramePlaybackState {
    return { ...this.state };
  }

  startAutoplay(): void {
    if (this.reducedMotion || this.state.readerControlled || this.state.running)
      return;

    this.start(true);
  }

  toggleManual(): void {
    this.state.readerControlled = true;

    if (this.state.running) {
      this.stop();
      return;
    }

    if (this.state.index === this.frameCount - 1) this.state.index = 0;
    this.start(false);
  }

  setIndex(index: number): void {
    if (!Number.isInteger(index)) {
      throw new RangeError('Playback index must be a whole number.');
    }

    this.state.readerControlled = true;
    this.stop();
    this.state.index = Math.max(0, Math.min(index, this.frameCount - 1));
    this.notify();
  }

  restart(): void {
    this.setIndex(0);
  }

  pauseForVisibility(): void {
    this.stop();
  }

  destroy(): void {
    this.stop();
  }

  private start(loop: boolean): void {
    this.loop = loop;
    this.state.running = true;
    this.notify();
    this.timer = setInterval(() => this.tick(), this.intervalMs);
  }

  private tick(): void {
    if (this.state.index === this.frameCount - 1) {
      if (this.loop) {
        this.state.index = 0;
        this.notify();
      } else {
        this.stop();
      }
      return;
    }

    this.state.index += 1;

    if (!this.loop && this.state.index === this.frameCount - 1) {
      this.clearTimer();
      this.state.running = false;
    }

    this.notify();
  }

  private stop(): void {
    this.clearTimer();

    if (!this.state.running) return;

    this.state.running = false;
    this.notify();
  }

  private clearTimer(): void {
    if (!this.timer) return;

    clearInterval(this.timer);
    this.timer = null;
  }

  private notify(): void {
    this.listener(this.current);
  }
}
