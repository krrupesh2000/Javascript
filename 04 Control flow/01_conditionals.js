/*
╔═══════════════════════════════════════════════════════════════════════╗
║                    CONDITIONALS IN JAVASCRIPT                         ║
╚═══════════════════════════════════════════════════════════════════════╝

Conditionals allow you to execute different code based on different conditions.

Main types:
  1. if statement
  2. if...else statement
  3. if...else if...else statement
  4. switch statement
  5. Ternary operator (? :)

═══════════════════════════════════════════════════════════════════════
*/

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EXAMPLE 1: Basic if...else Statement
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
Syntax:
if (condition) {
  // code runs if condition is true
} else {
  // code runs if condition is false
}

Note: Use === for comparison (strict equality)
      Avoid == (loose equality) - can cause unexpected behavior
*/

const temperature = 25;

if (temperature === 25) {
    console.log("Perfect Weather");
    
} else {
    console.log("Not perfect");
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EXAMPLE 2: Block Scope with let
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
Variables declared with 'let' inside a block {} are only accessible
within that block (block scope).

Variables declared with 'var' are function-scoped or globally-scoped.

Best Practice: Use 'let' or 'const' instead of 'var'
*/

const score = 95;
if (score >= 90) {
    let power = "flying";  // 'power' only exists inside this if block
    console.log(`You scored an A! You have the power of ${power}.`);
}

// console.log(power);  // ERROR! 'power' is not defined outside the block

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EXAMPLE 3: Single Line if (Not Recommended)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
You can write a single statement without curly braces {},
but this is NOT RECOMMENDED because:
  • Less readable
  • Hard to maintain
  • Easy to make mistakes

BETTER: Always use curly braces for clarity
*/

const balance = 1000
if (balance > 100) console.log("Low balance");  // Single line (avoid this)

// BETTER WAY:
if (balance > 100) {
    console.log("Low balance");
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EXAMPLE 4: if...else if...else Chain
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
Use multiple conditions to check different cases.

Syntax:
if (condition1) {
  // runs if condition1 is true
} else if (condition2) {
  // runs if condition1 is false AND condition2 is true
} else if (condition3) {
  // runs if both above are false AND condition3 is true
} else {
  // runs if all conditions above are false
}

Order matters! The first true condition is executed, others are skipped.
*/

const age = 20;

if (age < 13) {
    console.log("Child");
} else if (age < 20) {
    console.log("Teenager");
} else {
    console.log("Adult");
}
// Output: "Adult" (even though age < 100, that condition is not checked)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EXAMPLE 5: Logical AND (&&) Operator
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
The AND operator (&&) returns true only if ALL conditions are true.

Syntax: if (condition1 && condition2 && condition3) { ... }

Truth Table:
  true  && true  = true
  true  && false = false
  false && true  = false
  false && false = false

Use when: You need multiple conditions to be true at the same time
*/

const userLoggedIn = true;
const debitCard = true;
const loggedInfromGoogle = false;
const loggedInFromEmail = true;
const guestUser = false;

if (userLoggedIn && debitCard) {
    console.log("You can make a purchase");
}
// Output: "You can make a purchase" (both conditions are true)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EXAMPLE 6: Logical OR (||) Operator
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
The OR operator (||) returns true if AT LEAST ONE condition is true.

Syntax: if (condition1 || condition2 || condition3) { ... }

Truth Table:
  true  || true  = true
  true  || false = true
  false || true  = true
  false || false = false

Use when: You need at least one condition to be true
*/

if (loggedInfromGoogle || loggedInFromEmail || guestUser) {
    console.log("User logged in");
}
// Output: "User logged in" (loggedInFromEmail is true)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EXAMPLE 7: Logical NOT (!) Operator
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
The NOT operator (!) reverses/inverts a boolean value.

  !true  = false
  !false = true

Use when: You want to check if something is NOT true
*/

if (!guestUser) {
    console.log("Not a guest user");
}
// Output: "Not a guest user" (guestUser is false, so !guestUser is true)


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EXAMPLE 8: Switch Statement
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
Switch executes different code blocks based on different cases.
Alternative to if...else if chains when comparing ONE value against
multiple specific values.

Syntax:
switch (expression) {
    case value1:
        // runs if expression === value1
        break;  // ⚠️ MUST INCLUDE - prevents "fall-through"
    case value2:
        // runs if expression === value2
        break;
    default:
        // runs if no match found (optional)
}

KEY POINTS:
  • Uses strict equality (===)
  • break statement ESSENTIAL! Without it, code continues to next case
  • 'default' case is like 'else' - optional but recommended
  • Good for: comparing ONE value against MANY cases
  • Avoid for: complex conditions or range checks
*/

// Example 1: Basic switch
const month = 3;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");  // ← This executes
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Invalid month");
}
// Output: "March"

// Example 2: Fall-through (multiple cases same action)
const day = 6;  // Saturday
switch (day) {
    case 6:
    case 7:  // Both Saturday and Sunday do the same thing
        console.log("Weekend");  // Executes for both case 6 and 7
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday");
        break;
}
// Output: "Weekend"

// Example 3: Intentional fall-through (usually avoided)
const fruit = "apple";
let color;
switch (fruit) {
    case "apple":
        color = "red";
        // No break - intentionally falls through
    case "banana":
        if (!color) color = "yellow";
        console.log(`${fruit} is ${color}`);
        break;
}
// Output: "apple is red"

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// OPERATOR PRECEDENCE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
Precedence (highest to lowest):
  1. ! (NOT)
  2. && (AND)
  3. || (OR)

Example:
  true || false && false
  = true || (false && false)  // && evaluated first
  = true || false
  = true

TIP: Use parentheses to make logic clear!
  if ((a && b) || (c && d)) { ... }  // Much clearer
*/

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPARISON OPERATORS CHEAT SHEET
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
=== : Strict equal (value AND type must match)
!== : Strict not equal

== : Loose equal (tries to convert types) - AVOID!
!= : Loose not equal - AVOID!

> : Greater than
< : Less than
>= : Greater than or equal
<= : Less than or equal

Examples:
  5 === 5         → true
  5 === "5"       → false (different types)
  5 == "5"        → true  (loose comparison - BAD!)
  
  10 > 5          → true
  10 >= 10        → true
  "apple" < "zoo" → true (string comparison)
*/