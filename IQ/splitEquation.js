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
let parenthesisEquation = "12*5-(5*(32+4))+3";

let split = (expression, operator) => {
  const result = [];
  let braces = 0;
  let currentChunk = "";
  for (let i = 0; i < expression.length; i++) {
    const curCh = expression[i];
    if (curCh == "(") {
      braces++;
    } else if (curCh == ")") {
      braces--;
    }
    if (braces == 0 && operator == curCh) {
      result.push(currentChunk);
      currentChunk = "";
    } else currentChunk += curCh;
  }
  if (currentChunk != "") {
    result.push(currentChunk);
  }
  return result;
};

let parseMultiplicationSeparatedExpression = (expression) => {
  const numberString = split(expression, "*");
  const numbers = numberString.map((noStr) => {
    if (noStr[0] == "(") {
      const expr = noStr.substr(1, noStr.length - 2);

      return parsePlusSeparatedExpression(expr);
    }
    return parseInt(noStr);
  });
  const initVal = 1.0;
  const result = numbers.reduce((acc, num) => acc * num, initVal);
  return result;
};

let parseMinusSeparatedExpression = (expression) => {
  const numbersString = split(expression, "-");
  const numbers = numbersString.map((noStr) =>
    parseMultiplicationSeparatedExpression(noStr)
  );
  const initVal = numbers[0];
  const result = numbers.splice(1).reduce((acc, num) => acc - num, initVal);
  return result;
};

let parsePlusSeparatedExpression = (expression) => {
  const numbersString = split(expression, "+"); // ["123", "58", "49"]
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

parsePlusSeparatedExpression(parenthesisEquation);
