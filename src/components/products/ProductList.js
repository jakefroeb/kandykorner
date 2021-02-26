import React, { useContext, useEffect } from "react"
import { Product } from "./Product"
import { ProductContext } from "./ProductProvider"
import "./Product.css"
import { ProductTypeContext } from "./ProductTypeProvider"

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)
    const { productTypes, getProductTypes} = useContext(ProductTypeContext)

    useEffect(() => {
        getProductTypes()
        .then(getProducts)
    },[])
    return (
        <div className="products">
            {products.map(product => {
                return <Product key={product.id}
                       product = {product} 
                       productType = {productTypes.find((productType)=> productType.id === product.productTypeId)}/>
            })}
        </div>
    )
}