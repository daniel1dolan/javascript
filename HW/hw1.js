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
// function printBox(width, height) {
//   console.log("*".repeat(width));
//   for (i = 0; i < height - 2; i++) {
//     console.log("*" + " ".repeat(width - 2) + "*");
//   }
//   console.log("*".repeat(width));
// }
// printBox(6, 4);

//7. Banner
// function printBanner(text) {
//   lenText = text.length;
//   console.log("*".repeat(lenText + 4));
//   console.log("* " + text + " *");
//   console.log("*".repeat(lenText + 4));
// }
// printBanner("Welcome to DigitalCrafts");

//8. Leetspeak
// var leetTranslator = { A: 4, E: 3, G: 6, I: 1, O: 0, S: 5, T: 7 };
// function leetspeak(word) {
//   upWord = word.toUpperCase();
//   container = "";
//   for (i = 0; i < word.length; i++) {
//     if (upWord[i] in leetTranslator == true) {
//       container += leetTranslator[upWord[i]];
//     } else {
//       container += upWord[i];
//     }
//   }
//   console.log(container);
// }
// leetspeak("leet");

//9. Long-Vowels
// function longLongVowels(word) {
//   var longPhrase = word
//     .replace(/aa/gi, "aaaa")
//     .replace(/ee/gi, "eeee")
//     .replace(/ii/gi, "iiii")
//     .replace(/oo/gi, "oooo")
//     .replace(/uu/gi, "uuuu");

//   console.log(longPhrase);
// }
// longLongVowels("good");

//10. Just the Positives
// function positiveNumbers(array) {
//   newArray = [];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] >= 0) {
//       newArray.push(array[i]);
//     }
//   }
//   console.log(newArray);
// }
// positiveNumbers([1, -3, 5, -3, 0]);

//11. Caeser Cipher

// function caeserCipher(message, shift) {
//   message = message.toLowerCase();
//   var array = message.split(" ");
//   var newArray = [];
//   var alphabet = "abcdefghijklmnopqrstuvwxyz";

//   if (shift > 25) {
//     shift = shift % 26;
//   }

//   for (var i = 0; i < array.length; i++) {
//     var word = [];
//     for (var j = 0; j < array[i].length; j++) {
//       var index = alphabet.indexOf(array[i][j]);
//       if (shift + index > 25) {
//         var letter = alphabet[index + shift - 26];
//       } else {
//         var letter = alphabet[index + shift];
//       }
//       word.push(letter);
//     }
//     newArray.push(word.join(""));
//   }
//   return newArray.join(" ");
// }
// var ciphered = caeserCipher(
//   "Genius without education is like silver in the mine",
//   13
// );

// //12. Caeser Cipher 2

// function caeserDecipher(message, shift) {
//   message = message.toLowerCase();
//   var array = message.split(" ");
//   var newArray = [];
//   var alphabet = "abcdefghijklmnopqrstuvwxyz";

//   if (shift > 25) {
//     shift = shift % 26;
//   }

//   for (var i = 0; i < array.length; i++) {
//     var word = [];
//     for (var j = 0; j < array[i].length; j++) {
//       var index = alphabet.indexOf(array[i][j]);
//       if (shift > index) {
//         var letter = alphabet[index - shift + 26];
//       } else {
//         var letter = alphabet[index - shift];
//       }
//       word.push(letter);
//     }
//     newArray.push(word.join(""));
//   }
//   console.log(newArray.join(" "));
// }

// var deciphered = caeserDecipher(ciphered, 13);
