import type { FeatureCollection, Point } from 'geojson';

export interface WildfireMapDataUrls {
  /** URL for the burned-area GeoJSON. */
  burntArea: string;
  /** URL for the active-fire GeoJSON. */
  fireSpots: string;
}

export interface WildfireMapData {
  /** Burned-area polygons to draw on the map. */
  burntArea: FeatureCollection;
  /** Active-fire points to draw on the map. */
  fireSpots: FeatureCollection<Point>;
}

/** Fetch both GeoJSON files and return them after both requests succeed. */
export async function loadWildfireMapData(
  urls: WildfireMapDataUrls,
  fetcher: typeof fetch = fetch
): Promise<WildfireMapData> {
  const [burntAreaResponse, fireSpotsResponse] = await Promise.all([
    fetcher(urls.burntArea),
    fetcher(urls.fireSpots),
  ]);

  if (!burntAreaResponse.ok || !fireSpotsResponse.ok) {
    throw new Error('Could not load wildfire map data.');
  }

  const [burntArea, fireSpots] = await Promise.all([
    burntAreaResponse.json() as Promise<FeatureCollection>,
    fireSpotsResponse.json() as Promise<FeatureCollection<Point>>,
  ]);

  return { burntArea, fireSpots };
}
