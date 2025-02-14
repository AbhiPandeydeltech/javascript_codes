const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");  // outdated ways , not preferred today

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  
//latest --> called interpolation (more readable etc)

/* ${....} -->  placeholder */

/*
const str1 = "Hello";       // Primitive string
const str2 = new String("Hello"); // String object

console.log(typeof str1); // "string"
console.log(typeof str2); // "object"
✔ str1 is a primitive string.
✔ str2 is a String object (created using new String()).

JavaScript temporarily wraps primitive strings with a String object 
when you access properties/methods. 
*/

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
console.log(gameName.__proto__);  //we will get an object , content or methods/properties wont be 
// visible here , but the exact properties can be used 

// refers to string's prototype 

//everything in js is at the end object 

// gameName.__proto__.__proto__ : this refers to object's prototype  ( it is prototype chaining )


// console.log(gameName.length);
// console.log(gameName.toUpperCase());  // original string not changed 
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)  // ne negative indices can be given 
console.log(newString);

/*
indexing : positive indexing from 0 to length-1 from left to right
negative indexing : from -1 to -length from end of the string to front

but str[-1] not possible like this 
*/

const anotherString = gameName.slice(-8, 4) // ---> empty string (since -8 (start)position is right of position(end))

// the above will work for (-8,7)
// negative indices can be given too
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
/*Yes, browsers replace spaces (" ") with %20 when dealing with URLs.*/

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))  // word found or not 

console.log(gameName.split('-'));  // string splited into array given the separator

/* split also takes second parameter which is limit which limits the number of splitings*/

