

1️⃣ Avoids Polluting the Global Scope
Normally, if you declare variables globally, they stay in memory and might conflict with other scripts.
With IIFE, variables inside the function stay private and do not affect the global scope.
🔹 Example (Without IIFE - Global Pollution):

var name = "Abhishek";
console.log(name); // Abhishek
🔹 Example (With IIFE - No Pollution):

(function() {
    var name = "Abhishek"; // This stays inside IIFE
    console.log(name);
})();
console.log(name); // ❌ Error: name is not defined
✔ Global scope is not affected!


In Node.js, var name = "Abhishek"; is not global pollution in the same way as in the browser because variables declared with var inside a module are scoped to that module, not the global object (global in Node.js).

var name = "Abhishek"; 
console.log(name); // ✅ "Abhishek"
console.log(window.name); // ✅ "Abhishek"
In the browser, var name becomes a property of the window object.
This means any other script running in the same scope can accidentally overwrite it → Global Pollution.

2️⃣ Prevents Conflicts in Large Codebases
If multiple files have the same variable names, they may overwrite each other.
IIFE keeps variables inside the function, avoiding such issues.
🔹 Example:

js
Copy
Edit
(function() {
    var count = 5; // This variable is private to this function
    console.log(count);
})();
✔ No conflicts with other count variables!