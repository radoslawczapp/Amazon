import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1.jpg"
          alt="Ad"
        />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
          {/* Items */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
        <h2>The subtotal</h2>
      </div>
    </div>
  );
}

export default Checkout;
