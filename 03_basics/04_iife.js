// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // semicolon needed in case of IIFE 


//unnamed IIFE is written through arrow functions 
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

/* see IIFE as ()() , first () where function definition will be there, and 
second () will be to call the function , and since while normal calling 
we pass the arguments which is given as a value to parameters of the function
so whatever we write in this bracket will be argument only and will be 
received by the function as value of the parameter */