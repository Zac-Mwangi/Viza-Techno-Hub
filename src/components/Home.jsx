import React from 'react'
import Header from './Header'
import ProductContainer from './ProductContainer'

export default function Home({ products }) {
    // loop through the products
    const productList = products.map((product) => (
        <ProductContainer
            key={product.id}
            title={product.title}
            image={product.image}
        />
    ));

    return (
        <div>
            <Header />
            <ProductContainer />
        </div >
    )
}
