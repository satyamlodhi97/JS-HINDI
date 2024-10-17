 // array
//const myArr = [0, 1, 2, 3, 4, 5, ture, "hitesh"]
 //declear the arrays
 const myArr = [0, 1, 2, 3, 4, 5]
 const myHeors = ["shaktiman", "naagraj"]

 const myArr2 = new Array(1, 2, 3, 4)
 //console.log(myArr[1]);

 //Array mathods

//  myArr.push(6)
//  myArr.push(7)
//  myArr.pop()//for last value remove
//  myArr.unshift(9)//Add the value in start 
//  myArr.shift()

//console.log(myArr.includes(9));//array me hai ya nahi
//console.log(myArr.indexOf(3));//for use in index find

// const newArr = myArr.join()

//  console.log(myArr);
// console.log(typeof newArr);//change in array num to string
// console.log(newArr)//in this code give the normal output

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("c", myArr); //splice me original array change hi ho jata hai
//splice array me se(1, 3) ko hi remove kar deta
console.log(myn2);
