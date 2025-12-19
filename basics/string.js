const name = "Chichi"
let repoCount = 3

console.log(name + " has total repositories : " + repoCount) // This is not a good way

// Using string interpollation feature

console.log(`My name is ${name} and I have total ${repoCount} repositories`)

const gameName = new String ("ChichiHiHi")

console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName) // No change in initial string as it is stored in stack memory

// String Operations -->
console.log(gameName.charAt(2))
console.log(gameName.indexOf('H'));

// Substring and slicing -->
const newString = gameName.substring(0,4) // exclusive of 4 // Chic
const anothernewString = gameName.slice(-10,-4) // exclusive of -4 // Chichi
console.log(anothernewString)
console.log(newString)
 
// Trim Function -->
const newStr = "  Chandrima   " // If user enters white spaces we have to trim it so that it doesn't store at the database
console.log(newStr);
console.log(newStr.trim()) // It removes all white spaces

// Replace Function -->
const url = "https://hello.com/hello%20javascript"
console.log(url.replace("%20","-"))

// checking whether a keyword present or not -->
console.log(url.includes("kitty")) // false

const userName = "Chandrima-Saha-@-18-10-04"
console.log(userName.split('-')); // [ 'Chandrima', 'Saha', '@', '18', '10', '04' ]
