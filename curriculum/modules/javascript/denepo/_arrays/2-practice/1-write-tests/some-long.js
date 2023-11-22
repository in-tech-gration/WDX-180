/**
 *
 */
export const someLong = (strings = [], long = 5) => {
  let someAreLong = false;
  for (const string of strings) {
    if (string.length >= long) {
      someAreLong = true;
      break;
    }
  }
  return someAreLong;
};
