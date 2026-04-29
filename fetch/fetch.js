const BASE_API = 'http://localhost:8080/api';
const JSON_API = 'http://localhost:8080/jsonApi';
const POST_API = 'http://localhost:8080/postApi';
const SLOW_API = 'http://localhost:8080/slowApi';

// const url = new URL(BASE_API)
// url.searchParams.set('firstName', 'Talib')
// url.searchParams.set('lastName', 'Ilahi')

// fetch(url)
//     .then(res => res.text())
//     .then(console.log)
//     .catch(error => console.error("Shit! "+error))

// console.log(fetch(BASE_API))
// fetch(BASE_API + '?firstName=talib&lastName=ansari')
//     .then(res => res.text())
//     .then(console.log)
//     .catch(error => console.error("Shit! "+error))


// console.log("After fetch")

// async function main() {
//     try {
//         const response = await fetch(url);
//         console.log(response.status)
//         console.log(response.ok)
//         const text = await response.text();
//         console.log(text);
//     } catch (error) {
//         console.error('Shit ' + error)
//     }
// }


// async function main() {
//     try {
//         const response = await fetch(JSON_API);
//         const obj = await response.json();
//         console.log(obj);
//     } catch (error) {
//         console.error('Shit ' + error)
//     }
// }
// main();


// async function main() {
//     const data = {
//         Name: "Talib"
//     };

//     const headers = new Headers();
//     headers.append('Content-Type', 'application/json; charset=utf-8')

//     const options = {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers
//     };

//     try {
//         const response = await fetch(POST_API, options);
//         const text = await response.text();
//         console.log(text)
//     } catch (error) {
//         console.error("Shit " + error);
//     }
// }

// main();

// Post Request
// const form = document.querySelector('form');
// form.addEventListener('submit', onSubmit)

// async function onSubmit(event) {
//     event.preventDefault();

//     const options = {
//         method: 'POST',
//         body: new FormData(form)
//     }
//     try {
//         const response = await fetch(POST_API, options)
//         const text = await response.text();
//         console.log(text)
//     } catch (error) {
//         console.error(error);
//     }
// }

async function main() {
    const abortController = new AbortController();
    setTimeout(() => abortController.abort(), 2000)
    try {
        const response = await fetch(SLOW_API, {
            signal: abortController.signal
        })
        const text = await response.text();
        console.log(text)
    } catch (error) {
        console.error(error);
    }
}

main();


// Server.js file
/*
Step 1: Create a project

Open terminal and run:

mkdir my-server
cd my-server
npm init -y

Step 2: Install Express
npm install express

---create server---

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())

const multer = require('multer');
const upload = multer();
const PORT = 8080;

// Route: http://localhost:8080/api
// app.get('/api', (req, res) => {

//     res.send("hello world" );
// });

app.get('/api', (req, res) => {
    const { firstName, lastName } = req.query;

    res.send(`Hello ${firstName} ${lastName}`);
});

app.get('/jsonApi', (req, res) => {
    res.json({ name: "Talib", education: "BSSE" });
});

app.post('/postApi', upload.none(), (req, res) => {
    const { name } = req.body;
    res.send(`Your name is ${name}`);
});

app.get('/slowApi', (req, res) => {
    setTimeout(() => {
        res.json({ message: "Slow response ⏳" });
    }, 3000);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

run node server.js
*/