/*
Data can be categorised into two major division based upon how they are put into the memory and accessed from the memory.

1. Primitive Datatype : --> This only uses call by value
String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100; // No need to define type --> We will get to use it in typescript

*/

const score = 100
const scoreValue = 100.3
const outsideTemp = null
let userEmail
const id = Symbol("123")
const another_id = Symbol("123")

console.log(id == another_id)

const bigNumber = 245344758856n
console.log(typeof outsideTemp)

// Return type of primitive datatypes -->
// number => Number
// boolean => Boolean
// BigInt => bigint
// undefined => undefined 
// symbol => symbol
// null => object (**IMP**)

/*
2. Reference ( Non Primitive Datatype) : --> This is related to call by rference 
Array, Objects, Functions

*/

const array = ["apple", "banana", "pomegranate", "orange", "strawberry"]
const myFunction = function(){
    console.log("Hello World");
}
let admin = { // Object 
    email: "hello@google.com",
    upi: "admin@ibl"
}

console.log(typeof array)
console.log(typeof admin)

// Return type of reference datatypes -->
// array => return type (object) 
// function => return type (Function Object)
// object => return type (object)

// <------------------MEMORY------------------>
/*
Stack memory => primitive type
Heap Memory => reference type

*/

// Call by value & Call by reference in Memory

let user = {
    email: "user@google.com",
    upi: "user@ibl"
}

let new_user = user

new_user.email = "user@yippee.com"
console.log(new_user.email) // user@yippee.com
console.log(user.email) // user@yippee.com
