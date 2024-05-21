// object singleton or object constructor

// const myApp = {} // non singlton/literal object
const myapp = new Object(); // singleton object

// this how we add or define values in an object
myapp.id = "1234"
myapp.name = "Ruchi"
myapp.isLoggedIn = false

// console.log(myapp);

// how to define object under an object nested objects) :
const appUser = {
    email: "appUser@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Ruchi",
            lastName: "Singh"
        }
    }
}

// access nested object's value :

// console.log(appUser.fullName.userFullName.firstName);

// combine/merge objects using differen ways:

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj = {obj1, obj2, obj3} // this is the normal way to combine object,
// output : {
//   obj1: { '1': 'a', '2': 'b' },
//   obj2: { '3': 'a', '4': 'b' },
//   obj3: { '5': 'a', '6': 'b' }
// } it is little confusing instead of this we use Object.assign



// syntax: Object.assign(target, source) in which target is {} and source is obj1, obj2, obj3
// const obj = Object.assign({}, obj1, obj2, obj3) 
// console.log(obj);
// output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }



//  to merge two or more objects we can also use spread operator, it is more simple and easy method then the other
const obj = {...obj1, ...obj2, ...obj3}
// console.log(obj); // output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }



// objects under an array :

const myObj = [
    { id: 1, name: "Ruchi" },
    { id: 2, name: "Ritu" },
    { id: 3, name: "Akash" },
    { id: 4, name: "Abhishek" }
]

//  how to access above values :

// console.log(myObj[0]); // output : { id: 1, name: 'Ruchi' }

// access keys from object :
// console.log(Object.keys(myapp));

// access values from object :
// console.log(Object.values(myapp));

// console.log(Object.entries(myapp));  // it returns an array of key/values of an object
// output : [ [ 'id', '1234' ], [ 'name', 'Ruchi' ], [ 'isLoggedIn', false ] ]

// how to check if the property is exist in the object or not
// console.log(myapp.hasOwnProperty('isLoggedIn')); // it return the result in boolean true/false

// ------------------------------------------------------------------------------------------------------------------------------------------------

// destructuring of object :

const course = {
    courseName: "JavaScript",
    price: "999",
    courseTutor: "Hitesh Choudhary"
}

// we can access above values by using dot notation i.e.  
// console.log(course.courseName); // but instead of this we use object destructoring to get rid of duplication of code

const { courseTutor: tutor, price: coursePrice, courseName: name } = course // this is called destructoring of object 
console.log(tutor, name, coursePrice); 