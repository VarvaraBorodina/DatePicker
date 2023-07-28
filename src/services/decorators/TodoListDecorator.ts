import { DaysTodosType, Todo } from '../types'
import ServicesDecorator from './ServiseDecorator'

class TodoListDecorator extends ServicesDecorator {
  getDayTodoFromLocalStorage(day: string): Todo[] {
    const todosString = localStorage.getItem('todos')
    if (!todosString) {
      return []
    }
    const todos = JSON.parse(todosString)
    return todos[day] ?? []
  }

  setDayTodoToLocalStorage(day: string, todo: Todo): Todo[] {
    const todosString = localStorage.getItem('todos')

    if (!todosString) {
      const todoObject: DaysTodosType = {}
      todoObject[day] = [todo]
      localStorage.setItem('todos', JSON.stringify(todoObject))
      return todoObject[day]
    }

    const todoObject: DaysTodosType = JSON.parse(todosString)
    if (!todoObject.hasOwnProperty(day)) {
      todoObject[day] = [todo]
    } else {
      todoObject[day] = [...todoObject[day], todo]
    }

    localStorage.setItem('todos', JSON.stringify(todoObject))
    return todoObject[day]
  }

  getDaysWithTodoFromLocalStorage(): string[] {
    const todosString = localStorage.getItem('todos')
    if (!todosString) {
      return []
    }
    const todos: DaysTodosType = JSON.parse(todosString)
    return Object.keys(todos)
  }
}

export default TodoListDecorator
