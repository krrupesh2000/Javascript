/*
╔══════════════════════════════════════════════════════════════════════════════╗
║                    EXECUTION CONTEXT IN JAVASCRIPT                          ║
╚══════════════════════════════════════════════════════════════════════════════╝

What is Execution Context?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Execution Context is an abstract concept that holds information about the 
environment in which JavaScript code is executed.

Think of it as a "container" that contains:
  • Variables (var, let, const)
  • Functions
  • The value of 'this'
  • Outer environment reference (scope chain)


Types of Execution Context:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Global Execution Context (GEC)
2. Function Execution Context (FEC)
3. Eval Execution Context (rarely used)

*/

// ╔════════════════════════════════════════════════════════════════════════════╗
// ║                  VISUAL: EXECUTION CONTEXT STRUCTURE                      ║
// ╚════════════════════════════════════════════════════════════════════════════╝

/*
┌─────────────────────────────────────────────────────────────┐
│           EXECUTION CONTEXT OBJECT                          │
├─────────────────────────────────────────────────────────────┤
│  1. Variable Object (VO) / Activation Object (AO)           │
│     - Stores all variables, function declarations           │
│     - Functions get hoisted completely                      │
│     - Variables get hoisted with 'undefined'                │
│                                                             │
│  2. Scope Chain                                             │
│     - Reference to outer environment                        │
│     - Used for variable lookup                              │
│                                                             │
│  3. 'this' Binding                                          │
│     - Depends on how function is called                     │
│     - Global context = window (browser) or global (Node)    │
└─────────────────────────────────────────────────────────────┘
*/


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║                    EXAMPLE 1: GLOBAL EXECUTION CONTEXT                    ║
// ╚════════════════════════════════════════════════════════════════════════════╝

console.log("════ EXAMPLE 1: Global Execution Context ════");

var globalVar = "I'm global";
let globalLet = "Also global";

function globalFunc() {
  console.log("Global function");
}

/*
When the script runs, Global Execution Context is created:

┌─────────────────────────────────────────────┐
│    GLOBAL EXECUTION CONTEXT                 │
├─────────────────────────────────────────────┤
│ Variable Object:                            │
│   - globalVar: "I'm global"                 │
│   - globalLet: "Also global"                │
│   - globalFunc: function reference          │
│                                             │
│ Scope Chain: null (no outer scope)          │
│                                             │
│ this: window (browser) or global (Node.js)  │
└─────────────────────────────────────────────┘
*/


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║                    EXAMPLE 2: FUNCTION EXECUTION CONTEXT                  ║
// ╚════════════════════════════════════════════════════════════════════════════╝

console.log("\n════ EXAMPLE 2: Function Execution Context ════");

function outer() {
  var outerVar = "I'm in outer";
  
  function inner() {
    var innerVar = "I'm in inner";
    console.log(innerVar);   // "I'm in inner"
    console.log(outerVar);   // "I'm in outer" (accessible via scope chain)
  }
  
  inner();
}

outer();

/*
When inner() is called, new execution contexts are created:

┌───────────────────────────────────────────────────────────┐
│        GLOBAL EXECUTION CONTEXT                           │
│  var outerVar, innerVar - NOT here until execution        │
└───────────────────────────────────────────────────────────┘
                          ↓ calls
┌───────────────────────────────────────────────────────────┐
│     OUTER FUNCTION EXECUTION CONTEXT                      │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ Variable Object:                                    │  │
│  │  - outerVar: "I'm in outer"                         │  │
│  │  - inner: function reference                        │  │
│  │                                                     │  │
│  │ Scope Chain: [Global EC]                            │  │
│  │ this: window (if called normally)                   │  │
│  └─────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────┘
                          ↓ calls
┌───────────────────────────────────────────────────────────┐
│     INNER FUNCTION EXECUTION CONTEXT                      │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ Variable Object:                                    │  │
│  │  - innerVar: "I'm in inner"                         │  │
│  │                                                     │  │
│  │ Scope Chain: [Outer EC, Global EC]                  │  │
│  │ this: window (if called normally)                   │  │
│  └─────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────┘
*/


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║              EXAMPLE 3: CALL STACK (Order of Execution)                   ║
// ╚════════════════════════════════════════════════════════════════════════════╝

