/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/
function moveZeros(arr) {
  let noZeroArr = arr.filter(element => element !== 0);
  let zerosArr = arr.filter(element => element === 0);
  return noZeroArr.concat(zerosArr);
}