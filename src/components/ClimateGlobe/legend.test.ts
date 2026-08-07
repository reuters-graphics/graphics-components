import { describe, it, expect } from 'vitest';
import { formatCalloutValue } from './legend';

describe('formatCalloutValue', () => {
  it('signs anomaly deltas', () => {
    expect(formatCalloutValue('anomaly', 2.3, 'celsius')).toBe('+2.3°C');
    expect(formatCalloutValue('anomaly', -1.5, 'fahrenheit')).toBe('-1.5°F');
    expect(formatCalloutValue('anomaly', 0, 'celsius')).toBe('+0.0°C');
  });

  it('rounds absolute heat-index peaks', () => {
    expect(formatCalloutValue('wbgt', 27.6, 'celsius')).toBe('28°C');
    expect(formatCalloutValue('utci', 40.2, 'fahrenheit')).toBe('40°F');
  });

  it('formats unitless datasets without a temperature suffix', () => {
    expect(formatCalloutValue('weighted-anomaly', 2.34, 'celsius')).toBe('2.3');
    expect(formatCalloutValue('anomaly-streaks', 12.4, 'celsius')).toBe(
      '12 days'
    );
  });
});
