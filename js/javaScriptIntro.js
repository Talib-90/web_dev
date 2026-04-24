// let num = 10;
// console.log(num)
// num = '20asd'
// console.log(Number(num))
// console.log(parseInt(num))
// let num = 30.5
// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.random() * 10)
// console.log(Math.pow(2,3))
// let num = 20
// console.log(num % 3)
// console.log(num < 50)
// console.log(num > 13)
// console.log(num <= 33)
// console.log(num >= 20)
// console.log(Infinity)
// console.log(-Infinity)
// console.log(typeof 100n)
// console.log(typeof 100)
// console.log(typeof "100")
// console.log(typeof 10.5)
// console.log(typeof NaN)

// let str = "abcde"
// console.log(str < 'def')
// console.log(str > 'def')
// console.log(str === 'abc')
// console.log("The quick brown fox jumps over the lazy dog\'")
// console.log("The quick \nbrown fox jumps over the lazy dog\'")
// console.log(`Hello
//     world`)
// console.log(`Result: ${40 + 30}`)

// console.log(str.charAt(1))
// console.log(str[1])
// console.log(str.includes('a'))
// console.log(str.startsWith('b'))
// console.log(str.endsWith('e'))
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.length)
// console.log(str.substring(1, 4))
// console.log(str.slice(1,5))
// console.log("     str".trim())
// console.log("strong".padStart(10, "*"))
// console.log("t,a,l,i,b".split(','))

// const person = {
//     name: "Ali",
//     education: "Inter"
// };
// console.log(JSON.stringify(person));

// const map = new Map();
// map.set("name", "Salamn")
// map.set("lname", "Khan")
// console.log(map.get("name"))
// console.log(map.size)
// const set = new Set();
// set.add("Lahore")
// set.add("Karachi")
// set.delete("Lahore")
// console.log(set.has("Lahore"))
// console.log(set.size)

// const arr = [1,2,3,4]
// arr.push(5)
// // arr.pop()
// console.log(arr)
// console.log(arr.lastIndexOf(3))
// console.log(arr.length)

// function add(num = 10){
//     return num + 10;
// }
// // console.log(add(10))
// console.log(add())
// console.log(add instanceof Object)

// for(let i = 0; i<5; i++){
//     if(i == 1){
//         continue;
//     }
//     console.log(i);
//     if (i == 1){
//         break;
//     }
// }

// let i = 0
// // while(i < 4){
// //     console.log(i)
// //     i++;
// // }
// do {
//     console.log(i)
//     i++;
// }
// while (i < 0)
// for(let value of [1,2,3,4]) {
//     console.log(value);
// }
// for(let value of "Talib") {
//     console.log(value);
// }

// const obj = {
//     name: "Ali",
//     lname: "Khan"
// };
// for(let key in obj){
//     console.log(key, obj[key])
// }

// const condition = true;
// if (condition){
//     console.log("that's true");
// } else if(condition === false) {
//     console.log("that's false");
// }else {
//     console.log("Default")
// }

// let num = 3;
// switch (num){
//     case 1:
//         console.log("One");
//         break;
//     case 2:
//     case 3:
//         console.log("Two");
//         break;
//     default:
//         console.log("Default")
    
// }

const num = 8;
console.log(num > 6 ? "Greater then 6" : "Less then six")

console.table([[1,2], [3,4],[5,6,7],["a", "b"]])