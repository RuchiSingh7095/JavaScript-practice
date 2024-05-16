// Dates-------------------

let myDate = new Date();
// console.log(myDate); // output : 2024-05-16T07:06:54.503Z

// methods to convert date in readable form
// console.log(myDate.toString()); // output : Thu May 16 2024 07:06:54 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // output : Thu May 16 2024
// console.log(myDate.toISOString()); // output : 2024-05-16T07:14:12.574Z
// console.log(myDate.toJSON()); // output : 2024-05-16T07:14:45.969Z
// console.log(myDate.toLocaleDateString()); // output : 5/16/2024
// console.log(myDate.toLocaleString()); // output : 5/16/2024, 7:16:11 AM
// console.log(myDate.toLocaleTimeString()); // output : 7:16:44 AM
// console.log(myDate.toTimeString()); // output : 07:17:31 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString()); // output : Thu, 16 May 2024 07:18:14 GMT

// console.log(typeof myDate); // date is an object in javascript

let myCreatedDate = new Date("10-18-1999")
// console.log(myCreatedDate.toLocaleDateString()); to print date in format we want

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // output : 1715844788856 ------- it gives value in mili-seconds
// console.log(myCreatedDate.getTime()); // Returns the stored time value in milliseconds 
// console.log(Math.floor(Date.now()/1000)); // to get date time in seconds

let newDate = new Date();
// console.log(newDate); // prints normal date 
// console.log(newDate.getMonth()); // to get current month
// console.log(newDate.getDay()); // to get current day

// we can customize date with toLocaleString method
let customizedDate = newDate.toLocaleString('default', {
    dateStyle: "short"
})

console.log(customizedDate);

