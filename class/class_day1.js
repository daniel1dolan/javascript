// console.log("hello class");

// var school = "dig crafts";

// // function myFunction(){
// //     pass
// // }
// // "hello" + " " + "there"

// console.log(school.length);

// var concat = "hello";
// var concat2 = 4;
// var concat3 = concat + concat2;
// var indexHello = concat3.indexOf("hello");
// console.log(indexHello);

// var and = true && true;
// console.log(and);

// var age = 17;
// if (age >= 21) {
//   console.log("you get free beer");
// } else if (age < 18) {
//   console.log("What are you doing here?");
// } else {
//   console.log("No beers for you");
// }

var expr = "Papayas";
// if (expr == "Oranges") {
//   console.log("Oranges are $0.59 a pound.");
// } else if (expr == "Mangoes") {
//   console.log("Mangos are out of season, sorry.");
// } else if (expr == "Papayas") {
//   console.log("Papayas are $2.79 a pound.");
//   // expected output: "Papayas are $2.79 a pound."
// } else {
//   console.log("Sorry, we are out of " + expr + ".");
// }

switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
    console.log("Mangos are out of season, sorry.");
    break;
  case "Papayas":
    console.log("Papayas are $2.79 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + expr + ".");
    break;
}
