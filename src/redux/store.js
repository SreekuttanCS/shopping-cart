import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import categoryReducer from "./categorySlice";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    category: categoryReducer,
    searchQuery: searchReducer,
  },
});

export default store;
