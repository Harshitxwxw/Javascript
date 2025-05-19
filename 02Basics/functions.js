function printName (){
    console.log("Harshit");
    
}

function addTwoNO(a,b){
    return a+b
    console.log(`Sum of Two Numbers is ${a+b}`);
}


function loggIn_userMessage(username = "Harsh") {
    // if (username === undefined) {
    //     console.log("Please enter a usernqame");
    //     return
    // }
    if (!username) {
        console.log("Please enter a usernqame");
        return
    }
    return `${username} Just Logged in .`
}


function calculateCartPrice(val1, val2,...num1) {
    return num1
}
// console.log(calculateCartPrice(200,300,400,900));





const user = {
    userName : "Harsh",
    price : 899
}
function handleObj(anyObj) {
    console.log(`UserName is : ${anyObj.userName} ,and Price is : ${anyObj.price}`);
    
}
// handleObj(user)
// handleObj({
//     userName : "Harsh",
//     price : 899
// })





const newArr = [200,300,400,600]
function returnArrayValues(getArray,pos) {
    console.log(getArray[pos-1]);
  
}
returnArrayValues(newArr,4)





// printName()
// addTwoNO(10,9)
// console.log(`Sum of two Numbers is ${addTwoNO(10 , null)}`)
// console.log(loggIn_userMessage())
// console.log(loggIn_userMessage("Harshit"))


