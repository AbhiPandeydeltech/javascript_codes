// singleton
// Object.create --> used for creating singleton

// object literals

/* objects created through literals or consturctor are never singleton */
const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",  
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",   // use sumbol as a key in an object , this is the syntax to write use mySym as symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser);
/* output : 
{
  name: 'Hitesh',
  'full name': 'Hitesh Choudhary',
  age: 18,
  location: 'Jaipur',
  email: 'hitesh@google.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],  
  [Symbol(key1)]: 'mykey1'  --> this is what to be shown in interviews 
}
  */

/*
const JsUser = {
    name: "Hitesh",  
    "full name": "Hitesh Choudhary",
    mySym: "mykey1",   
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
here upr mySym wont be the symbol vala mySym 
/*
-->name can be written as name or "name" in both ways as keys 
--> also if we accessing values through object_name[key] --> then this key should be in the
double quotes  
--> if a key is already in double quotes then we can never find the value using 
object_name.key (ye key double quotes me hai mind it) 
--> so it is better to write key without double quotes as it gives multiple ways to access
*/
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // object values cant be changed now 
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting);  // function ka reference aaega bs function nhi 
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());