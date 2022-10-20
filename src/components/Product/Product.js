import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = (props) => {
  const { addToCart, product } = props;
  const { img, name, price, seller, ratings } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-details">
        <h2>{name}</h2>
        <h4>Price: ${price} </h4>
        <p>Manufacturer : {seller} </p>
        <p>Rating : {ratings} start</p>
      </div>
      <button onClick={() => addToCart(product)} className="add-to-cart">
        <p>Add to Cart</p>
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="cart-icon"
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
