/*while loop : The while statement creates a loop that executes a specified statement 
as long as the test condition evaluates to true. The condition is evaluated before executing the statement.*/

// example of while loop :

// let index = 1; // we define index here and then put a condition in while block
// while (index <= 10) {
//     console.log(`value of index : ${index}`);
//     index = index + 2;
// }

// while loop with array :

// let myArray = ["red", "green", "yellow"];
// let arr = 0;

// while (arr < myArray.length) {
//     console.log(`value of array : ${myArray[arr]}`);
//     arr = arr + 1;
// }


// do-while loop : it give output first and then checks the condition

// example :

// let score = 1

// do {
//     console.log(`score is ${score}`);
//     score++;
// } while (score <= 10);

// output : 
// score is 1
// score is 2
// score is 3
// score is 4
// score is 5
// score is 6
// score is 7
// score is 8
// score is 9
// score is 10

// example 2:

// let score = 11;
// do {
//     console.log(`score is : ${score}`);
//     score++;
// } while (score <=10); 
// in this case condition is not executable so this loop give us result as "score is : 11" because it prints output atleast once before checking the condition