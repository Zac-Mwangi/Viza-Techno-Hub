import React from 'react'
import Header from './Header'
import ProductContainer from './ProductContainer'

export default function Home({ products, categories }) {
    // loop through the products
    return (
        <div>
            {/* <Header category = {products.category}/> */}
            {/* {productList} */}
            <Header categories={categories} />
            <ProductContainer cards={products} />
        </div >
    )
}
