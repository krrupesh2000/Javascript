// ========================================
// HOISTING IN JAVASCRIPT
// ========================================

/* 
WHAT IS HOISTING?
================
Hoisting means JavaScript moves declarations to the TOP of their scope 
before executing the code. But the assignments stay where they are.

Think of it like this:
- Declarations get lifted up
- Assignments (values) stay in place
*/

// ========================================
// 1. VARIABLE HOISTING - var
// ========================================

console.log("--- VAR HOISTING ---");

// ❌ This works because of hoisting!
console.log(age); // Output: undefined (NOT an error!)
var age = 25;

/* 
What JavaScript sees:
var age;              // Declaration moved to top (hoisted)
console.log(age);     // undefined
age = 25;             // Assignment stays here
*/


// ========================================
// 2. VARIABLE HOISTING - let & const
// ========================================

console.log("--- LET & CONST HOISTING ---");

/* 
❌ This will ERROR: Cannot access 'name' before initialization
console.log(name);
let name = "John";

Why? let and const are hoisted BUT not initialized.
They're in a "Temporal Dead Zone" (TDZ) until the declaration line.
*/


// ========================================
// 3. FUNCTION HOISTING
// ========================================

console.log("--- FUNCTION HOISTING ---");

// ✅ This works! Function is fully hoisted
greet(); // Output: "Hello!"

function greet() {
  console.log("Hello!");
}

/* 
Function declarations are completely hoisted.
You can call them BEFORE they're defined.
*/

// ❌ But function expressions DON'T work the same way
// sayBye(); // Error: sayBye is not a function

var sayBye = function() {
  console.log("Bye!");
};
// sayBye() works HERE


// ========================================
// 4. PRACTICAL EXAMPLES
// ========================================

console.log("--- PRACTICAL EXAMPLES ---");

// Example 1: var behavior
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

// Example 2: Function can be called before definition
printNumber(10); // Works fine!

function printNumber(num) {
  console.log("Number: " + num);
}

// Example 3: let in a block
{
  console.log(y); // ❌ Would error if uncommented - TDZ
  let y = 100;
}


// ========================================
// QUICK SUMMARY
// ========================================

/*
┌─────────────────────────────────────────────────────┐
│ HOISTING COMPARISON                                 │
├─────────────────┬──────────────────────────────────┤
│ var             │ Hoisted + initialized to        │
│                 │ undefined (No error)            │
├─────────────────┼──────────────────────────────────┤
│ let/const       │ Hoisted BUT in Temporal Dead    │
│                 │ Zone - Error if used before     │
│                 │ declaration line                │
├─────────────────┼──────────────────────────────────┤
│ function        │ Fully hoisted - can call        │
│                 │ before defining                 │
├─────────────────┼──────────────────────────────────┤
│ function expr   │ Not hoisted like functions      │
│ (var/let/const) │ (treated like variables)        │
└─────────────────┴──────────────────────────────────┘
*/

// ========================================
// GOLDEN RULE FOR BEGINNERS
// ========================================

/*
✨ Best Practice:
- Always declare variables at the TOP of their scope
- Always define functions before using them
- Prefer let/const over var (they're more predictable)
- This avoids confusing hoisting behavior!
*/
