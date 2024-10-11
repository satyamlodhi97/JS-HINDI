const name = "satyam"
const repoCount = 12

//this is not preferred //console.log(name + repoCount + " value")

/*this code is readable and definable(isse hum place holder banate hain
 jisse jo variable hai usko direact inject karate hain
 */
//this centace is interpulated
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('satyam')

console.log(gameName[0]); //output:- s
console.log(gameName.__proto__); //output:-{} this isn't empty in {} it have more value

//method// 
console.log(gameName.length);//output:-6
console.log(gameName.toUpperCase());//output:-SATYAM
