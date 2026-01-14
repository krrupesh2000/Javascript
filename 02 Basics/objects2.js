

/*
    Objects  - annotated for first-time learners

    Key points covered:
    - Creating objects (literal vs constructor)
    - Adding properties
    - Nested objects and optional chaining
    - Merging objects: Object.assign vs spread
    - Introspecting objects: keys, values, entries
    - Checking existence of a property
*/

//const fbUser = new Object();  // object constructor syntax (less common)

// Create an object using the object literal (most common)
const fbUser = {}; // empty object

// Add properties after creation using dot notation
fbUser.id = "fb001";
fbUser.name = "Rupesh";
fbUser.isLoggedIn = true;

console.log('fbUser:', fbUser);

// You can also create objects with nested properties
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        // nested object structure (might come from an API)
        userFullname: {
            firstName: "Rupesh",
            lastName: "Kumar",
        },
    },
};

// Optional chaining prevents errors if a property in the chain is missing
console.log('First name via optional chaining:', regularUser.fullname?.userFullname?.firstName);

// Numeric keys are allowed, but note they act like strings for object keys
const object1 = { 1: "a", 2: "b" };
const object2 = { 3: "c", 4: "d" };

// Merge objects using Object.assign(target, ...sources)
// Object.assign mutates the target (first) argument — we pass an empty object to avoid changing object1/object2
const object3 = Object.assign({}, object1, object2);
console.log('Merged with Object.assign:', object3);

// Merge objects using spread syntax (preferred, concise, non-mutating)
const object4 = { ...object1, ...object2 };
console.log('Merged with spread:', object4);

// Introspect an object
console.log('keys:', Object.keys(fbUser));
console.log('values:', Object.values(fbUser));
console.log('entries:', Object.entries(fbUser)); // [ [key, value], ... ]

// Check whether an object has a property (does not check prototype chain)
console.log('has id property:', fbUser.hasOwnProperty('id'));

/*
    Short notes / tips:
    - Prefer object literals (`{}`) over `new Object()`.
    - Use optional chaining (`?.`) when reading nested data that may be missing.
    - Use spread `{ ...a, ...b }` to merge without mutating inputs.
    - Use `Object.keys/values/entries` to iterate programmatically.
*/

