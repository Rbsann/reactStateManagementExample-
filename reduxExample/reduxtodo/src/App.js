import React , {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { insertTodo } from "./redux/actions"

const App = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todoList)
  
  const [todoInput,setTodoInput] = useState('')

  const handleTodoChange = () => {
    dispatch(insertTodo(todoInput))
  }

  return (
    <div>
      <input onChange={(event)=>setTodoInput(event.target.value)}></input>
      <button onClick={()=>handleTodoChange()}> Insert a new todo </button>
      {todoList.map(todos => {
        return(
          <div>
            <p>{todos}</p>
          </div>
        )
      })}
    </div>
  )
}


export default App;
