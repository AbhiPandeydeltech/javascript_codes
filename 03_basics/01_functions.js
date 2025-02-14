
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() --> sayMyName is just reference , and when parenthesis applied then the function is called 

// function addTwoNumbers(number1, number2){ here number1,number2 are parameters 

//     console.log(number1 + number2);
// }

// addTwoNumbers(3,"4") ;  --> concatenation will be there in the function 

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) // and values are passed onto the function are called arguments

// console.log("Result: ", result);

/*
#####------important--------###
Yes, if a function parameter is not provided a value and is returned, it contains undefined, not null.

Explanation:
Missing arguments default to undefined in JavaScript.
null is an explicit value and must be manually assigned.
Example:
js
Copy
Edit
function test(param) {
    return param; // Returns whatever is passed, or undefined if nothing is passed
}

console.log(test());  // Output: undefined
console.log(test(null));  // Output: null
console.log(test(5));  // Output: 5
*/

function loginUserMessage(username = "sam"){  // default value 
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))



/* in real life projects we have to make functions without even knowing the number of 
arguments the function will be receiving, in that case we use below */
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

/* ... ==> this is rest operator and also spread operator, working depends on the use case*/
// console.log(calculateCartPrice(200, 400, 500, 2000))
/* val1 = 200, val2 = 400 , ...num ke vajah se num1 me [500,2000] pass hojaega, remaining values in the form of array */

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

let myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));