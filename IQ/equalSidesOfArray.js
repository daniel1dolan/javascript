let array = [1, 2, 3, 4, 3, 2, 1];

function findEqualSides(array) {
  let found = -1;
  array.forEach((num, index) => {
    let leftSideSum = array.slice(0, index).reduce((a, b) => a + b, 0);
    let rightSideSum = array
      .slice(index + 1, array.length)
      .reduce((a, b) => a + b, 0);
    // console.log(leftSideSum, rightSideSum);
    if (leftSideSum === rightSideSum) {
      found = index;
    }
  });
  return found;
}

console.log(findEqualSides(array));
