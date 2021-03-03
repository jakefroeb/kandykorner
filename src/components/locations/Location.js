import React from "react"
import "./Location.css"

export const Location = ({location}) => (
        <section className="location">
            <h3 className="location__address">{location.address}</h3>
            <div className="location__handicap">Wheelchair accessible: {String(location.handicap)}</div>
            <div className="location__sqfoot">squarefootage: {location.sqFoot}</div>
        </section>
    )
