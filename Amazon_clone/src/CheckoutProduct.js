import PropTypes from "prop-types";
import React from "react";
import "./CheckoutProduct.css";
function CheckoutProduct({ id, title, image, price, rating }) {
  return (
    <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt="" />
        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {Array(rating).fill().map(() => (
                    <p key={Math.random}>⭐ </p>
                ))}
            </div>
            <button>Remove From Basket</button>
        </div>
    </div>
  );
}
CheckoutProduct.propTypes = {
  id: PropTypes.any,
  title: PropTypes.any,
  image: PropTypes.any,
  price: PropTypes.any,
  rating: PropTypes.any
};
export default CheckoutProduct;
