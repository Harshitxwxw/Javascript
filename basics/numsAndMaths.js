
//   +++++++++++++++++ Numbers +++++++++++++++++++

const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log( balance.toString().length);
// console.log( balance.toFixed(2));

const otherNumber = 24.08098
// console.log(otherNumber.toPrecision(3));

const hundereds = 10000000
// console.log(hundereds.toLocaleString());
// console.log(hundereds.toLocaleString('en-IN'));
// console.log(hundereds.toExponential());



//   ++++++++++++++++ Maths +++++++++++++++++++++++++



console.log(Math);
// console.log(Math.SQRT2);
// console.log(Math.sqrt(81));     // give square root
// console.log(Math.abs(-4));       //  give absolute value
// console.log(Math.round(14.39));    // round off to nearest integer
// console.log(Math.ceil(23.01));    // it will give upper value i.e for 23.01 => 24
// console.log(Math.floor(23.99));    // it will give lower value i.e for 23.99 => 23
// console.log(Math.sin(3.1415));
// console.log(Math.min(3,1,15,0,-1));
// console.log(Math.max(3,1,15,0,-1));

console.log(Math.random());   // give random number b/w 0 & 1
console.log((Math.random()*10)+1);   

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min +1)) + min)



