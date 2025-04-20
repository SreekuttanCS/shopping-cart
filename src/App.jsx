import "./App.css";
// import ProductList from "";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
// import CartList from "./components/cart/CartList";
import React, { Suspense } from "react";
import Loading from "./components/product/Loading";

function App() {
  const ProductList = React.lazy(() =>
    import("./components/product/ProductList")
  );
  const CartList = React.lazy(() => import("./components/cart/CartList"));
  return (
    <>
      <Router>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<CartList />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
