// scopes in java script :

// let a = 2;
// const b = 3;
// var c = 7;
// these value can easily print in console
// console.log(a);
// console.log(b);
// console.log(c);

// but if we declare variable under a scope {} then every variable behave differently according to their scope
// for example :
if(true){
    let a = 10
    const b = 20
    // var c = 40
}

// console.log(a); // when we print value of a, it gives error that a is not defined, bcoz a is defined with let, or let is block scoped variable
// console.log(b); // const is also a block scope variable, we can't access its value outside the scope
// console.log(c); // but var has global scope, so we can declare values using var anywhere in the code, by using var you may confuse to get expecting result

let a = 200 // it is defined globaly so we can use this value anywhere in the code but if let is defined in a scope it works only under the scope
// console.log(a);


// ===================================================================================================================================================================================

// nested scope :

// Example 1 :
function one(){
    const userName = "Ruchi"

    function two(){
        const website = "YouTube"
        console.log(userName); // in this username will execute bcoz two() is defined under one() so values declare in one() are accessable in two()
    }
    // console.log(website); // this line gives error bcoz it is outside from its scope
    two();
}
// one();

// Example 2: with if statement :

if(true){
    const userName ="Ruchi"
    if (userName === "Ruchi"){
        const website = " Youtube"
        // console.log(userName + website);
    }
    // console.log(website); // this is not accesable outside from the scope
}
// console.log(userName); //its value defined under a scope, so we can't access this outside from the scope


// +++++++++++++++++++++++++++++++ Intersting concept +++++++++++++++++++++++++++++
// basic function

console.log(addOne(5)); // in basic function declaration if we call the function before its declaration it will execute easily
function addOne(num1){
    return num1 + 1
}
// console.log(addOne(4));


// this type of declaration of functions is called as expressions, variables can hold any type of value
// but in this expression if we call funtion before its declaration it gives you error that can't access addTwo() before initialization 
console.log(addTwo(8));
const addTwo = function (num2) {
    return num2 + 2
}
// console.log(addTwo(8))