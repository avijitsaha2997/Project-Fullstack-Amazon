import PropTypes from "prop-types";
import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {

        id,
        title,
        image,
        price,
        rating

      }
    });
  };

  return (
    <div className="product">
      <div className="product__info">

        <p>{title} </p>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating).fill().map(() => (
            <p key={Math.random()}>⭐</p>
          ))}

        </div>

      </div>

      <img src={image} alt="" />
      <button type="button" onClick={addToBasket}>Add to Basket</button>

    </div>
  );
}
Product.propTypes = {
  id: PropTypes.any,
  title: PropTypes.any,
  image: PropTypes.any,
  price: PropTypes.any,
  rating: PropTypes.any
};
export default Product;
