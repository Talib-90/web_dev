// chrome://extensions/
let myLeads = []
const inputEl = document.getElementById("input-el")
const saveEl = document.getElementById("save-btn")
// saveEl.addEventListener("click", saveButton)
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]


tabBtn.addEventListener("click", function() {
    // get the current window tab url
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myUrl", JSON.stringify(myLeads))
        render(myLeads)
    })
})

saveEl.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    render(myLeads)
    console.log( localStorage.getItem("myLeads"))
})

function render(leads) {
    let listItems = ""
    for(let i = 0; i<leads.length; i++) {
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        listItems += 
        `<li>
            <a target="_blank" href="${leads[i]}">${leads[i]}</a>
        </li>`
    }
    ulEl.innerHTML = listItems
}

// for(let i = 0; i<myLeads.length; i++) {
//     const li = document.createElement("li")
//     li.textContent = myLeads[i]
//     ulEl.append(li)
// }

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})