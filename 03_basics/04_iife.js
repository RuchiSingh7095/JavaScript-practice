// IIFE : Immediately Invoked Function Expresions

// why we use IIFE : to execute function immediately and
// we faced problem with global scope polution sometimes( there is gloabal declarations ), to ignore this problem we use IIFE,
// using IIFE, funtion is call immediately in which we used IIFE.

// Example : 
// function myFunc (){
//     console.log("DB Connected");
// }
// myFunc(); 

//  from the above example it will return the result but to get rid of global scope polution problem we rap-up the whole funtion in () and directly call after that, e.g :
// when we use IIFE without arrow function, it is known as named IIFE
( function myFunc(){
    console.log("DB Connected");
})(); // using this approach we can resolve this problem


// we can use IIFE with arrow function :
// when we use IIFE with arrow function, it is known as un-named IIFE
( () => {
    console.log(`DB connected Two`);
})();

// If you want to use multiple IIFE's then you have to end the other IIFE code using a ; (semi colon), if you not end the other IIFE it will not execute or give error 
// if you want to give parameter you can add like this :
( (name) => {
    console.log(`Hii, my name is ${name}`);
})('Ruchi') // in the exection of function we can pass the argument like this 