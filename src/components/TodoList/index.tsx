import React, { useState } from 'react'
import { Todo } from '../../services/types'
import CrossIcon from '../icons/CrossIcon'
import {
  Container,
  Input,
  Button,
  Title,
  DateTitle,
  InputContainer,
  AddButton,
  Todos,
  TodoItem,
} from './styled'
import TodoListProps from './types'

const TodoList: React.FC<TodoListProps> = ({
  day,
  handleOnClose,
  handleOnSave,
  todos,
}) => {
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
        <AddButton onClick={handleOnSaveClick}>Add</AddButton>
      </InputContainer>
      <Todos>
        {currentTodos.map(({ text, id }) => (
          <TodoItem key={id}>{text}</TodoItem>
        ))}
      </Todos>
    </Container>
  )
}

export default TodoList
