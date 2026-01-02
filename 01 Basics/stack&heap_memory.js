
/*
 * Key ideas (short):
 * - Stack: stores call frames, function/local variables, and primitive values.
 * - The stack is a LIFO (Last-In, First-Out) data structure.
 * - Heap: stores objects/arrays; variables hold references (pointers) to heap.
 * - Assignment of primitives copies the value; assignment of objects copies the reference.
 *
| Memory Area | Purpose                                               |
| ----------- | ----------------------------------------------------- |
| **Stack**   | Stores **execution context** and **primitive values** |
| **Heap**    | Stores **objects and reference types**                |

 * They work together to manage memory during program execution.
 * 
 * 
 * Visual (ASCII) diagram:
 *
 *  STACK (Call frames / locals)            HEAP (objects / allocated data)
 *  ---------------------------------        -------------------------------
 *  [ Global Frame ]                         0x100 -> { val: 1 }
 *  a: 10                                    0x110 -> [1, 2, 3]
 *  objRef: 0x100
 *  foo() frame -> (when called)
 *    arg: 5
 *    temp: 0x110
 *  ---------------------------------        -------------------------------
 *
 * Examples below show the difference between copying primitives vs references.
 */

// Example 1: primitives (behave like values)
let a = 10;
let b = a;      // copy the value
b = 20;
console.log('primitives ->', 'a =', a, ', b =', b); // a = 10, b = 20

// Example 2: objects (references to heap)
let obj1 = { val: 1 };
let obj2 = obj1; // copy the reference (both point to same heap object)
obj2.val = 2;    // mutate via one reference
console.log('objects ->', 'obj1.val =', obj1.val, ', obj2.val =', obj2.val); // both 2

// Example 3: arrays are reference types too
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log('arrays ->', 'arr1 =', arr1, ', arr2 =', arr2); // both [1,2,3,4]

// Example 4: function calls create new stack frames
function increment(x) {
	// `x` here is a local param (primitive copy if number)
	x = x + 1;
	return x;
}
let num = 5;
console.log('function (primitive) ->', increment(num), 'original num =', num); // 6, 5

function pushItem(referenceArr) {
	// `referenceArr` is a reference to the same heap array
	referenceArr.push('new');
}
pushItem(arr1);
console.log('function (reference) ->', arr1); // mutated by function

// Short notes / tips:
// - Prefer `const` for objects you won't rebind (the reference stays constant, content can change).
// - To copy objects/arrays without sharing references, create shallow copies (e.g., spread `[...]` or `{...}`) or deep clone when needed.
// - Thinking in "value vs reference" prevents common bugs when mutating shared data.
//
// Summary:
// - Stack: small, fast, stores execution context and values for primitives and references.
// - Heap: larger, used for objects/structures; variables hold references to heap locations.
// - Primitives copy values; non-primitives copy references — mutating a referenced object affects all references.

