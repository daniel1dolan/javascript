//1. Madlib
// function madlib(name, subject) {
//   return name + "'s favorite subject in school is " + subject;
// }

// console.log(madlib("Daniel", "philosophy"));

//2. Tip Calculator
// function tipAmount(bill, service) {
//   switch (service) {
//     case "good":
//       tip = bill * 0.2;
//       return tip;
//       break;
//     case "fair":
//       tip = bill * 0.15;
//       return tip;
//       break;
//     case "bad":
//       tip = bill * 0.1;
//       return tip;
//       break;
//     default:
//       return "Enter good, fair, or bad for service.";
//       break;
//   }
// }
// console.log(tipAmount(20, "good"));

//3. Tip Calculator 2
// function totalAmount(bill, service) {
//   total = tipAmount(bill, service) + bill;
//   return total;
// }
// console.log(totalAmount(100, "good"));

//4. Print Numbers
// function printNumbers(start, end) {
//   for (var i = start; i <= end; i++) {
//     console.log(i);
//   }
// }
// printNumbers(1, 10);

//5. Square
// function printSquare(size) {
//   for (var i = 0; i < size; i++) {
//     console.log("*".repeat(size));
//   }
// }
// printSquare(5);

//6. Print a Box
function printBox(width, height) {
  console.log("*".repeat(width));
  for (i = 0; i < height - 2; i++) {
    console.log("*" + " ".repeat(width - 2) + "*");
  }
  console.log("*".repeat(width));
}
printBox(6, 4);
