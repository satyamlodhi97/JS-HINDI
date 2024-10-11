const name = "satyam"
const repoCount = 12

//this is not preferred //console.log(name + repoCount + " value")

/*this code is readable and definable(isse hum place holder banate hain
 jisse jo variable hai usko direact inject karate hain
 */
//this centace is interpulated
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('satyam-ram-the')

// console.log(gameName[0]); //output:- s
// console.log(gameName.__proto__); //output:-{} this isn't empty in {} it have more value

// //method// 
// console.log(gameName.length);//output:-6
// console.log(gameName.toUpperCase());//output:-SATYAM
// console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

//jitne word lena ho utne le sakte hain
const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-4, 4);
console.log(anotherString);

const newString1 = "   satyam    "
console.log(newString1);//output:-     satyam    
console.log(newString1.trim());//output:-satyam//trim se space hat jate hai

const url = "https://satyam.com/satyam%20lodhi"

console.log(url.replace('%20','-'));
//output:-https://satyam.com/satyam-lodhi

console.log(url.includes('satyam'));//output:-true

//change in array gameName
console.log(gameName.split('m'));//word ko remove karke array me change kar deta hai
