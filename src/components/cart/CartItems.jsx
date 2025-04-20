import { useDispatch, useSelector } from "react-redux";
import {
  clearItem,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/cartSlice";
import "../../css/cart.css";
import { Bounce, toast, ToastContainer } from "react-toastify";
const CartItems = () => {
  const { items, quantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveCart = (id) => {
    toast("Removed from Cart");
    dispatch(removeFromCart(id));
  };
  const handleRemoveAll = () => {
    dispatch(clearItem());
  };
  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };
  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };
  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-wrap justify-center md:justify-start bg-white  md:w-3xl cart-product"
        >
          <img src={item.image} alt="" className="product-image" />
          <div className="flex flex-col justify-center items-center md:items-start cart-detail">
            <span className="product-title font-extrabold text-lg  text-center">
              {item.title}
            </span>
            <span className="font-bold px-5">${item.price}</span>
            <div>
              <button
                onClick={() => {
                  handleIncreaseQuantity(item.id);
                }}
              >
                +
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => {
                  handleDecreaseQuantity(item.id);
                }}
              >
                -
              </button>
            </div>
            <div>
              <button
                onClick={() => handleRemoveCart(item.id)}
                className="bg-[#d21111]  text-white w-50  cart-button"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Bounce}
      />
      <div>
        {items.length > 0 && (
          <button
            onClick={() => handleRemoveAll()}
            className=" text-white w-50  cart-button"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItems;
