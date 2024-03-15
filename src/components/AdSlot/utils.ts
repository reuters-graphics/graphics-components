const random4 = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

export const getRandomAdId = () => 'ad-' + random4() + random4();
