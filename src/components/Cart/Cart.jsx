import React from "react";

const Cart = (props) => {
  const { cartItems, addProduct, removeProduct } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const VAT = itemsPrice * 0.16;
  const totalPrice = itemsPrice + VAT;
  return (
    <div>
      <aside className="cart-items">
        <h2>Cart Items</h2>
        <div>
          {cartItems.length === 0 && <div>Cart is empty</div>}
          {cartItems.map((item) => (
            <div key={item.id} className="cart-items-content">
              <div className="col-2">{item.title.slice(0, 10)}</div>
              <div className="col-2 btn-secondary">
                <button onClick={() => removeProduct(item)} className="remove">
                  -
                </button>{" "}
                <button onClick={() => addProduct(item)} className="add">
                  +
                </button>
              </div>

              <div className="col-2">
                {item.qty} x ${item.price.toFixed(2)}
              </div>
            </div>
          ))}
          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="cart-items-content">
                <div className="col-2">Items Price</div>
                <div>${itemsPrice.toFixed(2)}</div>
              </div>
              <div className="cart-items-content">
                <div className="col-2">VAT</div>
                <div>${VAT.toFixed(2)}</div>
              </div>

              <div className="cart-items-content">
                <div className="col-2">
                  <strong>Total Price</strong>
                </div>
                <div>
                  <strong>${totalPrice.toFixed(2)}</strong>
                </div>
              </div>
              <hr />
              <div className="cart-items-content">
                <button
                  onClick={() => alert("Congratulations")}
                  className="checkout"
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    </div>
  );
};

export default Cart;
