let equation = "4+4-5*6/5";

// let splitter = (equation) => {
//   let array = equation.split("");
//   return array;
// };

// console.log(splitter(equation));

let additionEquation = "1+2+3+56";

let parsePlusSeparatedExpression = (expression) => {
  // Convert a string to numbers after splitting them on operator.
  const numbersString = expression.split("+"); // ["123", "58", "49"]
  console.log(numbersString);

  // Converts string numbers to individual numbers
  const numbers = numbersString.map((noStr) => parseInt(noStr));
  console.log(numbers);

  // Accumulates the addition of all the numbers which were
  // split on the operator.
  const initVal = 0.0;
  const result = numbers.reduce((acc, num) => acc + num, initVal);
  console.log(result);
  return result;
};

parsePlusSeparatedExpression(additionEquation);
