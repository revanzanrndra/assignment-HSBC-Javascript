const taskList = document.getElementById("task-list")

function addTasks() {
    const inputTask = document.getElementById("input-task")

    if (inputTask.value =='') {
        alert("There is nothing added")
    } else {
        let task = document.createElement("li")
        let taskName = document.createElement("p")

        task.appendChild(taskName)

        taskName.innerHTML = inputTask.value
        inputTask.value = ''

        taskList.appendChild(task)
    
        let deleted = document.createElement("span")
        deleted.innerHTML = "\u00d7"
        task.appendChild(deleted)
    }
    saveData()
}

taskList.addEventListener("click", (elem)=> {
    if (elem.target.tagName === "LI" || elem.target.tagName === "P") {
        elem.target.classList.toggle("checked")
        saveData()
    } else if (elem.target.tagName === "SPAN") {
        elem.target.parentElement.remove()
        saveData()
    }
}, false)

// fitur savedata, agar data todolist tidak hilang saat di-refresh. Referensi: youtube channel GreatStack
function saveData() {
    localStorage.setItem("data", taskList.innerHTML)
}

function showTask() {
    taskList.innerHTML = localStorage.getItem("data")
}

showTask()