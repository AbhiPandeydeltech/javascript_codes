

const myPromise = new Promise((resolve,reject)=>{
    const rand = Math.floor(Math.random()*2);
    if(rand === 0){
        resolve();
    }
    else{
        reject();
    }
});

myPromise
.then(()=>{
    console.log('Success')
})
.catch(()=>{
    console.error("Something went wrong"); //.errror for errors or warning 
})
.finally(()=>{
    console.log("Completed");
})


//finally is not a must thing to add , it will show in both cases (response,rejection)


/**  notes 
 A Promise in JavaScript is an object that represents a value that might be 
 available now, later, or never. It's mainly used for handling asynchronous 
 operations like fetching data, reading files, or making API calls.

 Here, resolve() is called when the operation is successful, and reject() is called if it fails.
 
 .then() executes when promise is fulfilled, whereas .catch() runs if promise is rejected

 .then() receives resolve()'s value, and .catch() receives reject()'s error.

 resolve: Accepts any value (primitive, object, function, another promise, etc.), which is then
 passed to .then() in case of promise fulfillment
 reject : Accepts any error or reason (usually an Error object or a string), which is passed 
 to .catch() in case of promise rejection 


 */