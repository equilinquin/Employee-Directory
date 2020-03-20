import React from "react";
import "./style.css";

function TableBody(props) {
  return (
    <tr key={props.login}>
      <td>
        <img src={props.image} alt="User Profile" />
      </td>
      <td>{props.name}</td>
      <td>{props.location}</td>
      <td>{props.email}</td>
    </tr>
  );
}

export default TableBody;
