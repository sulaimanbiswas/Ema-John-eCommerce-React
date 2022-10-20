import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ReviewProduct = ({ product, handleRemoveItem }) => {
  const { name, price, quantity, img, id } = product;
  return (
    <div className="reviewProduct">
      <img src={img} alt="" />
      <div className="review-details-container">
        <div className="review-details">
          <h2 className="review-name">{name}</h2>
          <p className="review-price">
            Price: <span>${price}</span>
          </p>
          <p className="review-price">
            quantity: <span>{quantity}</span>
          </p>
        </div>
        <div className="">
          <button onClick={() => handleRemoveItem(id)} className="delete-btn">
            <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewProduct;
