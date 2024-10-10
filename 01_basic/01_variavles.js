const accountId =1234
let accountEmail = "satyamlodhi650@gmail.com"
var accountPassword ="9907"
accountCity ="Bhopal"

// accountId = 2 // not allowed
accountEmail="ramlodhi@123gmail.com"
accountPassword ="3222"
accountCity ="Jaipur "
let accountState;
console.log(accountId);
/*
prefer not use var
because of issue in block scope and function scope
*/
//console.table :-se bar bar console.log na lagane ke liye use karte hain
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
