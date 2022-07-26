import React, { useEffect, useState } from "react";
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
  const [products, setProducts] = useState([]);
  const [categories, SetCategories] = useState([]);
  const url = "https://fakestoreapi.com/products";

  // useEffect To Fetch All the products
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch(url+"/categories")
      .then((r) => r.json())
      .then((data) => SetCategories(data));
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/" element={<Home products={products} categories = {categories} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}
