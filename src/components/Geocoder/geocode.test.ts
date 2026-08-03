import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  geocode,
  reverseGeocode,
  type GeocodeFeature,
  type GeocodeFeatureType,
} from './geocode';

const feature: GeocodeFeature = {
  type: 'Feature',
  properties: {
    mapbox_id: 'address.123',
    feature_type: 'address',
    name: '20 West 34th Street',
    full_address: '20 West 34th Street, New York, New York 10118',
    coordinates: {
      longitude: -73.9861365,
      latitude: 40.7488949,
    },
    context: {
      place: { mapbox_id: 'place.123', name: 'New York' },
    },
  },
  geometry: {
    type: 'Point',
    coordinates: [-73.9861365, 40.7488949],
  },
};

const jsonResponse = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

describe('geocoding helpers', () => {
  const fetchMock = vi.fn<typeof fetch>();

  beforeEach(() => {
    fetchMock.mockReset();
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('builds a Mapbox v6 reverse request with every supported option', async () => {
    fetchMock.mockResolvedValue(jsonResponse({ features: [feature] }));

    const results = await reverseGeocode(-73.9861365, 40.7488949, {
      accessToken: 'test-token',
      country: ['us', 'ca'],
      language: ['en', 'es'],
      limit: 3,
      types: ['address'],
      worldview: 'us',
      permanent: true,
    });

    expect(results).toEqual([feature]);
    expect(fetchMock).toHaveBeenCalledOnce();

    const [input] = fetchMock.mock.calls[0];
    const url = new URL(String(input));
    expect(`${url.origin}${url.pathname}`).toBe(
      'https://api.mapbox.com/search/geocode/v6/reverse'
    );
    expect(Object.fromEntries(url.searchParams)).toEqual({
      longitude: '-73.9861365',
      latitude: '40.7488949',
      access_token: 'test-token',
      country: 'us,ca',
      language: 'en,es',
      types: 'address',
      worldview: 'us',
      permanent: 'true',
      limit: '3',
    });
    expect(fetchMock.mock.calls[0][1]?.cache).toBe('default');
  });

  it('bypasses the HTTP cache for temporary results', async () => {
    fetchMock.mockResolvedValue(jsonResponse({ features: [] }));

    await reverseGeocode(0, 0, { accessToken: 'test-token' });

    expect(fetchMock.mock.calls[0][1]?.cache).toBe('no-store');
  });

  it.each([{ features: [] }, {}])(
    'returns an empty array when the response has no results',
    async (response) => {
      fetchMock.mockResolvedValue(jsonResponse(response));

      await expect(
        reverseGeocode(0, 0, { accessToken: 'test-token' })
      ).resolves.toEqual([]);
    }
  );

  it('throws the established status error for an HTTP failure', async () => {
    fetchMock.mockResolvedValue(jsonResponse({ message: 'Rate limited' }, 429));

    await expect(
      reverseGeocode(0, 0, { accessToken: 'test-token' })
    ).rejects.toThrow('Geocode request failed: 429');
  });

  it('accepts coordinates at the WGS84 bounds', async () => {
    fetchMock.mockImplementation(async () => jsonResponse({ features: [] }));

    await reverseGeocode(-180, -90, { accessToken: 'test-token' });
    await reverseGeocode(180, 90, { accessToken: 'test-token' });

    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it.each([
    ['longitude', Number.NaN, 0],
    ['longitude', Number.NEGATIVE_INFINITY, 0],
    ['longitude', -180.0001, 0],
    ['longitude', 180.0001, 0],
    ['latitude', 0, Number.NaN],
    ['latitude', 0, Number.POSITIVE_INFINITY],
    ['latitude', 0, -90.0001],
    ['latitude', 0, 90.0001],
  ])(
    'rejects an invalid %s before requesting',
    async (coordinate, longitude, latitude) => {
      await expect(
        reverseGeocode(longitude, latitude, { accessToken: 'test-token' })
      ).rejects.toThrow(`${coordinate} must be a finite number`);
      expect(fetchMock).not.toHaveBeenCalled();
    }
  );

  it.each([0, 1.5, 6, Number.NaN, Number.POSITIVE_INFINITY])(
    'rejects invalid reverse limit %s before requesting',
    async (limit) => {
      await expect(
        reverseGeocode(0, 0, { accessToken: 'test-token', limit })
      ).rejects.toThrow('limit must be an integer between 1 and 5');
      expect(fetchMock).not.toHaveBeenCalled();
    }
  );

  it('requires exactly one type when the reverse limit is greater than 1', async () => {
    await expect(
      reverseGeocode(0, 0, { accessToken: 'test-token', limit: 2 })
    ).rejects.toThrow(
      'types must contain exactly one feature type when limit is greater than 1'
    );
    await expect(
      reverseGeocode(0, 0, {
        accessToken: 'test-token',
        limit: 2,
        types: [],
      })
    ).rejects.toThrow(
      'types must contain exactly one feature type when limit is greater than 1'
    );
    await expect(
      reverseGeocode(0, 0, {
        accessToken: 'test-token',
        limit: 2,
        types: ['address', 'place'],
      })
    ).rejects.toThrow(
      'types must contain exactly one feature type when limit is greater than 1'
    );
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('passes through the AbortSignal and does not swallow abort errors', async () => {
    fetchMock.mockImplementation(async (_input, init) => {
      await new Promise<void>((_resolve, reject) => {
        init?.signal?.addEventListener(
          'abort',
          () =>
            reject(new DOMException('The operation was aborted', 'AbortError')),
          { once: true }
        );
      });
      return jsonResponse({ features: [] });
    });

    const controller = new AbortController();
    const request = reverseGeocode(
      -73.9861365,
      40.7488949,
      { accessToken: 'test-token' },
      controller.signal
    );
    controller.abort();

    await expect(request).rejects.toMatchObject({ name: 'AbortError' });
    expect(fetchMock.mock.calls[0][1]?.signal).toBe(controller.signal);
  });

  it('keeps forward geocoding on the v6 forward endpoint', async () => {
    fetchMock.mockResolvedValue(jsonResponse({ features: [feature] }));
    const controller = new AbortController();
    const types: GeocodeFeatureType[] = ['place'];

    await expect(
      geocode(
        'New York',
        {
          accessToken: 'test-token',
          autocomplete: false,
          limit: 1,
          types,
        },
        controller.signal
      )
    ).resolves.toEqual([feature]);

    const [input, init] = fetchMock.mock.calls[0];
    const url = new URL(String(input));
    expect(`${url.origin}${url.pathname}`).toBe(
      'https://api.mapbox.com/search/geocode/v6/forward'
    );
    expect(url.searchParams.get('q')).toBe('New York');
    expect(url.searchParams.get('autocomplete')).toBe('false');
    expect(url.searchParams.get('limit')).toBe('1');
    expect(url.searchParams.get('types')).toBe('place');
    expect(init?.signal).toBe(controller.signal);
    expect(init?.cache).toBe('no-store');
  });
});
