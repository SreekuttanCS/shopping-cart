import { useSelector } from "react-redux";
import ProductRender from "./ProductRender";
import Category from "./Category";
import SearchProduct from "./SearchProduct";

const ProductList = () => {
  const {  error } = useSelector((state) => state.products);
  const { searchQuery } = useSelector((state) => state.searchQuery);

  return (
    <div className="bg-[#0F0F0F] h-full">
      {error !== null && <div> {error.message} </div>}
      <Category />
      {searchQuery ? <SearchProduct /> : <ProductRender />}
    </div>
  );
};

export default ProductList;
