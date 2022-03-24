import React from "react";
import { useCart } from "../../contexts";
import "./CartSummary.css";

export const CartSummary = () => {
  const {
    cartSummary: {
      cartTotalProducts,
      cartTotalPrice,
      cartTotalDiscount,
      cartTotalAmount,
    },
  } = useCart();

  return (
    <div className="cart-checkout">
      <h2 className="h2">Price Details</h2>
      <hr />
      <ul className="checkout-list list-style-none">
        <li className="checkout-list-item">
          <span>Price ({cartTotalProducts} items)</span>
          <span className="checkout-price">₹{cartTotalPrice}</span>
        </li>
        <li className="checkout-list-item">
          <span>Discount</span>
          <span className="checkout-discount">- ₹{cartTotalDiscount}</span>
        </li>
        <li className="checkout-list-item">
          <span>Delivery Charges</span>
          <span className="checkout-delivery">FREE</span>
        </li>
      </ul>
      <hr />
      <div className="checkout-amount">
        <h3>Total Amount</h3>
        <p>₹{cartTotalAmount}</p>
      </div>
      <hr />
      <button className="btn btn-teal btn-checkout">Proceed to Checkout</button>
    </div>
  );
};
