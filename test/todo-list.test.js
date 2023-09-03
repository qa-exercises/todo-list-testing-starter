import { addTaskToList, toggleTaskComplete, deleteTask, getTotalTasksCount, getCompletedTasksCount, getIncompleteTasksCount, checkHasCompletedAllTasks } from '../logic/todo-list.js'

describe('To-do list functionality', () => {

  test('Adding a task to a to-do list works', () => {
    // Arrange
    const todoList = []
    const newTask = { name: 'Test task', isComplete: false }

    // Act
    addTaskToList(todoList, newTask)
    
    // Assert
    expect(todoList.length).toBe(1)       // 💡 Tip: use toBe() to compare primitive values
    expect(todoList[0]).toEqual(newTask)  // 💡 Tip: use toEqual() to compare objects/arrays
  })

  test.skip('Toggling a task between complete and incomplete works', () => {

  })

  test.skip('Deleting a task from a to-do list works', () => {

  })
})