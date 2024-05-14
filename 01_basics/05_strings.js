const name = "Ruchi"
const repoCount = 50

// console.log(name + repoCount + " " + "value"); // this is not a good practice instaed of concatination we use string interpolation

// console.log(`Hii my name is ${name} and my repo count is ${repoCount}`); // string interpolation

const gameName = new String('gamers-world')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-3, 4)
console.log(anotherString);

const newStringOne = "     ruchi     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ruchi.com/ruchi%20singh"
console.log(url.replace('%20', '-'));

console.log(url.includes('ruchi'));
console.log(gameName.split('-'));

