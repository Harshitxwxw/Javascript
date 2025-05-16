//  Dates

let myDate = new Date()

// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());


// let myCreatedDate = new Date(2025,0,23)
// let myCreatedDate = new Date(2025,0,23,15,18,56)
// let myCreatedDate = new Date("2025-5-16")
let myCreatedDate = new Date("5-16-2025")
// console.log(myCreatedDate.toLocaleString());


//   Time Stamps

let myTimeStamp = Date.now()

// console.log(myTimeStamp);      //  give total time (in millisec) from 1 Jan 1990 till now
// console.log(myCreatedDate.getTime());
// console.log(Math.floor((Date.now())/1000));   //  convets in seconds

let newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());


newDate.toLocaleString('default',{
    weekday : "long",

})