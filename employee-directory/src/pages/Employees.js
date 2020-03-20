import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import EmployeeTable from "../components/EmployeeTable";
import API from "../utils/API";

class Employees extends Component {
  state = {
    searchArr: [],
    userName: [],
    sorted: 'asc'
  };


  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = query => {
  
    API.employeeList(query)
      .then(res =>
        this.setState({ users: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name; 
    const value = event.target.value;
    this.setState({
      [name] : value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  handleSort = event => {
    event.preventDefault();
    const user = this.state.users
    console.log(user);
  //   user.sort(function(a, b){
  //     if(a.firstname < b.firstname) { return -1; }
  //     if(a.firstname > b.firstname) { return 1; }
  //     return 0;
  // })
  }

  render() {
    return (
        <Wrapper>
          <Header 
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            handleSort={this.handleSort}
            />
          <EmployeeTable results={this.state.users} />
        </Wrapper>
    );
  }
}

export default Employees;
