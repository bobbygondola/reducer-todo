import React from 'react';
import Todo from './Todo';

const ToDoList = props => {
    return (
        <div>
            {props.tasks.map(task => {
                return (
                    <Todo
                       key={task.id}
                        name={task.item}
                        status={task.completed} />
                )
            })}
        </div>
    )
    
}

export default ToDoList; 