

/*
callback functions are normal functions in JavaScript, but they are passed as 
arguments to other functions and executed later, 
usually after an event or a specific condition is met.
*/

/*
They are just regular functions – The only difference is how they are used.
They can be synchronous or asynchronous – Often used in asynchronous operations like API calls, setTimeout, event handling, etc.
They are executed when the function receiving them decides to call them.
*/

/* Delaying execution , Handling async operations */

/* synchronous callback */
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();  // Calling the callback function
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Abhishek", sayBye);


/* asynchronous : using settimeout */


//callback hell 
/* Callback Hell refers to a situation in JavaScript where multiple nested 
callbacks make the code hard to read, debug, and maintain. It typically happens
 in asynchronous code when one callback depends on another, leading to a 
 pyramid-like structure.
 */

 setTimeout(() => {
    console.log('3');
    setTimeout(() => {
        console.log('2');
        setTimeout(() => {
            console.log('1');
        }, 1000);
    }, 1000);
 }, 1000);


 /* This code uses nested setTimeout calls, creating a delayed countdown from 
 3 → 2 → 1, each happening 1 second apart. */

 /*
 1️⃣ First setTimeout (Executes after 1 second)
The JavaScript Event Loop encounters the first setTimeout.
The callback is sent to the Web APIs, which starts a 1-second timer (1000ms).
Meanwhile, JavaScript continues executing other synchronous code (if any).
After 1 second, the callback executes. Similarly so on 
*/


/* fs(file system) module always needs to be imported in node.js
fetch can be used without importing because it is now a built in part in v18+(version 18+), 
if version of node.js lesser than 18 then there too we have to import it */




