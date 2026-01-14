/*
    Functions: 

    This file demonstrates:
    - Rest parameters (`...args`) to gather remaining arguments into an array
    - Passing objects to functions and accessing their properties
    - Defensive access and basic naming/typo notes
*/

// Example: function using rest parameters
// - The first two parameters are regular positional args
// - `...others` collects any remaining arguments into an array
function calculateCarPrice(val1, val2, ...others) {
    // `others` is an array containing any extra numbers passed in
    // Here we return it to show what was captured by the rest parameter
    return others;
}

console.log('calculateCarPrice ->', calculateCarPrice(5000, 400, 3000, 20));


// Example: passing an object to a function
const user = {
    name: 'Rupesh',
    age: 26,
};

// Naming: use clear function names; fix typos (hanleObject -> handleObject)
function handleObject(anyObject) {
    // Access properties using dot notation
    // If a property might not exist, use optional chaining: anyObject?.name
    console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`);
}

handleObject(user);


// Notes and tips:
// - Rest parameters must be the last parameter in the function signature.
// - Rest parameters produce a real array you can iterate over (map, reduce, etc.).
// - When passing objects, consider destructuring parameters:
//     function handleObject({ name, age }) { console.log(name, age) }
// - Prefer descriptive function names and consistent casing (camelCase).
// - If a function might not return a value explicitly, it returns `undefined`.

