import { describe, expect, it } from 'vitest';
import {
  convertDelta,
  convertTemperature,
  formatDelta,
  formatTemperature,
  isTemperatureUnit,
  otherUnit,
  unitSuffix,
} from './units';

describe('conversions', () => {
  it('converts absolute temperatures', () => {
    expect(convertTemperature(0, 'celsius')).toBe(0);
    expect(convertTemperature(0, 'fahrenheit')).toBe(32);
    expect(convertTemperature(100, 'fahrenheit')).toBe(212);
    expect(convertTemperature(-40, 'fahrenheit')).toBe(-40);
  });

  it('converts deltas without the +32 offset', () => {
    expect(convertDelta(0, 'fahrenheit')).toBe(0);
    expect(convertDelta(5, 'fahrenheit')).toBe(9);
    expect(convertDelta(5, 'celsius')).toBe(5);
  });
});

describe('suffix + guards', () => {
  it('produces suffixes', () => {
    expect(unitSuffix('celsius')).toBe('°C');
    expect(unitSuffix('fahrenheit')).toBe('°F');
    expect(unitSuffix('fahrenheit', { degree: false })).toBe('F');
  });

  it('guards and flips units', () => {
    expect(isTemperatureUnit('celsius')).toBe(true);
    expect(isTemperatureUnit('kelvin')).toBe(false);
    expect(isTemperatureUnit(null)).toBe(false);
    expect(otherUnit('celsius')).toBe('fahrenheit');
    expect(otherUnit('fahrenheit')).toBe('celsius');
  });
});

describe('formatTemperature', () => {
  it('rounds and suffixes', () => {
    expect(formatTemperature(22.4, 'celsius', { digits: 1 })).toBe('22.4°C');
    expect(formatTemperature(22.4, 'fahrenheit')).toBe('72°F');
    expect(formatTemperature(22.4, 'fahrenheit', { suffix: false })).toBe('72');
  });
});

describe('formatDelta', () => {
  it('adds an explicit sign with a true minus', () => {
    expect(formatDelta(3, 'celsius')).toBe('+3°C');
    expect(formatDelta(3, 'fahrenheit')).toBe('+5°F');
    expect(formatDelta(-2, 'celsius')).toBe('\u22122°C');
    expect(formatDelta(0, 'celsius')).toBe('0°C');
  });

  it('rounds before choosing the sign (no "-0")', () => {
    expect(formatDelta(-0.4, 'celsius', { digits: 0 })).toBe('0°C');
  });
});
