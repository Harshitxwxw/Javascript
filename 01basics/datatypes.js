"use strict";  

// alert(3+3)   // we are using nodejs, not browser
// console.log(3+3)

// console.log("Hello") 




// Primitive data types
// 7 types :-> String,Number,Boolean,null,undefined,Symbol,BigInt

let nam = "Hello"        // string  => ""
let age = 18             // number
let isLoggedin = true    //  boolean => True/ false
let state = null         //  null => standlone value  
let userEmail;           //  undefined 
const id = Symbol('123') // symbol => unique
const anotherid = Symbol('123') 
const bigNumber = 62418960462364983n  // bigINt

// console.log(typeof nam);   
// console.log(typeof age);
// console.log(typeof isLoggedin);  
// console.log(typeof state);    // object
// console.log(typeof undefined);   // undefined
console.log(id === anotherid);
console.log(typeof anotherid);
console.log(typeof bigNumber);





//  Reference (Non Primitive) 
//  Arrays, Objects, Functions

const heros = ["Ironman", "Caption America", "Thor"]  //  arrays
 
let myObj = {                   //  object
    name : 'Harshit',
    age : 19
}

const myFunction = function () {    //  functions
    console.log("Hello World")
}

console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof heros);




//   ++++++++++++++++++++++++++++  Memory  +++++++++++++++++++++++++++



//   Stack Memory (Primitive)   

let myYt = "HarshitYoutube"
let anotherName = myYt
anotherName = 'gaming_channel'

console.log(myYt);
console.log(anotherName);



// Heap Memory  (Non-Primitive)

let userone = {
    email : "user@gmail.com",
    upi : "user450@yt"
}

let userTwo = userone

userTwo.email = "jitesh@gmail.com"
console.log(userone.email);
console.log(userTwo.email);
