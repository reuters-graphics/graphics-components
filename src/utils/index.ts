import slugify from 'slugify';

/** Helper function to generate a random 4-character string */
export const random4 = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

/**
 * Custom function that returns an author page URL.
 */
export const getAuthorPageUrl = (author: string): string => {
  const authorSlug = slugify(author.trim(), { lower: true });
  return `https://www.reuters.com/authors/${authorSlug}/`;
};
