const user ={
    username : "harsh",
    price : 990,

    welcome_Message : function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    } 
}

// user.welcome_Message()
// user.username = "Shubham"
// user.welcome_Message()

// console.log(this);


function print(){
    let username = "Harshj"
    console.log(this.username);
    
}

// print()        //  undefined



// const chai = function () {
//         let username = "Harshj"
//         console.log(this.username);
// }




//   +++++++++  arrow function ++++++++

// const chai = ()=>{
//     let username = "Harshj"
//     console.log( this);
// }
// chai()


// const addTwoNo = (num1,num2) => {
//     return num1 + num2
// }

const addTwoNo = (num1,num2) =>  (num1 + num2)     //// implicit   return
const returnOBj = () =>  ({username : "Harsh"})    //// implicit   return

console.log(`Sum of this two numbers is : ${addTwoNo(78,5)}`);

console.log(returnOBj());


