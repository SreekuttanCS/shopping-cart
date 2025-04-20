import { useDispatch, useSelector } from "react-redux";
import "../../css/product.css";
import { addToCart } from "../../redux/cartSlice";
import { Bounce, toast, ToastContainer } from "react-toastify";
const SearchProduct = () => {
  const { inputData } = useSelector((state) => state.searchQuery);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(inputData.toLowerCase()) ||
      product.description.toLowerCase().includes(inputData.toLowerCase()) ||
      product.category.toLowerCase().includes(inputData.toLowerCase())
  );

  const handleCart = (product) => {
    dispatch(addToCart(product));
    toast("Added to Cart");
  };

  return (
    <div className="flex  flex-wrap gap-5 justify-center h-full">
      {filteredProducts.map((product) => (
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
          <button
            onClick={() => handleCart(product)}
            className="bg-[#1E3932]  text-white w-50  cart-button"
          >
            Add to Cart
          </button>
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
    </div>
  );
};

export default SearchProduct;
