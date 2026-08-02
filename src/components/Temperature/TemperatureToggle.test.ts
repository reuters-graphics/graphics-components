/**
 * Focused tests for the `onbeforetoggle` pre-mutation hook added to
 * `TemperatureToggle`.
 *
 * These tests exercise the exact onclick logic the component applies on every
 * user activation:
 *
 *   const next = otherUnit(state.current);
 *   onbeforetoggle?.(next);
 *   state.set(next);
 *
 * We simulate this directly so the ordering proofs remain framework-agnostic
 * and run in the same Vitest/Node environment as the rest of the Temperature
 * test suite (no jsdom required).
 */
import { afterEach, describe, expect, it, vi } from 'vitest';
import { TemperatureUnitState } from './state.svelte';
import { otherUnit, type TemperatureUnit } from './units';

// ---------------------------------------------------------------------------
// Shared test helpers — mirrors the stubs in state.test.ts so the test env is
// identical to existing Temperature tests.
// ---------------------------------------------------------------------------

function stubLocalStorage(initial: Record<string, string> = {}) {
  const store: Record<string, string> = { ...initial };
  vi.stubGlobal('localStorage', {
    getItem: (k: string) => (k in store ? store[k] : null),
    setItem: (k: string, v: string) => {
      store[k] = String(v);
    },
    removeItem: (k: string) => {
      delete store[k];
    },
  });
  return store;
}

function stubDom() {
  const attributes: Record<string, string> = {};
  vi.stubGlobal('document', {
    documentElement: {
      getAttribute: (name: string) =>
        Object.prototype.hasOwnProperty.call(attributes, name) ?
          attributes[name]
        : null,
      setAttribute: (name: string, value: string) => {
        attributes[name] = value;
      },
    },
  });
  vi.stubGlobal('window', new EventTarget());
  return { attributes };
}

afterEach(() => vi.unstubAllGlobals());

// ---------------------------------------------------------------------------
// Simulates what the component's onclick handler does on every user click.
// ---------------------------------------------------------------------------

function simulateToggle(
  state: TemperatureUnitState,
  onbeforetoggle?: (next: TemperatureUnit) => void
) {
  const next = otherUnit(state.current);
  onbeforetoggle?.(next);
  state.set(next);
}

// ---------------------------------------------------------------------------
// Ordering: callback fires before every canonical side-effect.
// ---------------------------------------------------------------------------

describe('onbeforetoggle ordering', () => {
  it('calls the hook before state.current changes (celsius → fahrenheit)', () => {
    stubLocalStorage();
    stubDom();

    const state = new TemperatureUnitState({ initial: 'celsius' });
    const callOrder: string[] = [];

    simulateToggle(state, (next) => {
      // At this point `state.current` must still be 'celsius' — the mutation
      // has NOT yet occurred.
      callOrder.push(`hook:current=${state.current},next=${next}`);
    });
    callOrder.push(`after:current=${state.current}`);

    expect(callOrder).toEqual([
      'hook:current=celsius,next=fahrenheit',
      'after:current=fahrenheit',
    ]);

    state.destroy();
  });

  it('calls the hook before state.current changes (fahrenheit → celsius)', () => {
    stubLocalStorage();
    stubDom();

    const state = new TemperatureUnitState({ initial: 'fahrenheit' });
    const callOrder: string[] = [];

    simulateToggle(state, (next) => {
      callOrder.push(`hook:current=${state.current},next=${next}`);
    });
    callOrder.push(`after:current=${state.current}`);

    expect(callOrder).toEqual([
      'hook:current=fahrenheit,next=celsius',
      'after:current=celsius',
    ]);

    state.destroy();
  });

  it('calls the hook before the <html data-temp-unit> attribute is updated', () => {
    stubLocalStorage();
    const { attributes } = stubDom();

    const state = new TemperatureUnitState({ initial: 'celsius' });
    let attrDuringHook: string | null = 'not-checked';

    simulateToggle(state, () => {
      attrDuringHook = attributes['data-temp-unit'] ?? null;
    });

    // Inside the hook the attribute is still absent/stale.
    expect(attrDuringHook).toBeNull();
    // After the click it has been written.
    expect(attributes['data-temp-unit']).toBe('fahrenheit');

    state.destroy();
  });

  it('calls the hook before localStorage is updated', () => {
    const store = stubLocalStorage();
    stubDom();

    const state = new TemperatureUnitState({ initial: 'celsius' });
    let storedDuringHook: string | null = 'not-checked';

    simulateToggle(state, () => {
      storedDuringHook = store['temperature-unit'] ?? null;
    });

    expect(storedDuringHook).toBeNull();
    expect(store['temperature-unit']).toBe('fahrenheit');

    state.destroy();
  });

  it('fires exactly one temperature-unit-changed event, after the hook', () => {
    stubLocalStorage();
    stubDom();

    const state = new TemperatureUnitState({ initial: 'celsius' });
    const order: string[] = [];
    const eventDetails: Array<{ unit: string }> = [];

    // Listener is registered before the click so it runs synchronously when
    // state.set() dispatches the event (there is no async tick involved).
    window.addEventListener('temperature-unit-changed', (e) => {
      order.push('event');
      eventDetails.push({ unit: (e as CustomEvent).detail?.unit });
    });

    simulateToggle(state, () => {
      order.push('hook');
    });

    // Hook must come before the event.
    expect(order).toEqual(['hook', 'event']);
    // Exactly one event with the correct unit.
    expect(eventDetails).toHaveLength(1);
    expect(eventDetails[0].unit).toBe('fahrenheit');

    state.destroy();
  });

  it('calls the hook exactly once per toggle activation', () => {
    stubLocalStorage();
    stubDom();

    const state = new TemperatureUnitState({ initial: 'celsius' });
    const callCount = { hook: 0 };

    simulateToggle(state, () => {
      callCount.hook++;
    });

    expect(callCount.hook).toBe(1);
    state.destroy();
  });
});

