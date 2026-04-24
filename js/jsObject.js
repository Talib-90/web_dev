const info = {
    fname: "Talib",
    lname: "Ilahi",
    edu: "Graduate",
    specilized: ["Cloud Computing", "Networking", "Programming"],
    get getEducation(){
        return this.edu;
    },
    set setEducation(value) {
        this.edu = value;
    },
    seyHello(){
        console.log("Hello")
    }
}
// console.log(info.getEducation)
// info.setEducation = "BSSE"
// console.log(info.getEducation)
// info.seyHello()
// // info.edu = "BSSE"
// info.isCompleted = true
// console.log(info)
// console.log(info.name)
// console.log(info["fname"])

// delete info.isCompleted;
// console.log(info)

// function Website(name, rating, founders){
//     this.name = name
//     this.rating = rating
//     this.founders = founders
// }

// const web = new Website("hello.world", 5, ["Salman"])
// console.log(web.founders)

const obj = {
    'foo': 'bar',
    hello: 'world',
    [Symbol('id')]: 0,
    __proto__: info
}
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// Object.entries(obj).forEach(function([key, value]){
//     console.log(key, value);
// })

for (key in obj) {
    console.log(key);
}