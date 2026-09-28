import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  FramePlaybackController,
  type FramePlaybackState,
} from './FramePlaybackController';

describe('FramePlaybackController', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('requires a positive whole number of frames', () => {
    expect(() => new FramePlaybackController(0, () => undefined)).toThrow(
      'Playback requires at least one frame.'
    );
    expect(() => new FramePlaybackController(1.5, () => undefined)).toThrow(
      'Playback requires at least one frame.'
    );
  });

  it('loops automatic playback while the reader has not interacted', () => {
    const states: FramePlaybackState[] = [];
    const playback = new FramePlaybackController(
      3,
      (state) => states.push(state),
      100
    );

    playback.startAutoplay();
    vi.advanceTimersByTime(300);

    expect(playback.current).toEqual({
      index: 0,
      running: true,
      readerControlled: false,
    });
    expect(states.map(({ index }) => index)).toEqual([0, 0, 1, 2, 0]);

    playback.destroy();
  });

  it('skips automatic playback when reduced motion is requested', () => {
    const playback = new FramePlaybackController(3, () => undefined, 100, true);

    playback.startAutoplay();
    vi.advanceTimersByTime(300);

    expect(playback.current).toEqual({
      index: 0,
      running: false,
      readerControlled: false,
    });
  });

  it('stops manual playback on the final frame and restarts from there', () => {
    const playback = new FramePlaybackController(3, () => undefined, 100);

    playback.toggleManual();
    vi.advanceTimersByTime(200);

    expect(playback.current).toEqual({
      index: 2,
      running: false,
      readerControlled: true,
    });

    playback.toggleManual();

    expect(playback.current).toEqual({
      index: 0,
      running: true,
      readerControlled: true,
    });

    playback.destroy();
  });

  it('pauses and claims reader control when seeking or restarting', () => {
    const playback = new FramePlaybackController(4, () => undefined, 100);

    playback.startAutoplay();
    playback.setIndex(2);

    expect(playback.current).toEqual({
      index: 2,
      running: false,
      readerControlled: true,
    });

    playback.startAutoplay();
    expect(playback.current.running).toBe(false);

    playback.restart();
    expect(playback.current).toEqual({
      index: 0,
      running: false,
      readerControlled: true,
    });
  });

  it('rejects invalid frame indexes without changing playback state', () => {
    const playback = new FramePlaybackController(4, () => undefined, 100);

    expect(() => playback.setIndex(Number.NaN)).toThrow(
      'Playback index must be a whole number.'
    );
    expect(() => playback.setIndex(1.5)).toThrow(
      'Playback index must be a whole number.'
    );
    expect(playback.current).toEqual({
      index: 0,
      running: false,
      readerControlled: false,
    });
  });

  it('always pauses offscreen and only permits untouched autoplay to resume', () => {
    const playback = new FramePlaybackController(3, () => undefined, 100);

    playback.startAutoplay();
    playback.pauseForVisibility();
    expect(playback.current.running).toBe(false);

    playback.startAutoplay();
    expect(playback.current.running).toBe(true);

    playback.toggleManual();
    playback.toggleManual();
    playback.pauseForVisibility();
    playback.startAutoplay();

    expect(playback.current).toEqual({
      index: 0,
      running: false,
      readerControlled: true,
    });
  });

  it('clears its timer when destroyed', () => {
    const listener = vi.fn();
    const playback = new FramePlaybackController(3, listener, 100);

    playback.startAutoplay();
    playback.destroy();
    const callsAfterDestroy = listener.mock.calls.length;
    vi.advanceTimersByTime(500);

    expect(listener).toHaveBeenCalledTimes(callsAfterDestroy);
    expect(playback.current.running).toBe(false);
  });
});
