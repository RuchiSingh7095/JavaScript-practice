// for of loop
/* for of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc. 
It provides a simpler syntax compared to traditional for loops. */

// syntax of for of :
// for (const iterator of object) {
//     code to be executed
// }

// for of loop with array :
// const myArray = [1, 2, 3, 4, 5]

// for (const nums of myArray) {
//     console.log(`values of array : ${nums}`);
// }

// for of loop with strings :
const myString = "Hello World";

for (const str of myString) {
    // console.log(`string is : ${str}`);
}

// map :
// map is an object which holds key value pair, it returns unique results

// example :
const map = new Map();
map.set('IN', 'India');
map.set('USA', 'America');
map.set('FR', 'France');
map.set('IN', 'India'); // here we give duplicate entry, but map ignores the duplicasy of value and give unique results

// console.log(map);
// output : Map(3) { 'IN' => 'India', 'USA' => 'America', 'FR' => 'France' }

// map with for of loop :

for (const key of map) {
    // console.log(key);
}
// output :
// [ 'IN', 'India' ]
// [ 'USA', 'America' ]
// [ 'FR', 'France' ] // it ignores the duplicate entry

// if we need keys and values seperate, we can seperate like this using []

for (const [key, value] of map) {
    // console.log(key, '-', value);
}

// for of loop with object :

const myObject = {
    'color1' : 'red',
    'color2' : 'green'
}

for (const [key, value] of myObject) {
    // console.log(key, '-', value);
} // this give us error that object is not iterable because we can't access key values from object using for of loop