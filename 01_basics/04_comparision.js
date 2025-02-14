// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);  -> true
// console.log("02" > 1);  -> true

console.log(null > 0); //false
console.log(null == 0);  //false
console.log(null >= 0);  //true

/* 
 ** equality check (==,===) and comparisons (> < >= <=)
    works differently.
    --> comparisons converts null to number, treating it as 0 
    while equality check does not 
    that's y last statement of null vala gives true
*/
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
/* all false */

// (===) /* checks value as well as their types */
// "2"==2 --> is true 
console.log("2" === 2);