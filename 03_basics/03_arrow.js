const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}

/* "this" is used in current context */

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


/*
function chai(){
    let username = "hitesh"
    // console.log(this.username); --> undefined, function ke andr aise this nhi use krskte 
    console.log(this)  // global object print horha , function ke andr print kra to node ka global object aata hai 
}

chai()
*/



// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); --> still undefined 
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this); 
    /*
    --> this is not refering to global object "global" of node.js but rather empty
    object
    */


}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 
/* this is implicit return which does not require us to use {} and return*/

// const addTwo = (num1, num2) => ( num1 + num2 ) // same as above (used in react)

const addTwo = (num1, num2) => ({username: "hitesh"})
/* if object returned*/


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach() --> it takes function in it 

// console.log(global) --> global object in node.js 