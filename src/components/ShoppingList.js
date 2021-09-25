import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All");

  const groceryItemsToDisplay = items.filter(singleItem => {
    if (selectedCategory === 'All') {
      return true;
    } else {
      return singleItem.category === selectedCategory;
    }
  });

  function changeSelectedCategoryHandler(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={changeSelectedCategoryHandler}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {groceryItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
