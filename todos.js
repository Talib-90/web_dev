let todos = []

function addTask(task) {
    todos.push({
        text: task,
        completed: false
    });
}

function listTasks() {
    todos.forEach((item, index) => {
        const status = item.completed ? "✅" : "❌";
        console.log(`${index + 1}. ${status} ${item.text}`)
    });
}

function markDone(index) {
    if (index <= 0 || index > todos.length) {
        console.log(`${index} not in the list.`)
        return
    }
    todos[index - 1].completed = true;
}

function deleteTask(index) {
    if (index <= 0 || index > todos.length) {
        console.log(`${index} not in the list`)
        return
    }
    const remove = todos.splice(index - 1, 1);
    console.log(`Deleted ${remove[0].text}`)
}

function searchTask(keyword) {
    const result = todos.filter(item =>
        item.text.toLowerCase().includes(keyword.toLowerCase())
    );
    if (result.length === 0) {console.log("No item found.")}
    result.forEach((item, index) => {
        const status = item.completed ? "✅" : "❌";
        console.log(`${index + 1}. ${status} ${item.text}`)
    })
}

function toggleTask(index) {
    if(index > 0 && index <= todos.length){
        todos[index - 1].completed = !todos[index - 1].completed
    }else {
        console.log("No task found.")
    }

}

function countTasks(){
    const total = todos.length
    const completed = todos.filter(item => item.completed).length
    const pending = total - completed

    console.log(`Total: ${total}`)
    console.log(`Completed: ${completed}`)
    console.log(`Pending: ${pending}`)
}

function sortTasks() {
    todos.sort((a,b) => a.completed - b.completed)
}



console.log(todos.map((item,index) => ({item,index})))
