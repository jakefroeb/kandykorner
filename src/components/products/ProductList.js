import React, { useContext, useEffect, useState } from "react"
import { Product } from "./Product"
import { ProductContext } from "./ProductProvider"
import "./Product.css"
import { ProductTypeContext } from "./ProductTypeProvider"

export const ProductList = () => {
    const { products, getProducts, searchTerms } = useContext(ProductContext)
    const { productTypes, getProductTypes} = useContext(ProductTypeContext)
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        getProductTypes()
        .then(getProducts)
    },[])
    useEffect(()=>{
        if(searchTerms !== ""){
            const subset = products.filter(product => product.name.toLowerCase().includes(searchTerms))
            setFilteredProducts(subset)
        }else{
            setFilteredProducts(products)
        }

    },[products, searchTerms])
    return (
        <div className="products">
            {filteredProducts.map(product => {
                return <Product key={product.id}
                       product = {product} 
                       productType = {productTypes.find((productType)=> productType.id === product.productTypeId)}/>
            })}
        </div>
    )
}