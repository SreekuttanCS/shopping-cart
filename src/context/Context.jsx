import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./Reducer";
const Cart = createContext();
console.log(faker);

const Context = ({ children }) => {
  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: "₹150",
      image: "src/assets/iphone-15-pro.jpg",
      rating: 2.5,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      price: "₹180",
      image: "src/assets/s24.png",
      rating: 4.0,
    },
    {
      id: 3,
      name: "Vivobook 15",
      price: "₹100",
      image: "src/assets/lap1.jpg",
      rating: 4.5,
    },
    {
      id: 4,
      name: "Apple MacBook Apple M2",
      price: "₹80",
      image: "src/assets/macbook.png",
      rating: 3.5,
    },
    {
      id: 5,
      name: "Dumbbell",
      price: "₹10",
      image: "src/assets/dumbbell.png",
      rating: 5.0,
    },
    {
      id: 6,
      name: "Fastrack Pro",
      price: "₹25",
      image: "src/assets/wacth.png",
      rating: 4.5,
    },
    {
      id: 7,
      name: "CIHROX Earbuds",
      price: "₹35",
      image: "src/assets/buds1.png",
      rating: 3.0,
    },
    {
      id: 8,
      name: "Boult X45 ",
      price: "₹40",
      image: "src/assets/buds2.png",
      rating: 4.5,
    },
    {
      id: 9,
      name: "Adjustable Spring Hand ",
      price: "₹80",
      image: "src/assets/hand.png",
      rating: 3.5,
    },
  ];
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
