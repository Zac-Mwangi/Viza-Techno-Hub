import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import CartContainer from "./components/CartContainer";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Error from "./components/Error";
import Home from "./components/Home";

import { CssBaseline } from "@mui/material";
import AddProducts from "./components/AddProducts";

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
      <CssBaseline />
      <NavBar cartLength={cartLength} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add" element={<AddProducts />} />
        <Route path="/cart" element={<CartContainer cart={cart} />} />
        <Route path="/" element={<Home update={update} cart={cart} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
