const account_Id = 325786
let account_Email = "jdnjskinkn@fjnksl.com"
var account_Pass = "09876"
accountCity = "Kota"

// account_Id = 2   // not allowed

account_Email = "gsdhvbc@gag,com"
account_Pass = "63472678"
accountCity = "Mumbai"

let accountState
/*
Prefer not to use var because of issue in block scope and function scope
*/

// console.log(account_Id);
// console.log(account_Email);
// console.log(account_Pass);
// console.log(accountCity);

console.table([account_Id,account_Email,account_Pass,accountCity,accountState])