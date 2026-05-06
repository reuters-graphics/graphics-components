export type GeocodeFeatureType =
  | 'country'
  | 'region'
  | 'postcode'
  | 'district'
  | 'place'
  | 'locality'
  | 'neighborhood'
  | 'street'
  | 'address';

export interface GeocodeOptions {
  /** Mapbox public access token. */
  accessToken: string;
  /** Return partial prefix matches (true) or exact matches only (false). Defaults to true. */
  autocomplete?: boolean;
  /** Limit results to a bounding box: [minLon, minLat, maxLon, maxLat]. Cannot cross the 180th meridian. */
  bbox?: [number, number, number, number];
  /** Filter results to one or more countries using ISO 3166-1 alpha-2 codes. */
  country?: string[];
  /** IETF language tags for the response. Also influences result scoring. Max 20. */
  language?: string[];
  /** Maximum number of results to return (1–10). Defaults to 5. */
  limit?: number;
  /** Bias results toward a location: [lon, lat] coordinates or 'ip' to use the request IP. */
  proximity?: [number, number] | 'ip';
  /** Filter results by feature type. */
  types?: GeocodeFeatureType[];
  /** Geopolitical worldview for boundary representation (e.g. 'us', 'cn', 'in'). Defaults to 'us'. */
  worldview?: string;
  /** Set to true if results will be stored/cached permanently. Defaults to false. */
  permanent?: boolean;
  /** Return building entrance data when available (public preview). Defaults to false. */
  entrances?: boolean;
}

export interface GeocodeFeature {
  type: 'Feature';
  properties: {
    mapbox_id: string;
    feature_type: GeocodeFeatureType;
    name: string;
    name_preferred?: string;
    place_formatted?: string;
    full_address?: string;
    coordinates: { longitude: number; latitude: number };
    context: Record<
      string,
      { mapbox_id: string; name: string; [key: string]: unknown }
    >;
  };
  geometry: {
    type: 'Point';
    coordinates: [number, number];
  };
}

const BASE_URL = 'https://api.mapbox.com/search/geocode/v6/forward';

export async function geocode(
  query: string,
  options: GeocodeOptions,
  signal?: AbortSignal
): Promise<GeocodeFeature[]> {
  const params = new URLSearchParams({
    q: query,
    access_token: options.accessToken,
  });

  if (options.autocomplete !== undefined)
    params.set('autocomplete', String(options.autocomplete));
  if (options.bbox) params.set('bbox', options.bbox.join(','));
  if (options.country) params.set('country', options.country.join(','));
  if (options.language) params.set('language', options.language.join(','));
  if (options.limit !== undefined) params.set('limit', String(options.limit));
  if (options.proximity)
    params.set(
      'proximity',
      Array.isArray(options.proximity) ?
        options.proximity.join(',')
      : options.proximity
    );
  if (options.types) params.set('types', options.types.join(','));
  if (options.worldview) params.set('worldview', options.worldview);
  if (options.permanent !== undefined)
    params.set('permanent', String(options.permanent));
  if (options.entrances !== undefined)
    params.set('entrances', String(options.entrances));

  const res = await fetch(`${BASE_URL}?${params}`, { signal });
  if (!res.ok) throw new Error(`Geocode request failed: ${res.status}`);
  const data = await res.json();
  return data.features ?? [];
}
