import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart, ClearCart, children } = props;
  let quantity = 0;
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping * product.quantity;
  }
  const tax = total * 0.1;
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h1 className="cart-title">Order Summary</h1>
      <div className="cart-details">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h1>Grand Total: ${grandTotal}</h1>
      </div>
      <div className="cart-btn">
        <button onClick={ClearCart} className="cart-single-btn cart-clear">
          <p>Clear Cart</p>
        </button>
        <button className="cart-single-btn cart-review">
          <p>{children}</p>
        </button>
      </div>
    </div>
  );
};

export default Cart;
