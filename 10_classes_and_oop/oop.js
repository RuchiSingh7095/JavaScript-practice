// object literals

const user = {
    username: "Ruchi",
    loginCount: 9,
    signedIn: true,
    getUserDetails: function(){
        // console.log("function is called");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());


// const user2 = {
//     username: "Ruchi",
//     loginCount: 9,
//     signedIn: true,
//     getUserDetails: function(){
//         // console.log("function is called");
//         // console.log(`username: ${this.username}`);
//         console.log(this);
//     }
// }

/* we have write code for user, if we want to create user2 then we have to create one more object and it will create code complexity
to make this easy we use constructor*/


// constructor function :

function myUser(username, loginCount, signedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.signedIn = signedIn

    // return this // if we don't return this, it will return all values by default
}

const userOne = new myUser("Ruchi", 9, true);
const userTwo = new myUser("Ritu", 10, false);

console.log(userOne);
console.log(userTwo);