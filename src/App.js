import React, { useState, useEffect } from "react";
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
  const [cart, setCart] = useState([]);

  const url = "http://localhost:3000/cart";

  // useEffect To Fetch All the cart
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setCart(data);
        setCartLength(data.length);
      });
  }, []);

  function update() {
    setCartLength((cartLength) => cartLength + 1);
  }

  return (
    <div>
      <NavBar cartLength={cartLength} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartContainer cart={cart}/>} />
        <Route path="/" element={<Home update={update} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}
