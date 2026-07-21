import { describe, expect, it } from 'vitest';
import { normalizeFaqItems } from './normalize';

describe('normalizeFaqItems', () => {
  it('keeps well-formed question/answer pairs', () => {
    const faq = [
      { q: 'What is this?', a: 'A test.' },
      { q: 'And this?', a: 'Another test.' },
    ];
    expect(normalizeFaqItems(faq)).toEqual(faq);
  });

  it('trims whitespace around the question but leaves the answer intact', () => {
    // Answers are markdown, where leading/trailing whitespace can be
    // significant (e.g. list or code formatting), so only the question trims.
    expect(normalizeFaqItems([{ q: '  Padded?  ', a: '  Kept.  ' }])).toEqual([
      { q: 'Padded?', a: '  Kept.  ' },
    ]);
  });

  it('drops items missing a question or an answer', () => {
    const faq = [
      { q: 'Has both', a: 'Yes' },
      { q: 'No answer' },
      { a: 'No question' },
    ];
    expect(normalizeFaqItems(faq)).toEqual([{ q: 'Has both', a: 'Yes' }]);
  });

  it('drops items whose question or answer is empty or whitespace-only', () => {
    const faq = [
      { q: '   ', a: 'Empty question' },
      { q: 'Empty answer', a: '   ' },
      { q: 'Fine', a: 'Fine' },
    ];
    expect(normalizeFaqItems(faq)).toEqual([{ q: 'Fine', a: 'Fine' }]);
  });

  it('ignores non-object rows', () => {
    // The signature accepts `unknown`, so malformed rows need no casts.
    const faq = [null, undefined, 'nope', 42, { q: 'Real', a: 'Row' }];
    expect(normalizeFaqItems(faq)).toEqual([{ q: 'Real', a: 'Row' }]);
  });

  it('returns an empty array for non-array input, so the section is omitted', () => {
    expect(normalizeFaqItems(undefined)).toEqual([]);
    expect(normalizeFaqItems(null)).toEqual([]);
    expect(normalizeFaqItems('faq')).toEqual([]);
  });
});
