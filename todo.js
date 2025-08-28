const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to render tasks
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add("task");
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
      <span onclick="toggleTask(${index})">${task.text}</span>
      <div>
        <button onclick="toggleTask(${index})">✔️</button>
        <button onclick="deleteTask(${index})">❌</button>
      </div>
    `;
    taskList.appendChild(li);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add task
addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text !== "") {
    tasks.push({ text, completed: false });
    taskInput.value = "";
    renderTasks();
  }
});

// Mark as completed
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Initial render
renderTasks();
