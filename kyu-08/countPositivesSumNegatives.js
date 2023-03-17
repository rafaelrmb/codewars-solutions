/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
*/
function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }

  let positiveCounter = 0;
  let negativesSumTotal = 0;
  for (let num of input) {
    num < 0 ? negativesSumTotal += num : num > 0 ? positiveCounter++ : [];
  }

  return [positiveCounter, negativesSumTotal];
}