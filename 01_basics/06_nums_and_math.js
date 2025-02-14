const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(typeof balance)  --> object 

// console.log(balance.toString().length); --> .toString() typecast number to string 
// console.log(balance.toFixed(1));  100.0 (precision value )

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); // 123.9
console.log(otherNumber.toPrecision(3)); // 124
console.log(otherNumber.toPrecision(2)); // 1.2^2  : 1.2e+2
/*
ven though otherNumber is a primitive number,
 JavaScript automatically wraps it in a Number object when calling .toPrecision().
*/

/*
Precision is the total number of significant digits 
(both before and after the decimal) that is closest to the original number.
*/

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));   by default US standards ke hisaab se commas lgjate hai


// +++++++++++++ Maths +++++++++++++++++++++++++++++


/*
Math is a built-in object in JavaScript, no need to install or import.
--> even though it is an object it cant be instantiated like new Math()
--> It stores mathematical constants and functions like an object.
--> Maths is used directly as global object  ( static object )

*/

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); // highest value
// console.log(Math.floor(4.9)); // lowest value 
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());  //number between 0 and 1 , 0 inclusive, 1 not 
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);
console.log(typeof Math);
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

//value between min and max both included 