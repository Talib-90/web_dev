// window.addEventListener('load', main);

// const button = document.querySelector('button');
// button.addEventListener('click', setBackgroundColor);

// function setBackgroundColor() {
//     document.body.style.backgroundColor = "#00334c";
// }

// const secondli = document.getElementById('second-li')
// console.log(secondli)

// const firstList = document.querySelector('li')
const listItems = document.querySelectorAll('li')
// console.log(listItems)
// listItems.forEach(li => {
//     console.log(li)
// })
// Array.from(listItems).map(li => {console.log(li)})

// listItems[0].style.color = 'white';
// listItems[0].style.backgroundColor = 'green';
// listItems[0].textContent = 'List 1'
// listItems[0].setAttribute('value', '4')
// listItems[0].setAttribute('class', 'big')
// listItems[0].classList.add('blue')
// listItems[0].classList.remove('big')

// const p = document.createElement('p');
// p.textContent = 'hello, world';
// // document.body.appendChild(p);
// document.body.prepend(p);

// const parent = document.querySelector('ol')
// const fragment = document.createDocumentFragment()
// for (let i = 0; i<3; i++) {
//     const li = document.createElement('li')
//     li.textContent = `List with js ${i}`
//     fragment.append(li)
// }
// parent.append(fragment)

// // listItems[0].parentNode.removeChild(listItems[0])
// listItems[0].remove()

// console.log(window.innerWidth)
// console.log(window.innerHeight)

const scrollable = document.getElementById('scrollable')
console.log(scrollable.clientHeight)
console.log(scrollable.offsetHeight)
console.log(scrollable.scrollHeight)

scrollable.scrollTo({
    top: scrollable.querySelectorAll('p')[2].offsetTop,
    behavoir: 'smooth'
});

const rootElement = document.getElementById('root')
const element = document.createElement('div')
element.textContent = "Hello, world"
element.className = 'container'
rootElement.appendChild(element)