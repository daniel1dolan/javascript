//1. Madlib
// function madlib(name, subject) {
//   return name + "'s favorite subject in school is " + subject;
// }

// console.log(madlib("Daniel", "philosophy"));

//2. Tip Calculator
function tipAmount(bill, service) {
  switch (service) {
    case "good":
      tip = bill * 0.2;
      return tip;
      break;
    case "fair":
      tip = bill * 0.15;
      return tip;
      break;
    case "bad":
      tip = bill * 0.1;
      return tip;
      break;
    default:
      return "Enter good, fair, or bad for service.";
      break;
  }
}
console.log(tipAmount(20, "good"));
