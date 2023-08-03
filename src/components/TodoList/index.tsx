import React, { useState } from 'react'

import CrossIcon from '@/assets/CrossIcon'
import { TEXT } from '@/constants'
import { Todo } from '@/services'

import {
  AddButton,
  Button,
  Container,
  DateTitle,
  Input,
  InputContainer,
  Title,
  TodoItem,
  Todos,
} from './styled'
import TodoListProps from './types'

const TodoList: React.FC<TodoListProps> = (props) => {
  const { day, handleOnClose, handleOnSave, handleOnDelete, todos } = props

  const [inputValue, setInputValue] = useState('')
  const [currentTodos, setCurrentTodos] = useState(todos)

  const handleOnChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value)
  }

  const handleOnSaveClick = () => {
    if (inputValue) {
      const todo: Todo = {
        id: Date.now(),
        text: inputValue,
      }
      handleOnSave(todo)
      setCurrentTodos((prevTodos) => [...prevTodos, todo])
      setInputValue('')
    }
  }

  const handleOnDeleteClick = (idToDelete: number) => () => {
    handleOnDelete(idToDelete)
    setCurrentTodos((prevTodos) =>
      prevTodos.filter(({ id }) => id !== idToDelete)
    )
  }
  return (
    <Container>
      <Title>
        <DateTitle>{day.toDateString()}</DateTitle>
        <Button onClick={handleOnClose}>
          <CrossIcon />
        </Button>
      </Title>
      <InputContainer>
        <Input value={inputValue} onChange={handleOnChange} />
        <AddButton onClick={handleOnSaveClick}>{TEXT.ADD_TODO}</AddButton>
      </InputContainer>
      <Todos>
        {currentTodos.map(({ text, id }) => (
          <TodoItem key={id}>
            <Title>
              {text}
              <Button type="button" onClick={handleOnDeleteClick(id)}>
                <CrossIcon />
              </Button>
            </Title>
          </TodoItem>
        ))}
      </Todos>
    </Container>
  )
}

export default TodoList
