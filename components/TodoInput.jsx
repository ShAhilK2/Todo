import React, { useState } from "react";

export default function TodoInput({ handleAddTodos,inputValue,setInputValue }) {


  const handleEnter = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      handleAddTodos(inputValue);
      setInputValue(""); // Clear the input field
    }
  };

  const handleAddClick = () => {
    if (inputValue.trim()) {
      handleAddTodos(inputValue);
      setInputValue(""); // Clear the input field
    }
  };



  return (
    <header>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter todo..."
        onKeyDown={handleEnter}
      />
      <button onClick={handleAddClick}>Add</button>
    </header>
  );
}
