import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import Legend from './Legend.svelte';

describe('Legend component', () => {
  it('renders sorted threshold ranges, title and formatted boundary labels', () => {
    const { body } = render(Legend, {
      props: {
        title: 'Temperature',
        subtitle: 'Daily high',
        mode: 'threshold',
        formatter: (value) => `${value}°`,
        items: [
          { from: 20, color: 'red' },
          { to: 0, color: 'blue' },
          { from: 0, to: 20, color: 'orange' },
        ],
      },
    });

    expect(body).toContain('is-threshold');
    expect(body).toContain('id="legend-temperature"');
    expect(body).toContain('Daily high');
    expect(body).toContain('threshold-segment');
    expect(body).toContain('0°');
    expect(body).toContain('20°');
  });

  it('renders a continuous gradient and the requested tick labels', () => {
    const { body } = render(Legend, {
      props: {
        title: 'Coverage',
        mode: 'continuous',
        stops: [
          { value: 0, color: 'navy' },
          { value: 100, color: 'gold' },
        ],
        ticks: [
          { value: 0, label: 'Low' },
          { value: 50, label: 'Middle' },
          { value: 100, label: 'High' },
        ],
      },
    });

    expect(body).toContain('is-continuous');
    expect(body).toContain('linear-gradient(90deg');
    expect(body).toContain('Low');
    expect(body).toContain('Middle');
    expect(body).toContain('High');
  });

  it('renders a diverging scale around its labeled midpoint', () => {
    const { body } = render(Legend, {
      props: {
        mode: 'diverging',
        formatter: (value) => `${value}°`,
        items: [
          { from: -10, to: 0, color: 'blue' },
          { from: 0, to: 10, color: 'red' },
        ],
        midpoint: { value: 0, label: 'Normal' },
      },
    });

    expect(body).toContain('is-diverging');
    expect(body).toContain('diverging-midpoint');
    expect(body).toContain('Normal');
    expect(body).toContain('-10°');
    expect(body).toContain('10°');
  });

  it('renders categorical labels and the no-data swatch', () => {
    const { body } = render(Legend, {
      props: {
        mode: 'categorical',
        items: [
          { color: 'blue', label: 'Water' },
          { color: 'green', label: 'Land' },
        ],
        noData: { label: 'No data', color: 'grey' },
      },
    });

    expect(body).toContain('is-categorical');
    expect(body).toContain('Water');
    expect(body).toContain('Land');
    expect(body).toContain('categorical-no-data-item');
    expect(body).toContain('No data');
  });

  it('renders proportional symbols with labels and an accessible SVG name', () => {
    const { body } = render(Legend, {
      props: {
        title: 'Population',
        mode: 'proportional-symbols',
        items: [
          { value: 25, label: '25' },
          { value: 100, label: '100' },
        ],
      },
    });

    expect(body).toContain('is-proportional');
    expect(body).toContain('role="img"');
    expect(body).toContain('aria-label="Population"');
    expect(body).toContain('>100</text>');
    expect(body).toContain('>25</text>');
    expect(body).toContain('r="58"');
    expect(body).toContain('r="29"');
  });

  it('adds a no-data key to a threshold scale', () => {
    const { body } = render(Legend, {
      props: {
        mode: 'threshold',
        items: [
          { from: 0, to: 10, color: 'blue' },
          { from: 10, color: 'red' },
        ],
        noData: { label: 'Not available' },
      },
    });

    expect(body).toContain('legend-no-data-item');
    expect(body).toContain('Not available');
    expect(body).toContain('var(--grey-200)');
  });
});
