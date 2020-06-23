// a factor chain is an array where each previous element is a
// factor of the next consecutive element.
// Ex. - [3, 6, 12, 36]

function factorChain(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] % array[i] !== 0) {
      return false;
    }
  }
  return true;
}
console.log(factorChain([1, 2, 4, 8]));
