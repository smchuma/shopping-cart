import React, { useState } from "react";
import Cart from "../Cart/Cart";

import Products from "../Products/Products";

const Home = (props) => {
  const { products, loading, cartItems, addProduct, removeProduct } = props;

  // const [search, setSearch] = useState("");

  // const onSearchChange = (event) => {
  //   const searchField = event.target.value.toLowerCase();
  //   setSearch(searchField);

  //   return products.filter((product) =>
  //     product.title.toLowerCase().includes(searchField)
  //   );
  // };

  return (
    <div>
      <div className="content">
        <div className="products">
          <Products
            products={products}
            loading={loading}
            addProduct={addProduct}
            // onSearchChange={onSearchChange}
          />
        </div>
        <div className="cart">
          <Cart
            cartItems={cartItems}
            addProduct={addProduct}
            removeProduct={removeProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
