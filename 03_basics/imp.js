/*
The undefined you see is the return value of console.log(), not part of the comparison results.

Explanation:
console.log(value) prints the value but returns undefined.
In the browser console, the return value of the last executed statement is displayed if not assigned.
Example:
let result = console.log("Hello"); // Prints "Hello", returns undefined
console.log(result); // Prints undefined
Output:

Hello  
undefined  
This happens because console.log() doesn't return a value.
*/


/*
function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

when nothing is passed then function returns nothing so undefined , this is custom example of 
above 
*/


