const nam = 'Harshit'
const repocount = 50

// console.log(nam + repocount+ " Value");

console.log(`Hello my name is ${nam} and my repo count is ${repocount}`);

const gameName = new String("Harshit-m")  //  another way of string declaration

console.log(gameName[0]);
console.log(gameName.__proto__);


//   String Methods
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('h'));
console.log(gameName.endsWith('t'));
console.log(gameName.startsWith('h'));


//   Slicing
const newString = gameName.substring(0,4)
console.log(newString);

const anotherStr = gameName.slice(-8,4)
console.log(anotherStr);

const newStr1 = "     Harsh     "
console.log(newStr1);
console.log(newStr1.trim(" "));

const url = "https://harsh.com/harshit%20magarde"

console.log(url.replace('%20','-'));
console.log(url.includes('harsh'))

console.log(gameName.split('-'));
