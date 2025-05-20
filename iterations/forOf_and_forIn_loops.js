/// for of  loop

//  ["", "", ""]

const arr = [1,2,3,4,5]
for (const i of arr) {
    // console.log(i);    
}


const greetings = 'Hello World'
for (const greet of greetings) {
    // console.log(`Each Char is ${greet}`);
}


//// Maps

const map =  new Map()

map.set('IN' , "India " )
map.set('USA' , "United states of America " )
map.set('Fr' , "France " )
// console.log(map);
for (const [key, value] of map) {
    // console.log(key, ":- ", value );
}



////   for in loop

const myObj = {
   js : "JavaScript",
   cpp : "C++",
   rb : "Ruby",
   swift : "Swift by apple"
}
for (const key in myObj) {
    // console.log(key, " :- " ,myObj[key]); 
}



const programming = ["js", "rb", "py", "cpp","java"]
for (const key in programming) {
    // console.log(programming[key]);
}


for (const key in map) {
    console.log(map[key]);
}

