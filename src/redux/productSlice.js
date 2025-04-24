import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    productLoading(state) {
      state.loading = true;
    },
    productLoaded(state, action) {
      state.products = action.payload;
      state.loading = false;
    },
    productError(state, action) {
      state.error = action.payload;
      state.loading = false;  
    },
  },
});

export const { productLoading, productLoaded, productError } =
  productSlice.actions;

export default productSlice.reducer;
