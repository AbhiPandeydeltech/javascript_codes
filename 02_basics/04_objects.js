// const tinderUser = new Object() // empty object 
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

/*
  ----> Optional Chaining :
        console.log(regularUser?.fullname?.userfullname?.firstname);
        ** Optional chaining (?.) prevents errors by returning undefined 
        if any property in the chain is missing.
        **If fullname, userfullname, or firstname is missing,
         it won't throw an error, it will simply return undefined.
*/

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } --> object ke andr do object aajaenge => {{},{}} // this 
// const obj3 = Object.assign({}, obj1, obj2, obj4) {}->target object , obj1,obj2,obj3 : source object
/*
The Object.assign(target, source1, source2, ...) method copies the enumerable 
properties from obj1, obj2, and obj4 into the target {} and returns the modified 
target object, which is then stored in obj3.
*/

/*
const obj5 = Object.assign(obj1, obj2, obj4) //here obj1 will become the target object 
console.log(obj5);  //obj2 and obj4 will become source objects
console.log(obj1);  // so obj1 and obj5 will hold same things 
console.log(obj1 === obj5); // true (same reference) --> they are references to same memory

--> obj1 and obj5 will store the same values because Object.assign() modifies the 
first argument (obj1) in place and also returns the same modified object.
*/
const obj3 = {...obj1, ...obj2}   // spread operators 
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // keys in form of array returned 
// console.log(Object.values(tinderUser));  // same in the form of array 
// console.log(Object.entries(tinderUser));  // hr key value pair array bnjaega , and everything will be wrapped into array as well 
/* [[key1:value1],[],[],so on]*/
 
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // to check if property exist or not 


////////////-------object destructuring----------------

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course  


/*
 const {} = course 
 kahan se value extract krni hai is course object , aur kya extract krna hai will be 
 inside the curley braces {}, like {courseInstructor} to courseInstructor ki value extract 
 krlo course object se 
 --> 
 {courseInstructor: instructor} if suppose name too large we want to give our own name 
 courseInstructor extract krlo course se and give it instructor name 
 now print or whatever want to do using instructor 
*/

// console.log(courseInstructor);  // const {courseInstructor} = course  
console.log(instructor);


// Now API comes in JSON format , earlier it used to come in XML 
/* API in the form of object */
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }




/* API in the form of array with elements as objects */
[
    {},
    {},
    {}
]

