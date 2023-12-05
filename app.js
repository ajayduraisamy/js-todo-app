let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveToLocal() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (task === "") return;

    tasks.push(task);
    input.value = "";

    saveToLocal();
    render();
}

function render() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.innerText = task.text;
if (task.done) span.classList.add("done");


        // Edit button
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.className = "edit";
        editBtn.onclick = () => editTask(index);

        // Delete button
        const delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.className = "delete";
        delBtn.onclick = () => removeTask(index);

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

function removeTask(index) {
    tasks.splice(index, 1);
    saveToLocal();
    render();
}

function editTask(index) {
    const updatedTask = prompt("Edit task:", tasks[index]);

    if (updatedTask !== null && updatedTask.trim() !== "") {
        tasks[index] = updatedTask.trim();
        saveToLocal();
        render();
    }
}

// Load tasks on startup
render();

function toggleComplete(index){
    tasks[index].done = !tasks[index].done;
    saveToLocal();
    render();
}