console.log("\n════ EXAMPLE 3: Call Stack ════");

function first() {
  console.log("1. First function");
  second();
  console.log("4. Back to first");
}

function second() {
  console.log("2. Second function");
  third();
  console.log("3. Back to second");
}

function third() {
  console.log("2.5. Third function");
}

first();

/*
Execution Stack (Call Stack):

Initially:
┌─────────────────────┐
│ Global EC           │
└─────────────────────┘

After first() is called:
┌─────────────────────┐
│ first() EC          │
├─────────────────────┤
│ Global EC           │
└─────────────────────┘

After second() is called:
┌─────────────────────┐
│ second() EC         │
├─────────────────────┤
│ first() EC          │
├─────────────────────┤
│ Global EC           │
└─────────────────────┘

After third() is called:
┌─────────────────────┐
│ third() EC          │
├─────────────────────┤
│ second() EC         │
├─────────────────────┤
│ first() EC          │
├─────────────────────┤
│ Global EC           │
└─────────────────────┘

As functions return, they are popped off the stack
*/


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║                    EXAMPLE 4: 'this' IN DIFFERENT CONTEXTS               ║
// ╚════════════════════════════════════════════════════════════════════════════╝

console.log("\n════ EXAMPLE 4: 'this' Binding ════");

// 4.1 Global context
console.log("Global this:", this);  // window or global object

// 4.2 Function context
function testThis() {
  console.log("In function:", this);  // window or global (in non-strict mode)
}
testThis();

// 4.3 Method context
const obj = {
  name: "Object",
  testThis: function() {
    console.log("In method:", this);  // obj (the object itself)
    console.log("Name from this:", this.name);  // "Object"
  }
};
obj.testThis();

// 4.4 Constructor context
function Person(name) {
  this.name = name;
  console.log("In constructor:", this);  // new object created
}
const person = new Person("John");

// 4.5 Arrow function (lexical 'this')
const arrowObj = {
  name: "Arrow Test",
  regularFunc: function() {
    const arrow = () => {
      console.log("In arrow function:", this);  // inherits 'this' from regularFunc
    };
    arrow();
  }
};
arrowObj.regularFunc();

/*
'this' Binding Rules:

┌──────────────────────────────────────────────────────────┐
│ HOW FUNCTION IS CALLED    │  VALUE OF 'this'            │
├──────────────────────────────────────────────────────────┤
│ Simple call               │  window (global)             │
│ obj.method()              │  obj                         │
│ new Constructor()         │  new object created          │
│ arrow function            │  inherited from outer scope  │
│ func.call(obj, args)      │  obj (explicit)              │
│ func.apply(obj, [args])   │  obj (explicit)              │
│ func.bind(obj)            │  obj (permanent binding)     │
└──────────────────────────────────────────────────────────┘
*/


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║              EXAMPLE 5: HOISTING & EXECUTION CONTEXT                      ║
// ╚════════════════════════════════════════════════════════════════════════════╝

console.log("\n════ EXAMPLE 5: Hoisting & Execution Context ════");

// Before execution, JS engine creates execution context and hoists
console.log(hoistVar);  // undefined (hoisted but not initialized)
// console.log(hoistLet);  // ReferenceError (Temporal Dead Zone)

var hoistVar = "I'm var";
// let hoistLet = "I'm let";

function hoistFunc() {
  return "I'm hoisted function";
}

console.log(hoistFunc());  // Works fine - fully hoisted

/*
Creation Phase (Execution Context Creation):

var hoistVar → undefined (hoisted)
hoistFunc    → function reference (fully hoisted)
let hoistLet → not initialized (Temporal Dead Zone)

Execution Phase:

hoistVar = "I'm var" (assignment)
hoistLet = "I'm let" (now accessible)

Timeline:
┌─────────────────────────────────────────────────────────┐
│ CREATION PHASE (Hoisting)                               │
│ - Scan for function declarations → add to context       │
│ - Scan for var declarations → add as undefined          │
│ - Scan for let/const → add to TDZ (Temporal Dead Zone)  │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ EXECUTION PHASE                                         │
│ - Execute code line by line                             │
│ - Assign values to variables                            │
│ - Call functions                                        │
└─────────────────────────────────────────────────────────┘
*/


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║              EXAMPLE 6: SCOPE CHAIN & EXECUTION CONTEXT                   ║
// ╚════════════════════════════════════════════════════════════════════════════╝

