import slugify from 'slugify';

/**
 * Custom function that returns an author page URL.
 */
export const getAuthorPageUrl = (author: string): string => {
  const authorSlug = slugify(author.trim(), { lower: true });
  return `https://www.reuters.com/authors/${authorSlug}/`;
};
