import { createContext, useState } from "react";

export const CustomerContext = createContext()

export const CustomerProvider = (props) =>{
    const [customer, setCustomer] = useState({})

    const getCustomer = (id) => {
        return fetch(`http://localhost:8088/customers/${id}`)
        .then(res => res.json())
        .then(setCustomer)
    }
    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
        .then(res => res.json())
    }

    return (
        <CustomerContext.Provider value={{
            customer, getCustomer, getCustomers
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}
