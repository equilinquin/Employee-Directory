import React from "react";

function BuildTable(props) {
  return (
    <div className="datatable">
      <table striped bordered hover>
        <thead>
          <tr>
            <th>Profile Picture</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.image}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BuildTable;
