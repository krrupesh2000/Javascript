// Example values showing type conversion behavior
let score = 55
let runs = "120" // numeric string
let wicket = "5w" // non-pure numeric string
let over = null

// typeof shows the runtime type of a value
console.log(typeof score); // "number"
console.log(typeof(score)); // same as above
console.log(typeof runs); // "string"

// Convert string to number using Number()
let valueInNumber = Number(runs) // "120" -> 120
console.log(typeof valueInNumber); // "number"

// Non-numeric strings become NaN when converted
let value_in_number = Number(wicket)
console.log(typeof value_in_number); // "number" (NaN is of type number)
console.log(value_in_number); // NaN

// Converting null yields 0
let value_In_Number = Number(over)
console.log(typeof value_In_Number); // "number"
console.log(value_In_Number); // 0

// Boolean conversion: 0, null, undefined, NaN, "" => false; other values => true
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

// Quick conversion notes:
// "33" => 33
// "5w" => NaN
// true => 1, false => 0
// "" => false
// "Rupesh" => true
