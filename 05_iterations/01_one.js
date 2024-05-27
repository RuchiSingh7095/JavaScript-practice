// for-loop

// for (let i = 0; i <= 10; i++) {
//     const element = i
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
// }

// console.log(element); // if we try to print element outside the scope, it will not execute.

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value : ${i}`); // this line will run first 
    for (let j = 0; j <=10; j++) { // after execution of this loop, it will go again to the outerloop
        // console.log(`inner loop value : ${j} and value of outer loop : ${i}`); 
        // console.log(i + '*' + j + '=' + i*j); // we can print tables like this
    }
} // we can add loop under a loop also

// loops with array :

// const myArray = ["red", "green", "yellow"];

// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// break and continue in loops:

// for (let index = 1; index <= 20; index++) {
//     // const element = index;
//     if (index == 5) {
//         console.log('Detected 5');
//         break; // break is used to stop the loop whenever you want to stop i.e. used to break control flow.
//     }
//     console.log(`Value of index : ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log('Detected 5');
        continue;
    }
    console.log(`Value of index : ${index}`);
    // continue ignores the code in which we use continue keyword and continue to executing the loop without exit
    // e.g. we used continue in if condition (index == 5) it ignore the process when it detects 5 and continue to the loop
    // The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.
}