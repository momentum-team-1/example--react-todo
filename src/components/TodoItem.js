import React from 'react'

function todoLabelClass (todo) {
  if (todo.done) {
    return 'done'
  } else {
    return 'undone'
  }
}

function TodoItem ({ todo, toggleTodoDone }) {
  return (
    <li className='TodoItem'>
      <input id={'todo-' + todo.id} type='checkbox' checked={todo.done} onChange={toggleTodoDone} />
      <label className={todoLabelClass(todo)} htmlFor={'todo-' + todo.id}>{todo.text}</label>
    </li>
  )
}

export default TodoItem
