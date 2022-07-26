import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ProductContainer from "./components/ProductContainer";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <ProductContainer />
      <Footer />
    </div>
  );
}
