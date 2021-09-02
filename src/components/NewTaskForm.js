import React from "react";

function NewTaskForm({Categories, onFormChange, formState, onTaskSubmit}) {

  const displayCategories = Categories.filter(function(category){
    return category !== "All"
  })

  return (
    <form className="new-task-form" onSubmit={onTaskSubmit}>
      <label>
        Details
        <input onChange={onFormChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={onFormChange} name="category" value = {formState.category}>
          {displayCategories.map(function(category){
            return(
              <option key={category} value={category}>{category}</option>
            )
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
