import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([
    { name: "Apples", price: 120 },
    { name: "Milk", price: 50 },
    { name: "Bread", price: 40 },
    { name: "Notebook", price: 60 },
    { name: "T-Shirt", price: 300 },
  ]);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  // Update tab title with search text
  useEffect(() => {
    document.title = search ? `Searching: ${search}` : "Product Dashboard";
  }, [search]);

  // Filter products by search text
  const filteredProducts = useMemo(
    () =>
      products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      ),
    [products, search]
  );

  // Calculate total price of displayed products
  const totalPrice = useMemo(
    () => filteredProducts.reduce((sum, p) => sum + p.price, 0),
    [filteredProducts]
  );

  // Memoized remove function
  const removeProduct = useCallback(
    (name) => setProducts(products.filter((p) => p.name !== name)),
    [products]
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Search & Price Calculator</h2>

      <input
        ref={inputRef}
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => inputRef.current.focus()}>Focus Search</button>

      <p>Total Price: ₹{totalPrice}</p>

      <ProductList products={filteredProducts} removeProduct={removeProduct} />
    </div>
  );
}

export default App;
