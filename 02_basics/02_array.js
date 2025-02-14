const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) --> marvel_heros me dc_heros add hojaega as an element
// array ke andr array types : 2D array bn jaega 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)  // returns a new array so that's y stored in a new array 
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] 
/* indiviual array elements from each will spread into one */


// ... ==> spread operator 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
/* concat jaise kaam krega , elements from all the array will spread into 1D array 
also flat() takes an argument which indicates the depth of flat 

--> infinity merges all levels into 1 
--> depth will merge level depth to level0
*/
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) // conversion of array from string 
console.log(Array.from({name: "hitesh"})) // interesting, here empty array 
/*
keys ka array bnae ya values ka array bnae (this has to be specified )
*/

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // new array 



/*
Level 0: [ 1, [2, [3, [4, 5]]] ]  // Main array
         ├── 1 (First element)
         └── [2, [3, [4, 5]]] (Nested array)

Level 1:     ├── 2 (First element in nested array)
             └── [3, [4, 5]] (Deeper nested array)

Level 2:         ├── 3 (First element in deeper nested array)
                 └── [4, 5] (Deepest nested array)

Level 3:             ├── 4 (First element in deepest array)
                     ├── 5 (Second element in deepest array)
🔹 Index Path to 5
We traverse through the levels:

arr[1] → [2, [3, [4, 5]]] (Level 1)
arr[1][1] → [3, [4, 5]] (Level 2)
arr[1][1][1] → [4, 5] (Level 3)
arr[1][1][1][1] → 5 (Final value)
*/

/*

1️⃣ Get Array of Keys
const obj = { name: "hitesh" };
const keysArray = Array.from(Object.keys(obj));
console.log(keysArray); // Output: ['name']
✔ Converts object keys into an array.

2️⃣ Get Array of Values
const valuesArray = Array.from(Object.values(obj));
console.log(valuesArray); // Output: ['hitesh']
✔ Converts object values into an array.

3️⃣ Get Array of Key-Value Pairs
const entriesArray = Array.from(Object.entries(obj));
console.log(entriesArray); // Output: [['name', 'hitesh']]
✔ Converts object into an array of [key, value] pairs.

💡 Alternative Using map()
const obj = { a: 10, b: 20, c: 30 };
const keyValueArray = Object.entries(obj).map(([key, value]) => `${key}: ${value}`);
console.log(keyValueArray); 
// Output: ['a: 10', 'b: 20', 'c: 30']
*/