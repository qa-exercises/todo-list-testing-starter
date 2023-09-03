import { addTaskToList, toggleTaskComplete, deleteTask, getTotalTasksCount, getCompletedTasksCount, getIncompleteTasksCount, checkHasCompletedAllTasks } from '../logic/todo-list.js'

describe('To-do list functionality', () => {

  test('Adding a task to a to-do list works', () => {
    // Arrange
    const todoList = []
    const newTask = { name: 'Test task', isComplete: false }

    // Act
    addTaskToList(todoList, newTask)

    // Assert
    expect(todoList).toEqual([newTask]) // 💡 Tip: use toBe() to compare primitive values (like numbers or booleans), and toEqual() to compare arrays/objects
  })

  test('Adding multiple tasks to a to-do list works', () => {
    const todoList = []
    const testTask1 = { name: 'Test task 1', isComplete: false }
    const testTask2 = { name: 'Test task 2', isComplete: false }

    addTaskToList(todoList, testTask1)
    addTaskToList(todoList, testTask2)

    expect(todoList).toEqual([testTask1, testTask2])
  })

  test.skip('Toggling a task between complete and incomplete works', () => {

  })

  test.skip('Deleting a task from a to-do list works', () => {

  })
})