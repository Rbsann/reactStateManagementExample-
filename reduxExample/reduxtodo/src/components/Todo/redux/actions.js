export function insertTodo(todoInput) {
  return {
    type: 'TODO_INSERT',
    todoInput
  }
}