/*
╔═══════════════════════════════════════════════════════════════════════╗
║                  TRUTHY & FALSY VALUES IN JAVASCRIPT                  ║
╚═══════════════════════════════════════════════════════════════════════╝

In JavaScript, every value has an inherent boolean value. When used in
a boolean context (like if statements), values are evaluated as either
TRUTHY or FALSY.

═══════════════════════════════════════════════════════════════════════
*/

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FALSY VALUES - Only 6 values are falsy in JavaScript
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
The ONLY 6 falsy values in JavaScript:
  1. false      - The boolean false
  2. 0          - The number zero
  3. -0         - Negative zero
  4. 0n         - BigInt zero
  5. ""         - Empty string
  6. null       - No value
  7. undefined  - Variable declared but not assigned
  8. NaN        - Not-a-Number

Note: These are the ONLY values that evaluate to false in boolean context.
Everything else is TRUTHY!
*/

// Examples of falsy values
if (false) {
    console.log("This won't run");
} else {
    console.log("false is falsy");
}

if (0) {
    console.log("This won't run");
} else {
    console.log("0 is falsy");
}

if ("") {
    console.log("This won't run");
} else {
    console.log("Empty string is falsy");
}

let x;  // undefined
if (x) {
    console.log("This won't run");
} else {
    console.log("undefined is falsy");
}

if (null) {
    console.log("This won't run");
} else {
    console.log("null is falsy");
}

if (NaN) {
    console.log("This won't run");
} else {
    console.log("NaN is falsy");
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TRUTHY VALUES - Everything else is truthy!
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
ALL values that are NOT in the falsy list are TRUTHY.

Examples of truthy values:
  • Any non-zero number: 1, -1, 0.5, 3.14, Infinity
  • Any non-empty string: "0", "false", "hello", " " (space)
  • Any object: {}, {name: "John"}, []
  • Any array: [1, 2, 3], [] (even empty arrays are truthy!)
  • Any function: function(){}, () => {}
  • true (obviously)
  • Symbols
  • BigInt (except 0n)

Remember: Even "false" (as a string) and "0" (as a string) are TRUTHY!
*/

// Examples of truthy values
const userEmail = "rupesh@gmail.com";
if (userEmail) {
    console.log("Got user email");  // ← This runs (non-empty string is truthy)
} else {
    console.log("User email not found");
}
// Output: "Got user email"

if (1) {
    console.log("1 is truthy");  // ← This runs
}

if ("0") {
    console.log('"0" string is truthy');  // ← This runs!
}

if (true) {
    console.log("true is truthy");  // ← This runs
}

if ([]) {
    console.log("Empty array is truthy");  // ← This runs
}

if ({}) {
    console.log("Empty object is truthy");  // ← This runs
}

if ("false") {
    console.log('"false" string is truthy');  // ← This runs!
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CONVERTING TO BOOLEAN - Using !!
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
Use !! (double NOT) or Boolean() to explicitly convert to boolean.

How !!value works:
  • First ! converts to boolean and inverts (truthy→false, falsy→true)
  • Second ! inverts again to get actual boolean value

Syntax: !!value  or  Boolean(value)
*/

console.log(!!1);           // true
console.log(!!0);           // false
console.log(!"");           // true (! of empty string)
console.log(!!"hello");     // true
console.log(!!null);        // false
console.log(!!undefined);   // false

// Using Boolean() function
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean("hello"));  // true

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PRACTICAL EXAMPLES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Example 1: Checking if user exists
const user = { name: "John", age: 25 };
if (user) {
    console.log("User object exists and is truthy");
}

// Example 2: Checking if value is empty
const password = "";
if (!password) {
    console.log("Password is empty - user input required");
}

// Example 3: Using default values with OR operator
const userName = null || "Guest";  // null is falsy, so "Guest" is used
console.log(userName);  // Output: "Guest"

// Example 4: Using nullish coalescing (newer approach)
const score = 0 ?? 100;  // 0 is not null/undefined, so 0 is used
console.log(score);  // Output: 0

// Example 5: Array exists and has elements
const items = [1, 2, 3];
if (items && items.length) {  // Array is truthy AND has length > 0
    console.log("Array has items");
}

// Example 6: Using && for safe operations
const person = { name: "Alice" };
if (person && person.email) {  // Check if person exists before accessing email
    console.log(person.email);
} else {
    console.log("Person has no email");
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMMON GOTCHAS & TIPS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
GOTCHA 1: Empty array [] is TRUTHY!
  if ([]) → true (even though array is empty)
  if ([].length) → false (length is 0, which is falsy)

GOTCHA 2: "0" (string) is TRUTHY!
  if ("0") → true (it's a non-empty string)
  if (0) → false (it's the number zero)

GOTCHA 3: "false" (string) is TRUTHY!
  if ("false") → true (it's a non-empty string)
  if (false) → false (it's the boolean false)

GOTCHA 4: Difference between null and undefined
  typeof null → "object" (this is a JavaScript quirk!)
  typeof undefined → "undefined"

TIP 1: Use === instead of relying on truthy/falsy
  if (value === "") → more explicit than if (!value)

TIP 2: For checking if value exists, prefer === null check
  if (value !== null && value !== undefined) → safe check

TIP 3: Use optional chaining (?.) for safe access
  const email = user?.profile?.email  // Returns undefined if any part is null/undefined
*/
