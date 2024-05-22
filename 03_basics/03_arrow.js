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

console.log(this); // when we globaly execute this keyword then it returns an empty object in result, bcoz in the node environment this refer to an empty object bcoz context is not defined globaly

// if we type console.log(this); in the browser's console, it will give us window object which is globly defined in the browser.



