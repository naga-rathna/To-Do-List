let taskForm = document.getElementById('task-form');
let taskInput = document.getElementById('input-ele');

let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let task = taskInput.value;
    taskList.unshift(task);

    localStorage.setItem('tasks', JSON.stringify(taskList));
    displayTasks(taskList);

    taskInput.value = "";
});

function displayTasks(tasks) {
    if (tasks.length == 0) {
        document.getElementById('tasklist-el').innerHTML = "Your taskList is empty..";
        return;
    }

    let eachTask = '';
    taskList.forEach((task, i) => {
        eachTask += `<li class="list-group-item list-group-danger text-danger  mb-2">
                <span class="fw-bold">${task}</span>
                <button class="float-end btn" onclick="deleteTask(${i})">
                 <i class="bi bi-archive"></i></button>
                <button class="float-end btn" onclick="editTask(${i})">
                <i class="bi bi-pen"></i></button>
                </li>`;
    });

    document.getElementById('tasklist-el').innerHTML = eachTask;
}

displayTasks(taskList);

function deleteTask(id) {
    taskList.splice(id, 1);
    localStorage.setItem('tasks', JSON.stringify(taskList));

    displayTasks(taskList);
}

function editTask(id) {
    taskInput.value = taskList[id];
    taskList.splice(id, 1);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    displayTasks(taskList);
}
