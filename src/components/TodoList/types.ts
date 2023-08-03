import { Todo } from '@/services'

type TodoListProps = {
  day: Date
  handleOnSave: (todo: Todo) => void
  handleOnClose: () => void
  handleOnDelete: (id: number) => void
  todos: Todo[]
}

export default TodoListProps
