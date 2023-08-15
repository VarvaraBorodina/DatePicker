import { DaysTodosType, Todo } from '@/services'

import ServiceDecorator from './ServiceDecorator'

class TodoListDecorator extends ServiceDecorator {
  getDayTodoFromLocalStorage(day: Date): Todo[] {
    const todosString = localStorage.getItem('todos')
    if (!todosString) {
      return []
    }
    const todos = JSON.parse(todosString)
    return todos[day.toDateString()] ?? []
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

  deleteDayTodoFromLocalStorage(day: Date, id: number): void {
    const todosString = localStorage.getItem('todos')
    if (todosString) {
      const todoObject: DaysTodosType = JSON.parse(todosString)
      if (todoObject.hasOwnProperty(day.toDateString())) {
        const dayTodos = todoObject[day.toDateString()]
        const newDayTodos = dayTodos.filter((todo) => todo.id !== id)
        if (newDayTodos.length === 0) {
          delete todoObject[day.toDateString()]
        } else {
          todoObject[day.toDateString()] = newDayTodos
        }
        localStorage.setItem('todos', JSON.stringify(todoObject))
      }
    }
  }
}

export default TodoListDecorator
