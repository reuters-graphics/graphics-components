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

/** Formats a string containing a full or 3-letter abbreviated month, AM/PM, and am/pm to match the Reuters style.
 *
 * All months, full or abbreviated to 3 letters, are formatted to:
 * - Jan.
 * - Feb.
 * - March
 * - April]
 * - May
 * - June
 * - July
 * - Aug.
 * - Sept.
 * - Oct.
 * - Nov.
 * - Dec.
 *
 * AM and PM are formatted as lowercase.
 *
 */
export const prettifyDate = (input: string) => {
  // Define an object to map full month names to their Reuters style equivalents
  const conversions: { [key: string]: string } = {
    // full months
    january: 'Jan.',
    february: 'Feb.',
    august: 'Aug.',
    september: 'Sept.',
    october: 'Oct.',
    november: 'Nov.',
    december: 'Dec.',

    // 3-letter abbreviations that need fixing
    jan: 'Jan.',
    feb: 'Feb.',
    mar: 'March',
    apr: 'April',
    jun: 'June',
    jul: 'July',
    aug: 'Aug.',
    sep: 'Sept.',
    oct: 'Oct.',
    nov: 'Nov.',
    dec: 'Dec.',
  };

  // If the key in conversions is found in the input (case insensitive), replace it with the corresponding value
  const formatted = Object.keys(conversions).reduce((acc, key) => {
    const regex = new RegExp(`\\b${key}\\b`, 'gi'); // Added 'i' flag for case insensitive
    return acc.replace(regex, conversions[key]);
  }, input);

  // Fix rogue periods in abbreviations (case insensitive)
  const fixedAbbr = formatted
    .replace(/\bmar\./gi, 'March')
    .replace(/\bmarch\./gi, 'March')
    .replace(/\bapr\./gi, 'April')
    .replace(/\bapril\./gi, 'April')
    .replace(/\bmay\./gi, 'May')
    .replace(/\bjune\./gi, 'June')
    .replace(/\bjuly\./gi, 'July')
    .replace(/\bsep\./gi, 'Sept.');

  // Replace double periods with a single period
  const fixedPeriods = fixedAbbr.replace(/\.{2,}/g, '.');

  // Fix am/pm formatting
  return prettifyAmPm(fixedPeriods);
};

const prettifyAmPm = (text: string) => {
  return text.replace(
    /(\d)\s*(am|AM|pm|PM)\b/g,
    (_match, digit, timeDesignator) => {
      const formattedDesignator =
        timeDesignator.toLowerCase() === 'am' ? 'a.m.' : 'p.m.';
      return `${digit} ${formattedDesignator}`;
    }
  );
};
