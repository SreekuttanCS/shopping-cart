import { useSelector } from "react-redux";

const CartTotal = () => {
  const { items } = useSelector((state) => state.cart);
  const total = items.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <>
      {items.length > 0 && (
        <div className="cart-totals">
          <h2 className="cart-total">PRICE DETAILS</h2>
          <div className="flex flex-col  gap-5 total-item text-white">
            <span className="md:w-100 flex justify-between">
              Price (10 items){" "}
              <span className="text-emerald-500">$ {total}</span>
            </span>
            <span className="md:w-100 flex justify-between">
              Delivery Charges <span className="text-emerald-400">Free</span>
            </span>
            <span className="md:w-100 flex justify-between">
              Total Amount <span className="text-emerald-400">$ {total}</span>
            </span>
          </div>
          <div className="total-text text-[grey] text-md">
            Safe and Secure Payments.Easy returns.100% Authentic products.
          </div>
        </div>
      )}
    </>
  );
};

export default CartTotal;
