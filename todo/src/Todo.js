import React, { useState, useReducer } from 'react';

const Todo = props => {
return (
    <div onClick={() => props.toggleTask(props.id)} className="card">
            <h3>
                {props.status ? <i className="fas fa-check-circle"></i> : <i className="far fa-check-circle"></i>}
                 {props.name}
            </h3>
            <p>{props.status ? 'Completed' : 'Incomplete'}</p>
        </div>
    
)
}
export default Todo;