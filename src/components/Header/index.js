import React from "react";
import "./style.css";
import SearchBox from "../SearchBox";

function Header(props) {
  return (
    <div className="Header">
      <h1>Employee Directory</h1>
      <h3>Search for employee by name or location, or use the search bar</h3>
      <br />
      <SearchBox 
        handleInputChange={props.handleInputChange}
        handleFormSubmit={props.handleFormSubmit}
        handleSort={props.handleSort}
        />
    </div>
  );
}
export default Header;
