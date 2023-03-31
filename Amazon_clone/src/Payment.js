import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "./axios";
// import axios from "axios";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Payment() {
  
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();
  const totalPrice = getBasketTotal(basket);
  const totalPriceWIthDecimal = totalPrice.toFixed(2);

  // eslint-disable-next-line no-unused-vars
  const stripe = useStripe();
  // eslint-disable-next-line no-unused-vars
  const elements = useElements();

  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [disable, setDisable] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [succeeded, setSucceeded] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [processing, setProcessing] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const getClientSecret = async() => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("the client secret is >>>>>", clientSecret);

  const handleSubmit = async(event) => {
    event.preventDefault();
    setProcessing(true);
    // eslint-disable-next-line no-unused-vars
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      setSucceeded(true);
      setError(null);
      setProcessing(false);
      navigate("/orders", { replace: true });
    });
  };
  const handleChange = (event) => {
    setDisable(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
        <div className="payment__container">
        <h1>
            Checkout(<Link to="./checkout">{basket?.length} items</Link>)
        </h1>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>123 react lane</p>
                    <p>Los angels, ca</p>
                </div>
            </div>

            <div className="payment__section">
                <div className="payment__title">
                    <h3>Reviews items and delivery</h3>
                </div>
                <div className="payment__items">
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

            <div className="payment__section">
                <div className="payment__title">
                    <h3>Pyment Method</h3>
                </div>
                <div className="payment__details">
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                         <div className="payment__priceContainer">
                            <h4>Order total: ${totalPriceWIthDecimal}</h4>

                            <button
                            disabled={processing || disable || succeeded}
                            >
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                         </div>
                         {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>

    </div>
  );
}

export default Payment;
