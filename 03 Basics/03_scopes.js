/*
  JavaScript Scopes - beginner-friendly guide

  Scope = where a variable is accessible
  - Global: accessible everywhere
  - Function: accessible inside the function
  - Block: accessible inside {...} (let/const only, not var)

  Key points:
  - let & const are BLOCK-scoped (modern, recommended)
  - var is FUNCTION-scoped (avoid in modern JS)
  - Inner scopes can access outer scopes (lexical scoping)
  - This is called "closure"
*/

// --- PART 1: Global vs Function vs Block Scope ---
// Global scope: these are accessible from anywhere in this file
let num1 = 10;
const num2 = 20;
var num3 = 30;

console.log('=== Global scope ===');
console.log('num1 (let):', num1); // 10
console.log('num2 (const):', num2); // 20
console.log('num3 (var):', num3); // 30

function testScope() {
  // Function scope: these variables are only visible inside this function
  let num1 = 100; // shadows global num1
  const num2 = 200; // shadows global num2
  var num3 = 300; // shadows global num3

  // Block scope example (if statement creates a block)
  if (true) {
    // Block scope: let & const are only visible in this {...}
    let num1 = 1000; // shadows function-level num1
    const num2 = 2000; // shadows function-level num2
    var num3 = 3000; // var is NOT block-scoped, affects the whole function

    console.log('=== Inside if block ===');
    console.log('num1 (let):', num1); // 1000
    console.log('num2 (const):', num2); // 2000
    console.log('num3 (var):', num3); // 3000
  }

  // After the if block, let & const are gone; var persists
  console.log('=== Inside function, outside if block ===');
  console.log('num1 (let):', num1); // 100 (let re-declared in block)
  console.log('num2 (const):', num2); // 200 (const re-declared in block)
  console.log('num3 (var):', num3); // 3000 (var changed by the if block!)
}

testScope();

console.log('=== Back to global scope ===');
console.log('num1 (let):', num1); // 10 (unchanged, function scope does not affect global)
console.log('num2 (const):', num2); // 20 (unchanged)
console.log('num3 (var):', num3); // 30 (unchanged, function scope does not affect global var)

console.log('\n--- Summary: let/const are block-scoped, var is function-scoped ---\n');  



// --- PART 2: Lexical Scoping & Closures ---
// Lexical scoping means a function can access variables from its parent scope
// This is called a "closure"

function outer() {
  // outer function scope
  const username = 'Rupesh';

  function inner() {
    // inner function scope
    const website = 'LearnCodeOnline.in';
    // inner can access username from outer scope (closure)
    console.log('=== Closure example ===');
    console.log('username (from outer):', username);
    console.log('website (local):', website);
  }

  // Try to access website from outer function
  // console.log(website); // ERROR: website is not defined here (block/function scoped to inner)

  inner();
}
outer();

console.log('\n--- Lexical Scope: inner functions can access outer variables ---\n');

// --- PART 3: let vs const vs var comparison ---
console.log('=== let vs const vs var ===');

// var - function-scoped, can be redeclared and updated (avoid)
var x = 1;
x = 2; // OK, can update

// let - block-scoped, cannot be redeclared in same scope, can be updated
let y = 1;
// let y = 2; // ERROR: Identifier 'y' has already been declared
y = 2; // OK, can update

// const - block-scoped, cannot be redeclared or updated (use by default)
const z = 1;
// const z = 2; // ERROR: Identifier 'z' has already been declared
// z = 2; // ERROR: Assignment to constant variable

console.log('x (var):', x);
console.log('y (let):', y);
console.log('z (const):', z);

/*
  Quick tips:
  - Use const by default (safest, prevents accidents)
  - Use let if you need to reassign (rare, but needed sometimes)
  - Avoid var in modern JavaScript (it's confusing)
  - Inner scopes can access outer scopes (closure)
  - Outer scopes CANNOT access inner scopes
  - Block scope protects variables: smaller scope = safer
*/


