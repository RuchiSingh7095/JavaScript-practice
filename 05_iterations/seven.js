// map in javascript :

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNum = myNums.map( (num) => num) // using map method we can get these value 
const newNum = myNums.map( (num) => {
    return num; // under the scope if you dont use return keyword, you can't get results as expected
})
// console.log(newNum);

// chaining in javascript :
// we can use multiple method at one time :

const myChain = myNums
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter( (num) => num > 50)
//  like this we can use multiple methods at one time and its called chaining
console.log(myChain);