
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');


// Purpose of IIFE 
// 1. Avoiding Global Scope Pollution :
// 2. Executes code immediately
