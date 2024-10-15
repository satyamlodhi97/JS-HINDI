let myDate = new Date()
// console.log(myDate.toString());//output:-Mon Oct 14 2024 13:28:07 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//output:-Mon Oct 14 2024
// console.log(myDate.toISOString());//output:-2024-10-14T13:28:07.354Z
// console.log(myDate.toJSON());//output:-2024-10-14T13:28:07.354Z
// console.log(myDate.toLocaleDateString());//output:-0/14/2024
// console.log(myDate.toLocaleString());//output:-10/14/2024, 1:28:07 PM
// console.log(myDate.toLocaleTimeString());//output:-1:28:07 PM
// console.log(myDate.toTimeString());//output:-13:28:07 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString());//output:-Mon, 14 Oct 2024 13:28:07 GMT
// console.log(typeof myDate);

//let myCreatedDate = new Date(2024, 9, 14)//output:-Mon Oct 14 2024
//let myCreatedDate = new Date(2024, 9, 14, 5, 3)//output:-10/14/2024, 5:03:00 AM
// let myCreatedDate1 = new Date("2024-10-14")//output:-10/14/2024, 12:00:00 AM
let myCreatedDate = new Date("10-14-2024")
// console.log(myCreatedDate1.toLocaleString());//output:-10/14/2024, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());//output:-10/14/2024, 12:00:00 AM

//Time stamp
let myTimeStamp = Date.now()
// console.log(myTimeStamp);//output:-1728914207663
// console.log(myCreatedDate.getTime());//output:-1728864000000
//change in second
//console.log(Math.floor(Date.now()/1000));//output:-1728914484

let newDate = new Date()
// console.log(newDate);//output:-2024-10-14T14:07:29.412Z
// console.log(newDate.getMonth()+1);//output:-9
// console.log(newDate.getDay());//output:-1

 // `${newDate.getDay()} and the time ` 

//  newDate.toLocaleString('default' ,{
//         weekday: "long",
//         timeZone: ''
//  })
