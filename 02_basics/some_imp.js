
/*
 Array indices are stored as strings internally, even though we access them with numbers.

*/

/*
 Dot notation (arr.0) is not allowed because identifiers cannot start with a digit.

Object keys declared as strings cannot be accessed using dot notation if they don’t 
follow standard variable naming rules.
*/

/*
An array in JavaScript is just an object where:

The keys are numeric (but stored as strings internally).
The values are the elements stored at those indices.
*/

/*

const arr = [10, 20, 30];

console.log(arr["0"]); // 10
console.log(arr[0]);   // 10
✔ Both arr["0"] and arr[0] work the same way because JavaScript automatically converts numeric indices into strings internally.

*/


/*
✅ First Object (Correct Symbol Usage)
javascript
Copy
Edit
const mySym = Symbol("key1"); // Creating a Symbol

const JsUser = {
    name: "Hitesh",  
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",   // Symbol as a key (Correct)
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(typeof mySym); // "symbol"
console.log(JsUser[mySym]); // "mykey1"
console.log(JsUser["mySym"]); // undefined (no string key named "mySym")
✔ Effect:

The key [mySym] is a Symbol key, not a string.
Cannot be accessed using dot notation (JsUser.mySym).
Does not appear in Object.keys(JsUser), because symbols are not enumerable.
Must be accessed using JsUser[mySym].
❌ Second Object (Incorrect Symbol Usage)
javascript
Copy
Edit
const JsUser = {
    name: "Hitesh",  
    "full name": "Hitesh Choudhary",
    mySym: "mykey1",   // Not using Symbol, treated as a normal string key
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(typeof JsUser.mySym); // "string"
console.log(JsUser.mySym); // "mykey1"
console.log(JsUser["mySym"]); // "mykey1"
✔ Effect:

"mySym" is just a normal string key, not a Symbol.
Can be accessed using dot notation (JsUser.mySym).
Will appear in Object.keys(JsUser) because it is an enumerable property.
It loses the uniqueness property of Symbol.
*/


/*
🔹 Practical Examples of Symbol in JavaScript
1️⃣ Using Symbol as a Unique Object Property Key
Since Symbol values are unique, they are useful for creating hidden or non-colliding properties in objects.

javascript
Copy
Edit
const mySym = Symbol("secretKey");

const user = {
  name: "Abhishek",
  age: 22,
  [mySym]: "Sensitive Data" // Using Symbol as a property key
};

console.log(user.name); // "Abhishek"
console.log(user.age); // 22
console.log(user[mySym]); // "Sensitive Data"

console.log(Object.keys(user)); // ["name", "age"]  (Symbol property is hidden)
console.log(Object.getOwnPropertySymbols(user)); // [ Symbol(secretKey) ]
✔ Benefit: The mySym property does not show up in Object.keys(), making it useful for storing hidden/internal data.

2️⃣ Preventing Property Name Conflicts
Since Symbol creates a unique key, it avoids accidental overwrites in objects.

javascript
Copy
Edit
const ROLE = Symbol("role");

const employee = {
  name: "Abhishek",
  [ROLE]: "Developer" // Symbol key prevents accidental overrides
};

// Later in the code...
employee["role"] = "Manager"; // Regular property (not the same as the Symbol key)

console.log(employee["role"]); // "Manager"
console.log(employee[ROLE]); // "Developer" (Symbol property is untouched)
✔ Benefit: Even if another developer adds a "role" key, it won’t overwrite the Symbol key.
*/
