//  switch case statement :

// syntax of switch statement :

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const day = "tuesday";

switch (day) {
    case "sunday":
        console.log("sunday");
        break;
    case "monday":
        console.log("monday");
        break;
    case "tuesday":
        console.log("tuesday");
        break;
    case "thursday":
        console.log("thursday");
        break;
    default:
        console.log("No data found");
        break;
} // using switch statement we can check multiple cases easily 
// if any case is not matched, it return result given in the default case
// or if case is matched it also execute rest of the code except default case
// if we dont use break, it don't execute rest of the code, so break is very important after each case

