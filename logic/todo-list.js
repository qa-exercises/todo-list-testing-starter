// 🎯 1: Write tests for these existing functions in /test/todo-list.test.js

export function addTaskToList(list, task) {
  if (!task.name) return
  list.push(task)
}

export function toggleTaskComplete(task) {
  task.isComplete = !task.isComplete
}

export function deleteTask(list, taskToRemove) {
  const indexToRemove = list.indexOf(taskToRemove);
  if (indexToRemove !== -1) {
    list.splice(indexToRemove, 1);
  }
}

// 🎯 2: Use test-driven development to complete remaining functionality
// 💡 Write the tests first, then implement the logic for each of the following functions

export function getTotalTasksCount(list) {
  // should return the length of the list
  return -1
}

export function getIncompleteTasksCount(list) {
  // should return the number of tasks in the list that are not complete
  return -1
}

export function getCompletedTasksCount(list) {
  // should return the number of tasks in the list that are complete
  return -1
}

export function checkIsEntireTodoListCompleted(list) {
  // should return true IF there are tasks in the list AND they are all complete
  return -1
}