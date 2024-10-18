const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);//output:- [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); //output:- flash

// const allHeros = marvel_heros.concat(dc_heros)//this is use for array of combine
// console.log(allHeros); //output:- [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros);//spall :- isse array alag alag element me ho jayega

const another_array = [1, 2, 3, [4, 5, 6,], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)//flat :- isse arry ke andar sub array ke sare elements ek santh add ho jate hain
console.log(real_another_array);
//output:- [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

console.log(Array.isArray("satyam"))//isArray:- se poochha ki (satyam) ye array hai ki nahi //ougtput:- false
console.log(Array.from("satyam"))//from:-ne array me change kar diya 
//output:- [ 's', 'a', 't', 'y', 'a', 'm' ]
console.log(Array.from({name: "satyam"}))//intersting
//output:- [] empty //ye samajh nahi payega to empty de dega

let score1 = 100
let scope2 = 200
let scope3 = 300

console.log(Array.of(score1, scope2,scope3));//of :- is create in array of multiple elements (string,number,bool)
//output:- [ 100, 200, 300 ]


 