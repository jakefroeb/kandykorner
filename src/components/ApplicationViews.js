import React from "react"
import { Route } from "react-router-dom"
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
            <ProductProvider>
                <ProductTypeProvider>
                    <Route path="/products">
                        <ProductList/>
                    </Route>
                </ProductTypeProvider>
            </ProductProvider>
        </>
    )
}