import React, { useState } from "react";

const TodoForm = (props) => {
  //rules of todays form
  console.log(props);
  const [newTaskName, SetNewTaskName] = useState("");

  const handleChanges = (e) => {
    SetNewTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTask(newTaskName);
    SetNewTaskName("");
  };
  return (
    <div className="form">
      <h3>Input the Projects of today!</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newTask"
          placeholder="Add a new task"
          value={newTaskName}
          onChange={handleChanges}
        />
        <button type="submit" className="submitBut">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
