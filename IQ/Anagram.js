function anagramChecker(fw, sw) {
  let fwLetters = {};
  let swLetters = {};
  if (fw.length !== sw.length) {
    return false;
  }
  fw.split("").forEach((letter) => {
    if (fwLetters.hasOwnProperty(letter)) {
      fwLetters[letter] += 1;
    } else {
      fwLetters[letter] = 1;
    }
  });
  sw.split("").forEach((letter) => {
    if (swLetters.hasOwnProperty(letter)) {
      swLetters[letter] += 1;
    } else {
      swLetters[letter] = 1;
    }
  });
  Object.keys(fwLetters).forEach((letter) => {
    if (swLetters[letter] !== letter) {
      return false;
    }
  });
  return true;
}

console.log(anagramChecker("angel", "anglel"));
console.log(anagramChecker("bob", "bob"));
