//  if else

//// Comparisons     < , > , <= , >= , == , != , ===

// const isUserLoggedIn = true
// const temp = 46

// if (temp > 55) {
//      console.log('Temperature is greater than 55');
// }

// else console.log('Temperature is not greater than 55');





const score = 200

if (score > 100){
    const power = "FLy"
    // console.log(`User Power : ${power}`); 
}


/////   else if ladder

const balance = 4000

if (balance < 1000) {
    console.log("Balance less than 1000");
} 
else if (balance < 5000){
     console.log("Balance less than 5000");
}

else if (balance < 10000){
      console.log("Balance less than 10000");
}

else console.log("Sufficient balance");



const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard && 2 === '2') {
    console.log('Allowed to buy course');
    
}


////  switch statement

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    case 5:
        console.log("May");
        break;


    default:
        break;
}



////  falsy values 
// false , 0, -0, BigInt 0n , ""  , null , undefined , NaN

////  truthy value
// "0", 'false', " ", [] , {} , function(){}


// const userEmail = []

// if (userEmail.length === 0) {
//     console.log("Empty array");
// }

const emptyObj = {}


if (Object.keys(emptyObj).length === 0 ) {
    // console.log("Empty object");
}




// //  Nullish Coalescing Operator ( ?? ) : null undefined

let val1;
// val1 = 5 ?? 10        // 5 
// val1 = null ?? 10     // 10
// val1 = undefined ?? 15    // 15
// val1 = null ?? 15 ?? 10      // 15 
val1 = undefined ?? null     //  null
val1 =  null ?? undefined    // undefined

console.log(val1);



// // Terniary oprator

const iceTeaPrice  = 100

iceTeaPrice >= 80 ? console.log("Greater than or equal to 80") : console.log("lesser than 80")

