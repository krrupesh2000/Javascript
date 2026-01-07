// ************************ NUMBERS & BASIC NUMBER METHODS ************************

// Primitive number (recommended) - simple numeric value used throughout code.
const score = 100;
console.log(score); // prints 100

// Number object (rarely needed) - wraps a primitive in an object.
// Use primitive numbers in most cases. This demonstrates the difference.
const balance = new Number(5000);
console.log(balance); // Number {5000}

// `typeof` shows the difference: primitive vs object
console.log(typeof score);   // "number"
console.log(typeof balance); // "object"

// Convert to string and formatting helpers
console.log(balance.toString().length); // length of string "5000" -> 4
console.log(balance.toFixed(2)); // formats number with 2 decimals -> "5000.00"

// `toPrecision` controls significant digits (not fixed decimals)
const num1 = 10.567;
console.log(num1.toPrecision(3)); // "10.6"  -> 3 significant digits
console.log(num1.toPrecision(5)); // "10.567"-> 5 significant digits
console.log(num1.toPrecision(2)); // "11"    -> rounds to 2 sig figs


// Formatting large numbers for display in different locales
const hundereds = 10000000;
console.log(hundereds.toLocaleString()); // default locale (e.g., en-US) -> "10,000,000"
console.log(hundereds.toLocaleString("en-IN")); // Indian formatting -> "1,00,00,000"


// Using Math helpers to find min/max among values
let a = 10;
let b = 25;
let c = 5;

let minValue = Math.min(a, b, c);
let maxValue = Math.max(a, b, c);

console.log(minValue); // 5
console.log(maxValue); // 25


// ******************************* MATH OBJECT *******************************
// The `Math` object contains useful constants and functions for calculations.
console.log(Math); // shows available functions and constants

console.log(Math.abs(-8)); // absolute value -> 8
console.log(Math.round(4.56)); // rounds to nearest integer -> 5
console.log(Math.ceil(4.12));  // rounds up -> 5
console.log(Math.floor(4.99)); // rounds down -> 4
console.log(Math.sqrt(64));    // square root -> 8
console.log(Math.pow(2, 3));   // exponentiation -> 8
console.log(Math.log(1));      // natural logarithm -> 0
console.log(Math.sin(0));      // sine of 0 radians -> 0
console.log(Math.cos(0));      // cosine of 0 radians -> 1
console.log(Math.tan(0));      // tangent of 0 radians -> 0

console.log(Math.min(5,3,2,1,4));
console.log(Math.max(5,3,2,1,4));


// RANDOM NUMBERS
console.log(Math.random());    // generates a float between 0 (inclusive) and 1 (exclusive)

// To get a random integer in a range (1 to 10):
console.log(Math.floor(Math.random() * 10) + 1); // integer between 1 and 10 (inclusive)

// General pattern to get a random integer between `min` and `max` (inclusive):
const min = 10;
const max = 20;
// float between min (inclusive) and max (exclusive): Math.random() * (max - min) + min
// integer inclusive formula below:
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // integer between 10 and 20


