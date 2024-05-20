const arr1 = ["pen", "pencil", "notebook"];
const arr2 = ["red", "green", "yellow"];
// push method returns array inside the array
// arr1.push(arr2); // output : [ 'pen', 'pencil', 'notebook', [ 'red', 'green', 'yellow' ] ]
// console.log(arr1);

// Combines two or more arrays. This method returns a new array without modifying any existing arrays
// const allArr =arr1.concat(arr2);
// console.log(allArr); // output : [ 'pen', 'pencil', 'notebook', 'red', 'green', 'yellow' ]

// spread operator : it works same as concat method but instead of using concat we prefer spread operator
const spreadArray = [...arr1, ...arr2];
// console.log(spreadArray); // output : [ 'pen', 'pencil', 'notebook', 'red', 'green', 'yellow' ]

// flat method : Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const arr3 = [1, 2, 3, [4, 5, 6], 7, [8, 7, [6, 2]]]
const arr4 = arr3.flat(Infinity)
// console.log(arr4);

// console.log(Array.isArray("Ruchi")); // used to check that given value is an array or not
// console.log(Array.from("Ruchi")); // Creates an array from an array-like object.
// console.log(Array.from({name: "ruchi"})); // in this case it returns an empty array bcoz we have to specify that from which value we need array i.e. from keys or from value define in an object

let score1 = 100
let score2 = 200
let score3 = 300
// Returns a new array from a set of elements.
console.log(Array.of(score1,score2,score3));