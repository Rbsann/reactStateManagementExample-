import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { insertTodo } from './redux/actions'

const Todo = () => {
  const dispatch = useDispatch();
  console.log('aqui')
  const state = useSelector(state => state)
  console.log(state)
  // to access global state under this config you have to specify which reducer you are using,
  // in this case todoReducer

  // para acessar estado global nessa config voce tem que especificar qual reducer voce quer nesse
  // componente, no caso todoReducer
  const todoList = useSelector(state => state.todoReducer.todoList)
  // em uma config normal acessariamos todoList com state.todoList

  const [todoInput,setTodoInput] = useState('')

  const handleTodoChange = () => {
    dispatch(insertTodo(todoInput))
  }
  return (
    <div>
      <input onChange={(event) => setTodoInput(event.target.value)} />
      <button onClick={() => handleTodoChange()}> Insert a new todo </button>
      {todoList.map((todos, index) => {
        return (
          <div key={index + 2}>
            <p>{todos}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Todo
