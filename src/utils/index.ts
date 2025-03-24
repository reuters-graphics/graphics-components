/** Helper function to generate a random 4-character string */
export const random4 = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
