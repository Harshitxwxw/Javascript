let score = "36abc"
let state = null
let space = undefined
let bool = false

let valueIn_number  = Number(score)
let converted_state= Number(state)
let converted_space = Number(space)
let con_bool = Number(bool)

console.log(typeof score)
console.log(typeof valueIn_number)
console.log( valueIn_number)
console.log( converted_state)
console.log( converted_space)
console.log( con_bool)


//  "33" =>  33
//  "33abc"  => NaN
//  true  => 1 , false => 0
 
let isavailable = true
let isLoggedin = 1
let str = "w"
let someNumber = 78

console.log( String(isavailable))   //  "true"
console.log( Boolean(isLoggedin))   //  1 =>true -> boolean ,  0 => false
console.log( Boolean(str))          //  empty string "" => false , otherwise => true
console.log( String(someNumber))    //  "78"