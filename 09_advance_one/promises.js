// promises have 3 stages : pending, fulfilled, rejected.
// promises have 2 arguments i.e. resolve or reject
/*
States:

Pending: Initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully.
Rejected: The operation failed.

Methods:

then: Attaches callbacks for the resolution (fulfilled) and/or rejection (rejected) of the promise.
catch: Attaches a callback for only the rejection of the promise.
finally: Attaches a callback that is executed regardless of the promise’s outcome (fulfilled or rejected).
*/

const promiseOne = new Promise(function (resolve, reject) {
    // do an asyn task
    // DB calls, cryptography, network
    setTimeout(function () {
        // console.log("async task is completed");
        resolve(); // resolve is directly connected to .then
    }, 1000)
})

promiseOne.then(function () {
    // console.log('promise consumed');
}) // this will only execute when promiseOne is resolved

// another way to create a promise :
// we can create promise without storing it in variablable

new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log('Async task 2 completed');
        resolve();
    }, 1000)
}).then(function () {
    // console.log('Promise 2 consumed');
});

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ userName: "Ruchi", email: "ruchi@example.com" })
    })
})

promiseThree.then(function (user) {
    // console.log(user);
})

// how to get values using promises :
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ userName: "Ruchi", password: "12345" })
        } else {
            reject('Error : something went wrong')
        }
    }, 1000)
})

// chaining promises :
promiseFour
    .then((user) => {
        // console.log(user);
        return user.userName
    })
    .then((userName) => {
        // console.log(userName);
    })
    .catch((error) => {
        // console.log(error);
    })
    .finally(() => {
        // console.log('the promise is either resolved or rejected');
    })

// handling multiple promises :

/*** Promise.all takes an array of promises and returns a single promise that resolves when all of the promises
 in the array have resolved, or rejects if any of the promises reject. ****/

// const promise1 = Promise.resolve("Result 1");
// const promise2 = Promise.resolve("Result 2");
// const promise3 = Promise.resolve("Result 3");

// Promise.all([promise1, promise2, promise3])
//     .then((results) => {
//         console.log(results); // ["Result 1", "Result 2", "Result 3"]
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// async or await with try/catch :

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ userName: "JavaScript", password: "12345" })
        } else {
            reject('Error : JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        // console.log(response);
    } catch (error) {
        // console.log(error);
    }
}

consumePromiseFive();

async function getAllUser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getAllUser();