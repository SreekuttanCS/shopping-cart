import React from "react";
import { useNavigate } from "react-router-dom";

const Heading = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <>
      <h1
        className="text-4xl hidden md:block font-bold text-white  heading"
        onClick={goToHome}
      >
        TENCEL
      </h1>
      <h2
        className="text-5xl italic  block md:hidden font-bold text-white  heading"
        onClick={goToHome}
      >
        T
      </h2>
    </>
  );
};

export default Heading;
