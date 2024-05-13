// Primitive data type
//  7 types : String, Number, Boolean, null, undefined, symbol, bigInt

// Examples :
const score = 100 // number
const scoreValue = 100.3 // number

const isLoggedIn = false; // boolean
const outsideTemp = null;
let userEmail; // undefined

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId); // even values are same in both variables but symbol datatypes always give a unique value

const bigNumber = 234567654323456543456n // bigInt
// console.log(typeof bigNumber);

// Reference (Non primitive)
// Array, objects, functions

const pens = ["blue pen", "red pen", "green pen"] // array
const myObj = {
    name: "Ruchi",
    age: 22
} // object, we can defined values by using any datatype in object e.g : string, number, boolean etc.


const myFunction = function(){
    console.log("Hii JavaScript");
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++==
// Stack and Heap memory in javaScript

// stack(stack memory used in primitive data types, in this memory it gives us a copy of a declared variable) ,
//  heap (heap memory used in non-primitive datatypes, it gives us reference of real value)
// example of stack memory:

let myName = "ruchiSingh"
let anotherName = myName
anotherName = "JavaScript code"

// console.log(myName);
// console.log(anotherName);

// example of heap memory:

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "ruchi@gmail.com"
// console.log(userOne.email);
// console.log(userTwo.email);