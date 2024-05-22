// functions :

function sayMyName(){
    console.log("R");
    console.log("U");
    console.log("c");
    console.log("H");
    console.log("I");
}

// sayMyName();

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

// const result = addTwoNumber(2,3);
// console.log("Result:", result); // it gives undefined in result 

// like this we will get proper result in const result 
function addTwoNumber(number1, number2){
//    let result = number1 + number2
//    return result;
//    console.log("hiii"); // after we return the result nothing will execute after this

      return number1 + number2  // to make this easy we can directly return this logic, results remain same
}

const result = addTwoNumber(4, 4)
// console.log("Result:", result);

//  example of a simple function with if statement :
// function loginUserMessage(userName){
//     if(!userName){
//         console.log("Please enter a user name");
//         return;
//     }
//         return `${userName} just logged in`
// }
// console.log(loginUserMessage("Ruchi"));


// if we want a temporary username, if username is undefined then it will automatically replace with the temporary name

function loginUserMessage(userName = "Test user"){
    if(!userName){
        console.log("Please enter a user name");
        return;
    }
        return `${userName} just logged in`
}
// console.log(loginUserMessage()); // we don't define the username argument here so the output is : Test user just logged in

// ==============================================================================================================================================================================



//  first case : in this num1 gives only first value as result
// function calculatecartPrice (num1){
//     return num1;
// }

// console.log(calculatecartPrice(200, 100, 400, 600)); // it gives only ist value in the result

// second case : to print all values given in argument, we need to used rest operator 
// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(100, 200, 300, 4000, 500)); // by using rest operator, it will give result in an array like : [ 100, 200, 300, 4000, 500 ]

// third case : when function has multiple parameters and their value is not defind in argument:
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 600, 800));
// output : [600, 800] becoz 200, 400 is replaced by val1, val2 parameters



//  how to pass an object in a function :

const user = {
    userName: "Ruchi",
    price: 100
}

function myObj(anyObject){
    console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`); // this is how we use object in a function
}
// myObj(user); // we have passed object name as a argument from which it fetch values from that object

//  we can directly pass object under the function :
// myObj({
//     userName: "Ritu",
//     price: 999
// })

// we can pass array as well in the function :
const myNewArray = [100, 200, 300, 400];

function returnSecondValue(getArray){
    return getArray[2];
}

// both have same result :
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([100, 200, 300, 400])); // we can directly pass an array in a function