import { useContext, useEffect } from "react"
import { ProductContext } from "../products/ProductProvider"
import { CustomerProductContext } from "./CustomerProductProvider"
import { CustomerContext } from "./CustomerProvider"
import { ProductCard } from "./ProductCard"

export const CustomerProductList = () => {
    const {customerProducts, getCustomerProducts} = useContext(CustomerProductContext)
    const {customer, getCustomer} = useContext(CustomerContext)
    const {products, getProducts} = useContext(ProductContext)
    useEffect(()=>{
        let id = localStorage.getItem("kandy_customer")
        getCustomer(id).then(getProducts).then(getCustomerProducts)
    },[])
    return (
        <>
            <div className="customer__Cart">
                {customer ? <h3>{customer.name}</h3>:<></>}
                {customerProducts.map(cp => {
                    const product = products.find(prod => prod.id === cp.productId)
                    return <ProductCard key = {cp.id}
                            product = {product}/>     
                })}
            </div>
        </>
    )
}