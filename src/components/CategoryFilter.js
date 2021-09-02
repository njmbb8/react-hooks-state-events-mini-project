import React from "react";

function CategoryFilter({Categories, activeCategory, onSelectCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
        {Categories.map(function(category, index){
          const className = category === activeCategory ? "selected" : ""
          return (
            <button onClick = {onSelectCategory} className = {className} key = {index}>{category}</button>
          )
        })}
    </div>
  );
}

export default CategoryFilter;
