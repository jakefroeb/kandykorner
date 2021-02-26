import React, { useContext, useEffect } from "react"
import { Product } from "./Product"
import { ProductContext } from "./ProductProvider"
import "./Product.css"

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="products">
            {products.map(product => {
                return <Product key={product.id}
                       product = {product} />
            })}
        </div>
    )
}