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


// printName()
// addTwoNO(10,9)
// console.log(`Sum of two Numbers is ${addTwoNO(10 , null)}`)
console.log(loggIn_userMessage())
// console.log(loggIn_userMessage("Harshit"))