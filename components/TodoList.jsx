import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList({todos,handleRemoveTodos,handleEditTodo}) {
  
  return (
    <ul className='main'>
      {todos.map((todo,todoIndex)=>{
        return <TodoCard key={todoIndex} handleRemoveTodos={handleRemoveTodos} index={todoIndex} handleEditTodo={handleEditTodo}> 
        <p>{todo}</p>
        </TodoCard> 
      })}
    </ul>
  )
}
