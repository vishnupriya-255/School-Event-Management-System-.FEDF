import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products, removeProduct }) {
  return (
    <ul>
      {products.map((p, i) => (
        <ProductItem key={i} product={p} removeProduct={removeProduct} />
      ))}
    </ul>
  );
}

export default ProductList;
