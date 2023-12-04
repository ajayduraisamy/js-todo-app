let tasks = [];

function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if(task === "") return;

    tasks.push(task);
    input.value = "";

    render();
}

function render() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task + " ";
        
        const btn = document.createElement("button");
        btn.innerText = "Done";
        btn.onclick = () => removeTask(index);

        li.appendChild(btn);
        list.appendChild(li);
    });
}

function removeTask(index){
    tasks.splice(index,1);
    render();
}
