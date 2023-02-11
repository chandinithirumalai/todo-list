
import React, { useState } from "react";



//Componets 
import ToDoItem from "./components/TodoItem/ToDoItem";
import ToDoForm from "./components/TodoForm/ToDoForm";
import "./App.css";

// app is parent component and to do item is child component

// for each= goes through each item. Map goes through each item and returns a a brand new array
function App() {
// state
  const [todos, setTodos] = useState([
  {
    text:"Learn about React",
    isCompleted: false,
  },
  {text:"Meet friend for lunch"
  ,isCompleted: false,
  },
  {text:"Build really cool todo app",
  isCompleted: false,
  },
  ]);

  // Actions
  const addTodo = (text) => {
    const newTodos = [...todos,{text:text, isComplete: false}];

    setTodos(newTodos);
  };

  const completeTodo = (index) => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    };
  const removetodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };


  return (
  <div className="app">
  <div className="todo-list">
  <h1>My todo list</h1>
  {todos.map((todo, index) => (
    <ToDoItem
    todo={todo}
    index={index}
    completeTodo={completeTodo}
    removeTodo={removetodo}/>
    ))}  
    
      
      <ToDoForm addTodo={addTodo}/>
    </div>
    </div>
  );
}
export default App;
