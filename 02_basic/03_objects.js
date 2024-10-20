// singleton 
// constractor method through :- object.create

// object literals :-
const mySym = Symbol("key1")

const JsUser = {
    name: "satyam",
    "full name": "satyam lodhi",
    [mySym]: "mykey1",//symbol ki tarah use karne ke liye [] lagana hoga barna ye string samjhega 
    age : 21,
    location: "bhopal",
    email: "satyamlodhi@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}

// access //console.log(JsUser.email)
// console.log(JsUser["email"])//square notation//behind ye email ko ek string ki tarah considered kar raha hai isliye "email"ki string me hi likhenge
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "satyamlodhi659@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "satyamlodhi650@gmail.com"

//console.log(JsUser);

// function
JsUser.greeting = function(){
    console.log("Hellow js user");
}

console.log(JsUser.greeting());//console.log(JsUser.greeting) :- funciton ka reference aata hai excequte nahi hota

JsUser.greetingtwo = function(){
    console.log(`hellow Js user,${this.name}`);//string interpulation//this :- same reference ke liye use hota hai
}

console.log(JsUser.greetingtwo());
