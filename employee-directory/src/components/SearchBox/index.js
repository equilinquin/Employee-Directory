import React from "react";
import "./style.css";

function SearchBox({ handleInputChange, handleFormSubmit, handleSort}) {
  return (
    <div>
    <form>
        <div className="form-group input-group">
          <input
            onChange={e => handleInputChange(e)}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search For an Employee"
            id="search"
          />
          <button
            onClick={e => handleFormSubmit(e)}
            className="btn btn-primary input-group-append submit"
            value="Hawaii Rocks"
          >
            Search
          </button>
        </div>
      </form>
      <div id="sortby">
       <h3>Sort By: </h3>
        <button className="sortBy" name="firstname" onClick={e => handleSort(e)}>Name</button>
        &nbsp;&nbsp;&nbsp;
        <button className="sortBy" name="email" onClick={e => handleSort(e)}>Email</button>
        &nbsp;&nbsp;&nbsp;
        <button className="sortBy" name="location" onClick={e => handleSort(e)}>Location</button>
      </div>
    </div>
  )
}

      export default SearchBox;