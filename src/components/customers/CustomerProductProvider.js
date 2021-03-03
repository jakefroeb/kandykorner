import { createContext, useState } from "react";

export const CustomerProductContext = createContext()

export const CustomerProductProvider = (props) => {
    const [customerProducts, setCustomerProducts] = useState([])

    const getCustomerProducts = () =>{
        return fetch("http://localhost:8088/customerProducts")
        .then(res => res.json())
        .then(setCustomerProducts)
    }

    const addCustomerProduct = (customerProduct) =>{
        return fetch("http://localhost:8088/customerProducts",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(customerProduct)
        })
        .then(getCustomerProducts)
    }

    return (
        <CustomerProductContext.Provider value={{
            customerProducts, getCustomerProducts, addCustomerProduct
        }}>
            {props.children}
        </CustomerProductContext.Provider>
    )
}