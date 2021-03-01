import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { LocationContext } from "../locations/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeForm = () =>{
    const {addEmployee} = useContext(EmployeeContext)
    const {locations, getLocations} = useContext(LocationContext)
    const [employee, setEmployee] = useState({
        name:"",
        
    })
    const history = useHistory()

    useEffect(()=>{
        getLocations()
    },[])

    const handleInputChange = (event) =>{
        event.preventDefault()
        const tempEmployee = {...employee}
        tempEmployee[event.target.id] = event.target.value
        setEmployee(tempEmployee)
    }
    const handleClickSaveEmployee = (event) =>{
        event.preventDefault()

        employee.manager === "true" ? employee.manager=true : employee.manager=false
        employee.fullTime === "true" ? employee.fullTime=true : employee.fullTime=false
        employee.hourlyWage = parseFloat(employee.hourlyWage)

        addEmployee(employee)
        .then(()=>history.push("/employees"))
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee name:</label>
                    <input type="text" id="name" onChange={handleInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue={employee.locationId} onChange={handleInputChange} name="locationId" id="locationId" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.address}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Management </label>
                    <select onChange={handleInputChange} name="manager" id="manager" className="form-control" >
                        <option value="0">Select a location</option>
                        <option value="true">manager</option>
                        <option value="false">underling</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Full Time</label>
                    <select onChange={handleInputChange} name="fullTime" id="fullTime" className="form-control" >
                        <option value="0">Select a location</option>
                        <option value="true">Full Time</option>
                        <option value="false">Part Time</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyWage">Employee Wage:</label>
                    <input type="text" id="hourlyWage" onChange={handleInputChange} required className="form-control" placeholder="Employee Wage" value={employee.hourlyWage}/>
                </div>
            </fieldset>
            <button className="btn btn-primary"
              onClick={handleClickSaveEmployee}>
              Save Employee
            </button>
        </form>
      )
}

