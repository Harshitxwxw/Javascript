//  arrays

const myArr = [0,1,2,3,4,5,6]
const newArr = new Array(1,2,3,56,7,9)
const myHeros = ['IronMAn','Thor','Caption America']

// console.log(myHeros[2]);


// Array methods

// myArr.push(7)
// myArr.push(99)
// console.log(myArr)
// myArr.pop()


// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(7))
// console.log(myArr.indexOf(3));   // if element not in array ,it will give index as -1

const newarray = myArr.join()   // join all ele of arr in string
// console.log(typeof newarray);


// console.log(myArr)
// console.log(newarray)

////  slice  , splice

console.log("A ",myArr);
const myn1 = myArr.slice(1,3)   // it will return the copy of arr
                                //  ele b/w (1,3)  1-> included  , 3 -> excluded
console.log(myn1);


console.log("B ",myArr);
const myn2 = myArr.splice(1,3)  // it will return arr ele b/w (1,3)  1,3 -> included 
                                // alse remove it from original array
console.log(myn2);

console.log("C ",myArr);
