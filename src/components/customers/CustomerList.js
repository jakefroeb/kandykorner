import { useContext, useEffect, useState } from "react"
import { CustomerContext } from "./CustomerProvider"

export const CustomerList = () =>{
    const [customers, setCustomers] = useState([])
    const {getCustomers} = useContext(CustomerContext)

    useEffect(()=>{
        getCustomers()
        .then(res => setCustomers(res))
    },[])

    return (
        <>
            <ul className="customers">
                {customers.map(customer => <li key={customer.id}>{customer.name}</li>)}
            </ul>
        </>
    )
}