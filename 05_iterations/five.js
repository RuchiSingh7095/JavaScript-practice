// for each loop :

const myArray = ["javascript", "cpp", "python", "mysql", "mongodb"]

// myArray.forEach(function (item) { // callback function
//     // console.log(item); // we can print values from the array using for each loop
// })

// using arrow function :
myArray.forEach( (val) => {
    // console.log(val); // it give same result as we get from above code
})

function printMe(item) {
    console.log(item);
} // we can pass this function as well to print values from the array

// myArray.forEach(printMe) // like this we can pass a function as a reference to get values from an array

myArray.forEach( (item, index, arr) => {
    // console.log(item, index, arr); 
    // it give us all information that in the for each which values are exist, index indicates index of an aaray, item return item name 
    // and arr returns a length of an array with all values.
})

// access values from objects of an array :

const myArr = [
    {
        languageName: 'javascript',
        fileName: 'js'
    },
    {
        languageName: 'python',
        fileName: 'py'
    },
    {
        languageName: 'c++',
        fileName: 'cpp'
    }
]

myArr.forEach( (item) => {
    // console.log(item.languageName); // becoz item has all info about array so we can easily access objects and their properties easily by using dot notation
})