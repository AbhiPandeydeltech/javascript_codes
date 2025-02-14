// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

//elements can be different 

/*
if copy is done then that is shallow copy of an object (whose properties share the same reference point)
heap memory vali cheeg and deep copy opposite.
*/

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  
/* 
unshift() method in JavaScript does not cause any values to be lost. 
It adds a new element at the beginning of the array and shifts all existing elements 
to the right by one position, increasing the array's length.
*/
// myArr.shift()
/*
shift() method in JavaScript removes the first element from an array and shifts all 
remaining elements to the left by one position. The array's length decreases by 1
*/
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

/*
 const newArr = myArr.join()  --> array values string me convert hojaengi comma separated
console.log(typeof newArr); // Output: "string"
*/
/*
** JOINS :
--> join() without any arguments, JavaScript converts the array into a string 
and separates the elements with commas (,) by default.

** You can customize the separator by passing an argument to .join().
Custom Separators:
javascript
Copy
Edit
console.log(myArr.join(" - ")); // Output: "1 - 2 - 3 - 4"
console.log(myArr.join(""));   // Output: "1234" (No separator)
console.log(myArr.join(" | ")); // Output: "1 | 2 | 3 | 4"

 -->the separators (like commas) are part of the string and can be accessed 
 using indices just like any other character in a string.
*/


// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // 1 index se 2nd index tk (3-1)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  // 1 index se 3rd index tk 
console.log("C ", myArr);
console.log(myn2);


/* splice changes original array 
splice() modifies the original array 
slice() does not modify the original array (creates a new one),Extracts part of an array 
into a new array,The original array remains unchanged.

---> let arr = [1, 2, 3, 4, 5];
let removed = arr.splice(1, 2); // Removes 2 elements starting at index 1

console.log(arr);      // Output: [1, 4, 5] (Modified array)
console.log(removed);  // Output: [2, 3] (Removed elements)
*/