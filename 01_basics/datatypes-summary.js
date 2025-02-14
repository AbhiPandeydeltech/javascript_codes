//  Primitive
/*
✔ Stored directly in memory (immutable & fixed size).
✔ Copied by value (when assigned or passed to functions).
*/
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') //argument is a sting

console.log(id === anotherId);  /* not same , hence
                                 symbol played its role*/

// const bigNumber = 3456543576654356754n

// n is used to show bigInt


// Reference (Non primitive)

/*
✔ Stored as a reference (pointer) in memory.
✔ Copied by reference (new variable refers to the same object).
*/

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}


console.log(typeof anotherId);
console.log(typeof myFunction);  // it is actually a function object ( special type of object )
// functions are actually object

console.log(typeof heros)

// https://262.ecma-international.org/5.1/#sec-11.4.3

/* 
-javascript is a dynamic type language
-in js, there is no different category of integer 
and decimal , both fall under number 

primitive : stack memory 
non primitive (Reference) : heap memory
*/

// refer the heap_stack_memory image 

