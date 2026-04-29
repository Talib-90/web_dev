// state -> pending, fulfilled, rejected
// const promise = new Promise((resolve, reject) => {
     // resolve(2)
     // reject(2)
     // setTimeout(() => resolve(2), 1000)
//     setTimeout(() => reject(new Error('Something went wrong! ')), 1000)
// });
// const promise = Promise.resolve(3)

// console.log(promise)

// setTimeout(() => console.log(promise), 1500)
// promise.then(value => console.log(value), error => console.log("Oh No!" + error))
// promise.then(console.log).catch(error => console.log("Oh No!" + error))

// promise
//     .then(value => value * 2)
//     .then(value => value + 1)
//     .then(value => {
//         throw new Error('Something went wrong!')
//     })
//     .then(console.log)
//     .catch(error => {
//         console.log("Oh no: "+ error);
//         return 10;
//     })
//     .then(console.log)
//     .finally(() => console.log('Done'))

// Promise.all([
//     Promise.resolve(3),
//     Promise.resolve(2),
//     new Promise((res, rej) => setTimeout(() => res(4), 1000))
// ]).then(console.log).catch(console.log)

// Promise.race([
//     new Promise((res, reh) => setTimeout(() => res(3), 3000)),
//     new Promise((res, reh) => setTimeout(() => res(2), 2000)),
//     new Promise((res, rej) => setTimeout(() => rej(1), 1000))
// ]).then(console.log).catch(console.log)

// Promise.any([
//     new Promise((res, rej) => setTimeout(() => rej(3), 3000)),
//     new Promise((res, rej) => setTimeout(() => rej(2), 2000)),
//     new Promise((res, rej) => setTimeout(() => rej(1), 1000))
// ]).then(console.log).catch(() => console.log("All Rejected"))

async function tester() {
    try{
        // const value = await new Promise((res, rej) => setTimeout(() => res(3), 1000));
        const value = await new Promise((res, rej) => setTimeout(() => rej(new Error('Something went wrong')), 1000));
        console.log(value)
    }catch (error){
        console.log('Oh no ' + error)
    }
    
}
tester();