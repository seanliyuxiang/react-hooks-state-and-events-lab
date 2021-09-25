import React, { useState } from "react";

function Item({ name, category }) {

  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const itemClass = isAddedToCart ? "in-cart" : "";

  function addRemoveItemToCartHandler() {
    setIsAddedToCart(isAddedToCart => !isAddedToCart);
    // setIsAddedToCart(!isAddedToCart);
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addRemoveItemToCartHandler}>{isAddedToCart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
