export const Employee = ({employee}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__locationAddress">location: {employee.location.address}</div>
        <div className="employee__manager">Manager: {String(employee.manager)}</div>
        <div className="employee__fullTime">Full Time: {String(employee.fullTime)}</div>
        <div className="employee__hourlyRate">Hourly Rate: {String(employee.hourlyRate)}</div>
    </section>
)