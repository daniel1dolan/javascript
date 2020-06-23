let numbers = [150, 50, 10];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(accumulator, num) {
  return accumulator - num;
}

let fizzBuzzList = [];

function fizzBuzz() {
  for (let i = 0; i < 100; ) {
    fizzBuzzList.push((++i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i);
  }
}

fizzBuzz();

document.getElementById("fizzbuzz").innerHTML = fizzBuzzList;
