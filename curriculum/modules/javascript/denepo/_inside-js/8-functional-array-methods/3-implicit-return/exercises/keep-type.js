// #todo

/**
 *
 */
export const keepType = (things = [], type = '') => {
  return things.filter((thing) => {
    return typeof thing === type;
  });
};
