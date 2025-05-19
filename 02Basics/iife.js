//// Immediately invoked function expression


(function chai() {   // named IIFE
    console.log(`DB connected`);
})();


( (name)=> {
    console.log(`DB connected Two ${name}`);
})("Harshit");