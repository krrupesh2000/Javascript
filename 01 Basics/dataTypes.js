"use strict"; // enable modern JS semantics and stricter checks

// Primitive values
let name = "Rupesh"
let age = 22
let isLoggedIn = true

/*
Primitive types summary:
- number => IEEE-754 double (safe integer range: ±2^53)
- bigint => arbitrary-size integers (use when beyond number range)
- string => "..."
- boolean => true / false
- null => explicit "no value" placeholder
- undefined => variable declared but not assigned
- symbol => unique identifiers

Non-primitive:
- object => arrays, functions, plain objects, etc.
*/ 

// Note: typeof null is an historical quirk returning "object"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"

