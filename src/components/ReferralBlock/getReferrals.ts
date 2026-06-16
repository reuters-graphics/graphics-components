import { articleIsNotCurrentPage } from './filterCurrentPage';
import type { Article, Referrals, ReferralItem } from './types';

const SECTION_API = 'recent-stories-by-sections-v1';

/** @TODO - Check if collections alias API still exists*/
const COLLECTION_API = 'articles-by-collection-alias-or-id-v1';

/** Map a fetched Reuters.com article into the referral shape. */
const articleToItem = (a: Article): ReferralItem => ({
  url: `https://www.reuters.com${a.canonical_url}`,
  kicker: a.headline_category || a.kicker.name,
  title: a.title,
  imageUrl: a.thumbnail.url,
  imageAlt: a.thumbnail.alt_text || a.thumbnail.caption || '',
  time: new Date(a.display_time),
});

/**
 * Environment gate for the live fetch. The Reuters.com referral API is only
 * same-origin — and therefore CORS-accessible — on production, so by default we
 * only fetch when running on www.reuters.com. Stories and tests can override
 * `enabled` to feed mocked data through the real fetch/transform path without
 * loosening this guard for real, non-production environments.
 */
export const referralsApi = {
  enabled: () =>
    typeof window !== 'undefined' &&
    window.location?.hostname === 'www.reuters.com',
};

interface FetchReferralsOptions {
  /** Section ID/path passed to the recent-stories-by-section API. */
  section?: string;
  /** Collection alias passed to the articles-by-collection API. */
  collection?: string;
  /** Maximum number of referrals to return. */
  number?: number;
}

/**
 * Fetch recent Reuters.com stories for a section or collection and map them
 * into referral items. Returns an empty array when fetching is disabled (see
 * `referralsApi`) or the request fails.
 */
export const fetchReferrals = async ({
  section = '/world/',
  collection,
  number = 4,
}: FetchReferralsOptions): Promise<ReferralItem[]> => {
  if (!referralsApi.enabled()) return [];

  const isCollection = Boolean(collection);
  const API = isCollection ? COLLECTION_API : SECTION_API;

  try {
    const response = await fetch(
      `https://www.reuters.com/pf/api/v3/content/fetch/${API}?` +
        new URLSearchParams({
          query: JSON.stringify({
            section_ids: isCollection ? undefined : section,
            collection_alias: isCollection ? collection : undefined,
            size: 20,
            website: 'reuters',
          }),
        })
    );

    const data = (await response.json()) as Referrals;

    return data.result.articles
      .filter((a) => a?.headline_category || a?.kicker?.name)
      .filter((a) => a?.thumbnail?.url)
      .filter((a) => !a?.content?.third_party)
      .filter(articleIsNotCurrentPage)
      .slice(0, number)
      .map(articleToItem);
  } catch {
    console.warn('Unable to fetch referral links.');
    return [];
  }
};
