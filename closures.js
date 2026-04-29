// const globalNum = 6

// function getNumber() {
//     const localNumber = 1
//     console.log(globalNum + localNumber)
// }

// getNumber();

function example() {
    let num = 9;

    function privateIncrement() {
        num++;
    }

    return {
        logNum: () => console.log(num),
        increment: () => {
            privateIncrement();
            console.log("Incremented!");
        }
    }
}

// const innerFunction = example();
const {logNum, increment} = example();
const {logNum: logNum2, increment: increment2} = example();
logNum();
increment();
logNum();

logNum2();
increment2();
logNum2();