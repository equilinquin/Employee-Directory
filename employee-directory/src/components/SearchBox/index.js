import React from "react";
import "./style.css";

function SearchBox(props) {
  return (
    <div>
    <form>
        <div className="form-group input-group">
          <input
            //onChange={e => props.handleInputChange(e)}
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
        <button className="sortBy" onClick={e => props.handleSort(e)}>Name</button>
        &nbsp;&nbsp;&nbsp;
        <button className="sortBy" onClick={e => props.handleSort(e)}>Email</button>
        &nbsp;&nbsp;&nbsp;
        <button className="sortBy" onClick={e => props.handlesort(e)}>Location</button>
      </div>
    </div>
  )
}

      export default SearchBox;