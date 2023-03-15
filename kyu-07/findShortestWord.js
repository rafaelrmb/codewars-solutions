/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
  const wordsArr = s.split(' ');
  let lengthMin = wordsArr[0].length;

  for (item of wordsArr) {
    item.length < lengthMin ? lengthMin = item.length : lengthMin;
  }

  return lengthMin;
}
