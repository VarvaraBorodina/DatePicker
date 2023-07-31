import TodoListDecorator from '@/services/decorators/TodoListDecorator'
import DefaultService from '@/services/DefaultService'

describe('Todo List Decorator', () => {
  it('No days with todo first', () => {
    const service = new TodoListDecorator(new DefaultService())

    const daysWithTodos = service.getDaysWithTodoFromLocalStorage()
    expect(daysWithTodos).toHaveLength(0)
  })

  it('Set day todo', () => {
    const service = new TodoListDecorator(new DefaultService())
    const todo = {
      id: 1,
      text: '1345',
    }
    const currentDate = new Date().toDateString()

    service.setDayTodoToLocalStorage(currentDate, todo)
    const daysWithTodos = service.getDaysWithTodoFromLocalStorage()
    expect(daysWithTodos[0]).toEqual(currentDate)
  })

  it('Add few todos', () => {
    const service = new TodoListDecorator(new DefaultService())
    const todo1 = {
      id: 2,
      text: '1345',
    }
    const todo2 = {
      id: 3,
      text: '1345',
    }
    const currentDate = new Date(2023, 4, 5)

    service.setDayTodoToLocalStorage(currentDate.toDateString(), todo1)
    service.setDayTodoToLocalStorage(currentDate.toDateString(), todo2)
    const daysWithTodos = service.getDayTodoFromLocalStorage(currentDate)
    expect(daysWithTodos).toHaveLength(2)
  })

  it('Add todos to different days', () => {
    localStorage.clear()
    const service = new TodoListDecorator(new DefaultService())
    const todo = {
      id: 1,
      text: '1345',
    }
    const firstDate = new Date(2020, 5, 9).toDateString()
    const secondDate = new Date(2021, 8, 7).toDateString()

    service.setDayTodoToLocalStorage(firstDate, todo)
    service.setDayTodoToLocalStorage(secondDate, todo)
    const daysWithTodos = service.getDaysWithTodoFromLocalStorage()
    expect(daysWithTodos).toHaveLength(2)
  })
})
