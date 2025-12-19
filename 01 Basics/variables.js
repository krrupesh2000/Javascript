const accountId = 19
let accountEmail = "krrupesh2000@gmail.com"
var accountPassword = "12345"
accountCity = "Sitamarhi"

// accountId = 2   (not allowed - can't modify const)

accountEmail = "iamkrrupesh@gmail.com"
accountPassword = "78945"
accountCity = "Delhi"
let accountState;

console.log(accountId);

/*
prefer not to use var ---
because of issue in block scope and functional scope
*/ 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
