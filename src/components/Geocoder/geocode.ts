/** Feature types accepted by both endpoints' `types` filters. */
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

/** Feature types that may appear in a Mapbox Geocoding v6 response. */
export type GeocodeResponseFeatureType =
  | GeocodeFeatureType
  | 'block'
  | 'secondary_address';

/** Feature types accepted by the forward endpoint's `types` filter. */
export type ForwardGeocodeFilterType = GeocodeFeatureType | 'secondary_address';

/** Feature types accepted by the reverse endpoint's `types` filter. */
export type ReverseGeocodeFilterType = GeocodeFeatureType;

interface BaseGeocodeOptions<T extends GeocodeResponseFeatureType> {
  /** Mapbox public access token. */
  accessToken: string;
  /** Filter results to one or more countries using ISO 3166-1 alpha-2 codes. */
  country?: string[];
  /** IETF language tags for response text. The first tag is the primary language. */
  language?: string[];
  /** Filter results by feature type. */
  types?: T[];
  /** Geopolitical worldview for boundary representation (e.g. 'us', 'cn', 'in'). Defaults to 'us'. */
  worldview?: string;
  /** Set to true only if results will be stored. Temporary results (the default) must not be cached. */
  permanent?: boolean;
}

export interface GeocodeOptions
  extends BaseGeocodeOptions<ForwardGeocodeFilterType> {
  /** Return partial prefix matches (true) or exact matches only (false). Defaults to true. */
  autocomplete?: boolean;
  /** Limit results to a bounding box: [minLon, minLat, maxLon, maxLat]. Cannot cross the 180th meridian. */
  bbox?: [number, number, number, number];
  /** Maximum number of results to return (1–10). Defaults to 5. */
  limit?: number;
  /** Bias results toward a location: [lon, lat] coordinates or 'ip' to use the request IP. */
  proximity?: [number, number] | 'ip';
  /** Return building entrance data when available (public preview). Defaults to false. */
  entrances?: boolean;
}

export interface ReverseGeocodeOptions
  extends BaseGeocodeOptions<ReverseGeocodeFilterType> {
  /**
   * Maximum number of results to return (1–5). Defaults to 1. Values above 1
   * require exactly one feature type.
   */
  limit?: number;
}

export interface GeocodeFeature {
  type: 'Feature';
  properties: {
    mapbox_id: string;
    feature_type: GeocodeResponseFeatureType;
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

const FORWARD_URL = 'https://api.mapbox.com/search/geocode/v6/forward';
const REVERSE_URL = 'https://api.mapbox.com/search/geocode/v6/reverse';

function appendBaseOptions(
  params: URLSearchParams,
  options: BaseGeocodeOptions<GeocodeResponseFeatureType>
) {
  params.set('access_token', options.accessToken);
  if (options.country) params.set('country', options.country.join(','));
  if (options.language) params.set('language', options.language.join(','));
  if (options.types) params.set('types', options.types.join(','));
  if (options.worldview) params.set('worldview', options.worldview);
  if (options.permanent !== undefined)
    params.set('permanent', String(options.permanent));
}

async function requestGeocodeFeatures(
  url: string,
  params: URLSearchParams,
  permanent: boolean,
  signal?: AbortSignal
): Promise<GeocodeFeature[]> {
  const response = await fetch(`${url}?${params}`, {
    signal,
    cache: permanent ? 'default' : 'no-store',
  });
  if (!response.ok)
    throw new Error(`Geocode request failed: ${response.status}`);

  const data: { features?: GeocodeFeature[] } = await response.json();
  return data.features ?? [];
}

export async function geocode(
  query: string,
  options: GeocodeOptions,
  signal?: AbortSignal
): Promise<GeocodeFeature[]> {
  const params = new URLSearchParams({ q: query });
  appendBaseOptions(params, options);

  if (options.autocomplete !== undefined)
    params.set('autocomplete', String(options.autocomplete));
  if (options.bbox) params.set('bbox', options.bbox.join(','));
  if (options.limit !== undefined) params.set('limit', String(options.limit));
  if (options.proximity)
    params.set(
      'proximity',
      Array.isArray(options.proximity) ?
        options.proximity.join(',')
      : options.proximity
    );
  if (options.entrances !== undefined)
    params.set('entrances', String(options.entrances));

  return requestGeocodeFeatures(
    FORWARD_URL,
    params,
    options.permanent === true,
    signal
  );
}

function validateCoordinate(
  name: 'longitude' | 'latitude',
  value: number,
  min: number,
  max: number
) {
  if (!Number.isFinite(value) || value < min || value > max) {
    throw new RangeError(
      `${name} must be a finite number between ${min} and ${max}`
    );
  }
}

/**
 * Look up the geographic features at a WGS84 longitude/latitude coordinate.
 *
 * Results are ordered from the most specific feature to the least specific.
 * Temporary results are returned by default and must not be cached.
 */
export async function reverseGeocode(
  longitude: number,
  latitude: number,
  options: ReverseGeocodeOptions,
  signal?: AbortSignal
): Promise<GeocodeFeature[]> {
  validateCoordinate('longitude', longitude, -180, 180);
  validateCoordinate('latitude', latitude, -90, 90);

  const params = new URLSearchParams({
    longitude: String(longitude),
    latitude: String(latitude),
  });
  appendBaseOptions(params, options);
  if (options.limit !== undefined) params.set('limit', String(options.limit));

  return requestGeocodeFeatures(
    REVERSE_URL,
    params,
    options.permanent === true,
    signal
  );
}
