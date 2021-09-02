import React from "react";
import Task from "./Task"

function TaskList({Tasks, removeTasks, activeCategory}) {

  const tasksToDisplay = Tasks.filter(function(task){
    if(task.category === activeCategory || activeCategory === "All"){
      return true
    }
    else{
      return false
    }
  })

  return (
    <div className="tasks">
      {tasksToDisplay.map(function(task, index){
        return(
          <Task Task = {task} removeTasks = {removeTasks} key={index}/>
        )
      })}
    </div>
  );
}

export default TaskList;
