import React from "react";
import { CartState } from "../context/Context";
import SingleCard from "./SingleCard";
import Filter from "./Filter";

const Home = () => {
  const {
    state: { products },
  } = CartState();


  return (
    <div className="home">
      <div className="filterContainer">
        <Filter />
      </div>
      <div className="productContainer">
        {products.map((prev) => {
          return <SingleCard prev={prev} key={prev.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
