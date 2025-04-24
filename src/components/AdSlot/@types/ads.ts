export type LeaderboardAdType = {
  mobile: {
    adType: 'leaderboard';
    placementName: 'reuters_mobile_leaderboard';
  };
  desktop: {
    adType: 'leaderboard';
    placementName: 'reuters_desktop_leaderboard_atf';
  };
};
export type SponsorshipAdType = {
  mobile: {
    adType: 'sponsorlogo';
    placementName: 'reuters_sponsorlogo';
  };
  desktop: {
    adType: 'sponsorlogo';
    placementName: 'reuters_sponsorlogo';
  };
};
export type InlineAdType = {
  mobile: {
    adType: 'mpu' | 'native' | 'mpu2';
    placementName:
    | 'reuters_mobile_mpu_1'
    | 'reuters_mobile_mpu_2'
    | 'reuters_mobile_mpu_3';
  };
  desktop: {
    adType: 'native' | 'canvas' | 'flex';
    placementName:
    | 'reuters_desktop_native_1'
    | 'reuters_desktop_native_2'
    | 'reuters_desktop_native_3';
  };
};
export type DesktopPlacementName =
  | LeaderboardAdType['desktop']['placementName']
  | SponsorshipAdType['desktop']['placementName']
  | InlineAdType['desktop']['placementName'];
export type MobilePlacementName =
  | LeaderboardAdType['mobile']['placementName']
  | SponsorshipAdType['mobile']['placementName']
  | InlineAdType['mobile']['placementName'];
export type DesktopAdType =
  | LeaderboardAdType['desktop']['adType']
  | SponsorshipAdType['desktop']['adType']
  | InlineAdType['desktop']['adType'];
export type MobileAdType =
  | LeaderboardAdType['mobile']['adType']
  | SponsorshipAdType['mobile']['adType']
  | InlineAdType['mobile']['adType'];
