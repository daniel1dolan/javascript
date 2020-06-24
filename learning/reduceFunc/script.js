// let numbers = [150, 50, 10];

// document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

// function myFunc(accumulator, num) {
//   return accumulator - num;
// }

// let fizzBuzzList = [];

// function fizzBuzz() {
//   for (let i = 0; i < 100; ) {
//     fizzBuzzList.push((++i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i);
//   }
// }

// fizzBuzz();

// document.getElementById("fizzbuzz").innerHTML = fizzBuzzList;

// let content = document.querySelector(".mainContent");
// content.textContent = "Hello World";
// content.setAttribute(
//   "style",
//   "color: blue; font-size: 100px; font-family: Helvetica"
// );

// let content = document.querySelector(".mainContent");
// let newElement = document.createElement("span");
// newElement.textContent = "My name is Daniel";
// content.appendChild(newElement);

function createElement(classOfParent, tagType, tagTextString) {
  let parent = document.querySelector("." + classOfParent);
  let newTag = document.createElement(`${tagType}`);
  newTag.textContent = tagTextString;
  parent.appendChild(newTag);
}

createElement("mainContent", "h1", "Hello World");
createElement("mainContent", "span", "This is a span tag");
