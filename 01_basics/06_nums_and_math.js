const score = 400
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length); // when we convert a number type to string type it will automatically uses strings properties i.e. length charat etc.
// console.log(balance.toFixed(1));

const otherNumber = 123.8765
// console.log(otherNumber.toPrecision(5));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// ---------------------------------Maths-----------------------------

// console.log(Math.abs(-4)); //it converts the negative value in positive value but if there is positive value it will not convert in negative value, it remains positive
// console.log(Math.round(4.7)); // it gives a round figure value i.e. 5
// console.log(Math.ceil(4.2)); // it picks upper/largest value and give largest possible value
// console.log(Math.floor(4.2)); // it picks lowest value and give lowest possible value
// console.log(Math.min(6,3,2,1)); // it gives minimum value 
// console.log(Math.max(9,8,7,6)); //it gives max value

console.log(Math.random()); // math.random always gives us value between 0 or 1 i.e. 0.1, 0.2
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);