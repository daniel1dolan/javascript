let emptyArray = [];
// Truthy, except when a variable.

if (emptyArray == false) {
  console.log("false");
}
if (emptyArray == true) {
  console.log("true");
}
if ([]) {
  console.log("huh");
}
