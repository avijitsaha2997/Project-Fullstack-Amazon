import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();
  return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg" alt="" />

                <div className="checkout__title">
                    <h3>{user?.email}</h3>
                    <h2>
                      Your shopping Basket.
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                        key={Math.random()}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}

                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
  );
}

export default Checkout;
