const arr = [1, 2, 3, 4]

// const doubled = arr.map(double);

// function double(value){
//     return value * 2;
// }

// const doubled = arr.map(function double(value){
//     return value * 2;
// })

// const doubled = arr.map(function (value){
//     return value * 2;
// })

// const doubled = arr.map((value) => {
//     return value * 2;
// })

const doubled = arr.map(value => value * 2);

// console.log(doubled)

const name = {
    // fname: {
    //      lname: "sam",
    // }
}
console.log(name?.fname?.lname ?? 'foo')