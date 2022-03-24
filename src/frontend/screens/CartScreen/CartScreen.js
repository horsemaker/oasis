import React from "react";
import { CartProductCard, CartSummary } from "../../components";
import { useCart } from "../../contexts";
import "./CartScreen.css";

function CartScreen() {
  const { cart } = useCart();

  return (
    <div className="cart-screen">
      <div className="cart-products">
        {cart.map((cartProduct) => (
          <CartProductCard key={cartProduct._id} product={cartProduct} />
        ))}
      </div>
      <CartSummary />
    </div>
  );
}

export { CartScreen };
