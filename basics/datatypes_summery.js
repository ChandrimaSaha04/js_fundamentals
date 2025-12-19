/*
Data can be categorised into two major division based upon how they are put into the memory and accessed from the memory.

1. Primitive Datatype :
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
2. Reference ( Non Primitive Datatype) :
Array, Objects, Functions

*/

const array = ["apple", "banana", "pomegranate", "orange", "strawberry"]
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof array)

// Return type of reference datatypes -->
// array => return type (object) 
// function => return type (Function Object)
// object => return type (object)