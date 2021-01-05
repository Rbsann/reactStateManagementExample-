import React , {useState} from 'react'

const App = () => {
  const [todoList, setTodoList] = useState([])
  const [todoInput,setTodoInput] = useState('')

  const handleTodoChange = () => {
    setTodoList([...todoList, todoInput])
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
