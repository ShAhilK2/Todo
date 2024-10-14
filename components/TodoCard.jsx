import React from 'react'

export default function TodoCard({handleRemoveTodos,index,children,handleEditTodo}) {
  // const {children,handleRemoveTodos,index} = props;

  return (
    <li className='todoItem'>{children}
    <div className='actionsContainer'>
      <button  onClick={()=>handleEditTodo(index)}>

    <i class="fa-solid fa-pen-to-square"> </i>
      </button>
      <button  onClick={()=>handleRemoveTodos(index)}>

    <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
    </li>
  )
}
