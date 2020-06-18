import React from 'react'
import './App.css'

import TodoItem from './components/TodoItem'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      todos: [
        { done: true, text: 'Take out the papers', id: 1 },
        { done: false, text: 'And the trash', id: 2 },
        { done: false, text: 'Get our spending cash', id: 3 }
      ]
    }
  }

  toggleTodoDone (todoId) {
    const newTodos = []

    for (const todo of this.state.todos) {
      if (todo.id === todoId) {
        newTodos.push({
          done: !todo.done,
          text: todo.text,
          id: todo.id
        })
      } else {
        newTodos.push(todo)
      }
    }

    this.setState({ todos: newTodos })
  }

  render () {
    return (
      <div className='App'>
        <ul>
          {this.state.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggleTodoDone={() => this.toggleTodoDone(todo.id)} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