// ---------------------------------------------------------------------------
// Directions: both celsius→fahrenheit and fahrenheit→celsius.
// ---------------------------------------------------------------------------

describe('onbeforetoggle directions', () => {
  it('receives fahrenheit when toggling from celsius', () => {
    stubLocalStorage();
    stubDom();

    const state = new TemperatureUnitState({ initial: 'celsius' });
    const received: TemperatureUnit[] = [];

    simulateToggle(state, (next) => received.push(next));

    expect(received).toEqual(['fahrenheit']);
    state.destroy();
  });

  it('receives celsius when toggling from fahrenheit', () => {
    stubLocalStorage();
    stubDom();

    const state = new TemperatureUnitState({ initial: 'fahrenheit' });
    const received: TemperatureUnit[] = [];

    simulateToggle(state, (next) => received.push(next));

    expect(received).toEqual(['celsius']);
    state.destroy();
  });

  it('receives the correct next unit on each of two successive toggles', () => {
    stubLocalStorage();
    stubDom();

    const state = new TemperatureUnitState({ initial: 'celsius' });
    const received: TemperatureUnit[] = [];
    const hook = (next: TemperatureUnit) => received.push(next);

    simulateToggle(state, hook); // celsius → fahrenheit
    simulateToggle(state, hook); // fahrenheit → celsius

    expect(received).toEqual(['fahrenheit', 'celsius']);
    state.destroy();
  });
});

// ---------------------------------------------------------------------------
// Custom state: works identically with a caller-supplied TemperatureUnitState.
// ---------------------------------------------------------------------------

describe('onbeforetoggle with custom state', () => {
  it('calls the hook and then mutates a custom state instance', () => {
    stubLocalStorage();
    stubDom();

    // Caller creates a scoped (non-singleton) state, e.g. as a context provider.
    const customState = new TemperatureUnitState({ initial: 'celsius' });
    const hookArgs: TemperatureUnit[] = [];

    simulateToggle(customState, (next) => hookArgs.push(next));

    expect(hookArgs).toEqual(['fahrenheit']);
    expect(customState.current).toBe('fahrenheit');

    customState.destroy();
  });
});

// ---------------------------------------------------------------------------
// Backward compatibility: omitting the prop must leave everything unchanged.
// ---------------------------------------------------------------------------

describe('onbeforetoggle backward compatibility', () => {
  it('works with no callback — state still toggles normally', () => {
    const store = stubLocalStorage();
    const { attributes } = stubDom();

    const state = new TemperatureUnitState({ initial: 'celsius' });

    // No onbeforetoggle provided.
    simulateToggle(state);

    expect(state.current).toBe('fahrenheit');
    expect(attributes['data-temp-unit']).toBe('fahrenheit');
    expect(store['temperature-unit']).toBe('fahrenheit');

    state.destroy();
  });

  it('emits exactly one event with correct detail when no callback is given', () => {
    stubLocalStorage();
    stubDom();

    const state = new TemperatureUnitState({ initial: 'celsius' });
    const events: CustomEvent[] = [];
    window.addEventListener('temperature-unit-changed', (e) =>
      events.push(e as CustomEvent)
    );

    simulateToggle(state);

    expect(events).toHaveLength(1);
    expect(events[0].detail).toEqual({ unit: 'fahrenheit' });

    state.destroy();
  });
});

// ---------------------------------------------------------------------------
// Error propagation: a thrown callback error prevents state.set.
// ---------------------------------------------------------------------------

describe('onbeforetoggle error propagation', () => {
  it('re-throws callback errors and leaves state unchanged', () => {
    stubLocalStorage();
    const { attributes } = stubDom();

    const state = new TemperatureUnitState({ initial: 'celsius' });

    expect(() => {
      simulateToggle(state, () => {
        throw new Error('pre-hook veto');
      });
    }).toThrow('pre-hook veto');

    // state.set was never reached.
    expect(state.current).toBe('celsius');
    expect(attributes['data-temp-unit']).toBeUndefined();

    state.destroy();
  });

  it('no window event is fired when the callback throws', () => {
    stubLocalStorage();
    stubDom();

    const state = new TemperatureUnitState({ initial: 'celsius' });
    const events: CustomEvent[] = [];
    window.addEventListener('temperature-unit-changed', (e) =>
      events.push(e as CustomEvent)
    );

    try {
      simulateToggle(state, () => {
        throw new Error('veto');
      });
    } catch {
      // expected
    }

    expect(events).toHaveLength(0);

    state.destroy();
  });

  it('no localStorage write occurs when the callback throws', () => {
    const store = stubLocalStorage();
    stubDom();

    const state = new TemperatureUnitState({ initial: 'celsius' });

    try {
      simulateToggle(state, () => {
        throw new Error('veto');
      });
    } catch {
      // expected
    }

    expect(store['temperature-unit']).toBeUndefined();

    state.destroy();
  });
});
