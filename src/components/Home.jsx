import React, { useEffect, useState } from "react";
import Footer from './Footer'
import Header from './Header'
import ProductContainer from './ProductContainer'

export default function Home({ update , cart }) {
    const [products, setProducts] = useState([]);
    const [nM, setNM] = useState([]);
    const url = "http://localhost:3000/products";

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


    return (
        <div>
            <Header products={products} updateList={updateList} setProducts={setProducts} nM={nM} setNM={setNM} />
            <ProductContainer cards={products} update={update} cart = {cart} />
            <Footer />
        </div >
    )
}
