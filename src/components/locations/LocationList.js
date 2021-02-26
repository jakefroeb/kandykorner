import React, { useContext, useEffect } from "react"
import { Location } from "./Location"
import { LocationContext } from "./LocationProvider"
import "./Location.css"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <div className="locations">
            {locations.map(location => {
                return <Location key={location.id}
                       location = {location} />
            })}
        </div>
    )
}