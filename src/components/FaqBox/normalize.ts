import type { FaqItem } from './types';

/**
 * Filter a raw `faq` prop down to the items worth rendering.
 *
 * Markup and ArchieML docs can pass through malformed entries — a missing
 * answer, a whitespace-only question, or a non-object row — which would
 * otherwise render as empty, un-openable disclosures. This keeps only rows
 * that have both a question and an answer once trimmed, and trims the question
 * so the summary text has no stray leading/trailing whitespace. Answers are
 * left untouched so markdown (which is whitespace-sensitive) is preserved.
 *
 * Non-array input returns an empty array so the section is omitted entirely.
 */
export const normalizeFaqItems = (faq: unknown): FaqItem[] => {
  if (!Array.isArray(faq)) return [];

  return faq.reduce<FaqItem[]>((items, item) => {
    if (!item || typeof item !== 'object') return items;

    const { q, a } = item as Partial<FaqItem>;
    if (typeof q !== 'string' || typeof a !== 'string') return items;

    const question = q.trim();
    if (!question || !a.trim()) return items;

    items.push({ q: question, a });
    return items;
  }, []);
};
