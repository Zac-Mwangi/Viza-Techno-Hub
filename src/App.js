import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import CartContainer from "./components/CartContainer";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Error from "./components/Error";
import Home from "./components/Home";

export default function App() {
  const [cartLength, setCartLength] = useState(0);

  function update() {
    setCartLength((cartLength) => cartLength + 1);
  }
  return (
    <div>
      <NavBar setCartLength={setCartLength} cartLength={cartLength} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route
          path="/"
          element={<Home update={update} />}
          // element={<Home products={products} updateList={updateList} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />

      {/* <CartContainer /> */}
    </div>
  );
}
