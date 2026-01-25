/*
================================
    TERNARY OPERATOR
================================

The ternary operator (? :) is a conditional operator that takes three operands.
It's a shorthand for the if...else statement and is useful for simple conditions.

SYNTAX:
    condition ? expressionIfTrue : expressionIfFalse

- It evaluates the condition
- If TRUE, executes/returns the first expression
- If FALSE, executes/returns the second expression

================================
*/

// ============================================
// 1. BASIC TERNARY OPERATOR
// ============================================

const iceTeaPrice = 100;
iceTeaPrice >= 50 ? console.log("I will buy Ice Tea") : console.log("I will not buy Ice Tea");
// Output: "I will buy Ice Tea" (because 100 >= 50)


// ============================================
// 2. ASSIGNING VALUES WITH TERNARY
// ============================================

const age = 18;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Output: "Adult"

// Equivalent to:
let status2;
if (age >= 18) {
    status2 = "Adult";
} else {
    status2 = "Minor";
}
console.log(status2); // Output: "Adult"


// ============================================
// 3. USING IN FUNCTION RETURNS
// ============================================

function canVote(age) {
    return age >= 18 ? "Can vote" : "Cannot vote";
}

console.log(canVote(20)); // Output: "Can vote"
console.log(canVote(15)); // Output: "Cannot vote"


// ============================================
// 4. NESTED TERNARY OPERATORS
// ============================================

const score = 75;
const grade = score >= 90 ? "A" 
              : score >= 80 ? "B" 
              : score >= 70 ? "C" 
              : score >= 60 ? "D" 
              : "F";

console.log(grade); // Output: "C"

// NOTE: While nesting is possible, deeply nested ternaries can reduce readability
// Consider using if...else for complex logic


// ============================================
// 5. WITH BOOLEAN VALUES
// ============================================

const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(message); // Output: "Welcome back!"


// ============================================
// 6. WITH COMPARISON OPERATORS
// ============================================

const temperature = 25;
const weather = temperature > 30 ? "Hot" 
                : temperature > 20 ? "Warm" 
                : temperature > 10 ? "Cool" 
                : "Cold";

console.log(weather); // Output: "Warm"


// ============================================
// 7. WITH NULL/UNDEFINED CHECKS
// ============================================

let userName = null;
const displayName = userName ? userName : "Guest";
console.log(displayName); // Output: "Guest"

// Better approach using nullish coalescing (??):
const displayName2 = userName ?? "Guest";
console.log(displayName2); // Output: "Guest"


// ============================================
// 8. IN CONDITIONAL RENDERING (React-like)
// ============================================

const isVisible = true;
const element = isVisible ? "<p>Visible</p>" : "<p>Hidden</p>";
console.log(element); // Output: "<p>Visible</p>"


// ============================================
// 9. WITH FUNCTIONS
// ============================================

const divide = (a, b) => b !== 0 ? a / b : "Cannot divide by zero";
console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: "Cannot divide by zero"


// ============================================
// 10. TERNARY WITH SIDE EFFECTS (NOT RECOMMENDED)
// ============================================

let result;
const x = 5;
x > 3 ? (result = "Greater") : (result = "Smaller");
console.log(result); // Output: "Greater"

// Better to use if...else for multiple statements:
if (x > 3) {
    result = "Greater";
} else {
    result = "Smaller";
}


// ============================================
// 11. TERNARY WITHOUT ELSE (USING ||)
// ============================================

const value = null;
const output = value ? value : "default";
console.log(output); // Output: "default"

// Using logical OR (||):
const output2 = value || "default";
console.log(output2); // Output: "default"


// ============================================
// BEST PRACTICES
// ============================================

/*
✓ DO:
  - Use for simple, single-condition decisions
  - Use to assign values conditionally
  - Keep ternaries readable (1-2 levels deep max)
  - Use for concise null/undefined checks

✗ DON'T:
  - Use for complex logic (use if...else instead)
  - Nest more than 2-3 levels deep
  - Use for multiple statements or side effects
  - Use when readability is compromised
*/

// ============================================
// COMPARISON: TERNARY vs IF...ELSE
// ============================================

// TERNARY (Good for simple assignments):
const permission = role === "admin" ? "full access" : "limited access";

// IF...ELSE (Better for complex logic):
let permission2;
if (role === "admin") {
    permission2 = "full access";
    console.log("Admin logged in");
} else {
    permission2 = "limited access";
    console.log("User logged in");
}

// ============================================