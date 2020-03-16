import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="Header">
      <h1>Employee Directory</h1>
      <h3>Search for employee by name or location, or use the search bar</h3>
      <br />
      <form>
        <div className="form-group input-group">
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search For an Employee"
            id="search"
          />
          <button
            onClick={props.handleFormSubmit}
            className="btn btn-primary input-group-append"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
export default Header;
