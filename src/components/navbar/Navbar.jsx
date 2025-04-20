import React from "react";
import CartButton from "./CartButton";
import SearchInput from "./SearchInput";
import "../../css/navbar.css";
import Heading from "./Heading";
const Navbar = () => {
  return (
    <div className="flex p-5 justify-around items-center bg-[#1E3932] h-[15vh]">
      <Heading />
      <div className="search-div">
        <SearchInput />
      </div>
      <div>
        <CartButton />
      </div>
    </div>
  );
};

export default Navbar;
