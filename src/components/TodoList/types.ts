import { Todo } from '@/services/types'

type TodoListProps = {
  day: Date
  handleOnSave: (todo: Todo) => void
  handleOnClose: () => void
  todos: Todo[]
}

export default TodoListProps
