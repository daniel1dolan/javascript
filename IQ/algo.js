let fizbuzz = () => {
  let three = 1;
  let five = 1;
  for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log("FizzBuzz");
      three = 1;
      five = 1;
    } else if (three == 3) {
      console.log("Fizz");
      three = 1;
      five++;
    } else if (five == 5) {
      console.log("Buzz");
      five = 1;
      three++;
    } else {
      console.log(i);
      three++;
      five++;
    }
  }
};
{
  const dat = 0;
  console.log(dat);
}
const dat = 2;
console.log(dat);

//1.
