import { describe, expect, it, vi } from 'vitest';
import type { FeatureCollection, Point } from 'geojson';
import { loadWildfireMapData } from './loadWildfireMapData';

const urls = {
  burntArea: '/burnt-area.geojson',
  fireSpots: '/fire-spots.geojson',
};

const burntArea: FeatureCollection = {
  type: 'FeatureCollection',
  features: [],
};

const fireSpots: FeatureCollection<Point> = {
  type: 'FeatureCollection',
  features: [],
};

describe('loadWildfireMapData', () => {
  it('loads both datasets before returning them', async () => {
    const fetcher = vi.fn<typeof fetch>();
    fetcher
      .mockResolvedValueOnce(new Response(JSON.stringify(burntArea)))
      .mockResolvedValueOnce(new Response(JSON.stringify(fireSpots)));

    await expect(loadWildfireMapData(urls, fetcher)).resolves.toEqual({
      burntArea,
      fireSpots,
    });

    expect(fetcher).toHaveBeenCalledTimes(2);
    expect(fetcher).toHaveBeenNthCalledWith(1, urls.burntArea);
    expect(fetcher).toHaveBeenNthCalledWith(2, urls.fireSpots);
  });

  it('rejects if either dataset cannot be fetched', async () => {
    const fetcher = vi.fn<typeof fetch>();
    fetcher
      .mockResolvedValueOnce(new Response('Not found', { status: 404 }))
      .mockResolvedValueOnce(new Response(JSON.stringify(fireSpots)));

    await expect(loadWildfireMapData(urls, fetcher)).rejects.toThrow(
      'Could not load wildfire map data.'
    );
  });
});
