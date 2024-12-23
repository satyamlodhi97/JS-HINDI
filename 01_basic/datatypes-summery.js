// primitive datatypes
// 7 types :- String:- called by value ,Number, Boolean,null,Undefined,Symbol:-use for unique work, BigInt:- scientific value or big value ko karne me

const score = 100
const scoreVlue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 223243234n //number me 'n' lagane se bigNumber ban jayega

//reference//non primitive datatypes
//Array, Objects, Functions

const heros = ["shaktiman", "naagraj","doga"]
let myOvj={
    name: "satyam",
    age: 20,
}
//function
const myFunction =function(){
    console.log("hello world");
}

console.log(typeof heros);//output:-object
console.log(typeof myFunction);//output:-function
console.log(typeof bigNumber);//output:- bigint
console.log(typeof anotherId);//output:-symbol
console.log(typeof userEmail);//output:-undefined
console.log(typeof isLoggedIn);//output:-boolean
console.log(typeof outsideTemp);//output:-object
console.log(typeof scoreVlue);//output:-number
console.log(typeof score);//output:-number


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack memory(Primitive):-is me copy milti hai,Heap memory(Nom-primitive):- reference milta hai
let myYoutubename ="satyamlodhi97"
let anothername = myYoutubename 
anothername ="satyamblogger"
console.log(myYoutubename);
console.log(anothername);

let user1 ={
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "satyam@google.com"
console.log(user1.email)
console.log(user2.email)
