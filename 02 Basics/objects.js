
//object constructor     - ( singleton object )
const car = new Object();
car.make = "Toyota";
car.model = "Camry";

Object.create

// object literals
const mySymbol = Symbol("key1");    //symbol type key

const user = {
    name : "Rupesh",                          //by default name is string type
    age : 26,                                 //number type
    "gaming device" : "PC",                  //key with space must be in quotes
    [mySymbol] : "value1",                  //symbol type key
    location : "India",
    isLoggedIn : true,
    lastLoginDays : ["Monday", "Friday"]
}

console.log(user.name);         //dot notation (preferred way)
console.log(user["name"]);      //bracket notation (used when key is dynamic)
console.log(user["gaming device"]);
console.log(user[mySymbol]);


user.age = 22;                  //update
// Object.freeze(user);            //freeze the object - no updation/deletion/addition allowed after this line
// user.age = 25;                  //will not work

console.log(user);


user.greetings = function(){        
    console.log("Hello "+ this.name);
}
console.log(user.greetings());




