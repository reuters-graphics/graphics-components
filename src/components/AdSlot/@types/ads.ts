export type LeaderboardAd = {
  mobile: {
    adType: 'leaderboard';
    placementName: 'reuters_mobile_leaderboard';
  };
  desktop: {
    adType: 'leaderboard';
    placementName: 'reuters_desktop_leaderboard_atf';
  };
};

export type SponsorshipAd = {
  mobile: {
    adType: 'sponsorlogo';
    placementName: 'reuters_sponsorlogo';
  };
  desktop: {
    adType: 'sponsorlogo';
    placementName: 'reuters_sponsorlogo';
  };
};

export type InlineAd = {
  mobile: {
    adType: 'mpu' | 'native' | 'mpu2';
    placementName: 'reuters_mobile_mpu_1' | 'reuters_mobile_mpu_2' | 'reuters_mobile_mpu_3';
  };
  desktop: {
    adType: 'native' | 'canvas' | 'flex';
    placementName: 'reuters_desktop_native_1' | 'reuters_desktop_native_2' | 'reuters_desktop_native_3';
  };
};

export type DesktopPlacementName = |
  LeaderboardAd['desktop']['placementName'] |
  SponsorshipAd['desktop']['placementName'] |
  InlineAd['desktop']['placementName'];

export type MobilePlacementName = |
  LeaderboardAd['mobile']['placementName'] |
  SponsorshipAd['mobile']['placementName'] |
  InlineAd['mobile']['placementName'];

export type DesktopAdType = |
  LeaderboardAd['desktop']['adType'] |
  SponsorshipAd['desktop']['adType'] |
  InlineAd['desktop']['adType'];

export type MobileAdType = |
  LeaderboardAd['mobile']['adType'] |
  SponsorshipAd['mobile']['adType'] |
  InlineAd['mobile']['adType'];
