import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [activeCategory, setActiveCategory] = useState("All");
  const [formState, setFormState] = useState({
    text: '',
    category: 'Code'
  })

  function removeTasks(event){
    const eventName = event.target.parentNode.children[1].textContent
    const newTasks = tasks.filter(function(task){
      return task.text !== eventName
    })

    setTasks(newTasks)
  }

  function onSelectCategory(event){
    const newActiveCategory = event.target.textContent
    
    setActiveCategory(newActiveCategory)
  }

  function onFormChange(event){
    const field = event.target.name
    const input = event.target.value

    setFormState({
      ...formState,
      [field]: input
    })
  }

  function onTaskSubmit(event){
    event.preventDefault();
    console.log(formState)
    setTasks([
      ...tasks,
      {
        text: formState.text,
        category: formState.category
      }
    ])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        Categories = {CATEGORIES} 
        activeCategory = {activeCategory}
        onSelectCategory = {onSelectCategory}
      />
      <NewTaskForm 
        Categories = {CATEGORIES}
        onFormChange = {onFormChange}
        formState = {formState}
        tasks = {tasks}
        onTaskSubmit = {onTaskSubmit}
      />
      <TaskList 
        Tasks = {tasks} 
        removeTasks = {removeTasks}
        activeCategory = {activeCategory}
      />
    </div>
  );
}

export default App;
