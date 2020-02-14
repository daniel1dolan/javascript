// var a = 2;
// console.log(a);
// function vex() {
//   var a = 5;
//   console.log(a);
// }
// vex();
// console.log(a);

// let today = new Date();

// let a = 4

// console.log(today.toDateString());

// let myArray = [0, 2, 3, 4];

// let [a, b, c, d] = myArray;

// console.log(a);

// let helloWorld = () => {};

// let myFunction = () => {
//   console.log("new function");
// };

// myFunction();

// let nums = [5, 6, 7, 8];

// let newArray = nums.map(num => {
//   return num * 2;
// });

// let obj = {
//   x: 5,
//   y: 20,
//   z: 3
// };
// let mult = object => {
//   let { x, y, z } = object;
//   return x * y * z;
// };
// console.log(mult(obj));

// let addTwoNums = (a = 0, b = 0) => {
//   return a + b;
// };

// console.log(addTwoNums(2, 5));

// let multiplyNums = (...args) => {

// };
// multiplyNums(2, 3, 4, 5);

// let multNums = (...args) => {
//   for (let i of args) {
//     console.log(i);
//   }
// };

// multNums(1, 2, 3, 4);

// let a, b, c, d, arr;

// a = [1, 2];

// b = [3, 4];

// c = [5, 6];

// arr = [0, ...a, ...b, ...c, 7, 8];

// console.log(arr);

// let a, b;
// a = "first";
// b = "second";

// [b, a] = [a, b];

// console.log(a, b);

// let a = 4;
// if (a == 4){
//     console.log("a is equal to 4")
// } else{
//     console.log("a is not equal to 4")
// }

// class Person {
//   constructor(fName, lName, age) {
//     this.fName = fName;
//     this.lName = lName;
//     this.age = age;
//     this.count = 0;
//   }
//   greeting = () => {
//     console.log(`Hello ${this.fName} ${this.lName} with an age of ${this.age}`);
//     this.count++;
//   };
//   printCount = () => {
//     if (this.count == 1) {
//       console.log(`${this.fName} has been greeted ${this.count} time.`);
//     } else {
//       console.log(`${this.fName} has been greeted ${this.count} times.`);
//     }
//   };
// }
// let daniel = new Person("Daniel", "Dolan", 20);

// daniel.greeting();
// daniel.greeting();
// daniel.greeting();
// daniel.printCount();

// class Character {
//   constructor(health, power, name) {
//     this.health = health;
//     this.power = power;
//     this.name = name;
//   }
//   attack = enemy => {
//     enemy.health -= this.power;
//   };
//   printStatus = () => {
//     console.log(
//       `${this.name}'s health is ${this.health} and power is ${this.power}.`
//     );
//   };
// }

// class Hero extends Character {
//   constructor(health, power, name) {
//     super(health, power, name);
//   }
// }

// class Goblin extends Character {
//   constructor(health, power, name) {
//     super(health, power, name);
//   }
// }

// let hero = new Hero(10, 4, "Carl");
// let goblin = new Goblin(10, 3, "General Wartface");
// hero.printStatus();
// hero.attack(goblin);
// goblin.printStatus();

// class Todo {
//   constructor(description) {
//     this.description = description;
//   }
// }

// class Lister {
//   constructor() {
//     this.todoArray = [];
//   }
//   addTodo = description => {
//     let todo = new Todo(description);
//     this.todoArray.push(todo);
//   };
//   displayTodos = () => {};
// }

// let lister = new Lister();
