import React, { useEffect, useState } from "react";
import Footer from './Footer'
import Header from './Header'
import ProductContainer from './ProductContainer'

export default function Home({ update , cart }) {
    const [products, setProducts] = useState([]);
    const [nM, setNM] = useState([]);
    const url = "https://vizahub.herokuapp.com/products";

    // useEffect To Fetch All the products
    useEffect(() => {
        fetch(url)
            .then((r) => r.json())
            .then((data) => {
                setProducts(data)
                setNM(data)
            });
    }, []);

    function updateList(prd) {
        console.log(prd)
    }

    function addProduct(prd) {
        setProducts([...products ,  prd])
        setNM([...nM ,  prd])
    }


    return (
        <div>
            <Header setProducts={setProducts} nM={nM} addProduct={addProduct}  />
            <ProductContainer cards={products} update={update} cart = {cart} />
            <Footer />
        </div >
    )
}
