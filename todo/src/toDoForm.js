import React, { useState } from "react";

const TodoForm = ({ addNewTask, filterTasks }) => {
  //rules of todays form
  
  const [newTaskName, SetNewTaskName] = useState("");
  
  const handleChanges = (e) => {
    SetNewTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTask(newTaskName);
    SetNewTaskName("");
  };

  const handleClearCompleted = e => {
    e.preventDefault();
    filterTasks();
}
  return (
    <div className="form">
      <h3>Input the Projects of today!</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newTask"
          placeholder="new task"
          value={newTaskName}
          onChange={handleChanges}
        />
        <button type="submit" className="submitBut">
          Add
        </button>
        <button type="button" onClick={handleClearCompleted}>Clear</button>
      </form>
    </div>
  );
};

export default TodoForm;
