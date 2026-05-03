let todos = []

function addTask(task) {
    todos.push({
        text: task,
        completed: false
    })
}

function Add() {
    const inputText = document.getElementById("taskInput");
    const value = inputText.value

    if (value === "") return;

    addTask(value)
    inputText.value = ""

    renderTasks();
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    todos.forEach((item, index) => {
        const li = document.createElement('li');
        const status = item.completed ? "✅" : "❌";

        li.innerHTML = `
            ${status} ${item.text}
            <button onclick="toggleTask(${index + 1})">Toggle</button>
            <button onclick="deleteTask(${index + 1})">Delete</button>
            <button onclick="editTask(${index + 1})">Edit</button>
            `;

        list.appendChild(li);
    })
}

function toggleTask(index) {
    if (index <= 0 || index > todos.length) return;

    todos[index - 1].completed = !todos[index - 1].completed;
    renderTasks();
}

function deleteTask(index) {
    if (index <= 0 || index > todos.length) return;

    todos.splice(index - 1, 1);
    renderTasks();
}

function editTask(index) {
    if (index <= 0 || index > todos.length) return;

    const newText = prompt("Edit your task:", todos[index - 1].text);

    if (newText && newText.trim() !== "") {
        todos[index - 1].text = newText;
        renderTasks();
    }
}

function handleSearch() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();

    const filtered = todos
        .map((task, index) => ({ task, index }))
        .filter(obj => obj.task.text.toLowerCase().includes(keyword));

    renderFilteredTasks(filtered);
}

function renderFilteredTasks(list) {
    const ul = document.getElementById("taskList");
    ul.innerHTML = "";

    list.forEach(({ task, index }) => {
        const li = document.createElement("li");
        const status = task.completed ? "✅" : "❌";

        li.innerHTML = `
            ${status} ${task.text}
            <button onclick="toggleTask(${index + 1})">Toggle</button>
            <button onclick="deleteTask(${index + 1})">Delete</button>
            <button onclick="editTask(${index + 1})">Edit</button>
        `;

        ul.appendChild(li);
    });
}