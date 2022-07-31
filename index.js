"use strict"
// console.log(2+2)
// num = 5
// console.log(num)
// /*
// this is multiline
// comment
// */
// //this is single line comment

// num = 7         //number
// num = "seven"   //string  always give string in quotes
// num = `one`
// console.log(num)


// //declare  variable

// let a = 20    //we declae variable only once

// // if we use  "use strict" then it is mandatory to declare variables before using them

// // ; in js is optional

// let num1 = 7
// let num2 = 3
// console.log(num1 * num2)

// let _abc = 10 //valid with underscore at beginning bit not a nuber

// let x = 6
// console.log(x)
// console.log(typeof x)
// console.log(x, typeof x)

// let y = 8.4 //this is also a number

// let u
// console.log(y, typeof y)  // if we dont pass a value then its undefined

// let value = "987"   //its a string
// console.log(typeof value)  

//functions might take something from you and perform oprations and might give something back to you

// let val = Number("343")  //its a number
// console.log(typeof val)  

// let n = Number("879 abc")
// console.log(n, typeof n)   //output id  Nan  number
// //Nan is  Not a Number 

// //parseint tries to fet number from start if it starts with letter it wont
// let k = parseInt("343 val")
// console.log(k, typeof k)  // 343 Number


// let num = 1
// num = num + 2
// num += 2 //same as above

// console.log(num)

// let a = 4   
// a = a + 1 
// a += 1   //same as above
// a++        // same as above               only ofr 1 increment
// console.log(a)

// let b = 9
// //b++              //post increment operator
// //++b              //pre increment operator
// let b1 = b++    //post incement , first it will asig the value and hen it increments
// console.log(b, b1)   // 10 9
// let b2 = ++b    // pre incr  , it will firt increment and then it assigns
// console.log(b, b2) // 11 11

//relational operators

// let num1 = 8
// let num2 = 4

// let result = num1 > num2
// console.log(result)
// result = num1 == num2
// console.log(result)

// let a1 = 8
// let a2 = "8"

// result = a1 == a2  //normal comparision
// result = a1 === a2 // comparision including type

// let g1 = pen 
// let g2 = gun 
// result = g1 > g2  // true since p comes later than g

// result = g1 != g2  //not equal


let num1 = 7
let num2 = 6

let str1 = "happy"
let str2 = "life"

let res1 = num1 + num2
console.log("the addition of 7 and 6 is " +  res1)
let res2 = str1 + str2 
console.log(res2)    //concatination




