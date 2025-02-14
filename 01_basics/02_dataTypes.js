//earlier javascript does not has classes, modules , arrow functions feature
"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser ,  built is method for 
//                                       browser's window object 

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique (used in react , to compare different components)

/*
-->Symbol in JavaScript is used to create unique identifiers.
-->Suppose, program written to see for temperature reading , and 
in a case temperature not received so in that case we will set it to null 
rather than undefined , because tempearture aaya hi nhi so the field must 
be empty rather than undefined
*/
// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object


/* 
Yes, ECMAScript (ES) defines the JavaScript standard for different
 JavaScript runtime environments, including browsers, Node.js, and 
 other JavaScript engines.
*/

/*

let state = undefined 
let state = null 

--> both are differnt
undefind : value not assigned , but variable declared , 
Represents something that does not exist or is not initialized.

null : value is set to empty "intentionally" , 
Represents something that exists but is empty.

