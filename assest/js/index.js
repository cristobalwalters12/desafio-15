let tasks = [
  { id: 1, description: "Hacer la cama", completed: false },
  { id: 2, description: "Limpiar la casa", completed: false },
  { id: 3, description: "Aspirar", completed: false },
];

function updateCounters() {
  document.getElementById("total").textContent = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed);
  document.getElementById("completed").textContent = completedTasks.length;
}

function updateList() {
  const ul = document.getElementById("todoList");
  ul.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");

    const changeButton = document.createElement("button");
    changeButton.textContent = "Cambiar";
    changeButton.className = "btn btn-primary btn-sm ms-2";
    changeButton.addEventListener("click", function () {
      tasks[index].completed = !tasks[index].completed;
      updateList();
      updateCounters();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.className = "btn btn-danger btn-sm ms-2";
    deleteButton.addEventListener("click", function () {
      const taskIndex = tasks.findIndex((t) => t.id === task.id);
      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        updateList();
        updateCounters();
      }
    });

    const taskIdSpan = document.createElement("span");
    taskIdSpan.textContent = `ID: ${task.id}`;
    taskIdSpan.className = "ms-2";

    listItem.appendChild(taskIdSpan);
    listItem.innerHTML += ` ${task.description} `;
    listItem.appendChild(changeButton);
    listItem.appendChild(deleteButton);
    ul.appendChild(listItem);
  });

  updateCounters();
}
document.getElementById("addBtn").addEventListener("click", function () {
  const inputValue = document.getElementById("todoInput").value;
  if (inputValue.trim() === "") return;

  const taskId = Date.now();
  tasks.push({
    id: taskId,
    description: inputValue,
    completed: false,
  });

  document.getElementById("todoInput").value = "";
  updateList();
  console.log(tasks);
});

// Initial list rendering
updateList();
