import 'jest-styled-components'

import { render as RTLrender, screen } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import THEME from '@/constants/theme'

import TodoList from '.'

const render = (component: React.ReactElement) =>
  RTLrender(<ThemeProvider theme={THEME}>{component}</ThemeProvider>)

describe('Check Todo List', () => {
  it('Check add button', async () => {
    const day = new Date()
    const onClose = jest.fn()
    const onAdd = jest.fn()
    const onDelete = jest.fn()
    const todos = [{ id: 1, text: '1234' }]

    render(
      <TodoList
        day={day}
        handleOnClose={onClose}
        handleOnSave={onAdd}
        handleOnDelete={onDelete}
        todos={todos}
      />
    )

    expect(screen.getByText('Add')).toBeInTheDocument()
  })

  it('Check date', async () => {
    const day = new Date()
    const onClose = jest.fn()
    const onAdd = jest.fn()
    const onDelete = jest.fn()
    const todos = [{ id: 1, text: '1234' }]

    render(
      <TodoList
        day={day}
        handleOnClose={onClose}
        handleOnSave={onAdd}
        handleOnDelete={onDelete}
        todos={todos}
      />
    )

    expect(screen.getByText(day.toDateString())).toBeInTheDocument()
  })

  it('Check todo is on screen', async () => {
    const day = new Date()
    const onClose = jest.fn()
    const onAdd = jest.fn()
    const onDelete = jest.fn()
    const todos = [{ id: 1, text: '1234' }]

    render(
      <TodoList
        day={day}
        handleOnDelete={onDelete}
        handleOnClose={onClose}
        handleOnSave={onAdd}
        todos={todos}
      />
    )

    expect(screen.getByText('1234')).toBeInTheDocument()
  })
})
