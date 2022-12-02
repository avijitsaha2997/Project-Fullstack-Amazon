import React from "react";
import { useNavigate } from "react-router-dom";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

import "./Subtotal.css";

function Subtotal() {
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
  const totalPrice = getBasketTotal(basket);
  const totalPriceWIthDecimal = totalPrice.toFixed(2);

  return (
    <div className="subtotal">
        <p>
            <h4>Subtotal ({basket.length} items): <strong>${totalPriceWIthDecimal}</strong></h4>

        </p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small>

        <button onClick={e => navigate("/payment")}>Proceed to checkout</button>

    </div>
  );
}

export default Subtotal;
