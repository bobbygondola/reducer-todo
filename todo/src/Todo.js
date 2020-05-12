import React, { useState, useReducer } from 'react';

const Todo = props => {
    console.log(props.data)
return (
    <div>
        <div className="card">
             <h3>{props.name}</h3>
             <p>{props.status ? 'Completed' : 'Incomplete'}</p>
        </div>
    </div>
)
}
export default Todo;