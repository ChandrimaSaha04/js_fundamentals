let score = "false"

// console.log(typeof score)
// console.log(typeof (score))

// let value_in_number = Number(score)
// console.log(typeof value_in_number)
// console.log(value_in_number)

// "33" => 33
// "33abc" => NaN (Not a number)
// "abcpw" => Nan
// null => 0
// undefined => NaN
// true => 1 ; false = 0

let value_in_boolean = Boolean(score)
// console.log(typeof value_in_boolean)
// console.log(value_in_boolean)

// if any string is passed to Boolean() -->
// then if the string has some characters then it will produce --> true
// else if the string is empty then it will produce --> false
// e.g. --> "" --> false ; "false" --> true
// 1 --> True ; 0 --> False

// ------- < Operations > -------

// Basic operations -->

// console.log(2+3)
// console.log(2-3)
// console.log(2*3)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let x = 2
let negative = -x
// console.log(negative)

let str1 = "Hello "
let str2 = "Everyone!"
let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2) // 12
// console.log("1" + "2") // 12
// console.log(1 + "2") // 12
// console.log(1 + "2" + 2) // 122
// console.log(1 + 2 + "2" + 2) // 322
// console.log("1" + 2 + 2) // 122
// console.log(1 + 2 + "2") // 32

// console.log(true) // true
// console.log(+true) // converts true to number --> true => 1
// console.log(+"") // false => 0

// Increment Operator

let a = 100
let pre_inc = ++a
let post_inc = a++
console.log(++a) // 103
console.log(a++) // 103
console.log(pre_inc) // 101
console.log(post_inc) // 101