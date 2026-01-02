// Variable declarations and scope examples
const accountId = 19 // read-only constant; cannot be reassigned
let accountEmail = "krrupesh2000@gmail.com" // block-scoped, mutable
var accountPassword = "12345" // function-scoped (avoid in modern code)
accountCity = "Sitamarhi" // implicit global (bad practice)

// accountId = 2   (not allowed - can't modify const)

// Reassigning allowed for `let` and `var`
accountEmail = "iamkrrupesh@gmail.com"
accountPassword = "78945"
accountCity = "Delhi"
let accountState; // declared but undefined

console.log(accountId);

/*
Prefer `let` / `const` over `var`:
- `var` has confusing function/global scoping and hoisting behavior
- `let` and `const` provide predictable block scoping
*/ 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
