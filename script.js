const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button onclick="completeTask(this)">Complete</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function completeTask(button) {
    const li = button.parentNode;
    li.style.textDecoration = "line-through";
    li.style.color = "#888";
    button.remove();
}