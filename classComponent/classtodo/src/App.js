import React, { Component } from 'react';

export default class App extends Component {

  state = {
    todoList: [],
    todoInput:''
  }

  handleTodoChange = () => {
    this.setState({todoList:[...this.state.todoList, this.state.todoInput]})
  }

  render() {
    return (
      <div>
        <input onChange={(event) => this.setState({todoInput:event.target.value})}></input>
        <button onClick={() => this.handleTodoChange()}> Insert a new todo </button>
        {this.state.todoList.map(todos => {
          return (
            <div>
              <p>{todos}</p>
            </div>
          )
        })}
      </div>
    )
  }
}