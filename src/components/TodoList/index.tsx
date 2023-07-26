import React from 'react'
import CrossIcon from '../icons/CrossIncons'
import {
  Container,
  Input,
  Button,
  Title,
  Date,
  InputContainer,
  AddButton,
  Todos,
  TodoItem,
} from './styled'

const TodoList = () => {
  return (
    <Container>
      <Title>
        <Date>26.07.2023</Date>
        <Button>
          <CrossIcon />
        </Button>
      </Title>
      <InputContainer>
        <Input />
        <AddButton>Add</AddButton>
      </InputContainer>
      <Todos>
        <TodoItem>Walk</TodoItem>
        <TodoItem>Eat</TodoItem>
        <TodoItem>Work</TodoItem>
      </Todos>
    </Container>
  )
}

export default TodoList
