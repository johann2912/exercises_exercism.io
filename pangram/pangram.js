//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (prayer) => {
  const LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");
  const LOWER_CASE = prayer.toLowerCase();

  return LETTERS.every((letter) => LOWER_CASE.includes(letter));
};
