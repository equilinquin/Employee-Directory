import React from "react";
import "./style.css";
import TableBody from "../TableBody";

function EmployeeTable(props) {
  return (
    <div className="datatable">
      <table className="table table-striped table-hover table-dark">
        <thead>
          <tr id="header">
            <th>Profile Picture</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map(emp => (
            <TableBody 
              login={props.login.uuid}
              image={props.picture.medium}
              name={props.name.first + " " + props.name.last}
              location={props.location.state}
              email={props.email}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
