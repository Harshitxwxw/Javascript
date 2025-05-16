// singleton

// object literals
const mySym = Symbol("key1")

const JSuser ={
    name : "Harshit",
    "full name" : 'Harshit Magarde',
    [mySym] : "mykey1",   // here mySym is not used as symbol , it is used as string
                          // [mySym] -> now it is used as symbol
    age : 20,
    location : 'kota',
    email : "harsh@google.com",
    isLoggedin : false,
    lastLoggedIN : ['Monday','Sunday']
}


// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["full name"]);
// console.log( JSuser[mySym]);


JSuser.email = 'harshit@gmail.com'   // it will update the email

// Object.freeze(JSuser)    // it will freeze the user i.e it's data connot be changed
JSuser.email = 'harshit@microsoft.com'

console.log(JSuser)


JSuser.greetings = function(){
    console.log("Hello js user");
    
}
JSuser.greetingsTwo = function(){
    console.log(`Hello js user,${this.name}`);
    
}


console.log(JSuser.greetings());
console.log(JSuser.greetingsTwo());