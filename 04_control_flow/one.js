//  If statement : 
// it execute a statement if a specified condition is true or if condition is false then another statement given in optional clause will be executed


// < (used to check lesser value)
// > (used to check greater value)
// <= (used to check less or equal value)
// >= (used to check greater or equal value)
// == (used to check if both values are equal or not)
// != (used to check that both values are not equal)
// === (used to check both values or data type also)


// for example :

// if( 2 == "2" ){
//     console.log("executed"); // in this case it executed becoz it checks only value not their type
// }


// if (2 === "2") {
//     console.log("executed"); // in this case it executed but don't give any result bcoz both types are not the same
// }


// if( 2 != 3){
//     console.log("true result"); it execute and give us result in true bcoz condition is true.
// }

// if-else statement : used to check conditions, if condition is true than it will run the true statement other wise give result written in else block :

// example :

// const temperature = 40;

// if (temperature === 44){
//     console.log("true statement");
// } else {
//     console.log("false statement");
// }

// in the above example it check the condition and give result according to condition if condition is true it give true statement or if its false then it executes else block of code

// const score = 200;
//  if ( score > 100 ){
//     let power = "fly"
//     console.log(`user powe: ${power}`);
//  }

 // this line of code give us error that "power is not defined" , it is bcoz power is defined under if block with let and let is block scoped variable and we can't access vale of power outside the block
//  console.log(`user power: ${power}`); 


// const balance = 1000;
// if (balance > 2000) console.log("test"); // this is implicit scope, it will execute and print the value given in console.log but it is not a good practice to write this type of code 

// if statement with multiple conditions :

// if(balance < 500){
//     console.log("less than 500");
// } else if(balance < 750) {
//     console.log("less than 750");
// } else if(balance < 900) {
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
// } // in this code, it checks all conditions and return the true result.


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// if (userLoggedIn && debitCard){
//     console.log("permission allowed");
// } // in this code we use && (AND) to check both conditions, if both conditions are true only than it execute, we can add more condition if needed, with && (AND) it checks all conditions

// if (loggedInFromGoogle || loggedInFromEmail){
//     console.log("user logged In");
// } //using || (OR) it check all conditions but if there is any one condition is true it will return the result, we can add multiple conditions if needed