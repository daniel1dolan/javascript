let arr = [1, 1, 5, 5, 6, 6, 8, 8, 9, 9];

// let obj = {};
// let filteredArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (!obj[arr[i]]) {
//     filteredArr.push(arr[i]);
//     obj[arr[i]] = true;
//   }
// }

let otherFilteredArray = [];
let incrementor = 0;
while (incrementor != arr.length) {
  if (otherFilteredArray.length === 0) {
    otherFilteredArray.push(arr[incrementor]);
    console.log("first");
    incrementor++;
  } else if (arr[incrementor - 1] === arr[incrementor]) {
    console.log(arr[incrementor - 1], incrementor - 1);
    arr.splice(incrementor, 1);
    console.log("spliced");
  } else {
    otherFilteredArray.push(arr[incrementor]);
    console.log("no match");
    incrementor++;
  }
  console.log(arr, otherFilteredArray);
}
