// let regex = new RegExp("digitalcrafts");

// let regex2 = /digital crafts/;

// let someStr =
//   "asdfasdfasdfasdfdigital craftsasdfasdfakjsdfkljkqwoa asdfkjqowielnsd,mxvnkjdflkjhsdlmenwmkjhc,ms,mnf";

// let result = regex.test(someStr);

// let result2 = regex2.test(someStr);

// console.log(result);

// console.log(result2);

// let pattern = /daniel/gi;

// let str =
//   "banasjslspqowixna,skcakskdnabskdflqpwoe4hfjknvljf;lkjsadfiouwernjpnawkdfendanielaskdjfh-[q.,emnxz;lkjsdaflqwlkjsdmckdks;qoejdicncaskduc";

// let pTest = pattern.exec(str);

// console.log(pTest);

// let pattern = /batman | tina fey/gi;

// let str = "batman is really cool, but not as cool as tina fey.";

// let result = str.match(pattern);

// console.log(result);

// let phonePattern = /(\d\d\d)-\d\d\d-\d\d\d\d/g;

// let str =
//   "asdfasdfasdfasdfasdf 333-333-3333 asdfasdmfnwelkfhjsn.d,kanskew.fj 713-713-7137";

// let res = str.match(phonePattern);

// console.log(res);

let pattern = /Bat(man|woman|mobile|copter|bat)/g;
let pattern2 = /Bat(wo)?man/;
let pattern3 = /Bat(wo)*man/g;
let str = "Batmobile lost a wheel";
let str2 = "The Adventures of Batwoman";
let str3 = "The Adventures of Batwowowowoman";
let result = str3.match(pattern3);
console.log(result);
