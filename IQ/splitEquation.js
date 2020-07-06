// 1. FIRST ATTEMPT
let equation = "4+4-5*6/5";

// let splitter = (equation) => {
//   let array = equation.split("");
//   return array;
// };

// console.log(splitter(equation));

// 2. SECOND ATTEMPT

let additionEquation = "1+2+3+56";
let multiplicationEquation = "12*5+5*32+3";
// ["12*5+5*32+3"] => ["12*5", "5*32", "3"] => .mapFunction (eachindex)
// [60, 160, 3] => 223
let minusEquation = "12*5-5*32+3";
// String split by plus, call minus separator on each index,
// minus operator splits on - sign and calls multiplication to
// split on multiplaction sign and run multiplaction

let parseMultiplicationSeparatedExpression = (expression) => {
  const numberString = expression.split("*");
  const numbers = numberString.map((noStr) => parseInt(noStr));
  const initVal = 1.0;
  const result = numbers.reduce((acc, num) => acc * num, initVal);
  return result;
};

let parseMinusSeparatedExpression = (expression) => {
  const numbersString = expression.split("-");
  const numbers = numbersString.map((noStr) =>
    parseMultiplicationSeparatedExpression(noStr)
  );
  const initVal = numbers[0];
  const result = numbers.splice(1).reduce((acc, num) => acc - num, initVal);
  return result;
};

let parsePlusSeparatedExpression = (expression) => {
  const numbersString = expression.split("+"); // ["123", "58", "49"]
  console.log(numbersString);
  const numbers = numbersString.map((noStr) =>
    parseMinusSeparatedExpression(noStr)
  );
  console.log(numbers);
  const initVal = 0.0;
  const result = numbers.reduce((acc, num) => acc + num, initVal);
  console.log(result);
  return result;
};

parsePlusSeparatedExpression(minusEquation);
