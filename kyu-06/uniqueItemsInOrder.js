/**Implement the function unique_in_order which takes as argument a sequence and returns a list 
 * of items without any elements with the same value next to each other and preserving the original order of elements. */
var uniqueInOrder = function (iterable) {
  iterable = convertStringToArray(iterable);

  let newArr = iterable.filter((item, index) => {
    if (item !== iterable[index + 1]) {
      return item;
    }
  })

  return newArr;
}

function convertStringToArray(iterable) {
  if (typeof (iterable) === 'string') {
    return iterable.split('')
  } else {
    return iterable;
  }
}