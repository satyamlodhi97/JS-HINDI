const tinderUser = new Object()//this is singleton object
//const tinderUser= {} :- this noSingleton object //const tinderUser = new object() :- dono se object ko declear kar sakte hain 

tinderUser.id = "123abc"
tinderUser.name = "satyam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

//const se declear karte hain

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname:{
            firstname: "satyam",
            lastname: "lodhi",
        }
    }
}
//console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//combine the object
//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}//sprid
//console.log(obj3);

const users =[
    {
    },
    {                //loop through ya value print ke liye
    },

    {
        id: 1,
        email: "s@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);//output:-{ id: '123abc', name: 'satyam', isLoggedIn: false }

// console.log(Object.keys(tinderUser));//output:-[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));//output:-[ '123abc', 'satyam', false ]
// console.log(Object.entries(tinderUser));//output:-[ [ 'id', '123abc' ], [ 'name', 'satyam' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//for used in property check
/*{<prototype>: Object { … }
​​
__defineGetter__: function __defineGetter__()
​​
__defineSetter__: function __defineSetter__()
​​
__lookupGetter__: function __lookupGetter__()
​​
__lookupSetter__: function __lookupSetter__()
​​
__proto__: 
​​
constructor: function Object()
​​​
assign: function assign()
​​​
create: function create()
​​​
defineProperties: function defineProperties()
​​​
defineProperty: function defineProperty()
​​​
entries: function entries()
​​​
freeze: function freeze()
​​​
fromEntries: function fromEntries()
​​​
getOwnPropertyDescriptor: function getOwnPropertyDescriptor()
​​​
getOwnPropertyDescriptors: function getOwnPropertyDescriptors()
​​​
getOwnPropertyNames: function getOwnPropertyNames()
​​​
getOwnPropertySymbols: function getOwnPropertySymbols()
​​​
getPrototypeOf: function getPrototypeOf()
​​​
groupBy: function groupBy()
​​​
hasOwn: function hasOwn()
​​​
is: function is()
​​​
isExtensible: function isExtensible()
​​​
isFrozen: function isFrozen()
​​​
isSealed: function isSealed()
​​​
keys: function keys()
​​​
length: 1
​​​
name: "Object"
​​​
preventExtensions: function preventExtensions()
​​​
prototype: Object { … }
​​​
seal: function seal()
​​​
setPrototypeOf: function setPrototypeOf()
​​​
values: function values()
​​​
<prototype>: function ()
​​
hasOwnProperty: function hasOwnProperty()
​​
isPrototypeOf: function isPrototypeOf()
​​
propertyIsEnumerable: function propertyIsEnumerable()
​​
toLocaleString: function toLocaleString()
​​
toString: function toString()
​​
valueOf: function valueOf()
​​
<get __proto__()>: function __proto__()
​​
<set __proto__()>: function __proto__()

​*/
//*************de-structure************

const course = {
    coursename: "js in hindi",
    price : "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor : instructor} = course // de-structure ke liye : ko use karte hain (courseInstructor ki jagah instructor aa jayega)
console.log(instructor);  

// const navbar = ({company}) => {

// }     //de-structure me {}ka use hota hai 

// navbar(company = "satyam")


//(JSON):-
// {
//     "name" : "satyam",
//     "coursename": "js in hindi",
//     "price": "free"
// }


//array
[
    {},
    {},
    {},
]