//1. Positive Numbers
// var array = [1, 3, -4, 3, -2];
// var positive = [];
// function positives(nums) {
//   for (var index = 0; index < nums.length; index++) {
//     if (nums[index] > 0) {
//       positive.push(nums[index]);
//     }
//   }
//   console.log(positive);
// }
// positives(array);

//2. Evem Numbers
// var array = [1, 2, 3, 5, 6, 9];
// var evens = [];
// function even(nums) {
//   for (let index = 0; index < nums.length; index++) {
//     if (nums[index] % 2 === 0) {
//       evens.push(nums[index]);
//     }
//   }
//   console.log(evens);
// }
// even(array);

//3. Square Number
// let array = [1, 2, 3, 4, 5];
// let squares = [];
// function square(nums) {
//   for (let x = 0; x < nums.length; x++) {
//     let numsSquared = nums[x] ** 2;
//     squares.push(numsSquared);
//   }
//   console.log(squares);
// }
// square(array);

//4. Cities 1
// var cities = [
//   { name: "Los Angeles", temperature: 60.0 },
//   { name: "Atlanta", temperature: 52.0 },
//   { name: "Detroit", temperature: 48.0 },
//   { name: "New York", temperature: 80.0 }
// ];
// const tempedCities = cities.filter(element => element.temperature < 70);
// console.log(tempedCities);

//5. Cities 2
// var cities = [
//   { name: "Los Angeles", temperature: 60.0 },
//   { name: "Atlanta", temperature: 52.0 },
//   { name: "Detroit", temperature: 48.0 },
//   { name: "New York", temperature: 80.0 }
// ];
// function cityN(element) {
//   const cityNames = cities.map(element => element.name);
//   console.log(cityNames);
// }
// cityN(cities);

//6. Good Job!
// var people = [
//   "Dom",
//   "Lyn",
//   "Kirk",
//   "Autumn",
//   "Trista",
//   "Jesslyn",
//   "Kevin",
//   "John",
//   "Eli",
//   "Juan",
//   "Robert",
//   "Keyur",
//   "Jason",
//   "Che",
//   "Ben"
// ];
// function good(array) {
//   for (x = 0; x < array.length; x++) {
//     console.log("Good job, " + array[x] + "!");
//   }
// }
// good(people);
