import React, { useState } from "react";
import Product from "../Product/Product";
import "font-awesome/css/font-awesome.min.css";

const Products = (props) => {
  const { loading, products, addProduct, onSearchChange } = props;

  return (
    <div className="block">
      <h2>Products</h2>
      <div className="block-content">
        <div className="search">
          <input
            type="search"
            placeholder="search for a product"
            onChange={onSearchChange}
          />
          <div>
            <ion-icon name="search-outline"></ion-icon>
          </div>
        </div>
        <div>
          <div className="prod">
            {loading && (
              <div>
                <h1>Loading...</h1>{" "}
              </div>
            )}
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                addProduct={addProduct}
              ></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
