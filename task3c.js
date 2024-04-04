const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText != "") {
        const listItem = createTaskElement(taskText);
        pendingList.appendChild(listItem);
        taskInput.value = "";
    }
}
function createTaskElement(taskText) {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = function () {
        completeTask(listItem);
    };
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        deleteTask(listItem);
    };
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    return listItem;
}
function completeTask(task) {
    task.classList.add("completed");
    completedList.appendChild(task);
}
function deleteTask(task) {
    task.parentNode.removeChild(task);
}