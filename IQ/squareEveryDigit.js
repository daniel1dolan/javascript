const squareDigits = (num) => {
  let array = num.toString().split("");
  let squaredArray = array.map((digit) => {
    return digit ** 2;
  });
  let result = squaredArray.join("");
  return result;
};

console.log(squareDigits(9119));
