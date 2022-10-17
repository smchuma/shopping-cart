import React from "react";

const Product = (props) => {
  const { product, addProduct } = props;
  return (
    <div className="product-list">
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.title.slice(0, 10)}</h3>
      <div>{product.price}</div>
      <div className="btn">
        <button onClick={() => addProduct(product)}>Buy</button>
      </div>
    </div>
  );
};

export default Product;
