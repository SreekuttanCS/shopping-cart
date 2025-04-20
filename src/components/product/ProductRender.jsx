import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "../../css/product.css";

import {
  productError,
  productLoaded,
  productLoading,
} from "../../redux/productSlice";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
import { Bounce, toast, ToastContainer } from "react-toastify";

const ProductRender = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { category } = useSelector((state) => state.category);
  const { items } = useSelector((state) => state.cart);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(productLoading());
      let url;
      try {
        if (category == "all") {
          url = "https://fakestoreapi.com/products";
        } else {
          url = `https://fakestoreapi.com/products/category/${category}`;
        }
        const response = await axios.get(url);
        dispatch(productLoaded(response.data));
      } catch (err) {
        dispatch(productError("Failed to Load", err));
      }
    };
    fetchProducts();
  }, [dispatch, category]);

  const handleCart = (product) => {
    console.log("added");
    dispatch(addToCart(product));
    toast("Added to Cart");
  };
  const handleRemoveCart = (id) => {
    toast("Removed from Cart");
    dispatch(removeFromCart(id));
  };
  const isInCart = (productId) => {
    return items.some((item) => item.id === productId);
  };
  return (
    <div className=" flex  flex-wrap gap-5 justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="product flex flex-col justify-center items-center gap-2 text-black bg-white mt-2"
        >
          <img src={product.image} alt="" className="product-image" />

          <p className="product-title font-extrabold text-xl truncate w-75 text-center">
            {product.title}
          </p>
          <p className="flex w-50 justify-around ">
            <span className="bg-[#1E3932] flex ">
              <img src="src\assets\star-solid.svg" alt="" />
              {product.rating.rate}
            </span>
            <span> {product.rating.count} Ratings</span>
          </p>

          <span>$ {product.price}</span>
          {isInCart(product.id) ? (
            <button
              onClick={() => handleRemoveCart(product.id)}
              className="bg-[#d21111]  text-white w-50  cart-button"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => handleCart(product)}
              className="bg-[#1E3932]  text-white w-50  cart-button"
            >
              Add to Cart
            </button>
          )}

          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            theme="dark"
            transition={Bounce}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductRender;
