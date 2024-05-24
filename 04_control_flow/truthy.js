// truthy or falsy values 

// const userEmail = "abc@gmail.com"

// if(userEmail){
//     console.log("got username");
// } else{
//     console.log("email not found");
// }// we can check truthy values like this i.e. we want if useremail exists only than user can login otherwise not

// const userEmail = ""

// if (userEmail) {
//     console.log("got username");
// } else {
//     console.log("email not found");
// } // username is empty in this code, so it exectes the else block 

// const userEmail = []; // it is not a good prctice to check array like this

// if(userEmail){
//     console.log("got username");
// } else {
//     console.log("email not found");
// } // but when we assign an empty array to username, it showing true, because we have some truthy or falsy values 


// falsy values : false, 0, -0, BigInt(0n), "", null, undefined, Nan , except these values all values are truthy
// truthy values : 
// "0" - 0 written inside a string is truthy value,
// 'false' - false written inside a string is trthy value,
//  " " - empty string with a space is a truthy CSSMathValue, any thing written inside string is consider as truthy values,
// [] - empty array is also consider as truthy value,
// {} - empty object also a truthy value, 
// function(){} - empty function is also consider as truthy value

// how to check array :

// const userEmail = []
// if (userEmail.length === 0){
//     console.log("Array is empty");
// } // we can check array by using length property


//  how to check objects :

// const myObj = {};
// if (Object.keys(myObj).length === 0) {
//     console.log("object is empty");
// } // Object.keys() returns array of object and using length property of array we can check if object is empty or not

// false == 0 returns true
// false == '' return true
// 0 = '' also return true


// Nullish Coalescing Operator (??) : null undefined
// ?? operator used to check values that are exist or not based on null or ndefined

// example of ?? operator:

// let val1;
// val1 = 5 ?? 10 // in this line two values are given, ?? find value, if ?? get value in first step it return that value else check the another value
// val1 = null ?? 10 // it returns value = 10 becoz in the first step ?? checked null and go to next value, ?? find the value and return it
// val1 = undefined ?? 15 // it give 15 in output bcoz undefined is empty value 
// val1 = null ?? 10 ?? 20 // in this code it return ist value bcoz after null it fond 10 in next step
// console.log(val1);


// ternary operator : it is short method of if else statement
// ternary operator or nullish coalesing operator are not same at all.
// syntax : condition ? true statement : false statement

// example of ternary operator :

// const price = 100;
// price <= 80 ? console.log("price is less than 80") : console.log("price is more than 80");