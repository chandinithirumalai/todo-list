import React from "react";

import "./TodoItem.css";



function ToDoItem(props){
    const{ todo,index,completeTodo, removeTodo} = props;
        return (
            <div className={`todo ${todo.isCompleted ? "complete" : ""}`}> 
                {todo.text}
    
                
                    <button onClick={() => completeTodo(index)}>Complete</button>
                    <button onClick={() => removeTodo(index)}>x</button>
                
            </div>
    
    
        );

    }

export default ToDoItem;

            
// plug in for code: Prettier 







