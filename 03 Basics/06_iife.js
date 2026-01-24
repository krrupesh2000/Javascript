/*
============================================
   IIFE - Immediately Invoked Function Expression
============================================

What is IIFE?
- A function that runs the moment it is defined
- Instead of waiting to be called, it executes itself immediately
- Useful for avoiding global scope pollution

Basic Syntax:
(function() {
  console.log("I run immediately!");
})();

Breaking it down:
- (function() { ... })  ← Function expression wrapped in parentheses
- ()                    ← Parentheses at the end that invoke the function
============================================
*/

// ==========================================
// EXAMPLE 1: Simple IIFE
// ==========================================
(function() {
  console.log("I run immediately!");
})();
// Output: I run immediately!


// ==========================================
// EXAMPLE 2: IIFE with Parameters
// ==========================================
(function(name) {
  console.log("Hello, " + name);
})("John");
// Output: Hello, John

(function(x, y) {
  console.log("Sum is:", x + y);
})(10, 20);
// Output: Sum is: 30


// ==========================================
// EXAMPLE 3: Avoid Global Scope Pollution
// ==========================================

// Without IIFE - pollutes global scope
var globalName = "Global";
function globalGreet() {
  console.log(globalName);
}

// With IIFE - keeps things private
(function() {
  var privateName = "Private";
  function privateGreet() {
    console.log(privateName);
  }
  privateGreet();
  // Output: Private
})();

console.log(globalName);  // "Global" (unchanged)
// console.log(privateName);  // ERROR! Not defined


// ==========================================
// EXAMPLE 4: Create Private Variables (Encapsulation)
// ==========================================
(function() {
  var secret = "Only I know this!";
  var hidden = 42;
  
  console.log(secret);  // Works inside IIFE
  console.log(hidden);  // Works inside IIFE
})();

// console.log(secret);  // ERROR! Not accessible outside
// console.log(hidden);  // ERROR! Not accessible outside


// ==========================================
// EXAMPLE 5: Arrow Function IIFE (ES6)
// ==========================================
(() => {
  console.log("Arrow function IIFE!");
})();
// Output: Arrow function IIFE!

((name) => {
  console.log("Hi " + name);
})("Alice");
// Output: Hi Alice


// ==========================================
// EXAMPLE 6: Counter with Private State
// ==========================================
const counter = (function() {
  let count = 0;  // Private variable - cannot be accessed directly
  
  return {
    increment: function() {
      count++;
      console.log("Count:", count);
    },
    decrement: function() {
      count--;
      console.log("Count:", count);
    },
    getCount: function() {
      return count;
    }
  };
})();

counter.increment();  // Count: 1
counter.increment();  // Count: 2
counter.decrement();  // Count: 1
console.log(counter.getCount());  // 1
// console.log(count);  // ERROR! count is private


// ==========================================
// EXAMPLE 7: Module Pattern
// ==========================================
const mathModule = (function() {
  // Private functions
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  
  // Public interface
  return {
    publicAdd: function(a, b) {
      return add(a, b);
    },
    publicSubtract: function(a, b) {
      return subtract(a, b);
    },
    publicMultiply: function(a, b) {
      return multiply(a, b);
    }
  };
})();

console.log(mathModule.publicAdd(10, 5));       // 15
console.log(mathModule.publicSubtract(10, 5));  // 5
console.log(mathModule.publicMultiply(10, 5));  // 50


// ==========================================
// EXAMPLE 8: Avoiding Global Namespace Conflicts
// ==========================================

// App 1
(function() {
  var appName = "App 1";
  var version = "1.0";
  console.log(appName, version);
  // Output: App 1 1.0
})();

// App 2
(function() {
  var appName = "App 2";  // Different variable, no conflict
  var version = "2.0";
  console.log(appName, version);
  // Output: App 2 2.0
})();

// Both apps can use same variable names without conflicts!


// ==========================================
// EXAMPLE 9: IIFE Returning Values
// ==========================================
const result = (function() {
  const a = 10;
  const b = 20;
  return a + b;
})();

console.log(result);  // 30


// ==========================================
// KEY BENEFITS OF IIFE
// ==========================================
/*
✅ Privacy       - Variables stay private inside the function
✅ No Pollution  - Doesn't add to global namespace
✅ Immediate     - Runs immediately without extra function call
✅ Conflict-Free - Each IIFE has its own scope
✅ Modularity    - Foundation for creating modules
*/


// ==========================================
// WHEN TO USE IIFE
// ==========================================
/*
- When you want to run code immediately on page load
- When you need private variables
- When building modules or plugins
- When you want to avoid naming conflicts
- In library/framework initialization
- To wrap third-party code
*/

