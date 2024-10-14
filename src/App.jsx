import React, { useEffect, useState } from 'react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import TodoCard from '../components/TodoCard'

export default function App() {

  const [todos,setTodos] = useState(["Go to Gym","Eat Fruits and Vegs","Pick Up Kids from the School"]);
  const [inputValue, setInputValue] = useState("");


  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }
  function handleAddTodos(newTodo){
    const newTodoList = [...todos,newTodo];
    persistData(newTodoList);
   return setTodos(newTodoList);
  }

  function handleRemoveTodos(index){
    const newTodoList = todos.filter((todos,todosIndex)=> todosIndex !== index);
    persistData(newTodoList);
    return setTodos(newTodoList);
  }

  function handleEditTodo(index){
    const valueTobeEdited = todos[index];
    setInputValue(valueTobeEdited);
    handleRemoveTodos(index);
    
  }
  useEffect(()=>{
    if(!localStorage){

    }
    let localtodos = localStorage.getItem('todos');
    if(!localtodos) {
      return ;
    }

    localtodos = JSON.parse(localtodos).todos
    setTodos(localtodos);


  },[])
  return (
    <>
     <TodoInput handleAddTodos={handleAddTodos} inputValue={inputValue} setInputValue={setInputValue}/>
     <TodoList todos={todos} handleRemoveTodos={handleRemoveTodos} handleEditTodo={handleEditTodo}/>
  
    </>
  )
}
