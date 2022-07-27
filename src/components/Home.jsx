import React, { useEffect, useState } from "react";
import Contact from './Contact'
import Header from './Header'
import ProductContainer from './ProductContainer'

export default function Home({ update }) {
    const [products, setProducts] = useState([]);
    const url = "http://localhost:3000/products";

    // useEffect To Fetch All the products
    useEffect(() => {
        fetch(url)
            .then((r) => r.json())
            .then((data) => setProducts(data));
    }, []);

    function updateList(prd) {
        console.log(prd)
        // setProducts(likes => likes + 1)
        setProducts(products => prd)
        // setProducts(prd)
    }

    // function handleAddPoem(newPoem) {
    //     setPoems([...products, newCart]);
    // }

    return (
        <div>
            <Header products={products} updateList={updateList} setProducts={setProducts} />
            <ProductContainer cards={products} update={update} />
            <Contact />
        </div >
    )
}
