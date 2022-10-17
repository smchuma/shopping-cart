import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=10"
    );
    setProducts(response.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const addProduct = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const removeProduct = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="container">
      <Navbar countItems={cartItems.length} />
      <Home
        products={products}
        loading={loading}
        cartItems={cartItems}
        addProduct={addProduct}
        removeProduct={removeProduct}
      />
    </div>
  );
};

export default App;
