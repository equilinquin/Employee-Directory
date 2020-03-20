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
            onClick={e => props.handleFormSubmit(e)}
            className="btn btn-primary input-group-append submit"
          >
            Search
          </button>
        </div>
      </form>
      <div id="sortby">
       <h3>Sort By: </h3>
        <button className="sortBy" onClick={props.handleFormSubmit}>Name</button>
        &nbsp;&nbsp;&nbsp;
        <button className="sortBy" onClick={props.handleFormSubmit}>Email</button>
        &nbsp;&nbsp;&nbsp;
        <button className="sortBy" onClick={props.handleFormSubmit}>Location</button>
      </div>
    </div>
  );
}
export default Header;
