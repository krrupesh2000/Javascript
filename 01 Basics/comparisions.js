

// Basic numeric comparisons (no coercion necessary)
console.log(2 > 1);   // true: 2 is greater than 1
console.log(2 >= 1);  // true: 2 is greater than or equal to 1
console.log(2 < 1);   // false: 2 is not less than 1
console.log(2 == 1);  // false: loose equality, numbers compared
console.log(2 != 1);  // true: 2 is not equal to 1

// String-to-number coercion with relational operators
console.log("2" > 1); // true: "2" is coerced to number 2 for >

// Comparisons involving `null`
// - `null == 0` is false: `null` only loosely equals `undefined` (special case)
// - For relational comparisons, `null` is converted to 0
console.log(null == 0);  // false
console.log(null > 0);   // false  (null -> 0, 0 > 0 is false)
console.log(null >= 0);  // true   (null -> 0, 0 >= 0 is true)

// Comparisons involving `undefined`
// `undefined` is not converted to a number for equality; relational comparisons
// with `undefined` result in false (they produce `NaN` during numeric conversion)
console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

// Strict equality (no type coercion)
console.log("2" === 2); // false: different types, no coercion with `===`

// Summary:
// - Use `===` / `!==` to avoid unexpected coercion.
// - `null` behaves specially: `null == undefined` is true, but `null == 0` is false.
// - Relational operators convert operands to numbers (so strings like "2" become 2).
// - `undefined` in numeric comparisons yields `false` because it becomes `NaN`.
