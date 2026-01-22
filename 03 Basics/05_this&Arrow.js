// ========================================
// THIS KEYWORD & ARROW FUNCTIONS
// ========================================

/* 
WHAT IS 'this'?
===============
'this' refers to the object that is executing the current code.
The value of 'this' depends on HOW and WHERE a function is called.
*/

// ========================================
// 1. THIS IN OBJECT METHODS
// ========================================

console.log("--- THIS IN OBJECT METHODS ---");

const user = {
    username: "Rupesh",
    price: 1000,

    // Regular function - 'this' refers to the object
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
    }
};

user.welcomeMessage(); // Output: "Rupesh, welcome to website"
// 'this' = user object

user.username = "John";
user.welcomeMessage(); // Output: "John, welcome to website"
// 'this' still refers to user object


// ========================================
// 2. THIS IN GLOBAL SCOPE
// ========================================

console.log("--- THIS IN GLOBAL SCOPE ---");

console.log(this); // In browser: window object, In Node.js: global object


// ========================================
// 3. THIS IN REGULAR FUNCTION
// ========================================

console.log("--- THIS IN REGULAR FUNCTION ---");

// ❌ Regular function - 'this' is undefined in strict mode (or global in non-strict)
function study() {
    let subject = "JavaScript";
    console.log(this); // Not useful here
    console.log(this.subject); // undefined
}
// study();


// ========================================
// 4. THIS IN FUNCTION EXPRESSION
// ========================================

console.log("--- THIS IN FUNCTION EXPRESSION ---");

// ❌ Still doesn't have its own 'this'
// const study = function() {
//     let subject = "JavaScript";
//     console.log(this);
// }
// study();


// ========================================
// 5. ARROW FUNCTION vs REGULAR FUNCTION
// ========================================

console.log("--- ARROW FUNCTION KEY DIFFERENCE ---");

/* 
🔑 IMPORTANT: Arrow functions DON'T have their own 'this'
   They INHERIT 'this' from the surrounding scope (parent scope)
*/

// ❌ Arrow function - inherits 'this' from parent (global in this case)
const arrowStudy = () => {
    let subject = "JavaScript";
    console.log(this); // Inherits parent 'this'
};
arrowStudy();


// ========================================
// 6. ARROW FUNCTION SYNTAX
// ========================================

console.log("--- ARROW FUNCTION SYNTAX ---");

// Syntax 1: Multiple parameters, multiple statements
const addTwoVerbose = (num1, num2) => {
    return num1 + num2;
};
console.log(addTwoVerbose(5, 10)); // Output: 15

// Syntax 2: Implicit return (no curly braces, one-liner)
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(5, 10)); // Output: 15

// Syntax 3: Return object (needs parentheses around object)
const user1 = (username, location) => ({
    username: username,
    location: location
});
console.log(user1("Rupesh", "Delhi"));
// Output: { username: 'Rupesh', location: 'Delhi' }

// Syntax 4: Single parameter (no parentheses needed)
const square = x => x * x;
console.log(square(5)); // Output: 25

// Syntax 5: No parameters (parentheses required)
const greet = () => "Hello!";
console.log(greet()); // Output: "Hello!"


// ========================================
// 7. THIS IN ARROW FUNCTIONS - DETAILED
// ========================================

console.log("--- THIS BEHAVIOR WITH ARROW vs REGULAR ---");

const person = {
    name: "Alice",
    
    // Regular function - has its own 'this'
    sayName1: function() {
        console.log(this.name); // Output: "Alice"
    },
    
    // Arrow function - inherits 'this' from parent
    sayName2: () => {
        console.log(this.name); // Output: undefined (global this)
    }
};

person.sayName1(); // Works! ✅
person.sayName2(); // Doesn't work! ❌


// ========================================
// 8. THIS IN NESTED FUNCTIONS
// ========================================

console.log("--- THIS IN NESTED FUNCTIONS ---");

const company = {
    name: "Google",
    
    showDetails: function() {
        console.log("Company: " + this.name); // "Google"
        
        // ❌ Regular nested function loses 'this'
        const regularNested = function() {
            console.log(this.name); // undefined
        };
        regularNested();
        
        // ✅ Arrow function maintains 'this'
        const arrowNested = () => {
            console.log(this.name); // "Google"
        };
        arrowNested();
    }
};

company.showDetails();


// ========================================
// 9. ARROW FUNCTIONS IN ARRAYS
// ========================================

console.log("--- ARROW FUNCTIONS IN ARRAYS ---");

const numbers = [1, 2, 3, 4, 5];

// Arrow functions are perfect for array methods
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]


// ========================================
// 10. QUICK COMPARISON TABLE
// ========================================

console.log("--- COMPARISON ---");

/*
┌──────────────────────────────────────────────────────────┐
│ REGULAR FUNCTION vs ARROW FUNCTION                       │
├───────────────────┬──────────────────────────────────────┤
│ Own 'this'        │ Regular: YES                         │
│                   │ Arrow: NO (inherits from parent)     │
├───────────────────┼──────────────────────────────────────┤
│ Arguments object  │ Regular: YES                         │
│                   │ Arrow: NO                            │
├───────────────────┼──────────────────────────────────────┤
│ Can be            │ Regular: YES (in object)             │
│ used as methods   │ Arrow: NO (loses 'this' binding)     │
├───────────────────┼──────────────────────────────────────┤
│ Best for          │ Regular: Object methods, callbacks   │
│                   │ Arrow: Array methods, short code     │
├───────────────────┼──────────────────────────────────────┤
│ Constructor       │ Regular: YES (with new)              │
│ with new          │ Arrow: NO                            │
└───────────────────┴──────────────────────────────────────┘
*/


// ========================================
// 11. COMMON MISTAKES
// ========================================

console.log("--- COMMON MISTAKES ---");

// ❌ MISTAKE 1: Using arrow function as object method
const obj = {
    value: 42,
    getValue: () => {
        return this.value; // Returns undefined, not 42!
    }
};
// obj.getValue(); // ❌ Wrong

// ✅ CORRECT: Use regular function
const obj2 = {
    value: 42,
    getValue: function() {
        return this.value; // Returns 42 ✅
    }
};
console.log(obj2.getValue()); // Output: 42


// ========================================
// 12. BEST PRACTICES
// ========================================

/*
✨ WHEN TO USE ARROW FUNCTIONS:
✅ Array methods (map, filter, reduce)
✅ Callbacks and promises
✅ Short, one-line functions
✅ When you DON'T need 'this'

❌ WHEN NOT TO USE ARROW FUNCTIONS:
❌ Object methods (use regular function)
❌ Constructor functions (use regular function)
❌ When you NEED 'this' to refer to the object
*/