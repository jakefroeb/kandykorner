import { useContext } from "react"
import { useHistory } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"


export const Employee = ({employee}) =>{
    const {fireEmployee} = useContext(EmployeeContext)
    const history = useHistory()
    const handleFiring = () =>{
        fireEmployee(employee.id)
        .then(()=>{
            history.push("/employees")
        })
    }
    return(
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__locationAddress">location: {employee.location.address}</div>
            <div className="employee__manager">Manager: {String(employee.manager)}</div>
            <div className="employee__fullTime">Full Time: {String(employee.fullTime)}</div>
            <div className="employee__hourlyRate">Hourly Rate: {String(employee.hourlyRate)}</div>
            <button onClick={handleFiring}>Fire Employee</button>
        </section>
    )
}
