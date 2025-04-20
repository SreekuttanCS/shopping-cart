import React from "react";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import { useSelector } from "react-redux";

const CartList = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <div className="cart-container flex flex-wrap ">
      {items.length > 0 ? (
        <CartItems />
      ) : (
        <span className="text-white ">Cart Empty!!</span>
      )}
      <CartTotal />
    </div>
  );
};

export default CartList;
