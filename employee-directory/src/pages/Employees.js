import React, { Component } from "react";
import SearchBox from "../components/SearchBox";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import EmployeeTable from "../components/EmployeeTable";
import API from "../utils/API";

class Employees extends Component {
  state = {
    search: "",
    results: []
  };


  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = query => {
  
    API.employeeList(query)
      .then(res =>
        this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
  };

  render() {
    return (
        <Wrapper>
          <Header />
          <SearchBox
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <EmployeeTable results={this.state.results} />
        </Wrapper>
    );
  }
}

export default Employees;
