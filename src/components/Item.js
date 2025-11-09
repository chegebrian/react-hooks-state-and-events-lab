import React, { useState } from "react";

function Item({ name, category }) {
  const [isIncart, setIsInCart] = useState(false);
  function handleCart() {
    setIsInCart((isIncart) => !isIncart);
  }
  return (
    <li className={isIncart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* <button className="add" >
         Add to Cart
      </button> */}
      <button className="add" onClick={handleCart}>
        {isIncart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
