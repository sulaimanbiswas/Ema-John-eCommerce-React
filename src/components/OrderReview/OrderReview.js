import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  deleteFromLocalStorage,
  removeFromLocalStorage,
} from "../../utilities/localStorage";
import Cart from "../Cart/Cart";
import ReviewProduct from "../ReviewProduct/ReviewProduct";
import "./OrderReview.css";

const OrderReview = () => {
  const { initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromLocalStorage(id);
  };

  const ClearCart = () => {
    setCart([]);
    deleteFromLocalStorage();
  };
  return (
    <div className="shop-container">
      <div className="order-container">
        {cart.map((product) => (
          <ReviewProduct
            product={product}
            handleRemoveItem={handleRemoveItem}
            key={product.id}
          />
        ))}
        {cart.length === 0 && (
          <h2 style={{ textAlign: "center" }}>
            No cart found. <br /> <Link to={"/"}>Please Shop now</Link>
          </h2>
        )}
      </div>
      <div className="cart-container">
        <Cart ClearCart={ClearCart} cart={cart}>
          <Link to={"/order-review"}>Proceed Checkout</Link>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
