import React from "react";

function ProductItem({ product, removeProduct }) {
  return (
    <li>
      {product.name} - ₹{product.price}
      <button onClick={() => removeProduct(product.name)}>Remove</button>
    </li>
  );
}

export default ProductItem;
