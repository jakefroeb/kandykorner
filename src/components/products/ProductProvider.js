import React, { useState, createContext } from "react"

export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})
    const [searchTerms, setSearchTerms] = useState("")

    const getProducts = () => {
        return fetch("http://localhost:8088/products")
        .then(res => res.json())
        .then(setProducts)
    }
    const getProduct = (id) => {
        return fetch(`http://localhost:8088/products/${id}`)
        .then(res => res.json())
        .then(setProduct)
    }
    return (
        <ProductContext.Provider value={{
            products, getProducts, getProduct, searchTerms, setSearchTerms
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}