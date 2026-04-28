// const button = document.querySelector('button')
// button.addEventListener('click', onclick)
// button.addEventListener('dblclick', onclick);

// const abortController = new AbortController();
// button.addEventListener('click', onclick, {
//     capture: true,
//     once: true,
//     passive: true,
//     signal: abortController.signal
// });

// abortController.abort();
// document.body.addEventListener('click', onclick)

// function onclick(event){
//     console.log(event)
//     console.log(event.target)
//     console.log(event.type)
//     console.log('You click')
//     console.log(this)
// }

// function onclick(event){
//     console.log(event.target)
//     console.log(this)
// }

// window.addEventListener('keydown', event => {
//     console.log(event.code)
// })

// const scrollable = document.getElementById('scrollable');
// scrollable.addEventListener('scroll', event => {
//     console.log(event.target.scrollTop)
// })
// scrollable.addEventListener('mousemove', event => {
//     console.log(event.pageX, event.pageY)
// })

// const button = document.querySelector('button')
// button.addEventListener('dragstart', event => {
//     console.log(event)
// })

// scrollable.addEventListener('drop', event => {
//     scrollable.prepend(button)
// })

// scrollable.addEventListener('dragover', event => {
//     event.preventDefault()
// })

// scrollable.addEventListener('click', event => {
//     if (event.target !== this) {
//         event.target.textContent = 'clicked';
//     }
// })

