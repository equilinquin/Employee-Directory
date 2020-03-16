import React from "react";
import "./style.css";

function EmployeeTable(props) {

  return (
    <div className="datatable">
      <table className="table table-striped table-hover">
        <thead>
          <tr id="header">
            <th>Profile Picture</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(emp => (
            <tr key={emp.login.uuid}>
              <td><img src={emp.picture.medium} alt="User Profile"/></td>
              <td>{emp.name.first + " " + emp.name.last}</td>
              <td>{emp.location.state}</td>
              <td>{emp.email}</td>
            </tr>
          ))}
          {/* <DataTable props={props}/> */}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
