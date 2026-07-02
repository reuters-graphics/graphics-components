import { describe, it, expect } from 'vitest';
import { normalizeMinLength, normalizeDebounceMs } from './normalize';

describe('normalizeMinLength', () => {
  it('keeps a valid integer', () => {
    expect(normalizeMinLength(3)).toBe(3);
  });

  it('coerces a numeric string (markup passes strings)', () => {
    expect(normalizeMinLength('3')).toBe(3);
  });

  it('floors a fractional value', () => {
    expect(normalizeMinLength(2.9)).toBe(2);
  });

  it('falls back for non-numeric, so the gate is never disabled', () => {
    expect(normalizeMinLength('two')).toBe(2);
    expect(normalizeMinLength(NaN)).toBe(2);
    expect(normalizeMinLength(undefined)).toBe(2);
  });

  it('falls back for sub-1 values (0 would bill empty queries)', () => {
    expect(normalizeMinLength(0)).toBe(2);
    expect(normalizeMinLength(-5)).toBe(2);
  });

  it('honours a custom fallback', () => {
    expect(normalizeMinLength('nope', 3)).toBe(3);
  });
});

describe('normalizeDebounceMs', () => {
  it('keeps a valid non-negative number', () => {
    expect(normalizeDebounceMs(500)).toBe(500);
    expect(normalizeDebounceMs(0)).toBe(0);
  });

  it('coerces a numeric string', () => {
    expect(normalizeDebounceMs('500')).toBe(500);
  });

  it('falls back for non-numeric (NaN would fire on every keystroke)', () => {
    expect(normalizeDebounceMs('fast')).toBe(300);
    expect(normalizeDebounceMs(NaN)).toBe(300);
    expect(normalizeDebounceMs(undefined)).toBe(300);
  });

  it('falls back for negative values', () => {
    expect(normalizeDebounceMs(-100)).toBe(300);
  });

  it('honours a custom fallback', () => {
    expect(normalizeDebounceMs('nope', 500)).toBe(500);
  });
});
