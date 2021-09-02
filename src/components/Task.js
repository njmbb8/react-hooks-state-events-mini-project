import React from "react";

function Task({Task, removeTasks}) {
  return (
    <div className="task">
      <div className="label">{Task.category}</div>
      <div className="text">{Task.text}</div>
      <button onClick = {removeTasks} className="delete">X</button>
    </div>
  );
}

export default Task;
