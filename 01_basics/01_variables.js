//constants:
const accountId = 144552 // const values cannot be changed, its locked.
// variables:
let accountEmail = "Ashik@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // Js like python can automatically assign datatype(no need to specify, but its better to specify)
let accountState; // undefiened

//accountId = 2 // not allowed

accountEmail = "ASH@ash.com"
accountPassword = "212121"
accountCity = "Bangalore"

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId)
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])

// we can add statement terminator if we want or not. (optional) -> ;