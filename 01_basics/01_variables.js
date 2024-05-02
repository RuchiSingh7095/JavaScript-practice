const accountId = 13334
let accountEmail = "ruchi@gmail.com"
var accountPassword = "12345"
accountCity = "Baijnath"
let accountState;
// accountId = 2  // not allowed

accountEmail = "rs@gmail.com"
accountPassword = "2425353532"
accountCity = "tttttt"

/*
prefer not to se var to declare a variable 
because of issue in block or functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

