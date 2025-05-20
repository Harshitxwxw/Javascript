// for

// for (let i = 0; i < 10; i++) {
//     if (i == 5 ) {
//         console.log("Number 5 is best");
//     }
//     console.log(i+1);
// }


//// printing tables 

for (let i = 0; i <=10; i++) {
    // console.log(`Outer loop value : ${i}`);
    for (let j = 0; j <=10; j++) {
        // console.log(`Inner loop value : ${j}`);
        
        // console.log(`${i} * ${j} = ${i*j}`);
        
    }
    // console.log("\n");
    
}


let array = ["Flash", "Batman", "Spiderman", "Onepunch Man"]

for (let i = 0; i < array.length; i++) {
        // console.log(array[i]);
}


////   break and continue in loops


for (let index = 0; index <=20; index++) {

    if (index %2 != 0) {
        continue;
    }
    
    console.log(index) ;
    
    if (index == 16)  break;
    
}
















