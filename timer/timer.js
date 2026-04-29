const start = document.getElementById('start')
const stop = document.getElementById('stop')
const count = document.getElementById('count')

start.addEventListener('click', startTime);
stop.addEventListener('click', stopTime);

// let timerId;
let animationFrameId;

// let timeoutId = setTimeout(() => {
//     console.log('Timeout')
// },0)

// clearTimeout(timeoutId)

function startTime(){
    // timerId = setInterval(() => {
    //     count.textContent++;
    // }, 500)
    count.textContent++;
    animationFrameId = requestAnimationFrame(startTime)    
}

function stopTime(){
    // clearInterval(timerId)
    cancelAnimationFrame(animationFrameId)
}