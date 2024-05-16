// Array 

// different ways to declare an array :
const myArr = [0, 1, 2, 3, 4, 5]
const colors = ["red", "green", "blue", "yellow"]
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[2]);

// Array methods :
// myArr.push(6,7) // push method is used to add a element in an array
// console.log(myArr);

// myArr.pop(); // pop method is used to remove last element from the array
// console.log(myArr);

// myArr.unshift(4); // it adds the given element in starting of the array
// myArr.shift(); // it removes the first element from the array

// console.log(myArr.includes(9)); // includes method is used to check, the given element is present in the array or not it returns the result as a boolean type
// console.log(myArr.indexOf(4)); // indexOf method is used to check index of given element

const newArr = myArr.join(); // join method converts the array elements in a string type
// console.log(myArr);
// console.log(newArr);

// slice or splice
console.log("A ", myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);

console.log("C ", myArr);
