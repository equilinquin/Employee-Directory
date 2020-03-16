import React from "react";
import "./style.css";

function SearchBox(props) {
  return (
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
        <button onClick={props.handleFormSubmit} className="btn btn-primary input-group-append">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBox;
