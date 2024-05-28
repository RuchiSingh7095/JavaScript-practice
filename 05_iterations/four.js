// how to iterate object with loop :
// to iterate an object we can use for-in loop :

const myObject = {
    js: 'javaScript',
    cpp: 'c++',
    dsa: 'data structure',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(key);
} // we get keys from this

// to get all key value pair :

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
} // using this approach we can get values from the object

// for in loop with arrays :

const myArr = ["one", "two", "three", "four"]

for (const key in myArr) {
//    console.log(key); // it prints index of keys i.e. : 0,1,2,3
}

for (const key in myArr) {
    // console.log(`value is ${myArr[key]}`); // like this we can print values from an array using for in loop
}

// for in loop with map
const map = new Map();
map.set('IN', 'India');
map.set('USA', 'America');
map.set('FR', 'France');
map.set('IN', 'India');

for (const key in map) {
    // console.log(key); // it will not give us any result bcoz using for in loop we can't access values from map
}

// map is not iterable using for in loop