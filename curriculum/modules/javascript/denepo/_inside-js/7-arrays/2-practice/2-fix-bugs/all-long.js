// #todo

/**
 *
 */
export const allLong = (strings = [], long = 0) => {
  let allAre = false;
  for (let i = 1; i < strings.length; i++) {
    const next = strings[i];
    if (next.length < long) {
      allAre = false;
      break;
    }
  }
  return allAre;
};
