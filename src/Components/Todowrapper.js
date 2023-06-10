import React, { useRef, useState } from 'react'
import Todoform from './Todoform'
import Todos from './Todos'
import Edittodo from './Edittodo';

export default function Todowrapper() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { task: todo }
    ])
  }

  const deleteTodo = (key) => {
    setTodos(todos.filter((todo, index) => { return index !== key }))
  }
  const toggleTodo = (key) => {
    setTodos(todos.map((todo, index) => index === key ? { ...todo, completed: !todo.completed } : todo))
  }
  const editTodo = (key) => {
    setTodos(todos.map((todo, index) =>
      index === key ? { ...todo, edittodo: !todo.edittodo } : todo
    ))
  }
  const editTodoadd = (todo, key) => {
    setTodos(todos.map((value, index) => index === key ?
      { ...value, task: todo, edittodo: !value.edittodo } : value))
  }
  if (todos.length !== 0) {
    return (
      <div className='todowarpper'>
        <h1>List your Works!</h1>
        <Todoform addTodo={addTodo} />
        {
          todos.map((todo, index) => {
            if (todo.edittodo) {
              return <Edittodo editTodoadd={editTodoadd} index={index} key={index} ref={inputRef} />
            }
            else {
              return <Todos todo={todo} index={index} key={index} delfunc={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
            }



          })
        }

      </div>
    )
  }
  else{
    return (
      <div className='todowarpper'>
        <h1>List your Works!</h1>
        <Todoform addTodo={addTodo} />
        <p>You have no works to do</p>
  
      </div>
    )
  }


}
