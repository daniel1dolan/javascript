let numbers = [150, 50, 10];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(accumulator, num) {
  return accumulator - num;
}
