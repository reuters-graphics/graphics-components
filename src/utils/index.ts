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
  // Define a object to map full month names to their Reuters style equivalents
  const conversions: { [key: string]: string } = {
    // full months
    January: 'Jan.',
    February: 'Feb.',
    August: 'Aug.',
    September: 'Sept.',
    October: 'Oct.',
    November: 'Nov.',
    December: 'Dec.',

    // 3-letter abbreviations that need fixing
    Jan: 'Jan.',
    Feb: 'Feb.',
    Mar: 'March',
    Apr: 'April',
    Jun: 'June',
    Jul: 'July',
    Sep: 'Sept.',
  };

  // If the key in conversions is found in the input, replace it with the corresponding value
  let formatted = Object.keys(conversions).reduce((acc, key) => {
    const regex = new RegExp(`\\b${key}\\b`, 'g');
    return acc.replace(regex, conversions[key]);
  }, input);

  // Fix rogue periods in abbreviations
  let fixedAbbr = formatted.replace('Mar.', 'March')
    .replace('March.', 'March')
    .replace('Apr.', 'April')
    .replace('April.', 'April')
    .replace('May.', 'May')
    .replace('June.', 'June')
    .replace('July.', 'July')
    .replace('Sep.', 'Sept.');

  // Replace double periods with a single period
  let fixedPeriods = fixedAbbr.replace('..', '.');

  // Fix 'Mar. 1, 2023, 10:00pm' to 'March 1, 2023, 10:00 p.m.', with a space before 'p.m.'
  return prettifyAmPm(fixedPeriods)
}

const prettifyAmPm = (text: string) => {
  return text.replace(/(\d)\s*(am|AM|pm|PM)\b/g, (match, digit, timeDesignator) => {
    const formattedDesignator = timeDesignator.toLowerCase() === 'am'
      ? 'a.m.'
      : 'p.m.';
    return `${digit} ${formattedDesignator}`;
  });
}