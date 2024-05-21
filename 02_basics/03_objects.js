// singleton
// Object.create

// object literal
const mySym = Symbol("mysym")

const jsUser = {
    name: "Ruchi",
    age: 24,
    "full name": "Ruchi Singh",
    [mySym]: "mykey1", //way to declare a symbol data type in an object
    location: "Mohali",
    email: "ruchi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// different ways to print value from objects, square notation is the best practice to print valuesfrom the objects
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "ruchi@yahoo.com" // we can change the value of keys in an object

// freeze values of object, so nobody can change the values
// Object.freeze(jsUser)
jsUser.email = "ruchi@softobiz.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hii JS user");
}
console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`Hii JS user ${this.name}`);
}

console.log(jsUser.greeting2());

