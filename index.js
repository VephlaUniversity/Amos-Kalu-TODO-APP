const todoForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const filterSelect = document.getElementById('filter');

let tasks = [];

// Function to render tasks
function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.textContent = task.name;
    if (task.completed) {
      taskItem.classList.add('completed');
    }
    taskItem.addEventListener('click', () => {
      toggleTask(index);
    });
    taskList.appendChild(taskItem);
  });
}

// Function to add a new task
function addTask(taskName) {
  tasks.push({ name: taskName, completed: false });
  renderTasks();
}

// Function to toggle task completion
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Event listener for form submission
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(taskInput.value);
  taskInput.value = '';
});

// Event listener for filter select change
filterSelect.addEventListener('change', () => {
  const filter = filterSelect.value;
  if (filter === 'all') {
    renderTasks();
  } else if (filter === 'completed') {
    const completedTasks = tasks.filter(task => task.completed);
    renderFilteredTasks(completedTasks);
  } else if (filter === 'uncompleted') {
    const uncompletedTasks = tasks.filter(task => !task.completed);
    renderFilteredTasks(uncompletedTasks);
  }
});

// Function to render filtered tasks
function renderFilteredTasks(filteredTasks) {
  taskList.innerHTML = '';
  filteredTasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.textContent = task.name;
    if (task.completed) {
      taskItem.classList.add('completed');
    }
    taskItem.addEventListener('click', () => {
      toggleTask(index);
    });
    taskList.appendChild(taskItem);
  });
}