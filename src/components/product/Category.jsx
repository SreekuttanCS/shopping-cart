import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/categorySlice";
import { setSearchQuery } from "../../redux/searchSlice";
import "../../css/product.css";

const Category = () => {
  const dispatch = useDispatch();

  const handleCategoryChange = (category) => {
    dispatch(setSearchQuery(false));
    dispatch(setCategory(category));
  };

  const categories = [
    { label: "All", value: "all" },
    { label: "Electronics", value: "electronics" },
    { label: "Jewelery", value: "jewelery" },
    { label: "Men's Clothing", value: "men's clothing" },
    { label: "Women's Clothing", value: "women's clothing" },
  ];

  return (
    <div className="category-buttons bg-black text-white flex flex-wrap justify-around w-full py-2">
      {categories.map(({ label, value }) => (
        <button
          key={value}
          className="category-btn text-sm sm:text-base px-3 py-1 m-1 sm:m-2 rounded hover:bg-white hover:text-black transition duration-300"
          onClick={() => handleCategoryChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Category;
