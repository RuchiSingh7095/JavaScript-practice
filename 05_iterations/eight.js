//  reduce method in javascript :

const myNums = [1, 2, 3, 4, 5]

// reduce method using basic function :
// const myTotal = myNums.reduce( function (acc, currVal) { 
    /*  in the reduce method we need to pass two paramenters as accumulator and current value or we need to give an initial value which is used to start the process
    this initial value is the first value which is assign to accumulator  */
    // console.log(`acc : ${acc} and currval : ${currVal}`);
    // return acc + currVal;
// }, 0); // 0 indicates an initial value here, from where process will start

// console.log(myTotal);

// reduce with arrow function :
// without scope {}:

// const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)
// console.log(myTotal);

// with scope {}:
// const myTotal = myNums.reduce( (acc, currval) => {
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);

// example :

const myCart = [
    {
        itemName: 'js course',
        price: 1999
    },
    {
        itemName: 'python course',
        price: 2999
    },
    {
        itemName: 'java course',
        price: 3999
    },
]

// we need to add all prices :
const totalPrice = myCart.reduce( (acc, item) => item.price, 0)
console.log(totalPrice);
