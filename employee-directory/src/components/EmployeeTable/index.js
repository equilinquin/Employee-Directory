import React from "react";
import Table from "react-bootstrap/Table";

function buildTable(props) {
  return (
    <div>
      <Table striped bordered hover>
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
      </Table>
    </div>
  );
}

export default buildTable;
