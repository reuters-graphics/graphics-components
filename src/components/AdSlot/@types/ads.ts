export type AdType =
  | 'leaderboard'
  | 'sponsorlogo'
  | 'native'
  | 'mpu'
  | 'billboard';

export type PlacementName =
  | 'reuters_desktop_leaderboard_atf'
  | 'reuters_mobile_leaderboard'
  | 'reuters_desktop_native_1'
  | 'reuters_mobile_mpu_1'
  | 'reuters_sponsorlogo'
  | 'reuters_billboard_desktop';

export type DesktopPlacementName =
  | 'reuters_desktop_leaderboard_atf'
  | 'reuters_desktop_native_1'
  | 'reuters_sponsorlogo'
  | 'reuters_billboard_desktop';

export type MobilePlacementName<DesktopPlacementName extends string> =
  DesktopPlacementName extends 'reuters_desktop_leaderboard_atf'
  ? 'reuters_mobile_leaderboard'
  : DesktopPlacementName extends 'reuters_desktop_native_1'
  ? 'reuters_mobile_mpu_1'
  : DesktopPlacementName extends 'reuters_sponsorlogo'
  ? 'reuters_sponsorlogo'
  : DesktopPlacementName extends 'reuters_billboard_desktop'
  ? 'reuters_mobile_mpu_1'
  : never;
