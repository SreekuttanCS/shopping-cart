import React from "react";
import { IoIosStar } from "react-icons/io";
import { CartState } from "../context/Context";

function SingleCard({ prev }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
 
  
  return (
    <div className="individual-card">
      <img src={prev.image} alt="" className="prod-image" />
      <div>
        <span className="product-name">{prev.name}</span>
        <span className="rating ms-2 ">
          {prev.rating}
          <IoIosStar />
        </span>
      </div>
      <span className="price mt-4">{prev.price}</span>
      <div>
        {cart.some((p) => p.id === prev.id) ?(
          <button
            onClick={() => {
              dispatch({ type: "REMOVE_FROM_CART", payload: prev });
            }}
            className="remove-cart"
          >
            Remove from Cart
          </button>
        )
        
        :(
          <button
            onClick={() => {
              dispatch({ type: "ADD_TO_CART", payload: prev });
            }}
            className="add-cart"
          >
            Add to Cart
          </button>
        ) }
      </div>
    </div>
  );
}

export default SingleCard;
