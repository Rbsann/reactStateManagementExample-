export const initialState = {
  todoList: [],
};

export default function Reducer(state = initialState, action) {
  console.log('action', action)
  switch (action.type) {
    case 'TODO_INSERT':
      return { ...state, todoList:[...state.todoList, action.todoInput] }
    default:
      return state;
  }
}