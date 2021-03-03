import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { CustomerProductList } from "./customers/CustomerProductList"
import { CustomerProductProvider } from "./customers/CustomerProductProvider"
import { CustomerProvider } from "./customers/CustomerProvider"
import { EmployeeForm } from "./employees/EmployeeForm"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { Home } from "./Home"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductList } from "./products/ProductList"
import { ProductProvider } from "./products/ProductProvider"
import { ProductTypeProvider } from "./products/ProductTypeProvider"

export const ApplicationViews = () =>{
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <LocationProvider>
                <Route path="/locations">
                    <LocationList/>
                </Route>
            </LocationProvider>
            <CustomerProductProvider>
                <ProductProvider>
                    <ProductTypeProvider>
                        <Route path="/products">
                            <ProductList/>
                        </Route>
                    </ProductTypeProvider>
                </ProductProvider>
            </CustomerProductProvider>
            <EmployeeProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
                <LocationProvider>
                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>
                <ProductProvider>
                    <CustomerProvider>
                        <CustomerProductProvider>
                            <Route exact path="/myorder">
                                <CustomerProductList/>
                            </Route>
                        </CustomerProductProvider>
                    </CustomerProvider>
                </ProductProvider>
                <CustomerProvider>
                    <Route exact path="/customers">
                        <CustomerList/>
                    </Route>
                </CustomerProvider>
        </>
    )
}