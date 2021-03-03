import React, { useContext } from "react"
import { CustomerProductContext } from "../customers/CustomerProductProvider"
import "./Product.css"


export const Product = ({product, productType}) => {
    const {addCustomerProduct} = useContext(CustomerProductContext)
    const SaveProduct = (event) =>{
        const tempcustomerProduct = {
            "productId": parseInt(event.target.value),
            "customerId": parseInt(localStorage.getItem("kandy_customer"))
        }
        addCustomerProduct(tempcustomerProduct)
    }
    return (
        <section className="product">
            <h3 className="product__name">{product.name}</h3>
            <div className="product__price">price: ${product.price}</div>
            <div className="product__type">{productType.type}</div>
            <button className="product__button" onClick={SaveProduct} value={product.id}>Purchase</button>
        </section>
    )
    }