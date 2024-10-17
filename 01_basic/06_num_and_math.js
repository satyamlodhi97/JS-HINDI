//const score = 400

//const balance = new Number(100)
//console.log(balance);//output:-[Number: 100]
// Number { 100 }
// ​
// <primitive value>: 100
// ​
// <prototype>: Number { 0 }
// ​​
// constructor: function Number()
// ​​
// toExponential: function toExponential()
// ​​
// toFixed: function toFixed()
//console.log(balance.toFixed(2)); //output:-100.00

//For use in :- precision value

// toLocaleString: function toLocaleString()
//const hundreds = 100000
//console.log(hundreds.toLocaleString('en-IN'));//output:-1,00,000 //In USA ()//output:-100,000

// toPrecision: function toPrecision()
//const otherNumber = 23.8966
//console.log(otherNumber.toPrecision(2));//output:24//this is depend on (input)

// toString: function toString()
//console.log(balance.toString().length)
 
// valueOf: function valueOf()
// ​​
// <primitive value>: 0
// ​​
// <prototype>: Object { … }

//****************maths******************

//console.log(Math);
// Math { … }
// ​
// E: 2.718281828459045
// ​
// LN10: 2.302585092994046
// ​
// LN2: 0.6931471805599453
// ​
// LOG10E: 0.4342944819032518
// ​
// LOG2E: 1.4426950408889634
// ​
// PI: 3.141592653589793
// ​
// SQRT1_2: 0.7071067811865476
// ​
// SQRT2: 1.4142135623730951
// ​
// abs: function abs()
//console.log(Math.abs(-4)); //output:- 4 //this changes signs(negative to postive)

// acos: function acos()
// ​
// acosh: function acosh()
// ​
// asin: function asin()
// ​
// asinh: function asinh()
// ​
// atan: function atan()
// ​
// atan2: function atan2()
// ​
// atanh: function atanh()
// ​
// cbrt: function cbrt()
// ​
// ceil: function ceil()
//console.log(Math.ceil(4.2))//output:-5 ye hamesha highest value ko lega

// clz32: function clz32()
// ​
// cos: function cos()
// ​
// cosh: function cosh()
// ​
// exp: function exp()
// ​
// expm1: function expm1()
// ​
// f16round: function f16round()
// ​
// floor: function floor()
//console.log(Math.floor(4.9))//output:-4 Ye hamesha lower value hi lega

// fround: function fround()
// ​
// hypot: function hypot()
// ​
// imul: function imul()
// ​
// log: function log()
// ​
// log10: function log10()
// ​
// log1p: function log1p()
// ​
// log2: function log2()
// ​
// max: function max()
//console.log(Math.max(4,3,5,6)); //output:- 6

// min: function min()
​console.log(Math.min(4,3,5,6));

// pow: function pow()
// ​
// random: function random()
//​console.log(Math.random());//output:- random ki value hamesha 0 se 1 ke beech aayegi 

// round: function round()
//console.log(Math.round(4.6))//output:-5 aage ki value to lega

// sign: function sign()
// ​
// sin: function sin()
// ​
// sinh: function sinh()
// ​
// sqrt: function sqrt()
// ​
// tan: function tan()
// ​
// tanh: function tanh()
// ​
// trunc: function trunc()
// ​
// Symbol(Symbol.toStringTag): "Math"
// ​
// <prototype>: Object { … }

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min)