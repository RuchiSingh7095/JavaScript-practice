// this or arrow function in javascript

const user = {
    username: "Ruchi",
    price: 999,
    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`); //  when we refer current context we use this keyword to access the values
        // console.log("this:", this); // when we print something using this keyword, then it will return current context in result
    }
}

// user.welcomeMsg(); // it will execute welcomeMsg() and print Ruchi, welcome to website
// // but if we change the value of username
// user.username = "Ritu" // we change context or value of username here
// user.welcomeMsg(); // after change the value of username it will give the new username that you changed and print : Ritu, welcome to website

// console.log(this); // when we globaly execute this keyword then it returns an empty object in result, bcoz in the node environment this refer to an empty object bcoz context is not defined globaly

// if we type console.log(this); in the browser's console, it will give us window object which is globly defined in the browser.



// function myFunc () {
    // console.log(this); // when we print this under a function it will give you multiple values that we can use if we want to use
    // let username = "Ruchi" // we defined a variable here and we are expecting the result i.e. "Ruchi" but it will give us undefined value becoz this keyword only work with objects, it will not work under a function
    // console.log(this.username); 
// }

// myFunc()

//  if we define a function in a variable it also work same and gives undefined in result bcoz this keyword is not working with function
// const myFunc = function (){
//     let username = "Ruchi"
//     console.log(this.username);
// }
// myFunc();

// arrow function :

const myFunc = () => {
    let username = "Ruchi"
    // console.log(this.username); // this keyword not working with arrow function also
    // console.log(this); // in this case, when we print this keyword under a arrow function, it will give you an empty object
}
// myFunc()

//  basic concept of arrow function : () => {}
// explicit result : when we use return keyword and {}
// const addTwo = (num1, num2) => { // we can hold arrow function in a variable and give parameters just like basic function
//     return num1 + num2
// } 
// console.log(addTwo(4,8));


//  implicit return : in this case we don't use {}, and return the value directly and we dont have to use return keyword in this case, we can use arrow function using this way also, it makes our code more easy.
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2) 

// console.log(addTwo(3,4));

// how to return an object using arrow function 
// const addTwo = (num1, num2) => {username: "Ruchi"} // like this we get undefined in result bcoz it is not a good way to return an object in arrow fnction
// const addTwo = (num1, num2) => ({username: "Ruchi"}); // if you want to return object in arrow function use ({})
// console.log(addTwo());