import { addTaskToList, checkHasCompletedAllTasks, deleteTask, getCompletedTasksCount, getIncompleteTasksCount, getTotalTasksCount, toggleTaskComplete } from './logic/todo-list.js'

let tasksList = []

document.getElementById('task-form').addEventListener('submit', handleSubmitTask)
render(tasksList)

function handleSubmitTask(e) {
  e.preventDefault()
  const taskNameInputField = document.getElementById('input-task-name')
  const newTask = {
    name: taskNameInputField.value,
    isComplete: false
  }

  addTaskToList(tasksList, newTask)
  render(tasksList)
  taskNameInputField.value = ''
}

function render(list) {
  const todoListElement = document.getElementById('todo-list')
  todoListElement.innerHTML = ''
  for (const task of list) {
    const taskElement = document.createElement('li')
    const label = document.createElement('label')
    const checkbox = document.createElement('input')
    const deleteButton = document.createElement('button')
    checkbox.type = 'checkbox'
    checkbox.name = 'isComplete'
    checkbox.checked = !!task.isComplete
    checkbox.addEventListener('change', () => { toggleTaskComplete(task); render(list) })
    deleteButton.textContent = '⨉'
    deleteButton.addEventListener('click', () => { deleteTask(list, task); render(list) })
    taskElement.appendChild(label)
    label.appendChild(checkbox)
    label.appendChild(document.createTextNode(task.name))
    taskElement.appendChild(deleteButton)
    todoListElement.appendChild(taskElement)
  }

  document.getElementById('total-tasks-count').textContent = getTotalTasksCount(list)
  document.getElementById('completed-tasks-count').textContent = getCompletedTasksCount(list)
  document.getElementById('incomplete-tasks-count').textContent = getIncompleteTasksCount(list)

  const hasCompletedAllTasks = checkHasCompletedAllTasks(list)

  document.getElementById('stats-section-title').textContent = hasCompletedAllTasks ? 'All done!' : 'Progress'
  document.getElementById('stats-section').setAttribute('data-complete', hasCompletedAllTasks.toString())
}