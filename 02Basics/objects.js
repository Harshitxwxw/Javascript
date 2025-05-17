
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

// console.log(JSuser)


JSuser.greetings = function(){
    // console.log("Hello js user");
    
}
JSuser.greetingsTwo = function(){
    // console.log(`Hello js user,${this.name}`);
    
}


// console.log(JSuser.greetings());
// console.log(JSuser.greetingsTwo());




//  singelton object
// const tinderUser = new Object()


const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Shubham"
tinderUser.isLoggedin = true
// console.log(tinderUser);


const regularUser = {
    email : "Some@gmail.com",
    fullname : {
        userFullName : {
            firstName : "Harshit",
            lastName : "Magarde"
        }
    }
}
// console.log(regularUser.fullname?.userFullName.lastName);



const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj4 = {5 : "a", 6 : "b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);


// array of objects
const users = [
        {
            id : 1,
            email : "Harsh@gmail.com"
        },
        {
            id : 1,
            email : "Harsh@gmail.com"
        },
        {
            id : 1,
            email : "Harsh@gmail.com"
        }
]

console.log(users[1].email);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedin'));   //  true
console.log(tinderUser.hasOwnProperty('age'));     // false