console.log("\n════ EXAMPLE 6: Scope Chain ════");

var globalScope = "Global";

function level1() {
  var level1Scope = "Level 1";
  
  function level2() {
    var level2Scope = "Level 2";
    
    function level3() {
      var level3Scope = "Level 3";
      
      // Can access all scopes above
      console.log(level3Scope);   // "Level 3"
      console.log(level2Scope);   // "Level 2"
      console.log(level1Scope);   // "Level 1"
      console.log(globalScope);   // "Global"
    }
    
    level3();
  }
  
  level2();
}

level1();

/*
Scope Chain:

When level3() executes, JavaScript searches for variables:

1. level3Scope → Found in level3 EC
2. level2Scope → Not in level3, search level2 EC → Found
3. level1Scope → Not in level3/level2, search level1 EC → Found
4. globalScope → Not in any function, search Global EC → Found

If not found anywhere → ReferenceError

Scope Chain:

┌──────────────────────────────┐
│   level3 EC                  │
│   - Variables: level3Scope   │
│   - Scope Chain:             │
│     ↓                        │
├──────────────────────────────┤
│   level2 EC                  │
│   - Variables: level2Scope   │
│   - Scope Chain:             │
│     ↓                        │
├──────────────────────────────┤
│   level1 EC                  │
│   - Variables: level1Scope   │
│   - Scope Chain:             │
│     ↓                        │
├──────────────────────────────┤
│   Global EC                  │
│   - Variables: globalScope   │
│   - Scope Chain: null        │
└──────────────────────────────┘
*/


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║              EXAMPLE 7: CLOSURE & EXECUTION CONTEXT                       ║
// ╚════════════════════════════════════════════════════════════════════════════╝

console.log("\n════ EXAMPLE 7: Closure ════");

function createCounter() {
  let count = 0;  // This remains in memory due to closure
  
  return function increment() {
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1());  // 1
console.log(counter1());  // 2
console.log(counter1());  // 3

const counter2 = createCounter();
console.log(counter2());  // 1 (separate closure)

/*
Closure: A function retains access to its outer function's variables
even after the outer function has returned.

Visual:

┌──────────────────────────────────────────────────────────┐
│ createCounter() called                                   │
│ ┌────────────────────────────────────────────────────┐  │
│ │ Execution Context:                                 │  │
│ │  - count: 0                                        │  │
│ │  - increment function: created and returned       │  │
│ └────────────────────────────────────────────────────┘  │
│ createCounter() finishes BUT...                         │
│ increment() keeps the EC alive in memory! (CLOSURE)     │
└──────────────────────────────────────────────────────────┘

Every time increment() is called:
  1. New execution context created for increment()
  2. Accesses 'count' via scope chain (from closure)
  3. Modifies 'count'
  4. Returns

counter1 and counter2 have SEPARATE closures!
*/


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║                         QUICK REFERENCE SUMMARY                           ║
// ╚════════════════════════════════════════════════════════════════════════════╝

/*
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                    EXECUTION CONTEXT SUMMARY                        ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

EXECUTION CONTEXT CONTAINS:
  ✓ Variable Object (variables, functions)
  ✓ Scope Chain (access to outer variables)
  ✓ 'this' binding

TYPES:
  1. Global Execution Context (created when script loads)
  2. Function Execution Context (created when function is called)

PHASES:
  Creation Phase → memory allocation and hoisting
  Execution Phase → code execution line by line

CALL STACK:
  Functions are added to stack when called
  Functions removed when they return

HOISTING:
  function declarations → fully hoisted
  var → hoisted with undefined
  let/const → Temporal Dead Zone

SCOPE CHAIN:
  Variables searched in current EC first
  Then outer EC, then global
  First match found is used

CLOSURE:
  Function remembers its outer execution context
  Allows data persistence after outer function returns

KEY POINTS:
  ✓ Each function call creates new execution context
  ✓ 'this' depends on how function is called
  ✓ Variable lookup follows scope chain
  ✓ Closures keep execution contexts alive
  ✓ Call stack manages execution order

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

console.log("\n✅ Execution Context concepts covered!");
