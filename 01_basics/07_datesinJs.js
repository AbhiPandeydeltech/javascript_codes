// Dates


/* Date is a global object but not static as it can be instantiated */

let myDate = new Date()
console.log(myDate);  // output : 2025-02-12T14:24:17.644Z

/*
This is an ISO 8601 Date-Time Format. It represents:

📅 Date: 2025-02-12 (February 12, 2025)
⏰ Time: 14:24:17.644 (2:24:17 PM and 644 milliseconds)
🌍 Z: "Zulu Time" (UTC timezone)
 
UTC : Coordinated Universal Time

2025-02-12T14:24:17.644Z means February 12, 2025, at 14:24:17 UTC
In IST (Indian Standard Time, UTC+5:30), this would be 7:54:17 PM IST

Extract the time in UTC → 14:24:17 (2:24:17 PM UTC).
2️⃣ Add 5 hours 30 minutes:

14:24 + 5:30 = 19:54
The seconds (17.644) remain unchanged.
3️⃣ Final IST Time: 19:54:17.644 IST (or 7:54:17 PM IST).
*/


// console.log(utcDate.getTime());  // gives in milliseconds 

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)  // 0 --> jan (0-11) months 
// let myCreatedDate = new Date(2023, 0, 23, 8, 3)  // automatically converts am and pm 
// let myCreatedDate = new Date("2023-01-14")  yyyy-mm-dd
// let myCreatedDate = new Date("01-14-2023") mm-dd-yyyy
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()  // in milliseconds 

console.log(myTimeStamp);   // in milliseconds
// console.log(myCreatedDate.getTime());   comparison of two times 
// console.log(Math.floor(Date.now()/1000));  // in seconds 

/*
JavaScript Date follows the Unix Epoch, which starts from:
📅 January 1, 1970, 00:00:00 UTC

--> All dates in JavaScript are calculated 
as the number of milliseconds since this epoch.
*/


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());  //0-6 --> sunday to saturday 
console.log(newDate.toLocaleString());
// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    
}))  // output : Wednesday 



/*
2️⃣ { weekday: "long" }
This option ensures that only the full weekday name is returned.
"long" means full name (e.g., "Monday").
Other options:
"short" → "Mon"
"narrow" → "M"
*/


