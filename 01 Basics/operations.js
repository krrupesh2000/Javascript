// Unary negation: flips the sign of a number
let value = 4
let negValue = -value
console.log(negValue);

// Basic arithmetic examples (uncomment to run)
// console.log(2 + 2); // addition
// console.log(2 - 2); // subtraction
// console.log(2 * 2); // multiplication
// console.log(2 ** 2); // exponentiation
// console.log(2 / 2); // division
// console.log(2 % 2); // remainder (modulus)

// String concatenation
let str1 = "Hello";
let str2 = " Rupesh";

let str3 = str1 + str2;
console.log(str3);

// Type coercion when mixing strings and numbers with +
// If a string appears first, subsequent + will concatenate as strings
console.log("1" + 2); // "12"
console.log(1 + "2"); // "12"
console.log("1" + 2 + 2); // "122"
console.log(1 + 2 + "2"); // "32"

// Logging a boolean value
console.log(true);
console.log(+true);

console.log(+"");


let gameCounter = 100
gameCounter++;       //postfix
++gameCounter;       //prefix
console.log(gameCounter);
