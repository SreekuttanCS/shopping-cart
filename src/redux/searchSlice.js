import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchQuery",
  initialState: {
    searchQuery: false,
    inputData: "",
  },
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setInputData(state, action) {
      state.inputData = action.payload;
    },
  },
});

export const { setSearchQuery, setInputData } = searchSlice.actions;
export default searchSlice.reducer;
