const lang = ["js","rb", "py", "cpp","java"]


lang.forEach(function (item) {
    // console.log(item);
})

lang.forEach( (item) => {
    // console.log(item);
})

function printMe(item) {
    console.log(item);
}

// lang.forEach(printMe)


lang.forEach( (item, index, arr) => {
    // console.log(item,index,arr);
})



const myCoding = [
    {
        langName : "JavaScript",
        langFile : "js"
    },
    {
        langName : "C++",
        langFile : "cpp"
    },
    {
        langName : "Python",
        langFile : "py"
    }
]


myCoding.forEach( (item) =>{
    console.log(item.langName);
    
    // console.log(`Language Name is : ${item.langName} & Language File is : ${item.langFile}` );
})
