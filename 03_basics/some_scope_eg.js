

/*
let c = 300; // Global scope

if (true) {
    let a = 10; // Block-scoped
    const b = 20; // Block-scoped
    c = 30; // Modifies global 'c'
}

console.log(c); // Output: 30 (Global 'c' is modified)
*/

/*
let c = 300;

if (true) {
    let c = 30; // This creates a new block-scoped 'c'
}

console.log(c); // Output: 300 (Global 'c' remains unchanged)
*/


/*
Temporal Dead Zone (TDZ) Example for let and var
The Temporal Dead Zone (TDZ) occurs when trying to access a let or const variable
 before its declaration. However, var behaves differently because it is hoisted but 
 initialized with undefined.

--> Example: let causes a ReferenceError due to TDZ
console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
let x = 10;
console.log(x); // ✅ Output: 10

--> Example: var is hoisted and initialized with undefined
console.log(y); // ✅ Output: undefined (Hoisted but uninitialized)
var y = 20;
console.log(y); // ✅ Output: 20
*/


/*
Case 1: var c = 30; inside the block
var c = 300; // Global scope (Memory Location 1)

if (true) {
    var c = 30; // Redeclares 'c' in the global scope
}

console.log(c); // Output?
var c = 300;

JavaScript creates Memory Location 1 for c and assigns 300 to it.
if (true) { var c = 30; }

Since var ignores block scope, this is not a new variable.
Instead, it reuses the same Memory Location 1 and overwrites the value 300 → 30.
console.log(c);

It prints 30, because c is still in Memory Location 1, but its value was updated.
✔ Conclusion: No new memory location is created. The same memory is reused, and c is overwritten.

Case 2: c = 30; inside the block (without var)
var c = 300; // Global scope (Memory Location 1)

if (true) {
    c = 30; // Modifies global 'c'
}

console.log(c); // Output?
var c = 300;

Memory Location 1 is created for c, with value 300.
if (true) { c = 30; }

Since c is already declared globally, JavaScript does not create a new variable.
Instead, it finds Memory Location 1 and updates 300 → 30.
console.log(c);

It prints 30, because c is still in Memory Location 1, just with an updated value.
✔ Conclusion: Again, no new memory location is created. The global c is just updated.

*/

/*
function test() {
    var x = 10; // 'x' is function-scoped
    console.log(x); // ✅ Accessible here (10)
}

test();

console.log(x); // ❌ ERROR: x is not defined (because it's function-scoped)
Explanation:

var x = 10; is inside the function test().
x is only accessible inside test().
Outside test(), x does not exist, so an error occurs.
*/

