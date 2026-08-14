/**
 * The curated timezone abbreviation whitelist.
 *
 * Editorial data, deliberately kept apart from the formatting logic in
 * `./format.ts` — this list changes on a different cadence (an editor adding a
 * region) than the code that consumes it, so a whitelist change should touch
 * one data file containing no functions.
 *
 * Consumed only by `./labels.ts`.
 */

export type WhitelistEntry = {
  short: string;
  long: string;
};

/**
 * Keys are:
 *
 *   "<canonical IANA timezone>|<English long Intl timezone name>"
 *
 * Keeping the IANA zone in the key prevents collisions such as:
 * - IST: India / Ireland / Israel
 * - CST: North America / China / Cuba
 * - BST: British Summer Time / Bangladesh Standard Time
 *
 * Add only labels you are comfortable showing globally without a country or
 * city qualifier.
 */
export const TIME_ZONE_WHITELIST: Readonly<Record<string, WhitelistEntry>> = {
  // Universal / UK / Europe
  'UTC|Coordinated Universal Time': {
    short: 'UTC',
    long: 'Coordinated Universal Time',
  },
  'Europe/London|Greenwich Mean Time': {
    short: 'GMT',
    long: 'Greenwich Mean Time',
  },
  'Europe/London|British Summer Time': {
    short: 'BST',
    long: 'British Summer Time',
  },

  'Europe/Paris|Central European Standard Time': {
    short: 'CET',
    long: 'Central European Time',
  },
  'Europe/Paris|Central European Summer Time': {
    short: 'CEST',
    long: 'Central European Summer Time',
  },

  'Europe/Lisbon|Western European Standard Time': {
    short: 'WET',
    long: 'Western European Time',
  },
  'Europe/Lisbon|Western European Summer Time': {
    short: 'WEST',
    long: 'Western European Summer Time',
  },

  'Europe/Athens|Eastern European Standard Time': {
    short: 'EET',
    long: 'Eastern European Time',
  },
  'Europe/Athens|Eastern European Summer Time': {
    short: 'EEST',
    long: 'Eastern European Summer Time',
  },

  'Europe/Moscow|Moscow Standard Time': {
    short: 'MSK',
    long: 'Moscow Standard Time',
  },

  // Asia
  'Asia/Kolkata|India Standard Time': {
    short: 'IST',
    long: 'India Standard Time',
  },
  'Asia/Karachi|Pakistan Standard Time': {
    short: 'PKT',
    long: 'Pakistan Standard Time',
  },
  'Asia/Kathmandu|Nepal Time': {
    short: 'NPT',
    long: 'Nepal Time',
  },
  'Asia/Yangon|Myanmar Time': {
    short: 'MMT',
    long: 'Myanmar Time',
  },
  'Asia/Bangkok|Indochina Time': {
    short: 'ICT',
    long: 'Indochina Time',
  },
  'Asia/Singapore|Singapore Standard Time': {
    short: 'SGT',
    long: 'Singapore Standard Time',
  },
  'Asia/Hong_Kong|Hong Kong Standard Time': {
    short: 'HKT',
    long: 'Hong Kong Time',
  },
  'Asia/Tokyo|Japan Standard Time': {
    short: 'JST',
    long: 'Japan Standard Time',
  },
  'Asia/Seoul|Korean Standard Time': {
    short: 'KST',
    long: 'Korea Standard Time',
  },
  'Asia/Dubai|Gulf Standard Time': {
    short: 'GST',
    long: 'Gulf Standard Time',
  },

  // Africa
  'Africa/Johannesburg|South Africa Standard Time': {
    short: 'SAST',
    long: 'South Africa Standard Time',
  },
  'Africa/Nairobi|East Africa Time': {
    short: 'EAT',
    long: 'East Africa Time',
  },
  'Africa/Lagos|West Africa Time': {
    short: 'WAT',
    long: 'West Africa Time',
  },

  // Australia / New Zealand
  'Australia/Perth|Australian Western Standard Time': {
    short: 'AWST',
    long: 'Australian Western Standard Time',
  },
  'Australia/Adelaide|Australian Central Standard Time': {
    short: 'ACST',
    long: 'Australian Central Standard Time',
  },
  'Australia/Adelaide|Australian Central Daylight Time': {
    short: 'ACDT',
    long: 'Australian Central Daylight Time',
  },
  'Australia/Sydney|Australian Eastern Standard Time': {
    short: 'AEST',
    long: 'Australian Eastern Standard Time',
  },
  'Australia/Sydney|Australian Eastern Daylight Time': {
    short: 'AEDT',
    long: 'Australian Eastern Daylight Time',
  },
  'Pacific/Auckland|New Zealand Standard Time': {
    short: 'NZST',
    long: 'New Zealand Standard Time',
  },
  'Pacific/Auckland|New Zealand Daylight Time': {
    short: 'NZDT',
    long: 'New Zealand Daylight Time',
  },

  // Americas: explicitly described as North American in long form.
  'America/New_York|Eastern Standard Time': {
    short: 'EST',
    long: 'North American Eastern Standard Time',
  },
  'America/New_York|Eastern Daylight Time': {
    short: 'EDT',
    long: 'North American Eastern Daylight Time',
  },
  'America/Chicago|Central Standard Time': {
    short: 'CST',
    long: 'North American Central Standard Time',
  },
  'America/Chicago|Central Daylight Time': {
    short: 'CDT',
    long: 'North American Central Daylight Time',
  },
  'America/Denver|Mountain Standard Time': {
    short: 'MST',
    long: 'North American Mountain Standard Time',
  },
  'America/Denver|Mountain Daylight Time': {
    short: 'MDT',
    long: 'North American Mountain Daylight Time',
  },
  'America/Los_Angeles|Pacific Standard Time': {
    short: 'PST',
    long: 'North American Pacific Standard Time',
  },
  'America/Los_Angeles|Pacific Daylight Time': {
    short: 'PDT',
    long: 'North American Pacific Daylight Time',
  },
  'America/Anchorage|Alaska Standard Time': {
    short: 'AKST',
    long: 'Alaska Standard Time',
  },
  'America/Anchorage|Alaska Daylight Time': {
    short: 'AKDT',
    long: 'Alaska Daylight Time',
  },
  'Pacific/Honolulu|Hawaii-Aleutian Standard Time': {
    short: 'HST',
    long: 'Hawaii Standard Time',
  },
  'America/St_Johns|Newfoundland Standard Time': {
    short: 'NST',
    long: 'Newfoundland Standard Time',
  },
  'America/St_Johns|Newfoundland Daylight Time': {
    short: 'NDT',
    long: 'Newfoundland Daylight Time',
  },
} as const;
